import { CatsActionTypes, CatsAge, CatsLabel, CatsSex, CatsType } from "./type";

// ラベルAPIを取得するアクション
export const fetchCatLabelAction = (state: CatsLabel[]) => {
  return {
    type: CatsActionTypes.FETCH_CAT_LABEL,
    payload: state,
  };
};
export const fetchCatAgeAction = (state: CatsAge[]) => {
  return {
    type: CatsActionTypes.FETCH_CAT_AGE,
    payload: state,
  };
};
export const fetchCatSexAction = (state: CatsSex[]) => {
  return {
    type: CatsActionTypes.FETCH_CAT_SEX,
    payload: state,
  };
};
export const fetchCatTypeAction = (state: CatsType[]) => {
  return {
    type: CatsActionTypes.FETCH_CAT_TYPE,
    payload: state,
  };
};
// ラベルの状態を変更するアクション
export const updateCatLabelAction = (id: number) => {
  return {
    type: CatsActionTypes.UPDATE_CAT_LABEL,
    payload: id,
  };
};
