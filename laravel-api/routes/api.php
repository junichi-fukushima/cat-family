<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

// routes/api.php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\VerifyEmailController;
use App\Http\Controllers\Api\CatController;
use App\Http\Controllers\Api\CatMasterListController;


// ルーティング : /api/***/
Route::group(['middleware' => ['api']], function () {
    // ユーザー機能
    Route::group(['middleware' => ['auth:sanctum']], function (Request $request) {
        // ユーザー情報を取得する必要があるのでラップする
        Route::post('/auth/sessions', [AuthController::class, 'session']);
    });
    // Route::middleware('auth:sanctum')->get('/auth/sessions', function (Request $request) {
    //     return $request->user();
    // });
    Route::post('/auth', [AuthController::class, 'register']);
    Route::post('/auth/sign_in', [AuthController::class, 'login']);
    Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');
    // 猫情報
    Route::get('/cats', [CatController::class, 'index']);
    Route::get('/cats/search', [CatController::class, 'search']);
    // 猫のラベルマスタ情報(enumでデータを取得する)
    Route::get('/cat_age', [CatMasterListController::class, 'cat_age']);
    Route::get('/cat_label', [CatMasterListController::class, 'cat_label']);
    Route::get('/cat_sex', [CatMasterListController::class, 'cat_sex']);
    Route::get('/cat_type', [CatMasterListController::class, 'cat_type']);
});
