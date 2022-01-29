import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {

    const { logged } = useSelector(state => state.auth);
    const { Nombre } = useSelector(state => state.data);
    return logged ? <Navigate to={`${Nombre}/`} /> : children;
}
