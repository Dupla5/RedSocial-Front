import Swal from "sweetalert2";
import { deleteLenguageUser } from "../helpers/deleteLenguageUser";
import { getLanguageUser } from "../helpers/getLanguageUser";
import { postLenguageUser } from "../helpers/postLenguageUser";
import { types } from "../types/types";

export const lenguageData = (id) => {
    return async (dispatch) => {
        const lenguageData = await getLanguageUser(id);
        dispatch(loadLenguage(lenguageData));
    }
};

export const loadLenguage = (lenguageData) => {
    return {
        type: types.loadLanguages,
        payload: lenguageData
    }
}


export const startDeleteLenguage = (key) => {
    return async (dispatch) => {
        const msgDelete = await deleteLenguageUser(key);
        if (msgDelete !== undefined) {
            Swal.fire({
                title: 'Guardado',
                text: msgDelete,
                allowOutsideClick: false,
            })
            dispatch(deleteLenguage(key));
            Swal.close();
        }
    }
}

export const addLenguage = (formValues,id) =>{
    return async (dispatch) => {
        const resp = await (postLenguageUser(formValues, id));
        if (resp !== undefined) {
            Swal.fire({
                title: 'Guardado',
                text: resp,
                allowOutsideClick: false,
            })
            dispatch(lenguageData(id));
            Swal.close();
        }
    }
}

export const deleteLenguage = (key) => {
    return {
        type: types.deleteLanguage,
        payload: key
    }
};

export const removeLanguages = () => {
    return {
        type: types.removeLanguages,
    }
}