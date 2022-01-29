import { login, logout } from "../actions/auth"
import { types } from "../types/types";


describe  ('Prueba con las acciones de AUTH', () =>{

    test('Login y Logout deben crear la acción respectiva', () => {

        const id = 1;
    
        const loginAction = login(id);
        const logoutAction = logout();

        expect(loginAction).toEqual ({

            type: types.login,
        payload: {
            id,
        }
        })

        expect(logoutAction).toEqual ({

            type: types.logout,

        })
    
    
    })


})