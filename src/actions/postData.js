import Swal from 'sweetalert2';
import { deleteUserPost } from '../helpers/deleteUserPost';
import { getAllPost } from '../helpers/getAllPost';
import { postUserPost } from '../helpers/postUserPost';
import { types } from "../types/types";

export const postData = () => {
    return async (dispatch) => {
        const postData = await getAllPost();
        dispatch(loadPost(postData));
    }
};

export const loadPost = (postData) => {
    return {
        type: types.loadPost,
        payload: postData
    }
}

export const startDeletePost = (key) => {
    return async (dispatch) => {
        const msgDelete = await deleteUserPost(key);
        if (msgDelete !== undefined) {
            Swal.fire({
                title: 'Eliminando',
                text: msgDelete,
                allowOutsideClick: false,
            })
            dispatch(deletePost(key));
            Swal.close();
        }
    }
}

export const deletePost = (key) => {
    return {
        type: types.deletePost,
        payload: key
    }
};

export const addPost = (postValues, id) => {
    return async (dispatch) => {
        const resp = await postUserPost(postValues, id);
        if (resp !== undefined) {
            Swal.fire({
                title: 'Guardado',
                text: resp,
                allowOutsideClick: false,
            })
            dispatch(postData());
            Swal.close();
        }
    }
}

export const removePost = () => {
    return {
        type: types.removePost,
    }
}