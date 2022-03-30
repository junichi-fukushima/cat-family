// library
import { Dispatch, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

// others
import { client } from "../../../lib/api/client";
import {
  signUpUrl,
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
        .post(signUpUrl, user)
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
export const useSignIn = (user: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(signInAction(user));
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
