import Swal from 'sweetalert2';
import { deleteStudieUser } from '../helpers/deleteStudieUser';
import { getStudieUser } from '../helpers/getStudieUser';
import { postStudieUser } from '../helpers/postStudieUser';
import { types } from "../types/types";

export const studiesData = (id) => {
    return async (dispatch) => {
        const studieData = await getStudieUser(id);
        dispatch(loadStudies(studieData));
    }
};

export const loadStudies = (studieData) => {
    return {
        type: types.loadStudie,
        payload: studieData
    }
}


export const startDeleteStudie = (key) => {
    return async (dispatch) => {
        const msgDelete = await deleteStudieUser(key);
        if (msgDelete !== undefined) {
            Swal.fire({
                title: 'Eliminando',
                text: msgDelete,
                allowOutsideClick: false,
            })
            dispatch(deleteStudie(key));
            Swal.close();
        }
    }
}


export const addStudie = (studieValues, id) => {
    return async (dispatch) => {
        const resp = await (postStudieUser(studieValues, id));
        if (resp !== undefined) {
            Swal.fire({
                title: 'Guardado',
                text: resp,
                allowOutsideClick: false,
            })
            dispatch(studiesData(id));
            Swal.close();
        }
    }
}

export const deleteStudie = (key) => {
    return {
        type: types.deleteStudie,
        payload: key
    }
};

export const removeStudies = () => {
    return {
        type: types.removeStudies,
    }
}