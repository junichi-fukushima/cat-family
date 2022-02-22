import { createSelector } from "reselect";

const catsSelector = (state) => state.cats;

export const getCatsDataIndex = createSelector(
  [catsSelector],
  state => state.id
);
