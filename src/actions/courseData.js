import Swal from 'sweetalert2';
import { deleteCourseUser } from '../helpers/deleteCourseUser';
import { getCourseUser } from '../helpers/getCourseUser';
import { postCourseUser } from '../helpers/postCourseUser';
import { types } from "../types/types";

export const courseData = (id) =>{
    return async (dispatch) => {
        const courseData = await getCourseUser(id);
        dispatch(loadCourse(courseData));
    }
};

export const loadCourse = (courseData) =>{
    return{
        type:types.loadCourse,
        payload:courseData
    }
}

export const startDeleteCourse = (key) =>{
    return async(dispatch) =>{
        const msgDelete = await deleteCourseUser(key);
        if(msgDelete!==undefined){
            Swal.fire({
                title: 'Guardado',
                text: msgDelete,
                allowOutsideClick: false,
            })
            dispatch(deleteCourse(key));
            Swal.close();
        }
    }
}

export const deleteCourse = (key) =>{
    return{
        type:types.deleteCourse,
        payload:key
    }
};

export const addCourse = (courseValues,id) =>{
    return async(dispatch) =>{
        const resp = await(postCourseUser(courseValues,id));
        if(resp !== undefined){
            Swal.fire({
                title: 'Guardado',
                text: resp,
                allowOutsideClick: false,
            })
            dispatch(courseData(id));
            Swal.close();
        }
    }
}

export const removeCourses = () =>{
    return{
        type:types.removeCourses,
    }
}