// APIデータの型を定義する
export type CatsSearch = {
  ageId: number | null;
  label: Array<number>;
};


//  Actionの型を定義する
export const CatsActionTypes = {
  // 更新
  UPDATE_CAT_SEARCH_AGE: "UPDATE_CAT_SEARCH_AGE",
};
