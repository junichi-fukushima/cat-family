<?php
namespace App\Http\Controllers\Api;

use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\User;

class VerifyEmailController extends Controller
{

    public function __invoke(Request $request): RedirectResponse
    {
        $user = User::find($request->route('id'));

        // 認証ずみである場合
        if ($user->hasVerifiedEmail()) {
            return redirect(env('FRONT_URL') . '/my/profile');
        }

        // email_verified_atを更新する
        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

         // 成功したらcompleteにリダイレクトさせる
        return redirect(env('FRONT_URL') . '/signup/complete');
    }
}