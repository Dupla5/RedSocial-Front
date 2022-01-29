import Swal from 'sweetalert2';
import { deleteHobbieUser } from '../helpers/deleteHobbieUser';
import { getHobbieUser } from '../helpers/getHobbieUser';
import { postHobbieUser } from '../helpers/postHobbieUser';
import { types } from "../types/types";

export const hobbieData = (id) => {
    return async (dispatch) => {
        const hobbieData = await getHobbieUser(id);
        dispatch(loadHobbie(hobbieData));
    }
};

export const loadHobbie = (hobbieData) => {
    return {
        type: types.loadHobbie,
        payload: hobbieData
    }
}


export const startDeleteHobbie = (key) => {
    return async (dispatch) => {
        const msgDelete = await deleteHobbieUser(key);
        if (msgDelete !== undefined) {
            Swal.fire({
                title: 'Eliminando',
                text: msgDelete,
                allowOutsideClick: false,
            })
            dispatch(deleteHobbie(key));
            Swal.close();
        }
    }
}


export const addHobbie = (hobbieValues, id) => {
    return async (dispatch) => {
        const resp = await (postHobbieUser(hobbieValues, id));
        if (resp !== undefined) {
            Swal.fire({
                title: 'Guardado',
                text: resp,
                allowOutsideClick: false,
            })
            dispatch(hobbieData(id));
            Swal.close();
        }
    }
}

export const deleteHobbie = (key) => {
    return {
        type: types.deleteHobbie,
        payload: key
    }
};

export const removeHobbies = () => {
    return {
        type: types.removeHobbies,
    }
}