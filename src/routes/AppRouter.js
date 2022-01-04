import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateScreens } from "./PrivateScreens";
import { PublicRoute } from "./PublicRoute";
import { PublicScreens } from "./PublicScreens";

export const AppRouter = () => {

<<<<<<< HEAD
    const {Nombre} = useSelector(state => state.data)
=======
    const {id} = useSelector(state => state.auth)
>>>>>>> FrontVersionGaby

    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path={`${Nombre}/*`} element={
=======
                <Route path={`${id}/*`} element={
>>>>>>> FrontVersionGaby
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
        </BrowserRouter>
    )
}
