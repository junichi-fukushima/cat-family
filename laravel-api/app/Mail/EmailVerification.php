<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailVerification extends Mailable
{
    use Queueable, SerializesModels;

    protected $token;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // 件名
        $subject = '【CatFamily】仮登録が完了しました！';

        // 送信元のアドレス
        // .envの「MAIL_FROM_ADDRESS」に設定したアドレスを取得
        $from = config('mail.from.address');

        $baseUrl = config('app.url');
        $token = $this->token;
        $url = "{$baseUrl}/register/verify/{$token}";

        // メール送信
        return $this
            ->from($from)
            ->subject($subject)
            // 送信メールのビュー
            ->view('auth.email.pre_register')
            // ビューで使う変数を渡す
            ->with('url', $url);
    }
}
