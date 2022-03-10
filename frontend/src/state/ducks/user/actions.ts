import { User, UserActionTypes } from "./type";

export const postUserAction = (state: User) => {
  return {
    type: UserActionTypes.POST_USER,
    payload: state,
  };
};
