import Swal from 'sweetalert2';
import { getIdUser } from '../helpers/getIdUser';
import { types } from "../types/types";
import { courseData, removeCourses } from './courseData';
import { removeData, startLoadData } from './data';
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword =(email,password) =>{
    return async(dispatch) =>{
        dispatch(startLoading());
        const id = await getIdUser(email,password);
        if(id!==undefined){
            dispatch(login(id));
            dispatch(startLoadData(id));
            dispatch(courseData(id));
            dispatch(finishLoading());
            Swal.fire('Success', 'Bienvenido','success');
        }else{
            Swal.fire('Error', 'Verifique sus datos','warning');
        }
    }
};

export const startLogout =()=>{
    return (dispatch)=>{
        dispatch(removeData());
        dispatch(removeCourses());
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
};

export const logout = ()=>{
    return{
        type: types.logout,
    }
};