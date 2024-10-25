<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UcareController;
use App\Http\Controllers\UlympicController;
use App\Http\Controllers\UnifyController;
use App\Http\Middleware\AuthenticateAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/division', function () {
    return Inertia::render('Divisi/Divisi');
});

Route::get('/maps', function () {
    return Inertia::render('Map');
});

Route::get('/login', [AdminController::class, 'log']);
Route::post('/login', [AdminController::class, 'login']);
Route::get('/logout', [AdminController::class, 'logout']);

Route::get('/rangkaian/eulympic', function () {
    return Inertia::render('PageEulympic');
});

Route::get('/rangkaian/ucare', function () {
    return Inertia::render('PageUcare');
});

Route::get('/rangkaian/unveiling', function () {
    return Inertia::render('PageUnveiling');
});
Route::get('/rangkaian/unify', function () {
    return Inertia::render('PageUnify');
});
Route::prefix('/admin')->middleware([AuthenticateAdmin::class])->group(function () {
    Route::get('/', [AdminController::class, 'index']);

    Route::prefix('/ulympic')->group(function () {
        Route::get('/', [TeamController::class, 'index']);
        Route::get('/show/{id}', [TeamController::class, 'list']);
        Route::get('/input/{id}', [TeamController::class, 'input']);
        Route::post('/delete/{id_team}', [TeamController::class, 'delete']);
        Route::get('/{id_team}', [TeamController::class, 'info']);
        Route::get('/edit/{id_team}', [TeamController::class, 'edit']);
        Route::post('/edit/{id_team}', [TeamController::class, 'update']);
    });

    Route::prefix('/unify')->group(function () {
        Route::get('/', [UnifyController::class, 'index']);
        Route::get('/all', [UnifyController::class, 'all']);
        Route::get('/external', [UnifyController::class, 'external']);
        Route::get('/internal', [UnifyController::class, 'internal']);
        Route::get('/unchecked', [UnifyController::class, 'showUnchecked']);
        Route::get('/checked', [UnifyController::class, 'showChecked']);
        Route::get('/belomdiambil', [UnifyController::class, 'showBelomDiambil']);
        Route::get('/sudahdiambil', [UnifyController::class, 'showSudahDiambil']);
        Route::get('/detail/{id}', [UnifyController::class, 'details']);
        Route::post('/check/{id}', [UnifyController::class, 'checked']);
        Route::post('/uncheck/{id}', [UnifyController::class, 'unchecked']);
        Route::post('/diambil/{id}', [UnifyController::class, 'diambil']);
        Route::post('/belomdiambil/{id}', [UnifyController::class, 'belomDiambil']);
    });

    Route::get('/ucare', [UcareController::class, 'index']);
    Route::get('/ucare/detail/{id}', [UcareController::class, 'details']);
});

Route::post('/team/input/data', [TeamController::class, 'regist']);
Route::post('/unify', [UnifyController::class, 'register']);
Route::get('/thankyou', [UnifyController::class, 'invoice']);

Route::middleware(['web'])->group(function () {
    Route::post('/ucare', [UcareController::class, 'register']);
    Route::post('/unify', [UnifyController::class, 'register']);
    // Route::get('/unify/invoice', [UnifyController::class, 'getInvoice'])->name('unify.getInvoice');
    // Route::get('/unify/{id}', [UnifyController::class, 'invoice']);
});

Route::prefix('/rangkaian/ulympic')->group(function () {
    Route::get('/', [UlympicController::class, 'index']);
    // Route::get('/badminton', [UlympicController::class, 'badminton']);
    Route::get('/basket', [UlympicController::class, 'basket']);
    Route::get('/voli', [UlympicController::class, 'voli']);
    // Route::get('/futsal', [UlympicController::class, 'futsal']);
});

// Route::get('/rangkaian/unify/buyticket', function () {
//     $captcha = env('RECAPTCHA_SITE_KEY');
//     return Inertia::render('Form_Unify/Form_ticketunify', ['captcha' => $captcha]);
// })->middleware('throttle:5,5'); // This example limits the form to 5 submissions per 5 minute per IP address.

// Route::get('/rangkaian/ucare/volunteer', function () {
//     return Inertia::render('Form_Ucare/Formucare');
// });

Route::get('bph/gres/2024', function () {
    return Inertia::render('Gres');
});

// Sementara Ulympic
// Route::get('/rangkaian/ulympic/badminton', function () {
//     return Inertia::render('Ulympic/Badminton');
// });

// Route::get('/rangkaian/ulympic/futsal', function () {
//     return Inertia::render('Ulympic/Futsal');
// });

// Route::get('/rangkaian/ulympic/basket', function () {
//     return Inertia::render('Ulympic/Basket');
// });

// Route::get('/rangkaian/ulympic/voli', function () {
//     return Inertia::render('Ulympic/Voli');
// });
