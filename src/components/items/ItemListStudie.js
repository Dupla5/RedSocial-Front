import { useDispatch } from "react-redux";
import { startDeleteStudie } from "../../actions/studieData";


export const ItemListStudie = ({...props}) => {
    const {id_Estudios,Escuela, Grado_Estudios,Carrera_Cursada} = props;

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(startDeleteStudie(id_Estudios));
    }
    return (
        <li key={id_Estudios}>
            <p>{Escuela}</p>
            <p>{Grado_Estudios}</p>
            <p>{Carrera_Cursada}</p>
            <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </li>
    )
}
