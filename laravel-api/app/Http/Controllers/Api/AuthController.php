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
use Exception;
// メール認証
use Illuminate\Auth\Events\Registered;


class AuthController extends Controller
{
    /**
     * 新規登録
     * @param Request
     * @return void
     */

    public function register(Request $request)
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
        event(new Registered($user));

        // メール認証をするにはログイン情報を取得しなければならないので自動でログイン状態にする
        Auth::guard('api')->login($user);

        // success response
        // jsonでユーザー情報とtoken
        // メール認証とユーザー認証は違う
        // ユーザー認証用のtokenカラムを作る
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

        // TODO1 : ログイン機能をsanctumの公式通りに実装をする。
        // https://readouble.com/laravel/8.x/ja/authentication.html#authenticating-users
        if (Auth::attempt($credentials)) {
            // emailからユーザー情報を取得する
            $user = User::where('email', $request->email)->first();
            // ユーザー登録しているかつ、メール認証をしている人のみ
            // ここリファクタしたい・・・
            if ($user->hasVerifiedEmail()) {
                // Note : ログインしたらJWTtokenの書き換えをした方が良い？
                $user->createToken('token');
                return response()->json(['user' => $user], 200);
            } else {
                return response()->json(['message' => 'メール認証をしてください'], 200);
            }
            return response()->json(['message' => 'ログインに失敗しました認証情報をご確認ください。']);
        }
    }
    // ユーザー情報があって、メール認証されている
    // ユーザー情報があって、メール認証されていない
    // 異なるユーザー情報

    /**
     * token情報から
     * @param Request
     * @return
     */

    public function session(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);


        // Auth::user();
        $user = User::where($request->token)->first();
        return response()->json(['user' => $user], 200);
    }

    /**
     * sendVerificationMail
     *
     * @param User $registerUser
     * @return void
     */

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
            return redirect('http://localhost:8000/complete');
        }
    }

    /**
     * create activation token
     * JWTトークンを作成する
     * @return string
     */
    protected function createToken()
    {
        return hash_hmac('sha256', \Str::random(40), config('app.key'));
    }
}
