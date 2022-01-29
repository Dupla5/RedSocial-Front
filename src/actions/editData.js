import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";
import { updateUser } from "../helpers/updateUser";
import { types } from "../types/types";


export const startUpload = (file, data) => {

    return async (dispatch) => {
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait',
            allowOutsideClick: false,
        })
        const fileUrl = await fileUpload(file);
        data.Img_Perfil = fileUrl;
        dispatch(updateImg(fileUrl))
        Swal.close();
    }
}

export const updateImg = (fileUrl) => {
    return {
        type: types.updateImg,
        payload: fileUrl,
    }
}

export const startUpdateUser = (data) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Updating...',
            text: 'Please wait',
            allowOutsideClick: false,
        })
        const resp = await updateUser(data);
        Swal.close();
    }
}

export const updateData = (dataForm) => {
    return {
        type: types.updateData,
        payload: dataForm
    }
}


