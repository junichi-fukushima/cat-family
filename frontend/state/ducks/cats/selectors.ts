import { createSelector } from "reselect";
import { State } from "../../store/type";

const catsSelector = (state: State) => state.cats;
const catSexSelector = (state: State) => state.cat_sex;

export const getCats = createSelector(
  [catsSelector, catSexSelector],
  (catState, sexState) => {
    let catArray = [];
    catState.forEach((element: any) => {
      // titleはそのまま
      element.title = element.title;
      // ここでfilterをかけれないか？
      let catSex = sexState.filter((output) => {
        return output.id === element.cat_age_id;
      });
      catSex[0].name
    });
    return catState;
  }
);

// 厳格チェックはしくると再レンダリングされる
// https://zenn.dev/irico/articles/e5ae4b7d23fb69

// ゴールは新しい配列を作ること
// main_img / title / prefecture&city / catsex(cat_sex_idから加工) /