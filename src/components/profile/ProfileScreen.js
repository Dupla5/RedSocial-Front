import { useSelector } from "react-redux"

export const ProfileScreen = () => {

    const { Nombre, A_Paterno, A_Materno,Img_Perfil} = useSelector(state => state.data)

    return (
        <div id="contentProfile">
            <h1>{Nombre} {A_Paterno} {A_Materno}</h1>
        </div>
    )
}
