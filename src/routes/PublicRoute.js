import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {

    const { logged,id } = useSelector(state => state.auth);
    return logged ? <Navigate to={`${id}/`} /> : children;
}
