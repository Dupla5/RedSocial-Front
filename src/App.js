//IMPORTAR COMPONENTES

import React, {useState,Fragment} from 'react';
import { Axios } from 'axios';

function App() {

  //STATE DE LA APP

  const [Nombre, setName] = useState("");
  const [A_Paterno, seta_Paterno] = useState("");
  const [A_Materno, seta_Materno] = useState("");
  const [Email, setEmail] = useState("");
  const [Pwd, setPassword] = useState("");

  const botonEnviar = () => {
    Axios.post('/register',{
      Nombre: '',
      A_Paterno : '',
      A_Materno : '',
      Email : '',
      Pwd: ''
    })
  }
  
  
   return (
    <Fragment>


    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand my-3 mx-auto">Red Social</a>
    </div>
    </nav>
     
    
    <div className="container" id="main-container">
    <div className="row">
      <div className="col-9 col-sm-12 col-md-7 col-lg-9 mx-auto">
    
        <form className="row mt-3 needs-validation" method="get" noValidate>
          <legend className="text-center">
            <h2 className="font-weight-bold">Se parte de esta gran comunidad</h2>
          </legend>
          <hr />
          <div className="mb-3 col-4">
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control p-2"
              id="name"
              name="Nombre"
              placeholder="Nombre"
              required
              onChange={(e)=> {
                setName(e.target.value)
                }}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="a_Paterno" className="form-label">Apellido Paterno:</label>
            <input
              type="text"
              className="form-control p-2"
              id="a_Paterno"
              name="A_Paterno"
              placeholder="Apellido Paterno"
              required
              onChange={(e)=> {
                seta_Paterno(e.target.value)
                }}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="a_Materno" className="form-label">Apellido Materno:</label>
            <input
              type="text"
              className="form-control p-2"
              id="a_Materno"
              name="A_Materno"
              placeholder="Apellido Materno"
              required
              onChange={(e)=> {
                seta_Materno(e.target.value)
                }}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control p-2"
              id="email"
              name="Email"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
              onChange={(e)=> {
                setEmail(e.target.value)
                }}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control p-2"
              id="password"
              name="Pwd"
              placeholder="Contraseña"
              required
              onChange={(e)=> {
                setPassword(e.target.value)
                }}
            />
          </div>
          
          <div className="mb-3 col-8">
            <label htmlFor="formFile" className="form-label"
              >Seleccionar Imagen de Perfil</label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div id="condiciones" className="form-text mb-3">
            Al registrarte, aceptas las
            <a href="#" className="text-decoration-none">Condiciones de uso</a>.
          </div>
    
          <button
            type="submit"
            className="btn btn-primary"
            href="#"
            onClick={botonEnviar}
          >
            Registrame
          </button>
          <hr />
          <div>
            <p>
              ¿Ya eres usuario de ?
              <a
                className="link-primary text-decoration-none"
                href="./inicio-sesion.html"
                >Iniciar sesión</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
      </Fragment>
  );
}

export default App;
