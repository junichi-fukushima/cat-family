import { CatsAge, CatsLabel, CatsSex, CatsType } from "../ducks/labels/type";
import { Cat } from "../ducks/cats/type";

export type State = {
  cats: Cat[];
  cat_label: CatsLabel[];
  cat_sex: CatsSex[];
  cat_type: CatsType[];
  cat_age: CatsAge[];
};
