import { types } from "../types/types";

const initialState = [];

export const hobbieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadHobbie:
            return [...action.payload]
        case types.deleteHobbie:
            return [...state.filter((state) => state.id_Hobbies !== action.payload)]
        case types.removeHobbies:
            return initialState
        default:
            return state;
    }
}