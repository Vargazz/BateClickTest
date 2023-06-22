<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create', [CarController::class, 'createCar']);

Route::get('search/{id}', [CarController::class, 'getCarByID']);

Route::get('/search', [CarController::class, 'getAllCars']);

Route::put('/update/{id}', [CarController::class, 'update']);

Route::delete('/delete/{id}', [CarController::class, 'delete']);