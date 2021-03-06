import { signInURL } from '../../urls/index';
// library
import { Dispatch, useCallback } from "react";
import { useRouter } from "next/router";

import axios from "axios";

// others
import { signUpUrl, sessionURL, signOutURL } from "../../urls";
import { signInAction } from "./actions";
import { Action } from "redux";
import { client } from "../../../hooks/api/client";

// 新規登録
export const signUp = (user: {}) => {
  return client.post(signUpUrl, user);
};

// ログイン
export const signIn = (user: {}) => {
  return client.post(signInURL, user);
};

// Note: 引数の型を定義 : formValuesをどこかで定義
export const useSignIn = (user: any) => {
  // Note: getStateの型を定義したい
  return async (dispatch: Dispatch<Action>) => {
    dispatch(signInAction(user));
  };
};
