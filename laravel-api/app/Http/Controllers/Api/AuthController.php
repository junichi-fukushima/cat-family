<?php

namespace App\Http\Controllers\Api;

// controller
use App\Http\Controllers\Controller;
// models
use App\Models\User;
// others
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use \Symfony\Component\HttpFoundation\Response;
use App\Mail\EmailVerification;
use Validator;
use Hash;

// 新規登録 / ログイン機能を実装
class AuthController extends Controller
{
    /**
     * 新規登録
     * @param Request
     * @return void
     */

    public function register(Request $request): string
    {

        // バリデーション
        $validator = Validator::make($request->all(), [
            'user_name' => 'required',
            'nickname' => 'required',
            'phone' => 'required',
            'post_code' => 'required',
            'prefecture_id' => 'required',
            'city' => 'required',
            'building' => 'required',
            'cat_type_id' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // 保存
        $user = User::create([
            'user_name' =>  $request->user_name,
            'nickname' => $request->nickname,
            'phone' => $request->phone,
            'post_code' => $request->post_code,
            'prefecture_id' => $request->prefecture_id,
            'city' => $request->city,
            'building' => $request->building,
            'cat_type_id' => $request->cat_type_id,
            'email' => $request->email,
            'profile_img' => $request->profile_img,
            'password' => Hash::make($request->password),
        ]);

        $email = new EmailVerification($user);
        Mail::to($user->email)->send($email);

        return response()->json('User registration completed', Response::HTTP_OK);
    }

    /**
     * ログイン
     * @param Request
     * @return string
     */

    public function login(Request $request): string
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $token = $request->user()->createToken('email_verify_token');
            return response()->json(['email_verify_token' => $token->plainTextToken], 200);
        }

        return response()->json(['email_verify_token' => null], 401);
    }
}
