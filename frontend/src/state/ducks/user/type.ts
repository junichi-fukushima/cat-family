// APIデータの型を定義する
export type signUpUser = {
  id: number | null;
  userName: string;
  nickname: string;
  phone: number | null;
  email: string;
  postCode: number | null;
  prefectureId: number | null;
  city: string;
  building: string;
  catTypeId: number | null;
  password: string;
};

// APIデータの型を定義する
export type User = {
  id: number | null;
  userName: string;
  nickname: string;
  phone: number | null;
  email: string;
  postCode: number | null;
  prefectureId: number | null;
  city: string;
  building: string;
  catTypeId: number | null;
  emailVerified: number;
  isSignIn: boolean;
};
//  Actionの型を定義する
export const UserActionTypes = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
};
