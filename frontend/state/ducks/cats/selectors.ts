import { createSelector } from "reselect";
import { State } from "../../store/type";

const catsSelector = (state : State) => state.cats;

export const getCats = createSelector(
  [catsSelector],
  (state) => state
);
