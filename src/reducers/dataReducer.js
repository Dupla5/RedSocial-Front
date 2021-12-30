import { types } from "../types/types";

const initialState = {};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadData:
            return {
                ...action.payload
            }
        case types.removeData:
            return {
                data: initialState
            }
        default:
            return state;
    }
}