

export const ItemListHobbie = ({...props}) => {
    const {id_Hobbies,Nombre_hobbie, Tiempo_practicado} = props;
    return (
        <li key={id_Hobbies}>
            <p>{Nombre_hobbie}</p>
            <p>{Tiempo_practicado}</p>
        </li>
    )
}
