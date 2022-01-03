import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/users/login';

export const getIdUser = async(email,password) =>{
    const {data} = await axios.post(URL, {email,pwd: password});
    const {id_Usuario} = data.data[0];
    return id_Usuario;

}