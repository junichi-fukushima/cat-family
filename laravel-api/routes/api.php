<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// routes/api.php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CatController;
use App\Http\Controllers\Api\CatMasterListController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::post('/tokens/create', function (Request $request) {
//     $token = $request->user()->createToken($request->token_name);
//     return ['token' => $token->plainTextToken];
// });

// ルーティング : api/***/
Route::group(['middleware' => ['api']], function(){
    // ユーザー機能
    Route::post('/auth', [AuthController::class, 'register']);
    // 猫情報
    Route::get('/cats', [CatController::class, 'index']);
    // 猫のラベルマスタ情報(enumでデータを取得する)
    Route::get('/cat_age', [CatMasterListController::class, 'cat_age']);
    Route::get('/cat_label', [CatMasterListController::class, 'cat_label']);
    Route::get('/cat_sex', [CatMasterListController::class, 'cat_sex']);
    Route::get('/cat_type', [CatMasterListController::class, 'cat_type']);
});