// selectors
import { createSelector } from "reselect";
import { State } from "../../store/type";

const catLabelSelector = (state: State) => state.cat_label;
const catAgeSelector = (state: State) => state.cat_age;
const catSexSelector = (state: State) => state.cat_sex;
const catTypeSelector = (state: State) => state.cat_type;

export const getCatLabel = createSelector([catLabelSelector], (state) => state);
export const getCatAge = createSelector([catAgeSelector], (state) => state);
export const getCatSex = createSelector([catSexSelector], (state) => state);
export const getCatType = createSelector([catTypeSelector], (state) => state);
