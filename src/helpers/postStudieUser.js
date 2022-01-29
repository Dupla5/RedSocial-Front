import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/studies/add-studies';

export const postStudieUser = async (studieValues, id) => {
    const { escuela, grado,carrera } = studieValues;
    const { data } = await axios.post(URL, {
        escuela,
        grado,
        carrera,
        idUsuario: id
    });
    return data.data;
}