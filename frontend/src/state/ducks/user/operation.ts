import { signInURL } from '../../urls/index';
// library
import { Dispatch, useCallback } from "react";

// others
import { signInAction } from "./actions";
import { Action } from "redux";



// Note: 引数の型を定義 : formValuesをどこかで定義
export const useSignIn = (user: any) => {
  // Note: getStateの型を定義したい
  return async (dispatch: Dispatch<Action>) => {
    dispatch(signInAction(user));
  };
};
