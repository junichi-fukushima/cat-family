<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\VerifyEmailController;

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

// メール認証を完了するためのルーティング
// middleware/authを噛ませてないので、ログインしてなくても成功する
Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    // verification.verifyのnameでつけている
    ->name('verification.verify');
