import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateScreens } from "./PrivateScreens";
import { PublicRoute } from "./PublicRoute";
import { PublicScreens } from "./PublicScreens";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={
                    <PublicRoute>
                        <PublicScreens />
                    </PublicRoute>
                } />
                <Route path="/home" element={
                    <PrivateRoute>
                        <PrivateScreens />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}
