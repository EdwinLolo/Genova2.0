<?php

namespace App\Http\Controllers;

use App\Models\UnifyExternal;
use App\Models\UnifyInternal;
use Illuminate\Http\Request;
use Inertia\Inertia;


class UnifyController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/UnifyDashboard');
    }

    public function external()
    {
        $data = UnifyExternal::all();

        return Inertia::render('Admin/UnifyExternal', ['data' => $data]);
    }
    public function externalDetails($id)
    {
        $data = UnifyExternal::where('id', $id)->first();

        return Inertia::render('Admin/UnifyExternalDetails', ['data' => $data]);
    }

    public function internal()
    {
        $data = UnifyInternal::all();

        return Inertia::render('Admin/UnifyInternal', ['data' => $data]);
    }

    public function internalDetails($id)
    {
        $data = UnifyInternal::where('id', $id)->first();

        return Inertia::render('Admin/UnifyInternalDetails', ['data' => $data]);
    }


    public function register(Request $request)
    {
        // Determine if the form type is "external" or "internal"
        $formType = $request->input('formType');

        // Set validation rules based on form type
        $rules = [
            'nama' => 'required|string|max:255',
            'noHp' => 'required|string|max:12',
            'email' => 'required|email|max:255',
            'jumlahTiket' => 'required|integer|min:1',
            'buktiTf' => 'required|file|mimes:jpg,png,jpeg|max:2048',
        ];

        if ($formType === 'internal') {
            $rules['jurusan'] = 'required|string|max:255';
            $rules['angkatan'] = 'required|string|max:255';
        }

        // Validate the request
        $validatedData = $request->validate($rules);

        // Handle file upload
        if ($request->hasFile('buktiTf')) {
            $file = $request->file('buktiTf');
            $filePath = $file->store('UnifyBuktiTf', 'public'); // Save file in 'storage/app/public/UnifyBuktiTf'
            $validatedData['buktiTf'] = $filePath;
        }

        // Store data in the appropriate model
        if ($formType === 'internal') {
            UnifyInternal::create($validatedData);
        } else if ($formType === 'external') {
            UnifyExternal::create($validatedData);
        } else {
            return response()->json(['error' => 'Invalid form type'], 400);
        }

        return response()->json(['message' => 'Form submitted successfully'], 200);
    }
}
