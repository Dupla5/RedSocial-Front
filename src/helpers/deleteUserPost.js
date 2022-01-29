import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/posts/delete-post?postId=';

export const deleteUserPost = async (id_post) => {
    const {data} = await axios.delete(URL + id_post);
    return data.success;
}
