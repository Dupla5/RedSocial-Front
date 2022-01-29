import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateScreens } from "./PrivateScreens";
import { PublicRoute } from "./PublicRoute";
import { PublicScreens } from "./PublicScreens";

export const AppRouter = () => {

    const {Nombre} = useSelector(state => state.data);
    

    return (
        <HashRouter>
            <Routes>
                <Route path={`${Nombre}/*`} element={
                    <PrivateRoute>
                        <PrivateScreens />
                    </PrivateRoute>
                } />
                <Route path="/*" element={
                    <PublicRoute>
                        <PublicScreens />
                    </PublicRoute>
                } />
            </Routes>
        </HashRouter>
    )
}
