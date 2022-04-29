<?php


namespace App\Http\Controllers\Api;

// controller
use App\Http\Controllers\Controller;
// models
use App\Models\User;
// others
use Illuminate\Http\Request;
use \Symfony\Component\HttpFoundation\Response;
use Validator;
use Hash;

class AuthController extends Controller
{
    /**
     * ユーザー情報を保管する
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
        User::create([
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

        return response()->json('User registration completed', Response::HTTP_OK);
    }
}
