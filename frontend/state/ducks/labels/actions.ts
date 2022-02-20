import { CatsActionTypes } from "./type";

export const fetchCatLabelAction = (state) => {
  return {
    type: CatsActionTypes.FETCH_CAT_LIST,
    payload: state
  };
};
export const fetchCatAgeAction = () => {
  return {
    type: CatsActionTypes.FETCH_CAT_AGE,
    payload: {

    },
  };
};
export const fetchCatSexAction = () => {
  return {
    type: CatsActionTypes.FETCH_CAT_SEX,
    payload: {

    },
  };
};
export const fetchCatTypeAction = () => {
  return {
    type: CatsActionTypes.FETCH_CAT_TYPE,
    payload: {

    },
  };
};
