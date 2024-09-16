<?php

namespace App\Http\Controllers;

use App\Models\Lomba;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UlympicController extends Controller
{
    public function index()
    {
        return Inertia::render('PageUlympic');
    }
    public function badminton()
    {
        $captcha = env('RECAPTCHA_SITE_KEY');
        $data = Lomba::where('namaLomba', 'like', '%Badminton%')->get();

        return Inertia::render('Form_eulympic/BadmintonFormEulympic', ['lombas' => $data, 'captcha' => $captcha]);
    }
    public function basket()
    {
        $captcha = env('RECAPTCHA_SITE_KEY');
        $data = Lomba::where('namaLomba', 'like', '%basket%')->get();

        return Inertia::render('Form_eulympic/BasketFormEulympic', ['lombas' => $data, 'captcha' => $captcha]);
    }
    public function voli()
    {
        $captcha = env('RECAPTCHA_SITE_KEY');
        $data = Lomba::where('namaLomba', 'like', '%voli%')->get();

        return Inertia::render('Form_eulympic/VoliFormEulympic', ['lombas' => $data, 'captcha' => $captcha]);
    }
    public function futsal()
    {
        $captcha = env('RECAPTCHA_SITE_KEY');
        $data = Lomba::where('namaLomba', 'like', '%futsal%')->get();

        return Inertia::render('Form_eulympic/FutsalFormEulympic', ['lombas' => $data, 'captcha' => $captcha]);
    }
}
