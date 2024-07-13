<?php

namespace App\Http\Controllers;

use App\Models\Lomba;
use App\Models\Mahasiswa;
use App\Models\MengikutiTeam;
use App\Models\Team;
use App\Rules\StringOrImage;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function index()
    {
        $teams = Team::all();
        $lombas = [];
        $line = [];
        $data = [];

        foreach ($teams as $team) {
            // Fetch the related Lomba
            $lomba = Lomba::where('id_lomba', $team->id_lomba)->first();
            $lombaName = $lomba ? $lomba->namaLomba : null;

            // Fetch the related MengikutiTeam and Mahasiswa
            $mengikutiTeam = MengikutiTeam::where('id_team', $team->id_team)->first();
            $mahasiswa = $mengikutiTeam ? Mahasiswa::where('nim', $mengikutiTeam->nim)->first() : null;
            $idLine = $mahasiswa ? $mahasiswa->idLine : null;

            // Store the related data
            if ($lomba) {
                $lombas[$team->id_team] = $lombaName;
            }

            if ($mahasiswa) {
                $line[$team->id_team] = $idLine;
            }

            // Create an associative array for each team
            $data[] = [
                'team' => $team,
                'namaLomba' => $lombaName,
                'idLine' => $idLine
            ];
        }

        return Inertia::render('Admin/Teams', [
            'data' => $data
        ]);
    }



    public function input()
    {
        $lomba = Lomba::all();
        return Inertia::render('Admin/FormInputTeam', ['lombas' => $lomba]);
    }

    public function regist(Request $request)
    {
        // Validate incoming request data
        // dd($request->all());

        $request->validate([
            'lombaId' => 'required|exists:lombas,id_lomba',
            'isInternal' => 'string',
            'namaTeam' => 'required|string|max:255',
            'buktiTf' => 'required|file|mimes:png,jpeg,jpg|max:2048',
            'members' => 'required|array',
            'members.*.namaLengkap' => 'string|max:255|nullable',
            'members.*.nim' => 'string|max:11|min:11|nullable',
            'members.*.idLine' => 'nullable|string|max:50|nullable',
            'members.*.ktm' => 'file|mimes:jpg,jpeg,png|max:2048|nullable',
            'members.*.asalKampus' => 'string|max:255|nullable',
        ]);



        try {
            // Start transaction
            DB::beginTransaction();

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
                // Handle each member and their respective file ('ktm')
                if(!isset($members[$i]['namaLengkap']) || !isset($members[$i]['nim']) || !isset($members[$i]['idLine']) || !isset($members[$i]['asalKampus'])) {
                    break;
                }
                $namaLengkap = $members[$i]['namaLengkap'];
                $nim = $members[$i]['nim'];
                $idLine = $members[$i]['idLine'];
                $asalKampus = $members[$i]['asalKampus'];

                // If lomba is internal use UMN as default value
                if ($isInternal === "true" || $asalKampus === "") {
                    $asalKampus = "UMN";
                }

                // Handle file upload ('ktm')
                $file = $request->file('members')[$i]['ktm'];
                $ktmPath = $file->store('ktm', 'public'); // Store the uploaded file

                // Example: Create new Member record in database
                $mahasiswa = Mahasiswa::create([
                    'namaLengkap' => $namaLengkap,
                    'nim' => $nim,
                    'idLine' => $idLine,
                    'idUser' => "",
                    'asalKampus' => $asalKampus,
                    'ktm' => $ktmPath, // Save the path to the file in database
                ]);

                // Create connection between Mahasiswa and Team
                MengikutiTeam::create([
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
            dd($e);
            DB::rollback();
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
