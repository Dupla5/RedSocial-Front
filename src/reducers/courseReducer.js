import { types } from "../types/types";

const initialState = [];

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadCourse:
            return [...action.payload]
        case types.deleteCourse:
            return [...state.filter((state) => state.id_Curso!==action.payload)]
        case types.removeCourses:
            return initialState
        default:
            return state;
    }
}