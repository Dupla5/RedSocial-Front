import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/lenguages/add-lenguages';

export const postLenguageUser = async (lenguageValues, id) => {
    const { nombre, nivel, certificacion } = lenguageValues;
    const { data } = await axios.post(URL, {
        nombre,
        nivel,
        certificacion,
        idUsuario: id
    });
    return data.data;
}