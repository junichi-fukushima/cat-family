import { signUpUrl, successURL, signInURL } from "../../urls";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useSignUp = () => {
  const router = useRouter();

  const signUp = useCallback(
    (user) => {
      axios
        .post(signUpUrl, {
          ...user,
          confirm_success_url: successURL,
        })
        .then(() => {
          router.push("/signup/temporary");
        })
        .catch((err) => null);
    },
    [router]
  );
  return { signUp };
};

export const useSignIn = () => {
  const router = useRouter();

  const signIn = useCallback(
    (user) => {
      axios
        .post(signInURL, user)
        .then(() => {
          router.push("/");
        })
        .catch((err) => null);
    },
    [router]
  );
  return { signIn };
};

// Note
// 今後の流れ
// ユーザー登録を完了する
// トップページにリダイレクトさせる
// ヘッドタグ内にユーザー情報を送る？

// 現状の問題点
// ①registrationsというオブジェクトが入り込んでいる
// Rails側で入れるなと言っている
// email.tsx側でregistrationsを抜き出そうとしたらない。。？
// 対処法registrationsを抜き出す or registrationsを削除？
