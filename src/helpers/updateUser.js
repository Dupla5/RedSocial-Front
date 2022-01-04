import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/users/update-user';

export const updateUser = async (dataUser) => {
    console.log(dataUser, 'Datos de updateUser');
    const { Nombre, A_Paterno, A_Materno, Ciudad, Pais, Edad, Email, Pwd, Perfil_Linkedin, Img_Perfil,id_Usuario} = dataUser;
    const { data } = await axios.put(URL, { 
        nombre:Nombre,
        a_paterno: A_Paterno,
        a_materno: A_Materno,
        ciudad: Ciudad,
        pais: Pais,
        edad: Edad,
        email: Email,
        pwd: Pwd,
        linkedin: Perfil_Linkedin,
        url:Img_Perfil,
        idUsuario:id_Usuario
    });
    console.log(data,'Datos de updateUser');
}