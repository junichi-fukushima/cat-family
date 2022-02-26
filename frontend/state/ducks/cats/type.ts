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

}
//  Actionの型を定義する
export const CatsActionTypes = {
  FETCH_CAT_LIST : "FETCH_CAT_LIST",
}