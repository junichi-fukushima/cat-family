// library
import { Dispatch, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

// others
import { client } from "../../../lib/api/client";
import {
  signUpUrl,
  successURL,
  signInURL,
  sessionURL,
  signOutURL,
} from "../../urls";
import { signInAction } from "./actions";
import { Action } from "redux";

// 新規登録
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
        .catch(() => null);
    },
    [router]
  );
  return { signUp };
};

// ログイン
// Note: 引数の型を定義 : formValuesをどこかで定義
export const useSignIn = (user : any) => {
  return async (dispatch: Dispatch<Action>) => {
    axios
    .post(signInURL, user)
    .then((res) => {
      // ログインに成功した場合はCookieに各値を格納
      // Cookies.set("_access_token", res.headers["access-token"]);
      // Cookies.set("_client", res.headers["client"]);
      // Cookies.set("_uid", res.headers["uid"]);
      // ユーザー情報をstoreに格納
      dispatch(signInAction(res?.data.data));
      // グローバルヘッダー
      // 全てのAPIリクエストで設定するため
      // axios.defaults.headers.common['_access_token'] = res.headers["access-token"]
      // axios.defaults.headers.common['_client'] = res.headers["client"]
      // axios.defaults.headers.common['_uid'] = res.headers["uid"]
    })
    .catch((res) => {
      if (res.status === 200) {
        console.log("エラー")
      }
    }
    );
  };
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
