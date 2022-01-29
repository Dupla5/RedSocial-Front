import Swal from 'sweetalert2';
import { getIdUser } from '../helpers/getIdUser';
import { postUser } from '../helpers/postUser';
import { helpUser } from '../helpers/helpUser';
import { types } from "../types/types";
import { courseData, removeCourses } from './courseData';
import { removeData, startLoadData } from './data';
import { hobbieData, removeHobbies } from './hobbieData';
import { removeStudies, studiesData } from './studieData';
import { finishLoading, startLoading } from "./ui";
import { lenguageData, removeLanguages } from './languagesData';
import { postData, removePost } from './postData';
import { removeComment } from './commentData';


export const startLoginEmailPassword =(email,password) =>{
    return async(dispatch) =>{
        dispatch(startLoading());
        const id = await getIdUser(email,password);
        if(id!==undefined){
            dispatch(login(id));
            dispatch(startLoadData(id));
            dispatch(courseData(id));
            dispatch(studiesData(id));
            dispatch(hobbieData(id));
            dispatch(lenguageData(id));
            dispatch(postData());
            dispatch(finishLoading());
            Swal.fire('Success', 'Bienvenido','success');
        }else{
            Swal.fire('Error', 'Verifique sus datos','warning');
        }
    }
};

export const startRegister =(nombre,a_paterno,a_materno,ciudad,pais,edad,email,password)=>{
    return async(dispatch) =>{
        dispatch(startLoading());
        const id =
         await postUser(
            nombre,
            a_paterno,
            a_materno,
            ciudad,
            pais,
            edad,
            email,
            password);
            if(id!==undefined){
                dispatch(finishLoading());
               Swal.fire( 'Registro exitoso','sucess');
            }
             
        
    }
}
export const helpRegister =(titulo,descripcion,id)=>{
    return async(dispatch) =>{
        dispatch(startLoading());
         await helpUser(titulo,descripcion,id);
            if(id!==undefined){
                dispatch(finishLoading());
               Swal.fire( 'Se envió tu solicitud de ayuda');
            }        
        
    }
}


export const startLogout =()=>{
    return (dispatch)=>{
        dispatch(removeData());
        dispatch(removeCourses());
        dispatch(removeStudies());
        dispatch(removeHobbies());
        dispatch(removeLanguages());
        dispatch(removePost());
        dispatch(removeComment());
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