import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/hobbies/add-hobbies';

export const postHobbieUser = async (hobbieValues, id) => {
    const { nombre,tiempo } = hobbieValues;
    const { data } = await axios.post(URL, {
        nombre,
        tiempo,
        idUsuario: id
    });
    return data.data;
}