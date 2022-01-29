import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { addCourse } from "../../actions/courseData";
import { addHobbie } from "../../actions/hobbieData";
import { addLenguage } from "../../actions/languagesData";
import { addStudie } from "../../actions/studieData";
import { useForm } from "../../hooks/useForm";
import { ItemListCourse } from "../items/ItemListCourse";
import { ItemListHobbie } from "../items/ItemListHobbie";
import { ItemListLanguage } from "../items/ItemListLanguage";
import { ItemListStudie } from "../items/ItemListStudie";

export const ProfileScreen = () => {

    const dispatch =useDispatch();
    const { id_Usuario ,Nombre, A_Paterno, A_Materno, Img_Perfil, Email } = useSelector(state => state.data);
    const {course,studie, hobbie, language} = useSelector(state => state);
    const [formValues, handleInputChange,reset] = useForm();



    const handleAdd = (e) =>{
        const seccion = e.target.id;
        switch(seccion){
            case 'curso':
                dispatch(addCourse(formValues,id_Usuario));
                reset();
                break;
            case 'hobbie':
                dispatch(addHobbie(formValues, id_Usuario));
                reset();
                break;
            case 'idioma':
                dispatch(addLenguage(formValues, id_Usuario));
                reset();
                break;
            case 'estudio':
                dispatch(addStudie(formValues, id_Usuario));
                reset();
                break;
            default:
                console.log("sin datos");
        }
    };


    return (
        <div id="contentProfile">
            <aside className="container lateral_izquierda">
                <hr />
                <div className="img_perfil">
                    <img src={Img_Perfil} alt="Perfil" />
                </div>
                <h1>{Nombre} {A_Paterno} {A_Materno}</h1>
                <div className="datos">
                    <p>Email: {Email}</p>
                    <hr />
                </div>
            </aside>
            <section className="seccion">
                <div className="mb-2 d-flex justify-content-evenly">
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#cursos">
                        Agregar Curso
                    </button>
                    <div className="modal fade" id="cursos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Agregar Curso</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="col">
                                            <label htmlFor="nombre" className="form-label">Nombre del Curso</label>
                                            <input type="text" name="nombre" onChange={handleInputChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lugar" className="form-label">Lugar de Capacitación</label>
                                            <input type="text" name="lugar" onChange={handleInputChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="fechaComienzo" className="form-label">Fecha de Comienzo</label>
                                            <input type="date" name="fechaComienzo" onChange={handleInputChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="fechaFinalizacion" className="form-label">Fecha de Finalización</label>
                                            <input type="date" name="fechaFinalizacion" onChange={handleInputChange} className="form-control" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button id="curso" type="button" className="btn btn-primary" onClick={handleAdd}>Guardar Curso</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" id="idioma" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#idiomas">
                        Agregar Idioma
                    </button>
                    <div className="modal fade" id="idiomas" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Agregar Idioma</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="col">
                                            <label htmlFor="nombre" className="form-label">Nombre del Idioma</label>
                                            <input type="text" name="nombre" onChange={handleInputChange} className="form-control"  />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="nivel" className="form-label">Nivel</label>
                                            <input type="text" name="nivel" onChange={handleInputChange} className="form-control"  />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="certificacion" className="form-label">Certificacion</label>
                                            <input type="text" name="certificacion" onChange={handleInputChange} className="form-control" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button id="idioma" type="button" className="btn btn-primary" onClick={handleAdd}>Guardar Idioma</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" id="hobbie" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#hobbies">
                        Agregar Hobbie
                    </button>
                    <div className="modal fade" id="hobbies" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Agregar Hobbie</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="col">
                                            <label htmlFor="nombre" className="form-label">Nombre del Hobbie</label>
                                            <input type="text" onChange={handleInputChange} className="form-control" name="nombre" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="tiempo" className="form-label">Tiempo</label>
                                            <input type="text" onChange={handleInputChange} className="form-control" name="tiempo" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button id="hobbie" type="button" className="btn btn-primary" onClick={handleAdd}>Guardar Hobbie</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" id="estudio" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#estudios">
                        Agregar Estudio
                    </button>
                    <div className="modal fade" id="estudios" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Agregar Estudio</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="col">
                                            <label htmlFor="escuela" className="form-label">Escuela</label>
                                            <input type="text" onChange={handleInputChange} className="form-control" name="escuela" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="grado" className="form-label">Grado</label>
                                            <input type="text" onChange={handleInputChange} className="form-control" name="grado" placeholder="Licenciatura,Maestria,Posgrado" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="carrera" className="form-label">Carrera</label>
                                            <input type="text" onChange={handleInputChange} className="form-control" name="carrera" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button id="estudio" type="button" className="btn btn-primary" onClick={handleAdd}>Guardar Estudios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            {language.map(language => (
                                <ItemListLanguage key={language.id} {...language} />
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
