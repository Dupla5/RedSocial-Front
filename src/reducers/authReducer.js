import { types } from "../types/types";

export const authReducer = (state ={},action) =>{
    switch(action.type){
        case types.login:
            return{
                id:action.payload.id,
            }
        case types.logout:
            return {
                id:null
            }
        default:
            return state;
    }
}