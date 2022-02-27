import { initialState } from "../../store/initialState";
import { CatsActionTypes } from "./type";

export const CatsReducer = (state = initialState.cats, action: any)  => {
    switch (action.type) {
        case CatsActionTypes.FETCH_CAT_LIST:
            return action.payload;
        default:
            return state
    }
};