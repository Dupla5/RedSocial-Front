import { getStudieUser } from '../helpers/getStudieUser';
import { types } from "../types/types";

export const studiesData = (id) => {
    return async (dispatch) => {
        const studieData = await getStudieUser(id);
        dispatch(loadStudies(studieData));
    }
};

export const loadStudies = (studieData) => {
    return {
        type: types.loadStudie,
        payload: studieData
    }
}

export const deleteStudie = (key) => {
    return {
        type: types.deleteStudie,
        payload: key
    }
};

export const removeStudies = () => {
    return {
        type: types.removeStudies,
    }
}