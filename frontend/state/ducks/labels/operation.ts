import { fetchCatAgeAction, fetchCatLabelAction, fetchCatSexAction, fetchCatTypeAction } from "./actions";
import { catLabelUrl } from '../../urls/index'

export const getCatLabel = () => {
  return async (dispatch,getState) => {
    // const state = getState();

    // ラベルAPI(ラベルの取得)
    const catLabel = catLabelUrl;

    const response = await fetch(catLabel )
      .then((res) => res.json())
      .catch(() => null);

    dispatch(fetchCatLabelAction(
        response
    ))
  };
};
