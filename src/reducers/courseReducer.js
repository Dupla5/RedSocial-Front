import { types } from "../types/types";

const initialState = [];

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addCourse:
            return {}
        case types.updateCourse:
            return {}
        case types.loadCourse:
            return [...state, ...action.payload]
            
        case types.removeCourses:
            return initialState
        default:
            return state;
    }
}