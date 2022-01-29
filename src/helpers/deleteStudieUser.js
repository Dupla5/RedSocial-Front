import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/studies/delete-studies?idEstudios=';

export const deleteStudieUser = async (id_estudio) => {
    const { data } = await axios.delete(URL + id_estudio);
    return data.data;
}