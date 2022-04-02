import { updateCatAgeCondition } from './actions';
import { Dispatch } from "react";
import { Action } from "redux";


export const setSearchAgeCondition = (data : number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(updateCatAgeCondition(data))
  };
};
