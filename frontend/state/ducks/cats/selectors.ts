import { createSelector } from "reselect";
import { State } from "../../store/type";

const catsSelector = (state: State) => state.cats;
export const getCats = createSelector([catsSelector], (state) => state);

export const getSexName = (state: State, id:number) => {
  return createSelector(
    (state: State) => state.cat_sex,
    (cat_sex) => {
      return cat_sex.map((cat_sex) => {
        if(id === cat_sex.id){
          return cat_sex.name;
        }
      })
    }
  )(state);
};

export const getCatStatus = (state: State, status: boolean) => {
  return createSelector(
    (state: State) => state,
    () => {
      if (status === true) {
        return "募集中";
      } else {
        return "締め切り";
      }
    }
  )(state);
};
