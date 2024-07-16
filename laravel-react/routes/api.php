<?php

use App\Http\Controllers\UnifyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\inertia;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::post('admin/unify/midtrans-callback', [UnifyController::class, 'callback']);
