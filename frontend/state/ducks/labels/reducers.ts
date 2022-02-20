import * as Actions from "./actions"
import { initialState } from "../../store/initialState"

export const CatLabelReducer = (state = initialState.cat_label, action)  => {
    switch (action.type) {
        case Actions.fetchCatLabelAction:
            return {
                state,
            };
        default:
            return state
    }
};
export const CatAgeReducer = (state = initialState.cat_age, action)  => {
    switch (action.type) {
        case Actions.fetchCatAgeAction:
            return {
                ...state,
                cat_label: action.payload
            };
        default:
            return state
    }
};
export const CatSexReducer = (state = initialState.cat_sex, action)  => {
    switch (action.type) {
        case Actions.fetchCatSexAction:
            return {
                ...state,
                cat_label: action.payload
            };
        default:
            return state
    }
};
export const CatTypeReducer = (state = initialState.cat_type, action)  => {
    switch (action.type) {
        case Actions.fetchCatTypeAction:
            return {
                ...state,
                cat_label: action.payload
            };
        default:
            return state
    }
};