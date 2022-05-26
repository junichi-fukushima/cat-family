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
// メール認証
use App\Mail\EmailVerification;

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
        $validator = \Validator::make($request->all(), [
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

        $token = $this->createToken();

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
            'password' => \Hash::make($request->password),
            'token' => $token
        ]);

        // send email
        $this->sendVerificationMail($user);

        // success response
        return $this->responseSuccess('Emailが送信されました。');
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
            $token = $request->user()->createToken('token');
            return response()->json(['token' => $token->plainTextToken], 200);
        }

        return response()->json(['token' => null], 401);
    }

    /**
     * sendVerificationMail
     *
     * @param User $registerUser
     * @return void
     */
    private function sendVerificationMail(User $user)
    {
        Mail::to($user->email)
            ->queue(new EmailVerification($user->token));
    }


    /**
     * create activation token
     * トークンを作成する
     * @return string
     */
    protected function createToken()
    {
        return hash_hmac('sha256', \Str::random(40), config('app.key'));
    }

       /**
     * responseSuccess
     * 成功のレスポンス
     *
     * @param string $message
     * @param array $additions
     * @return \Illuminate\Http\JsonResponse
     */
    protected function responseSuccess(string $message, array $additions = [])
    {
        return response()->json(array_merge(['message' => trans($message)], $additions), 200);
    }

    /**
     * responseFailed
     * 失敗のレスポンス
     *
     * @param string $message
     * @param array $additions
     * @return \Illuminate\Http\JsonResponse
     */
    protected function responseFailed(string $message)
    {
        return response()->json(['message' => trans($message)], 403);
    }
}
