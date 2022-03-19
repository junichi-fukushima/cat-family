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

// ログインユーザーの取得
// export const getCurrentUser = () => {
//   if (
//     !Cookies.get("_access_token") ||
//     !Cookies.get("_client") ||
//     !Cookies.get("_uid")
//   )
//     return;

//   return client.get("/auth/sessions", {
//     headers: {
//       "access-token": Cookies.get("_access_token"),
//       client: Cookies.get("_client"),
//       uid: Cookies.get("_uid"),
//     },
//   });
// };