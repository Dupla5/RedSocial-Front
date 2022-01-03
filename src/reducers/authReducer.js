import { types } from "../types/types";


const initialState = {
    id:null,
    logged:false
}

export const authReducer = (state =initialState,action) =>{
    switch(action.type){
        case types.login:
            return{
                id:action.payload.id,
                logged:true
            }
        case types.logout:
            return {
                id:null,
                logged:false,
            }
        default:
            return state;
    }
}