import { types } from "../types/types";

const initialState = [];

export const studiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addStudie:
            return [
                ...state,
                ...action.payload
            ]
        case types.updateStudie:
            return [...state, ...action.payload]
        case types.loadStudie:
            return [...state, ...action.payload]
        case types.deleteStudie:
            return [...state, ...action.payload]
        case types.removeStudies:
            return initialState
        default:
            return state;
    }
}