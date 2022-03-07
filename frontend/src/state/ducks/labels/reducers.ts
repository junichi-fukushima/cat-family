import { initialState } from "../../store/initialState";
import { CatsActionTypes } from "./type";

export const CatLabelReducer = (
  state = initialState.cat_label,
  action: any
) => {
  switch (action.type) {
    case CatsActionTypes.FETCH_CAT_LABEL:
      return action.payload;
    case CatsActionTypes.UPDATE_CAT_LABEL:
      return state.map((label) => {
        if(label.id === action.payload){
          label.checked  = !(label.checked);
        }
        return label;
      })
    default:
      return state;
  }
};

export const CatAgeReducer = (
  state = initialState.cat_age,
  action: any
) => {
  switch (action.type) {
    case CatsActionTypes.FETCH_CAT_AGE:
      return action.payload;

    default:
      return state;
  }
};

export const CatSexReducer = (
  state = initialState.cat_sex,
  action: any
) => {
  switch (action.type) {
    case CatsActionTypes.FETCH_CAT_SEX:
      return action.payload;

    default:
      return state;
  }
};

export const CatTypeReducer = (
  state = initialState.cat_type,
  action: any
) => {
  switch (action.type) {
    case CatsActionTypes.FETCH_CAT_TYPE:
      return action.payload;

    default:
      return state;
  }
};
