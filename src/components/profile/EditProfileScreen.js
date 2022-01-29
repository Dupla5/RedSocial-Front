import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startUpdateUser, startUpload, updateData } from "../../actions/editData";
import { useForm } from "../../hooks/useForm";

export const EditProfileScreen = () => {

    const data = useSelector(state => state.data);
    const [imgData, setImgData] = useState();

    const [formValues, handleInputChange] = useForm(data);
    const { Img_Perfil, id_Usuario: id, Nombre, A_Paterno, A_Materno, Ciudad, Pais, Pwd, Perfil_Linkedin } = formValues;


    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(startUpload(imgData, data))
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
    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        dispatch(updateData(formValues));
        setTimeout(() => {
            dispatch(startUpdateUser(data, id));
        }, 3000);
        
    }

    return (
        <div id="contentEdit">
            <h1>Edit Profile</h1>
            <hr/>
            <div id="img">
                <img className="editProfile__imgPerfil" src={Img_Perfil} alt="Perfil" />
                <input id="fileSelector" type="file" name="file" style={{ display: "none" }} onChange={handleFileChange} />
                <div>
                    <button className="btn" onClick={handlePictureUpload}>Seleccionar Imagen</button>
                    <button className="btn" onClick={handleSave}>Guardar Imagen</button>
                </div>
            </div>
            <div id="datos">
                <form className="row g-3" onSubmit={handleSubmitUpdate} >
                    <div className="col-md-4">
                        <label className="form-label">Nombre</label>
                        <input name="Nombre" type="text" className="form-control"  value={Nombre} onChange={handleInputChange}/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Apellido Paterno</label>
                        <input name="A_Paterno" type="text" className="form-control"  value={A_Paterno} onChange={handleInputChange}/>
                    </div>
                    <div className="col-md-4">
                        <label  className="form-label">Apellido Materno</label>
                        <input name="A_Materno" type="text" className="form-control"  value={A_Materno} onChange={handleInputChange}/>
                    </div>
                   
                    <div className="col-md-6">
                        <label  className="form-label">Pais</label>
                        <input name="Pais" type="text" className="form-control" value={Pais} onChange={handleInputChange}/>
                    </div>

                    <div className="col-md-6">
                        <label  className="form-label">Ciudad</label>
                        <input name="Ciudad" type="text" className="form-control"  value={Ciudad} onChange={handleInputChange}/>
                    </div>

                    <div className="col-md-6">
                        <label  className="form-label">Password</label>
                        <input name="Pwd" type="password" className="form-control"  value={Pwd} onChange={handleInputChange}/>
                    </div>

                    <div className="col-md-6">
                        <label  className="form-label">Linkedin</label>
                        <input name="Perfil_Linkedin" type="text" className="form-control"  value={Perfil_Linkedin === null ? "" : Perfil_Linkedin} placeholder="Linkedin" onChange={handleInputChange}/>
                    </div>
                    <button className="btn btn-primary" type="submit">Actualizar Datos</button>
                </form>
            </div>
            
        </div>
    )
}
