import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { Navbar } from "../components/uiPublic/Navbar"


export const PublicScreens = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="register" element={<RegisterScreen />} />
                </Routes>
            </div>
        </>
    )
}
