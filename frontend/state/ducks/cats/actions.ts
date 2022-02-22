import { CatsActionTypes } from "./type";

export const fetchAllCatsAction = () => {
  return {
    type: CatsActionTypes.FETCH_CAT_LIST,
    payload: {
      //  CatsList(猫情報API)の中身を展開する
    },
  };
};
