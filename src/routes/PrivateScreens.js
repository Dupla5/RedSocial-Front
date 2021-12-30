import { Route, Routes } from "react-router-dom"
import { FeedScreen } from "../components/feed/FeedScreen"
import { HelpFormScreen } from "../components/help/HelpFormScreen"
import { Menu } from "../components/menu/Menu"
import { EditProfileScreen } from "../components/profile/EditProfileScreen"
import { ProfileScreen } from "../components/profile/ProfileScreen"


export const PrivateScreens = () => {
    return (
        <>
            <Menu/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<FeedScreen />} />
                    <Route path="profile" element={<ProfileScreen />} />
                    <Route path="editProfile" element={<EditProfileScreen/>} />
                    <Route path="help" element={<HelpFormScreen />} />
                </Routes>
            </div>
        </>
    )
}
