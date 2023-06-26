<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\DefeitoController;

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

//Cars
Route::post('/create', [CarController::class, 'createCar']);
Route::get('search/{id}', [CarController::class, 'getCarByID']);
Route::get('/search', [CarController::class, 'getAllCars']);
Route::put('/update/{id}', [CarController::class, 'update']);
Route::delete('/delete/{id}', [CarController::class, 'delete']);

//Defeito
Route::post('/defeito', [DefeitoController::class, 'createDefeito']);
Route::get('/cars/{id}/defeitos', [CarController::class, 'getDefects']);
Route::get('/defeitos', [DefeitoController::class, 'getAllDefeitos']);
Route::put('/updateDefeito/{id}', [DefeitoController::class, 'updateDefeito']);
Route::delete('/deleteDefeito/{id}', [DefeitoController::class, 'deleteDefeito']);