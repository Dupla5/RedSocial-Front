import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/users/getUser?idUsuario='

export const getUserData = async(id)=>{
    const dataUser = [];
    const {data} = await axios.get(URL+id);
    console.log(data);
};