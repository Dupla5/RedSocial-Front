import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startUpdateUser, startUpload } from "../../actions/editData";

export const EditProfileScreen = () => {

    const data = useSelector(state => state.data);
    const [imgData, setImgData] = useState();

    const dispatch = useDispatch();
    const { Img_Perfil,id_Usuario:id } = useSelector(state => state.data)

    const handleSave = () => {
        dispatch(startUpload(imgData,data))
    };

    const handlePictureUpload = () => {
        document.querySelector("#fileSelector").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImgData(file);
        }
    }
    const handleUpdate = ()=>{
        console.log(data, 'Datos de EditProfile');
        dispatch(startUpdateUser(data,id));
    }

    return (
        <div id="contentEdit">
            <h1>Edit Profile</h1>
            <img className="editProfile__imgPerfil" src={Img_Perfil} alt="Perfil"/>
            <input id="fileSelector" type="file" name="file" style={{ display: "none" }} onChange={handleFileChange} />
            <div>
                <button className="btn" onClick={handlePictureUpload}>Picture</button>
                <button className="btn" onClick={handleSave}>Save</button>
            </div>
            <button onClick={handleUpdate}>Actualizar Datos</button>            
        </div>
    )
}
