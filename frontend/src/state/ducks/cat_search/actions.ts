import { CatsActionTypes } from "./type";

export const updateCatAgeCondition = (state: number) => {
  return {
    type: CatsActionTypes.UPDATE_CAT_SEARCH_AGE,
    payload: state,
  };
};
