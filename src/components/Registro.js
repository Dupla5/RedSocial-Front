import React, {useState} from "react";



export const Registro = () =>{

return (
  <>


<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
        <a href={() => false} class="navbar-brand my-3 mx-auto">Red Social</a>
</div>
</nav>



<div className="container">
<div className="row">
  <div className="col-9 col-sm-12 col-md-7 col-lg-9 mx-auto">

    <form className="row mt-3 needs-validation" method="get" novalidate >
      <legend className="text-center">
        <h2 className="font-weight-bold">Se parte de esta gran comunidad</h2>
      </legend>
      <hr />
      <div className="mb-3 col-4">
        <label for="name" className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control p-2"
          id="name"
          name="name"
          placeholder="Nombre"
          required
          
        />
      </div>
      <div className="mb-3 col-4">
        <label for="a_Paterno" className="form-label">Apellido Paterno:</label>
        <input
          type="text"
          class="form-control p-2"
          id="a_Paterno"
          name="a_Paterno"
          placeholder="Apellido Paterno"
          required
          
        />
      </div>
      <div className="mb-3 col-4">
        <label for="a_Materno" className="form-label">Apellido Materno:</label>
        <input
          type="text"
          class="form-control p-2"
          id="a_Materno"
          name="a_Materno"
          placeholder="Apellido Materno"
          required
       
        />
      </div>
      <div className="mb-3 col-6">
        <label for="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control p-2"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          required
          
        />
      </div>
      <div className="mb-3 col-6">
        <label for="password" className="form-label">Contraseña:</label>
        <input
          type="password"
          className="form-control p-2"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
          
        />
      </div>
      
      <div className="mb-3 col-8">
        <label for="formFile" className="form-label"
          >Seleccionar Imagen de Perfil</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div id="condiciones" className="form-text mb-3">
        Al registrarte, aceptas las
        <a href="#" className="text-decoration-none">Condiciones de uso</a>.
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        href="#"
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
            >Iniciar sesión</a
          >
        </p>
      </div>
    </form>
  </div>
</div>
</div>
  </>

);

}

