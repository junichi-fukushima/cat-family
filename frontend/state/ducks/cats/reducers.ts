import * as Actions from "./actions"
import { initialState } from "../../store/initialState"

export const CatsReducer = (state = initialState.cats, action: any)  => {
    switch (action.type) {
        case Actions.fetchAllCatsAction:
            return {
                ...state,
                cats: action.payload
            };

        default:
            return state
    }
};