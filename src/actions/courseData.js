import { getCourseUser } from '../helpers/getCourseUser';
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


export const removeCourses = () =>{
    return{
        type:types.removeCourses,
    }
}