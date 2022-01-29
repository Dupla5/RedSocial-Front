import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/helps/register';


export const helpUser = async(titulo,descripcion,id) =>{
    await axios.post(URL, {
        titulo,
        descripcion,
        id_Usuario:id
    });
}