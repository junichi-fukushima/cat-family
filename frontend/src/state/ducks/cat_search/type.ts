// APIデータの型を定義する
export type CatSearch = {
  ageId: number | null;
  typeId: number | null;
  sexId: number | null;
  prefectureId: number | null;
  label: Array<number>;
};

//  Actionの型を定義する
export const CatsActionTypes = {
  // 更新
  UPDATE_CAT_SEARCH_AGE: "UPDATE_CAT_SEARCH_AGE",
  UPDATE_CAT_SEARCH_TYPE: "UPDATE_CAT_SEARCH_TYPE",
  UPDATE_CAT_SEARCH_SEX: "UPDATE_CAT_SEARCH_SEX",
  UPDATE_CAT_SEARCH_LABEL: "UPDATE_CAT_SEARCH_LABEL",
  UPDATE_CAT_SEARCH_PREFECTURE: "UPDATE_CAT_SEARCH_PREFECTURE",
};
