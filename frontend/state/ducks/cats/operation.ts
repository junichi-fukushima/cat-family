import { addAbortSignal } from "stream";
import { fetchAllCatsAction } from "./actions";

export const initialCatsData = () => {
  return async (dispatch, getState) => {
    const state = getState();

    // マスタAPI(猫情報の取得)
    const cats = "http://localhost:3000/api/v1/cats/";

    const response = await fetch(cats)
      .then((res) => res.json())
      .catch(() => null);

    dispatch(fetchAllCatsAction(

    ))

  };
};
