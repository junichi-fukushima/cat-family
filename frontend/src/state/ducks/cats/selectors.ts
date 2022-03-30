import { createSelector } from "reselect";
import { State } from "../../store/type";

const catsSelector = (state: State) => state.cats;
const loadingSelector = (state: State) => state.loading;
export const getCats = createSelector([catsSelector], (state) => state);

export const getSexName = (state: State, id: number) => {
  return createSelector(
    (state: State) => state.cat_sex,
    (cat_sex) => {
      return cat_sex.find((cat_sex) => id === cat_sex.id)?.name ?? "";
    }
  )(state);
};

export const getCatLoading = createSelector(
  [loadingSelector],
  (state) => state
);
