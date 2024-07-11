<?php

namespace App\Http\Controllers;

use App\Models\Ucare;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UcareController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/UcareDashboard');
    }
    public function list()
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
            'nim' => 'nullable|string|max:20',
            'jurusan' => 'nullable|string|max:255',
            'angkatan' => 'nullable|string|max:20',
            'email' => 'required|email|max:255',
            'isInternal' => 'string',
        ]);

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
