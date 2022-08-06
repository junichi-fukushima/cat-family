import { signOutURL, sessionURL, signUpUrl, signInURL } from "../state/urls/index";
import { client } from "./client";
import Cookies from "js-cookie";
// 新規登録
export const signUp = (user: {}) => {
  return client.post(signUpUrl, user);
};

// ログイン
export const signIn = (user: {}) => {
  return client.post(signInURL, user);
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
  // if (
  //   !window.localStorage.getItem('token')
  // )
  //   return;

  return client.post(sessionURL, {
    headers: {
      Authorization : window.localStorage.getItem('token') || "",
    },
  });
};
