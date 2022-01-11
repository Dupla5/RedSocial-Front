
import { useDispatch } from 'react-redux';

export const ItemListCourse = ({ ...props }) => {
    const {id_Curso,nombre,lugar,fechaComienzo,fechaFinalizacion} = props;
    const dispatch = useDispatch();



    return (
        <li key={id_Curso}>
            <p>{nombre}</p>
            <p>{lugar}</p>
            <p>{fechaComienzo}</p>
            <p>{fechaFinalizacion}</p>
        </li>


    )
}
