import { useDispatch } from "react-redux";
import { startDeleteHobbie } from "../../actions/hobbieData";


export const ItemListHobbie = ({...props}) => {
    const {id_Hobbies,Nombre_hobbie, Tiempo_practicado} = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(startDeleteHobbie(id_Hobbies));
    }
    return (
        <li key={id_Hobbies}>
            <p>{Nombre_hobbie}</p>
            <p>{Tiempo_practicado}</p>
            <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </li>
    )
}
