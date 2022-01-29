import { types } from "../types/types";

const initialState = [];

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadLanguages:
            return [...action.payload]
        case types.deleteLanguage:
            return [...state.filter((state) => state.id_Idioma !== action.payload)]
        case types.removeLanguages:
            return initialState
        default:
            return state;
    }
}