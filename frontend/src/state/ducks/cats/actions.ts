import { Cat, CatsActionTypes } from "./type";

export const fetchAllCatsAction = (state: Cat[]) => {
  return {
    type: CatsActionTypes.FETCH_CAT_LIST,
    payload: state,
  };
};
export const searchCatsAction = (state: Cat[]) => {
  return {
    type: CatsActionTypes.SEARCH_CAT_LIST,
    payload: state,
  };
};
