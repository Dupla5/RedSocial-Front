import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/posts/get-all-posts'

export const getAllPost = async () => {
    const dataPost = [];
    const { data } = await axios.get(URL);
    Array.prototype.push.apply(dataPost, data.data);
    return dataPost;
};