import axios from "axios";

const URL = 'https://backend-dupla5.herokuapp.com/courses/delete-courses?idCurso=';

export const deleteCourseUser = async (id_Curso) => {
    const { data } = await axios.delete(URL+id_Curso);
    return data.data;
}