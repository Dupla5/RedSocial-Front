

export const ItemListStudie = ({...props}) => {
    const {id_Estudios,Escuela, Grado_Estudios,Carrera_Cursada} = props;
    return (
        <li key={id_Estudios}>
            <p>{Escuela}</p>
            <p>{Grado_Estudios}</p>
            <p>{Carrera_Cursada}</p>
        </li>
    )
}
