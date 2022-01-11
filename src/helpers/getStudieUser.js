import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/studies/get-all-studies?idUsuario='

export const getStudieUser = async (id) => {
    const dataUser = [];
    const { data } = await axios.get(URL + id);
    Array.prototype.push.apply(dataUser, data.data);
    return dataUser;
};