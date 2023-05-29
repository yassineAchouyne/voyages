<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusController;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\ReserveController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);

Route::group(['middleware'=>'api'],function(){
    // client
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
    Route::resource('reserves',ReserveController::class);
    Route::post('contact',[Controller::class,'contact']);

    // admin
    Route::resource('buses',BusController::class);
    Route::resource('offres',OffreController::class);
    Route::get('dash',[Controller::class,'dashboard']);
    Route::put('Uprofile',[ProfilController::class,'UpdateProfile']);
    Route::put('Upassword',[ProfilController::class,'updatePassword']);

});

Route::post('resultat',[BusController::class,'resultat']);
Route::get('ville',[Controller::class,'lesVilles']);

// Route::get('test',[Controller::class,'getReservation']);

