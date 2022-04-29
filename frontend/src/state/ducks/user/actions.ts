import { signUpUser, User, UserActionTypes } from "./type";

export const signUpAction = (state: signUpUser) => {
  return {
    type: UserActionTypes.SIGN_UP,
    payload: {
      user_name: state.userName,
      nickname: state.nickname,
      phone: state.phone,
      email: state.email,
      post_code: state.postCode,
      prefecture_id: state.prefectureId,
      city: state.city,
      building: state.building,
      cat_type_id: state.catTypeId,
      password: state.password
    }
  };
};
export const signInAction = (state: User) => {
  return {
    type: UserActionTypes.SIGN_IN,
    payload: {
      id: state.id,
      user_name: state.userName,
      nickname: state.nickname,
      phone: state.phone,
      email: state.email,
      post_code: state.postCode,
      prefecture_id: state.prefectureId,
      city: state.city,
      building: state.building,
      cat_type_id: state.catTypeId,
      // Note : ここから下は余裕があれば削除
      allow_password_change: state.allowPasswordChange,
      provider: state.provider,
      uid: state.uid,
      isSignIn: true,
    },
  };
};
