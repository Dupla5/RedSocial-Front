import Swal from 'sweetalert2';
import { getAllComments } from '../helpers/getAllComments';
import { postUserComment } from '../helpers/postUserComment';
import { types } from "../types/types";

export const commentData = (idPost) => {
    return async (dispatch) => {
        const commentData = await getAllComments(idPost);
        dispatch(loadComment(commentData));
    }
};

export const loadAllComents = ()=>{
    return {
        type:types.loadAllComment
    }
};

export const loadComment = (commentData) => {
    return {
        type: types.loadComment,
        payload: commentData
    }
}


export const addComment = (commentValues, idUsuario,idPost) => {
    return async (dispatch) => {
        const resp = await postUserComment(commentValues, idUsuario,idPost);
        if (resp !== undefined) {
            Swal.fire({
                title: 'Guardado',
                text: resp,
                allowOutsideClick: false,
            })
            dispatch(removeCommentPost(idPost))
            dispatch(commentData(idPost));
            Swal.close();
        }
    }
}

export const removeCommentPost = (id_Post) =>{
    return {
        type:types.removeCommentPost,
        payload:id_Post
    }
}


export const removeComment = () => {
    return {
        type: types.removeComment,
    }
}