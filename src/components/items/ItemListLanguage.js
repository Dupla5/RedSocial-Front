import { useDispatch } from "react-redux";
import { startDeleteLenguage } from "../../actions/languagesData";

export const ItemListLanguage = ({ ...props }) => {
    const { id_Idioma,Nombre_idioma, Nivel,Certificacion } = props;
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(startDeleteLenguage(id_Idioma));
    }
    return (
        <li key={id_Idioma}>
            <p>Idioma: {Nombre_idioma}</p>
            <p>Nivel: {Nivel}</p>
            <p>Certificacion: {Certificacion}</p>
            <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </li>
    )
}