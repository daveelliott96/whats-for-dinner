<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/create-meal', function () {
    return view('welcome');
});

Route::get('/edit-meal', function () {
    return view('welcome');
});

Route::get('/shopping-list', function () {
    return view('welcome');
});
