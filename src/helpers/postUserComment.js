import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/posts/add-post-comment';

export const postUserComment = async (commentValues, idUsuario,idPost) => {
    const { comment } = commentValues;
    const { data } = await axios.post(URL, {
        comment,
        idUsuario,
        idPost
    });
    return data.data;
}