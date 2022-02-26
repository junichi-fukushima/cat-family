import { CatsAge, CatsLabel, CatsSex, CatsType } from "../ducks/labels/type";
import { CatsList } from "../ducks/cats/type";

export type State = {
  cats: CatsList[];
  cat_label: CatsLabel[];
  cat_sex: CatsSex[];
  cat_type: CatsType[];
  cat_age: CatsAge[];
};
