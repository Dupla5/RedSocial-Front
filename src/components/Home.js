import React, { useState } from "react";
import ReactDom from "react-dom";
import { ContenidoPrincipal } from "./ContenidoPrincipal";
import { Inicio } from "./Inicio";
//import { Axios } from 'axios';


export const Home = () => {

  //State de los inputs
  const [email, setEmail] = useState();
  const [pwd, setPassword] = useState();

  const inputEmail = (e) => {
    setEmail(e.target.value);
  }

  const inputPwd = (e) => {
    setPassword(e.target.value);
  }


  const Login = (e) => {
    e.preventDefault();
    fetch('https://backend-dupla5.herokuapp.com/users/login',
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }, body: JSON.stringify({
          email: email,
          pwd: pwd,
        })
      })
      .then((data) => {
        if (data.status === 201) {
          return data.json();
        }
      }
      ).then(({ data }) => {
        if (data !== "Datos incorrectos") {
          alert('Ha iniciado sesion correctamente');
          const idUsuario = data[0].id_Usuario;
          localStorage.setItem('idUsuario', idUsuario);
          ReactDom.render(<Inicio />, document.getElementById('root'));

        } else {
          alert("Datos incorrectos");
        }

      })
      .catch((err) => { console.log(err) })
    }

    const contenidoPrincipal = () => {
      ReactDom.render(<ContenidoPrincipal />, document.getElementById('root'));
    }


  return (

    <>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href={() => false} className="navbar-brand">
            Tecla Coding
          </a>
          <div>
            <a href={() => false} onClick={contenidoPrincipal} className="button-principal-unirte-ahora">Unirte Ahora</a>
            <a href={() => false} onClick={contenidoPrincipal} className="button-principal-ini-sesion">Iniciar Sesión</a>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row mb-2">
          <div className="col-9 col-sm-12 col-md-7 col-lg-9 mx-auto">
            <form onSubmit={Login} className="row mt-3">
              <legend className="text-center">
                <h2 className="font-weight-bold">Te damos la bienvenida a tu comunidad profesional</h2>
              </legend>
              <div className="mb-2">
                <input onChange={inputEmail} type="email" className="form-control" id="email" placeholder="Email o teléfono" name="email" />
              </div>
              <div className="mb-2">
                <input onChange={inputPwd} type="password" className="form-control" id="pwd" placeholder="Ingresa Contraseña" name="pwd" />
              </div>
              <button type="submit" className="btn btn-primary">Aceptar y Unirse</button>
            </form>
          </div>
          <div className="col">
            <img src="./imagen-principal.svg" />
            </div>
        </div>

      </div>
    </>

  );
}
