import { postUserUrl } from "../../urls";
import { postUserAction } from "./actions";

export const postUser = (user : {}) => {
  return async (dispatch: any) => {
    console.log(user)
  };
};
// フォームに入力した値を取得する