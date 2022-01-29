import { types } from "../types/types";

const initialState = [];

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadComment:
            return state.concat(action.payload)
        case types.loadAllComment:
            return [...state]
        case types.removeCommentPost:
            return [...state.filter(state=> state.Post_Id !== action.payload)]
        case types.removeComment:
            return initialState
        default:
            return state;
    }
}