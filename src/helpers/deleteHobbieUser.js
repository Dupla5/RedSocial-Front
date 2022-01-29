import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/hobbies/delete-hobbies?idHobbie=';

export const deleteHobbieUser = async (id_hobbie) => {
    const { data } = await axios.delete(URL + id_hobbie);
    return data.data;
}