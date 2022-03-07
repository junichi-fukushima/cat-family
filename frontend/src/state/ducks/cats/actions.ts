import { Cat, CatsActionTypes } from "./type";

export const fetchAllCatsAction = (state: Cat[]) => {
  return {
    type: CatsActionTypes.FETCH_CAT_LIST,
    payload: state,
  };
};
