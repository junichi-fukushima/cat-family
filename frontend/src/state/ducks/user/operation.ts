import { postUserUrl } from "../../urls";
import { signUpAction } from "./actions";
import axios from "axios";

export const signUp = (user :{}) => {
  axios
    .post(postUserUrl, user)
    .then(() => {
      console.log("完了しました");
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const signIn = (user :{}) => {
  axios
    .post(postUserUrl, user)
    .then(() => {
      console.log("完了しました");
    })
    .catch((err) => {
      console.log("err", err);
    });
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
