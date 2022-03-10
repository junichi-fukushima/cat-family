// APIデータの型を定義する
export type User = {
  user_name: string,
  nickname: string,
  email: string,
  phone: number,
  post_code: number,
  prefecture_id: number,
  city: string,
  building: string,
  password: string,
  password_confirmation: string,
  confirm_success_url: string
};
//  Actionの型を定義する
export const UserActionTypes = {
  POST_USER: "POST_USER",
};
