<?php

use Illuminate\Support\Facades\Route;
use Inertia\inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/division', function () {
    return Inertia::render('Divisi');
});

Route::get('/test', function () {
    return Inertia::render('Test');
});

Route::get('/rangkaian/eulympic', function () {
    return Inertia::render('PageEulympic');
});


