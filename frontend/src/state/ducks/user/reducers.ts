import { initialState } from "../../store/initialState";
import { UserActionTypes } from "./type";

export const UserReducer = (state = initialState.user, action: any)  => {
    console.log(action.payload)
    switch (action.type) {
        case UserActionTypes.SIGN_UP:
            return action.payload;
        case UserActionTypes.SIGN_IN:
            return action.payload;
        default:
            return state
    }
};