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
     * @return
     */

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = User::whereEmail($request->email)->first(); //トークンの作成と取得
            $user->update(['token' => $this->createToken()]);
            return response()->json(['user' => $user],200);
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
     * 新規登録時のEmail認証機能
     * @param string $token
     * @return void
     */
    public function checkRegisterEmail($email_token)
    {
        // 使用可能なトークンか
        $user = User::where('token', $email_token)->first();
        // 本登録済みユーザーかどうかをチェック
        if ($user->email_verified == 1) {
            // Note : .envから取得できるようにする
            return redirect('http://localhost:8000/signin');
        }
        // ユーザーステータス更新
        $user->email_verified = 1;

        // 本来は失敗した時用のページを用意すべきだが今回は割愛する
        if ($user->save()) {
            return redirect('/register/verify/');
        }
    }
}
