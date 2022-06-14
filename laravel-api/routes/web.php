<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\Api\AuthController;

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


// Route::group(['middleware' => ['api']], function(){
//     Route::get('/register/verify/{hash}',  [AuthController::class, 'checkRegisterEmail']);
// })->name('verification.verify');;


// Route::get('/api/auth', function () {
//     return view('auth.email.pre_register.blade');
// })->name('verification.notice');

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

})->name('verification.verify');