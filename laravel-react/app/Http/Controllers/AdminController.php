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
        return Inertia::render('Admin/AdminDashboard');
    }

    public function list_mahasiswa()
    {
        $data = Mahasiswa::all();

        return Inertia::render('Admin/ListMahasiswas', ['data' => $data]);
    }
}
