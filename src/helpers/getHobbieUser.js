import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/hobbies/get-all-hobbies?idUsuario='

export const getHobbieUser = async (id) => {
    const dataUser = [];
    const { data } = await axios.get(URL + id);
    Array.prototype.push.apply(dataUser, data.data);
    return dataUser;
};