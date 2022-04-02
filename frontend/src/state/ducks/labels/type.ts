// APIデータの型を定義する
export type CatsAge = {
  id: number;
  name: string;
};
export type CatsSex = {
  id: number;
  name: string;
};
export type CatsType = {
  id: number;
  name: string;
};
export type CatsLabel = {
  id: number;
  name: string;
  checked: boolean;
};

//  Actionの型を定義する
export const CatsActionTypes = {
  // 取得
  FETCH_CAT_LABEL: "FETCH_CAT_LABEL",
  FETCH_CAT_AGE: "FETCH_CAT_AGE",
  FETCH_CAT_SEX: "FETCH_CAT_SEX",
  FETCH_CAT_TYPE: "FETCH_CAT_TYPE",
  // 更新
  UPDATE_CAT_LABEL: "UPDATE_CAT_LABEL",
  UPDATE_CAT_AGE: "UPDATE_CAT_AGE",
};
