import Swal from 'sweetalert2';
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword =(email,password) =>{
    return (dispatch) =>{
        dispatch(startLoading());
        dispatch(login('12345'));
        dispatch(finishLoading());
        Swal.fire('Success', 'Bienvenido','success');
    }
};

export const startLogout =()=>{
    return (dispatch)=>{
        dispatch(logout());
        Swal.fire('Success', 'Hasta Luego','success');
    }
};

export const login = (id) => {
    return {
        type: types.login,
        payload: {
            id,
        }
    }
}

export const logout = ()=>{
    return{
        type: types.logout,
    }
};