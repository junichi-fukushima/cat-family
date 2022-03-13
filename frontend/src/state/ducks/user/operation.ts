import { postUserUrl } from "../../urls";
import { postUserAction } from "./actions";

export const postCats = () => {
  return async (dispatch: any) => {
    fetch(postUserUrl)
      .then((res) => res.json())
      .then((result) => {
        dispatch(postUserAction(result.map((x: any) => x)));
      })
      .catch(() => null);
  };
};
// フォームに入力した値を取得する