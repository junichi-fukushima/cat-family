// selectors
import { createSelector } from "reselect";

const catLabelSelector = (state) => state.cat_label;

export const getCatLabel = createSelector(
  [catLabelSelector],
  state => state
);
