import { authReducer } from "../reducers/authReducer";
import { types } from "../types/types";

describe ('Pruebas en authReducer', () => {

    test('Debe realizar el login', () => {
        
        const initialState = {};

        const action ={
            type:types.login,
            payload:{
                id:1,
                logged:true
            }
        };
        
        const state = authReducer(initialState,action);
        expect (state).toEqual({
            id:1,
            logged:true
        })

    });

    test('Debe realizar el logout', () => {
        
        const initialState = {
            id:1,
            };

        const action ={
            type:types.logout,
                    };
        
        const state = authReducer(initialState,action);
        expect (state).toEqual({
            id:null,
            logged:false
        });

    });
    

    test('No debe hacer cambios en el state', () => {
        
        const initialState = {
            id:'hola',
        };

        const action ={
            type:'hola',
        };
        
        const state = authReducer(initialState,action);
        expect (state).toEqual(initialState);

    });

})