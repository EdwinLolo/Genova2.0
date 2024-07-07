<?php

namespace App\Http\Controllers;

use App\Models\Lomba;
use App\Models\Mahasiswa;
use App\Models\MengikutiTeam;
use App\Models\Team;
use App\Rules\StringOrImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function log()
    {
        if (session()->has('admin')) {
            return redirect('/admin');
        }

        return Inertia::render('Admin/AdminLogin');
    }

    public function login(Request $request)
    {
        // Retrieve username and password from the request
        $username = $request->input('username');
        $password = $request->input('password');


        // Retrieve admin username and password from environment variables
        $adminUsername = env('ADMIN_USERNAME');
        $adminPassword = env('ADMIN_PASSWORD');
        // Example logic for admin authentication
        if ($username === $adminUsername && $password === $adminPassword) {
            // Authentication successful
            // Store user information in session
            session()->put('admin', true);

            // Redirect to admin dashboard or any other route
            return redirect('/admin');
        } else {
            // Authentication failed
            // Return an error response in JSON format
            return response()->json(['error' => 'Invalid username or password'], 401);
        }
    }

    public function logout()
    {
        session()->forget('admin');

        // Redirect to the login page or any other route
        return redirect('/login')->with('message', 'You have been logged out successfully.');
    }

    public function index()
    {
        $data = Mahasiswa::all();

        return Inertia::render('Admin/AdminDashboard', ['data' => $data]);
    }
    public function input()
    {
        return Inertia::render('Admin/FormInputAdmin');
    }

    public function regist(Request $request)
    {
        $validated = $request->validate([
            'namaLengkap' => 'required|string|max:255',
            'nim' => 'required|string|max:11|min:11',
            'idLine' => 'required|string|max:255',
            'idUser' => 'nullable|string|max:255',
            'ktm' => 'required|nullable|file|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Handle file upload if exists
        if ($request->hasFile('ktm')) {
            $ktmPath = $request->file('ktm')->store('ktm', 'public');
            $validated['ktm'] = $ktmPath;
        }


        $existingMahasiswa = Mahasiswa::where('nim', $request->nim)->first();
        if ($existingMahasiswa) {
            return back()->withErrors(['failed' => 'Already registered']);
        }

        // Save data to the database or perform other actions
        Mahasiswa::create($validated);

        return back()->with('success', 'Data registered successfully');
    }

    public function delete($id)
    {
        // Find the record by ID
        $mahasiswa = Mahasiswa::findOrFail($id);

        // Delete the record
        $mahasiswa->delete();

        // Optionally, you can delete the associated file
        if ($mahasiswa->ktm) {
            Storage::disk('public')->delete($mahasiswa->ktm);
        }

        // Return a success response
        return response()->json(['message' => 'Deleted successfully'], 200);
    }

    public function info($nim)
    {
        $mahasiswa = Mahasiswa::where('nim', $nim)->first();
        $mengikutiTeam = MengikutiTeam::where('nim', $nim)->first();
        $team = Team::where('id_team', $mengikutiTeam->id_team)->first();
        $lomba = Lomba::where('id_lomba', $team->id_lomba)->first();

        if (!$mahasiswa) {
            // Handle case when student with given NIM is not found
            // For example, redirect back with a message
            return redirect()->back()->with('error', 'Student not found.');
        }

        // Pass the retrieved student data to the view
        return Inertia::render('Admin/AdminDetails', [
            'data' => $mahasiswa,
            'team' => $team,
            'lomba' => $lomba,
        ]);
    }
    public function edit($nim)
    {

        $mahasiswa = Mahasiswa::where('nim', $nim)->first();


        if (!$mahasiswa) {
            // Handle case when student with given NIM is not found
            // For example, redirect back with a message
            return back()->withErrors(['failed' => 'Student not found']);
        }

        // Pass the retrieved student data to the view
        return Inertia::render('Admin/EditMahasiswa', [
            'mahasiswa' => $mahasiswa,
        ]);
    }

    public function update(Request $request, $nim)
    {
        // dd($request);
        // Validate the incoming request data
        $validatedData = $request->validate([
            'namaLengkap' => 'required|string',
            'nim' => 'required|max:11|min:11|string|unique:mahasiswas,nim,' . $nim . ',nim',
            'idLine' => 'required|string',
            'idUser' => 'nullable|string',
            'ktm' => ['nullable', new StringOrImage],
        ]);

        // Find the Mahasiswa model instance based on the given NIM
        $mahasiswa = Mahasiswa::where('nim', $nim)->first();
        if (!$mahasiswa) {
            // Handle case when student with given NIM is not found
            return back()->withErrors(['failed' => 'Student not found']);
        }

        // Update the Mahasiswa model instance with the validated data
        $mahasiswa->namaLengkap = $validatedData['namaLengkap'];
        $mahasiswa->nim = $validatedData['nim'];
        $mahasiswa->idLine = $validatedData['idLine'];
        $mahasiswa->idUser = $validatedData['idUser'];

        // Handle KTM file upload if provided in the request
        if ($request->hasFile('ktm')) {
            // Process and store the uploaded KTM file
            $ktmPath = $request->file('ktm')->store('ktm', 'public');
            $mahasiswa->ktm = $ktmPath;
        } else {
            // If 'ktm' is provided as a string (path), update it directly
            if (isset($validatedData['ktm']) && is_string($validatedData['ktm'])) {
                $mahasiswa->ktm = $validatedData['ktm'];
            }
        }

        // Save the updated Mahasiswa model instance
        $mahasiswa->save();

        // Check if the changes were saved correctly
        if ($mahasiswa->wasChanged()) {
            // Return a response indicating success
            return back()->with('success', 'Mahasiswa updated successfully');
        } else {
            // Return a response indicating no changes were made
            return back()->with('info', 'No changes were made');
        }
    }

    public function unify()
    {
        // $data = Mahasiswa::all();

        // return Inertia::render('Admin/UnifyDashboard', ['data' => $data]);
        return "Sementara belom ada model dan migration";
    }
}
