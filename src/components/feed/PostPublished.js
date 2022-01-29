import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/postData";
import { useForm } from "../../hooks/useForm";

export const PostPublished = () => {
    const {id_Usuario} = useSelector(state => state.data)
    const [formValues, handleInputChange] = useForm();
    const dispatch = useDispatch();


    const handleAddPost = () => {
        dispatch(addPost(formValues,id_Usuario));
    }
    return (
        <div className="container mb-2">
            <h3>Escriba una publicación</h3>
            <textarea className="textarea form-control" autoComplete="off" name="descripcion" onChange={handleInputChange}></textarea>
            <button className="btn btn-primary" onClick={handleAddPost}>Agregar Post</button>
        </div>
    )
}
