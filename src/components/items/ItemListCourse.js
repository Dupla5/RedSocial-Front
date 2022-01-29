
import { useDispatch } from 'react-redux';
import { startDeleteCourse } from '../../actions/courseData';

export const ItemListCourse = ({ ...props }) => {
    const {id_Curso,nombre,lugar,fechaComienzo,fechaFinalizacion} = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(startDeleteCourse(id_Curso));
    }



    return (
        <li key={id_Curso}>
            <p>Nombre: {nombre}</p>
            <p>Lugar: {lugar}</p>
            <p>Comienzo: {fechaComienzo}</p>
            <p>Finalizacion: {fechaFinalizacion}</p>
            <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </li>


    )
}
