// APIデータの型を定義する
export type User = {
  id: number;
  user_name: string;
  nickname: string;
  phone: number;
  email: string;
  post_code: number;
  prefecture_id: number;
  city: string;
  building: string;
  cat_type_id: number;
  // Note : ここから下は余裕があれば削除
  allow_password_change?: boolean;
  provider?: string;
  uid?:string;
}
//  Actionの型を定義する
export const UserActionTypes = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
};
