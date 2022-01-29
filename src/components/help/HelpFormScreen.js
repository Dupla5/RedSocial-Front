import { useDispatch, useSelector } from 'react-redux';
import { helpRegister } from '../../actions/auth';
import { useForm } from "../../hooks/useForm"



export const HelpFormScreen = () => {

  const dispatch = useDispatch();
  const { id } = useSelector(state => state.auth);


  const [formValues, handleInputChange] = useForm();

  const { titulo, descripcion } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(helpRegister(titulo, descripcion, id));
  };




  return (

    <section className="vh-100" >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Help</p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="titulo" className="form-label">Titulo</label>
                          <input
                            type="text"
                            name="titulo"
                            value={titulo}
                            onChange={handleInputChange}
                            className="form-control" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="descripcion" className="form-label" >Descripción del problema</label>
                          <textarea
                            type="text"
                            name="descripcion"
                            value={descripcion}
                            onChange={handleInputChange}
                            className="form-control" rows="5"
                          />
                        </div>
                      </div>


                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input
                          type="submit"
                          className="btn btn-primary btn-lg"
                          value="Enviar"
                        />
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Imagen formulario" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
