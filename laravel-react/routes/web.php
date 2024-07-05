<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeamController;
use App\Http\Middleware\AuthenticateAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/division', function () {
    return Inertia::render('Divisi/Divisi');
});

Route::get('/test', function () {
    return Inertia::render('Test');
});

Route::get('/login', [AdminController::class, 'log']);
Route::post('/login', [AdminController::class, 'login']);
Route::get('/logout', [AdminController::class, 'logout']);

Route::get('/rangkaian/eulympic', function () {
    return Inertia::render('PageEulympic');
});

Route::prefix('/admin')->middleware([AuthenticateAdmin::class])->group(function () {
    Route::get('/', [AdminController::class, 'index']);
    Route::get('/input', [AdminController::class, 'input']);
    Route::post('/input/data', [AdminController::class, 'regist']);
    Route::delete('/delete/{id}', [AdminController::class, 'delete']);

    Route::prefix('/team')->group(function () {
        Route::get('/', [TeamController::class, 'index']);
        Route::get('/input', [TeamController::class, 'input']);
        Route::post('/input/data', [TeamController::class, 'regist']);
        Route::post('/delete/{id_team}', [TeamController::class, 'delete']);
        Route::get('/{id_team}', [TeamController::class, 'info']);
        Route::get('/edit/{id_team}', [TeamController::class, 'edit']);
        Route::post('/edit/{id_team}', [TeamController::class, 'update']);
    });

    Route::get('/{nim}', [AdminController::class, 'info']);
    Route::get('/edit/{nim}', [AdminController::class, 'edit']);
    Route::post('/edit/{nim}', [AdminController::class, 'update']);
});
