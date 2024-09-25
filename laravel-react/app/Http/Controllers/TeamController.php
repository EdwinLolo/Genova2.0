<?php

namespace App\Http\Controllers;

use App\Models\Lomba;
use App\Models\Mahasiswa;
use App\Models\MengikutiTeam;
use App\Models\Team;
use App\Rules\StringOrImage;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TeamController extends Controller
{

    public function index()
    {
        $lomba = Lomba::all();
        return Inertia::render('Admin/UlympicDashboard', ['lombas' => $lomba]);
    }

    public function list($id)
    {
        $teams = Team::where('id_lomba', $id)->get();
        $lomba = Lomba::where('id_lomba', $id)->first();

        $line = [];
        $data = [];

        foreach ($teams as $team) {
            // Fetch the related MengikutiTeam and Mahasiswa
            $mengikutiTeam = MengikutiTeam::where('id_team', $team->id_team)->first();
            $mahasiswa = $mengikutiTeam ? Mahasiswa::where('nim', $mengikutiTeam->nim)->first() : null;
            $idLine = $mahasiswa ? $mahasiswa->idLine : null;

            if ($mahasiswa) {
                $line[$team->id_team] = $idLine;
            }

            // Create an associative array for each team
            $data[] = [
                'team' => $team,
                'idLine' => $idLine
            ];
        }

        return Inertia::render('Admin/UlympicTeams', [
            'data' => $data,
            'lomba' => $lomba
        ]);
    }



    public function input($id)
    {
        $lomba = Lomba::where('id_lomba', $id)->get();
        return Inertia::render('Admin/FormInputTeam', ['lombas' => $lomba]);
    }

    public function regist(Request $request)
    {
        // Validate the reCAPTCHA token
        $recaptchaResponse = $request->input('recaptchaValue');

        $client = new Client();
        $response = $client->post('https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret' => env('RECAPTCHA_SECRET_KEY'),
                'response' => $recaptchaResponse,
            ],
        ]);

        $responseBody = json_decode((string)$response->getBody());

        if (!$responseBody->success) {
            return response()->json(['error' => 'reCAPTCHA verification failed'], 422);
        }

        // dd($request);
        // Validate incoming request data
        $request->validate([
            'lombaId' => 'required|exists:lombas,id_lomba',
            'isInternal' => 'string',
            'namaTeam' => 'required|string|max:255',
            'buktiTf' => 'required|file|mimes:png,jpeg,jpg',
            'members' => 'required|array',
            'members.*.namaLengkap' => 'string|max:255|nullable',
            'members.*.nim' => 'string|max:11|nullable',
            'members.*.idLine' => 'nullable|string|max:50|nullable',
            'members.*.ktm' => 'file|mimes:jpg,jpeg,png|nullable',
            'members.*.asalKampus' => 'string|max:255|nullable',
        ]);

        try {
            // Start transaction
            DB::beginTransaction();
            // dd($request->all());

            // Process the form data
            $lombaId = $request->input('lombaId');
            $namaTeam = $request->input('namaTeam');
            $buktiTF = $request->file('buktiTf');
            $members = $request->input('members');
            $isInternal = $request->input('isInternal');
            $buktiTFPath = $buktiTF->store('buktiTf', 'public');

            // Create a new team record in the database
            $team = Team::create([
                'id_lomba' => $lombaId,
                'namaTeam' => $namaTeam,
                'tglDaftar' => now(),
                'buktiTF' => $buktiTFPath,
            ]);


            for ($i = 0; $i < count($members); $i++) {
                if (!isset($members[$i]['namaLengkap'])  || !isset($members[$i]['idLine'])) {
                    continue;
                }

                // Set member details with null checks
                $namaLengkap = $members[$i]['namaLengkap'] ?? null;
                $nim = $members[$i]['nim'] ?? '-'; // Default to '-' if nim is not set
                $idLine = $members[$i]['idLine'] ?? '-';
                $asalKampus = $members[$i]['asalKampus'] ?? '';

                // Check for complete data for each member
                if (empty($namaLengkap) || empty($idLine)) {
                    continue; // Skip saving this member if required fields are empty
                }

                // If lomba is internal or asalKampus is empty, set asalKampus to "UMN"
                if ($isInternal === "true" || empty($asalKampus)) {
                    $asalKampus = "UMN";
                }

                // Handle file upload (ktm)
                $ktmPath = '-'; // Default value
                $file = $request->file('members')[$i]['ktm'] ?? null;
                if ($file) {
                    $ktmPath = $file->store('ktm', 'public');
                }

                // Special condition for lombaId == 3 (Voli Putra)
                if ($lombaId == 3) {
                    $nim = '-';
                    $ktmPath = '-';
                }


                // Example: Create new Member record in database
                $mahasiswa = Mahasiswa::create([
                    'namaLengkap' => $namaLengkap,
                    'nim' => $nim,
                    'idLine' => $idLine,
                    'idUser' => "",
                    'asalKampus' => $asalKampus,
                    'ktm' => $ktmPath, // Save the path to the file in database
                ]);


                // If the competition is Voli Putra (lombaId == 3) || $lombaId == 4, set nim to the mahasiswa's id
                if ($lombaId == 3 || $lombaId == 4) {
                    $mahasiswa->nim = $mahasiswa->id;
                    $mahasiswa->save();
                }

                // dd($mahasiswa->nim . " " . $team->id_team . " " . $buktiTFPath);

                // Create connection between Mahasiswa and Team
                $mengikuteam = MengikutiTeam::create([
                    'nim' => $mahasiswa->nim,
                    'id_team' => $team->id_team,
                    'tglDaftar' => now(),
                    'buktiTF' => $buktiTFPath,
                ]);
            }

            // Commit transaction
            DB::commit();

            // Optionally return a response
            return back()->with('success', 'Team input data processed successfully');
        } catch (QueryException $e) {
            // Rollback transaction on error
            DB::rollback();

            // dd($e);
            // Handle specific SQL errors (e.g., unique constraint violation)
            $errorCode = $e->errorInfo[1];
            $errorMessage = $e->errorInfo[2];
            $errorMessageExplode = explode("'", $errorMessage);
            $errorMessageConcat = $errorMessageExplode[0] .  $errorMessageExplode[1];
            if ($errorCode === 1062) { // MySQL error code for duplicate entry
                return back()->withErrors(['error' => 'Duplicate entry.', 'message' => $errorMessageConcat]);
            }
            // Log the exception or handle it appropriately
            return back()->withErrors(['error' => 'Database error occurred.']);
        } catch (\Exception $e) {
            // Rollback transaction on general error
            DB::rollback();
            // dd($e);

            // Log the exception or handle it appropriately
            return back()->withErrors(['error' => 'Failed to process team input data.']);
        }
    }

    public function info($id_team)
    {
        $team = Team::where('id_team', $id_team)->first();
        $lomba = Lomba::where('id_lomba', $team->id_lomba)->first();
        $mengikutiTeams = MengikutiTeam::where('id_team', $id_team)->pluck('nim');
        $mahasiswas = Mahasiswa::whereIn('nim', $mengikutiTeams)->get();

        if (!$team) {
            return redirect()->back()->with('error', 'Team not found.');
        }

        return Inertia::render('Admin/TeamDetails', [
            'team' => $team,
            'lomba' => $lomba,
            'mahasiswas' => $mahasiswas,
        ]);
    }

    public function delete($id_team)
    {
        // Find the team by id
        $team = Team::where('id_team', $id_team)->first();
        if (!$team) {
            return redirect()->back()->with('error', 'Team not found.');
        }

        try {
            $mengikutiTeams = MengikutiTeam::where('id_team', $id_team)->get();
            $nim = [];
            foreach ($mengikutiTeams as $mengikutiTeam) {
                $nim[] = $mengikutiTeam->nim;
            }
            MengikutiTeam::where('id_team', $id_team)->delete();
            Mahasiswa::whereIn('nim', $nim)->delete();
            Team::where('id_team', $id_team)->delete();
            return redirect()->back()->with('success', 'Team and related records deleted successfully.');
        } catch (QueryException $e) {
            return redirect()->back()->with('error', 'SQL Query Error.');
        }
    }

    public function edit($id_team)
    {
        $team = Team::where('id_team', $id_team)->first();
        $lomba = Lomba::where('id_lomba', $team->id_lomba)->first();
        $mengikutiTeams = MengikutiTeam::where('id_team', $id_team)->pluck('nim');
        $mahasiswas = Mahasiswa::whereIn('nim', $mengikutiTeams)->get();
        $lombas = Lomba::where('id_lomba', '!=', $team->id_lomba)->get();
        if (!$team) {
            return redirect()->back()->with('error', 'Team not found.');
        }

        return Inertia::render('Admin/TeamEdit', [
            'team' => $team,
            'lomba' => $lomba,
            'lombas' => $lombas,
            'mahasiswas' => $mahasiswas,
        ]);
    }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'namaTeam' => 'required|string',
            'id_lomba' => 'required|integer',
            'id_team' => 'required|integer',
            'buktiTF' => ['nullable', new StringOrImage],
        ]);

        $team = Team::where('id_team', $validatedData['id_team'])->first();

        if (!$team) {
            return response()->json(['error' => 'Team not found'], 404);
        }

        // Update the team with validated data
        $team->namaTeam = $validatedData['namaTeam'];
        $team->id_lomba = $validatedData['id_lomba'];

        // Handle file upload if a new file is provided
        if (isset($validatedData['buktiTF']) && $validatedData['buktiTF'] instanceof \Illuminate\Http\UploadedFile) {
            $path = $validatedData['buktiTF']->store('buktiTf', 'public');
            $team->buktiTF = $path;
        }

        $team->save();

        return back()->with(['success' => 'Team updated successfully'], 200);
    }
}
