import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, commentData, removeComment } from "../../actions/commentData";
import { startDeletePost } from "../../actions/postData";
import { useForm } from "../../hooks/useForm";
import { ItemListComment } from "./ItemListComment";

export const ItemListPost = ({ ...props }) => {
    const { id } = useSelector(state => state.auth);
    const [formValues, handleInputChange] = useForm();
    const { id_Post, Descripcion, FechaDePublicacion, Contador_Likes, Contador_Dislikes, Nombre, A_Paterno, id_Usuario } = props;
    const { comment } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(startDeletePost(id_Post));
    }

    useEffect(() => {
        dispatch(removeComment())
        dispatch(commentData(id_Post));
    }, [dispatch, id_Post])

    const handleAddComment = () => {
        dispatch(addComment(formValues, id, id_Post))
    }

    return (
        <li className="mb-2 col-4 d-flex flex-row">
            <div className="card col-11">
                <div className="card-body">
                    <hr />
                    <h5 className="card-title">{Nombre} {A_Paterno}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{FechaDePublicacion}</h6>
                    <p className="card-text">{Descripcion}</p>
                    <button type="button" class="btn btn-secondary m-1">
                        Like <span class="badge bg-secondary">{Contador_Likes}</span>
                    </button>
                    <button type="button" class="btn btn-warning m-1">
                        Dislike <span class="badge bg-secondary">{Contador_Dislikes}</span>
                    </button>
                    {id_Usuario === id ? <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button> : undefined}
                    <hr />
                    <h5>Escriba un comentario</h5>
                    <textarea className="textarea form-control comentario" autoComplete="off" name="comment" onChange={handleInputChange}></textarea>
                    <button className="btn btn-primary mb-2" onClick={handleAddComment}>Agregar Comentario</button>
                    <ItemListComment key={comment.id_Comentario} {...comment} />
                </div>
            </div>
        </li>
    )
}