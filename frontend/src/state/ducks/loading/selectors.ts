// selectors
import { createSelector } from "reselect";
import { State } from "../../store/type";

const LoadingSelector = (state: State) => state.loading;

export const getLoadingStatus = createSelector([LoadingSelector], (state) => state);
