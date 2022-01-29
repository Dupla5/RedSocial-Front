import { getUserData } from "../helpers/getUserData";
import { types } from "../types/types";

export const loadData = (data) => ({
    type: types.loadData,
    payload:data
});

export const removeData = () => ({
    type: types.removeData,
})

export const startLoadData = (id)=> {
    return async(dispatch) =>{
        const dataUser = await getUserData(id);
        dispatch(loadData(dataUser));
    }
}