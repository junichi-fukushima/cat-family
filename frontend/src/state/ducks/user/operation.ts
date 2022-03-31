// library
import { Dispatch, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// others
import { signUpUrl, sessionURL, signOutURL } from "../../urls";
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
  // Note: getStateの型を定義したい
  return async (dispatch: Dispatch<Action>) => {
    dispatch(signInAction(user));
  };
};
