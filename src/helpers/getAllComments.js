import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/posts/get-post-all-comments?postId='

export const getAllComments = async (idPost) => {
    const dataComment = [];
    const { data } = await axios.get(URL+idPost);
    Array.prototype.push.apply(dataComment, data.data);
    return dataComment;
}