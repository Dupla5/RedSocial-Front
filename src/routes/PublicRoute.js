import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {

    const { id } = useSelector(state => state.auth);
    return id!=null ? <Navigate to={`${id}/feed`} /> : children;
}
