import { CatsLabel } from "../labels/type";
import { CatsActionTypes } from "./type";

export const updateCatAgeCondition = (state: number) => {
  return {
    type: CatsActionTypes.UPDATE_CAT_SEARCH_AGE,
    payload: state,
  };
};
export const updateCatTypeCondition = (state: number) => {
  return {
    type: CatsActionTypes.UPDATE_CAT_SEARCH_TYPE,
    payload: state,
  };
};
export const updateCatSexCondition = (state: number) => {
  return {
    type: CatsActionTypes.UPDATE_CAT_SEARCH_SEX,
    payload: state,
  };
};
export const updateCatLabelCondition = (state: CatsLabel[]) => {
  return {
    type: CatsActionTypes.UPDATE_CAT_SEARCH_LABEL,
    payload: state,
  };
};
export const updateCatPrefectureCondition = (state: number) => {
  return {
    type: CatsActionTypes.UPDATE_CAT_SEARCH_PREFECTURE,
    payload: state,
  };
};
