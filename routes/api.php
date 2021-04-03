<?php

use App\Http\Controllers\IngredientsController;
use App\Http\Controllers\MealsController;
use Illuminate\Support\Facades\Route;

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
Route::group(['prefix' => 'meals'], function() {
    Route::get('', [MealsController::class, 'index']);
    Route::post('', [MealsController::class, 'store']);
    Route::put('/{id}', [MealsController::class, 'update'])
        ->where(['id' => '[0-9]+']);
});

Route::group(['prefix' => 'ingredients'], function () {
    Route::get('', [IngredientsController::class, 'index']);
});
