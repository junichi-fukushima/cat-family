// APIデータの型を定義する
export type Cat = {
  id: number,
  name: string,
  title: string,
  terms:string,
  summary:string,
  price:number,
  status:boolean,
  cat_label_id:number,
  cat_sex_id:number,
  cat_type_id:number,
  cat_age_id:number,
  created_at:string,
  updated_at:string,
  main_img:string,
  sub_img11:string,
  sub_img12:string,
  sub_img13:string,
  // NOTE : いずれここにユーザーの情報を取得する
}
//  Actionの型を定義する
export const CatsActionTypes = {
  FETCH_CAT_LIST : "FETCH_CAT_LIST",
  SEARCH_CAT_LIST : "SEARCH_CAT_LIST",
}