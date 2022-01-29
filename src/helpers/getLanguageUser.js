import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/lenguages/get-all-lenguages?idUsuario='

export const getLanguageUser = async (id) => {
    const dataUser = [];
    const { data } = await axios.get(URL + id);
    Array.prototype.push.apply(dataUser, data.data);
    return dataUser;
};