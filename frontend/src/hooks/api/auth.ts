import { signOutURL, sessionURL } from "../../state/urls/index";
import { client } from "./client";
import Cookies from "js-cookie";

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
    !window.localStorage.getItem('token')
  )
    return;
  return client.get(sessionURL, window.localStorage.getItem('token'));
};
