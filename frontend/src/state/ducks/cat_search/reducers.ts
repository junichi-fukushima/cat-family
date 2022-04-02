import { initialState } from "../../store/initialState";
import { CatsActionTypes } from "./type";

export const CatsSearchReducer = (state = initialState.cats, action: any) => {
  switch (action.type) {
    case CatsActionTypes.UPDATE_CAT_SEARCH_AGE:
      return action.payload;
    default:
      return state;
  }
};
