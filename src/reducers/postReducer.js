import { types } from "../types/types";

const initialState = [];

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadPost:
            return [...action.payload]
        case types.deletePost:
            return [...state.filter((state) => state.id_Post !== action.payload)]
        case types.removePost:
            return []
        default:
            return state;
    }
}