import { types } from "../types/types";

const initialState = [];

export const hobbieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addHobbie:
            return [
                ...state,
                ...action.payload
            ]
        case types.updateHobbie:
            return [...state, ...action.payload]
        case types.loadHobbie:
            return [...state, ...action.payload]
        case types.deleteHobbie:
            return [...state, ...action.payload]
        case types.removeHobbies:
            return initialState
        default:
            return state;
    }
}