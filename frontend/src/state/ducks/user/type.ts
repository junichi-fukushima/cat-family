// APIデータの型を定義する
export type User = {
  user_name: string;
  nickname: string;
  phone: number;
  email: string;
  post_code: number;
  prefecture_id: number;
  city: string;
  building: string;
  cat_type_id: number;
  password: string;
  password_confirmation: string;
  confirm_success_url: string;
};
//  Actionの型を定義する
export const UserActionTypes = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
};
