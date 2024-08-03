<?php

namespace App\Http\Controllers;

use App\Models\Ucare;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UcareController extends Controller
{

    public function index()
    {
        $data = Ucare::all();
        return Inertia::render('Admin/UcareList', ['data' => $data]);
    }

    public function register(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'namaLengkap' => 'required|string|max:255',
            'umur' => 'required|integer',
            'tempatTinggal' => 'required|string|max:255',
            'idLine' => 'required|string|max:255',
            'instagram' => 'required|string|max:255',
            'noTelp' => 'required|string|max:20',
            'nim' => 'nullable|string|max:11',
            'jurusan' => 'nullable|string|max:255',
            'angkatan' => 'nullable|string|max:20',
            'email' => 'required|email|max:255',
            'isInternal' => 'string',
            "docs" => 'file|nullable',
            "asalKampus" => "string|required",
        ]);

        if ($validated['asalKampus'] == "-" || $validated['nim'] == "-" || $validated['angkatan'] == "-" || $validated['jurusasn'] == "-") {
            $validated['isInternal'] = 'false';
        } else {
            $validated['isInternal'] = 'true';
        }

        if ($request->hasFile('docs')) {
            // Get the uploaded file
            $file = $request->file('docs');

            // Get the original file name
            $originalFileName = $file->getClientOriginalName();

            // Define the path where the file will be stored
            $path = $file->storeAs('public/UcareDocs', $originalFileName);

            // Add the file path to the validated data
            $validated['docs'] = str_replace('public/', '', $path);
        }

        // Create a new Ucare record
        Ucare::create($validated);

        // Return a success response
        return response()->json(['message' => 'Registration successful'], 201);
    }
    public function details($id)
    {
        $data = Ucare::find($id);
        return Inertia::render('Admin/UcareDetails', ['data' => $data]);
    }
}
