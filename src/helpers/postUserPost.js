import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/posts/add-post'

export const postUserPost = async (postValues, id) => {
    const { descripcion } = postValues;
    const { data } = await axios.post(URL, {
        descripcion,
        idUsuario: id
    });
    return data.data;
}