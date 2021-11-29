import React, { Fragment } from "react";


const Home = () =>{
    return (

        <Fragment>

<nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          
      Tecla Coding
        </a>
        <div>
          <a href="https://www.linkedin.com/" className="button-principal-unirte-ahora">Unirte Ahora</a>
         <a href="https://www.linkedin.com/" className="button-principal-ini-sesion">Iniciar Sesión</a>
        </div>    
      </div>
    </nav>

    <div className="container">
      <div className="row mb-2">
      <div className="col-9 col-sm-12 col-md-7 col-lg-9 mx-auto">

      <form className="row mt-3 needs-validation" method="get" novalidate>
        <legend className="text-center">
              <h2 className="font-weight-bold">Te damos la bienvenida a tu comunidad profesional</h2>
            </legend>
           
        <div className="mb-2">
          <input type="email" className="form-control" id="email" placeholder="Email o teléfono" name="email"/>
        </div>
        <div class="mb-2">
       <input type="password" class="form-control" id="pwd" placeholder="Ingresa Contraseña" name="pswd"/>

        </div>
        
        <button type="submit" className="btn btn-primary">Aceptar y Unirse</button>
        
        </form>

     
   </div>
</div>

       </div>
        </Fragment>

    );
}

export default Home;