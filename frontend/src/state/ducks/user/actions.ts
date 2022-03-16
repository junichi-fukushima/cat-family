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
    payload: state,
  };
};
