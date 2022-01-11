import { getHobbieUser } from '../helpers/getHobbieUser';
import { types } from "../types/types";

export const hobbieData = (id) => {
    return async (dispatch) => {
        const hobbieData = await getHobbieUser(id);
        dispatch(loadHobbie(hobbieData));
    }
};

export const loadHobbie = (hobbieData) => {
    return {
        type: types.loadHobbie,
        payload: hobbieData
    }
}

export const deleteHobbie = (key) => {
    return {
        type: types.deleteHobbie,
        payload: key
    }
};

export const removeHobbies = () => {
    return {
        type: types.removeHobbies,
    }
}