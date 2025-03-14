<?php

use App\Http\Controllers\SiteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


// ===========================
// Website Public Routes (No Authentication Required)
// ===========================
Route::controller(SiteController::class)->group(function () {
    Route::get('/', 'index')->name('welcome');
});