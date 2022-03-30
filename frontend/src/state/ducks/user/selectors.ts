import { createSelector } from "reselect";
import { State } from "../../store/type";

const userSelector = (state: State) => state.user;
export const getUser = createSelector([userSelector], (state) => state);
