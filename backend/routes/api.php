<?php

use App\Http\Controllers\SeminarController;
use App\Http\Controllers\SendEmailController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [UserController::class, 'login']);

Route::apiResource('user', UserController::class);

Route::get('seminar/{seminar}', [SeminarController::class, 'show']);
Route::get('seminars', [SeminarController::class, 'index']);
Route::post('edit-seminar/{seminar}', [SeminarController::class, 'update']);
Route::post('create-seminar', [SeminarController::class, 'store']);
Route::delete('delete-seminar/{seminar}', [SeminarController::class, 'destroy']);

Route::get('/send-email', [SendEmailController::class, 'sendEmail']);
