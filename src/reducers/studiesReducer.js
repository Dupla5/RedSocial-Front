import { types } from "../types/types";

const initialState = [];

export const studiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadStudie:
            return [...action.payload]
        case types.deleteStudie:
            return [...state.filter((state) => state.id_Estudios !== action.payload)]
        case types.removeStudies:
            return initialState
        default:
            return state;
    }
}