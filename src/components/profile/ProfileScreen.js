import { useSelector } from "react-redux"

export const ProfileScreen = () => {

    const { Nombre, A_Paterno, A_Materno, Img_Perfil, Email } = useSelector(state => state.data);
    const {course} = useSelector(state => state);
    console.log(course);

    return (
        <div id="contentProfile">
            <aside className="container lateral_izquierda">
                <hr />
                <h1>{Nombre} {A_Paterno} {A_Materno}</h1>
                <div className="img_perfil">
                    <img src={Img_Perfil} alt="Perfil" />
                </div>
                <div className="datos">
                    <p>Email: {Email}</p>
                    <hr />
                </div>
            </aside>
            <section className="seccion">
                <article>
                    <h3>Cursos</h3>
                    <ul>
                        {course.map(curso => (
                            <li key={curso.id_Cursos}>
                                <p>{curso.nombre}</p>
                                <p>{curso.lugar}</p>
                                <p>{curso.fechaComienzo}</p>
                                <p>{curso.fechaFinalizacion}</p>
                            </li>
                        ))}
                    </ul>
                    
                </article>
                <article>
                    <h3>Idiomas</h3>
                </article>
                <article>
                    <h3>Estudios</h3>
                </article>
                <article>
                    <h3>Hobbies</h3>
                </article>
            </section>
        </div>
    )
}
