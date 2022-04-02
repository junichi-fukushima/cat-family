// selectors
import { createSelector } from "reselect";
import { State } from "../../store/type";

const catSearchSelector = (state: State) => state.catSearch;

export const getCatSearchCondition = createSelector([catSearchSelector], (state) => state);
