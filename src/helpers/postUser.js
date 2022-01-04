import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/users/register';

export const postUser = async(nombre,apaterno,amaterno,ciudad,pais,edad,email,password) =>{
    const {data} = await axios.post(URL, {
        nombre,
        a_paterno:apaterno,
        a_materno:amaterno,
        ciudad,
        pais,
        edad,
        email,
        pwd: password});
    const {id_Usuario} = data.data[0];
    return id_Usuario;

}