import { initialState } from "../../store/initialState";
import { CatsActionTypes } from "./type";

export const CatSearchReducer = (
  state = initialState.catSearch,
  action: any
) => {
  switch (action.type) {
    case CatsActionTypes.UPDATE_CAT_SEARCH_AGE:
      return { ...state, ageId: action.payload };
    case CatsActionTypes.UPDATE_CAT_SEARCH_TYPE:
      return { ...state, typeId: action.payload };
    case CatsActionTypes.UPDATE_CAT_SEARCH_SEX:
      return { ...state, sexId: action.payload };
    case CatsActionTypes.UPDATE_CAT_SEARCH_LABEL:
      return { ...state, label: action.payload };
    case CatsActionTypes.UPDATE_CAT_SEARCH_PREFECTURE:
      return { ...state, prefectureId: action.payload };
    default:
      return state;
  }
};
