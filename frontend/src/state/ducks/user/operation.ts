import {
  signUpUrl,
  successURL,
  signInURL,
  sessionURL,
  signOutURL,
} from "../../urls";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Cookies from "js-cookie";
import client from "../../../lib/api/client";

export const useSignUp = () => {
  const router = useRouter();

  const signUp = useCallback(
    (user) => {
      axios
        .post(
          signUpUrl,
          {
            ...user,
            confirm_success_url: successURL,
          },
          // withCredentials:trueでcookie情報を含めることができる
          { withCredentials: true }
        )
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
        .then((res) => {
          // ログインに成功した場合はCookieに各値を格納
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);
          // トップページにリダイレクト
          router.push("/");
          console.log(res?.data.data)
        })
        .catch((err) => null);
    },
    [router]
  );
  return { signIn };
};

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete(signOutURL, {
    headers: {
      "access-token": Cookies.get("_access_token") || "",
      client: Cookies.get("_client") || "",
      uid: Cookies.get("_uid") || "",
    },
  });
};

// 認証済みのユーザー情報を取得
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return client.get(sessionURL, {
    headers: {
      "access-token": Cookies.get("_access_token") || "",
      client: Cookies.get("_client") || "",
      uid: Cookies.get("_uid") || "",
    },
  });
};
