import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/courses/add-courses';

export const postCourseUser = async(courseValues,id)=>{
    const {nombre,lugar,fechaComienzo,fechaFinalizacion} = courseValues;
    const {data} = await axios.post(URL, {
        nombre,
        lugar,
        fechaComienzo,
        fechaFinalizacion,
        idUsuario:id
    });
    return data.data;
}