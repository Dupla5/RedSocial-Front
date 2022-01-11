import { useSelector } from "react-redux"
import { ItemListCourse } from "../items/ItemListCourse";
import { ItemListHobbie } from "../items/ItemListHobbie";
import { ItemListStudie } from "../items/ItemListStudie";

export const ProfileScreen = () => {

    const { Nombre, A_Paterno, A_Materno, Img_Perfil, Email } = useSelector(state => state.data);
    const {course,studie, hobbie} = useSelector(state => state);

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
                    <h3>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCurso" aria-expanded="false" aria-controls="collapseExample">
                            Cursos
                        </button>
                    </h3>
                    <div className="collapse" id="collapseCurso">
                        <ul>
                            {course.map(curso => (
                                <ItemListCourse {...curso} />
                            ))}
                        </ul>
                    </div>
                    
                    
                </article>
                <article>
                    <h3>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIdiomas" aria-expanded="false" aria-controls="collapseExample">
                            Idiomas
                        </button>
                    </h3>
                    <div className="collapse" id="collapseIdiomas">
                        <ul>
                            {course.map(curso => (
                                <ItemListCourse key={curso.id} {...curso} />
                            ))}
                        </ul>
                    </div>
                </article>
                <article>
                    <h3>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHobbies" aria-expanded="false" aria-controls="collapseExample">
                            Hobbies
                        </button>
                    </h3>
                    <div className="collapse" id="collapseHobbies">
                        <ul>
                            {hobbie.map(hobbie => (
                                <ItemListHobbie {...hobbie} />
                            ))}
                        </ul>
                    </div>
                </article>
                <article>
                    <h3>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEstudios" aria-expanded="false" aria-controls="collapseExample">
                            Estudios
                        </button>
                    </h3>
                    <div className="collapse" id="collapseEstudios">
                        <ul>
                            {studie.map(studie => (
                                <ItemListStudie {...studie} />
                            ))}
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}
