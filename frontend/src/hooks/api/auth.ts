import { signInURL, signOutURL, sessionURL } from "../../state/urls/index";
import { client } from "./client";
import Cookies from "js-cookie";

// サインイン（ログイン）
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
