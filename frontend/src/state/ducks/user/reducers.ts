import { initialState } from "../../store/initialState";
import { UserActionTypes } from "./type";

export const UserReducer = (state = initialState.user, action: any)  => {
    switch (action.type) {
        case UserActionTypes.POST_USER:
            return action.payload;
        default:
            return state
    }
};