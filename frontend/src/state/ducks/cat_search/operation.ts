import {
  updateCatAgeCondition,
  updateCatLabelCondition,
  updateCatSexCondition,
  updateCatTypeCondition,
  updateCatPrefectureCondition,
} from "./actions";
import { Dispatch } from "react";
import { Action } from "redux";
import { CatsLabel } from "../labels/type";

export const setSearchAgeCondition = (data: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(updateCatAgeCondition(data));
  };
};
export const setSearchTypeCondition = (data: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(updateCatTypeCondition(data));
  };
};
export const setSearchSexCondition = (data: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(updateCatSexCondition(data));
  };
};
export const setSearchPrefectureCondition = (data: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(updateCatPrefectureCondition(data));
  };
};
export const setSearchLabelCondition = (data: CatsLabel[]) => {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    const state = getState();
    const savedLabels = state.catSearch.label;
    data.map((label: CatsLabel) => {
      // ラベルデータの更新
      // checkedのstatusと既存の配列に値が入っているかどうかをチェック
      // ラベルデータを保存するとき
      if (label.checked && !savedLabels.includes(label.id)) {
        dispatch(updateCatLabelCondition([...savedLabels, label.id]));
        {console.log(savedLabels)}
      }
      // ラベルデータを削除するとき
      if (!label.checked && savedLabels.includes(label.id)) {
        const deletedLabels = savedLabels.filter(function (value: number) {
          return value != label.id;
        });
        dispatch(updateCatLabelCondition([...deletedLabels]));
      }
    });
  };
};
