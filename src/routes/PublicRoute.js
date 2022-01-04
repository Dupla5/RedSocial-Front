import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {

<<<<<<< HEAD
    const { logged } = useSelector(state => state.auth);
    const { Nombre } = useSelector(state => state.data);
    return logged ? <Navigate to={`${Nombre}/`} /> : children;
=======
    const { logged,id } = useSelector(state => state.auth);
    return logged ? <Navigate to={`${id}/`} /> : children;
>>>>>>> FrontVersionGaby
}
