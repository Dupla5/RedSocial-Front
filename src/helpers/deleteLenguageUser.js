import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/lenguages/delete-lenguages?idIdioma=';

export const deleteLenguageUser = async (id_idioma) => {
    const { data } = await axios.delete(URL + id_idioma);
    return data.data;
}