import { User, UserActionTypes } from "./type";

export const signUpAction = (state: User) => {
  return {
    type: UserActionTypes.SIGN_UP,
    payload: state,
  };
};
export const signInAction = (state: User) => {
  return {
    type: UserActionTypes.SIGN_IN,
    payload:
    {
      user_name: state.user_name,
      nickname: state.nickname,
      phone: state.phone,
      email: state.email,
      post_code:state.post_code,
      prefecture_id:state.prefecture_id,
      city:state.city,
      building:state.building,
      cat_type_id:state.cat_type_id,
    },
  };
};
