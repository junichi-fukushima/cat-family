import { initialState } from "../../store/initialState";
import { Loading } from "./type";

export const LoadingReducer = (state = initialState.loading, action: any) => {
  switch (action.type) {
    case Loading:
      return action.payload;
    default:
      return state;
  }
};
