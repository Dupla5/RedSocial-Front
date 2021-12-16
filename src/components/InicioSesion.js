import React, {useState} from 'react';
import reactDom from 'react-dom';
import { Inicio } from './Inicio';
import { Registro } from './Registro';


export const InicioSesion = () => {

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
                    reactDom.render(<Inicio />, document.getElementById('root'));
                } else {
                    alert("Datos incorrectos");
                }

            })
            .catch((err) => { console.log(err) })
    }

    const registro =()=> {
        reactDom.render(<Registro />, document.getElementById('contenedor'));
    } 

    return (
        <>
                <div className="row">
                    <div className="col-9 col-sm-9 col-md-7 col-lg-7 mx-auto">
                        <form id="form" onSubmit={Login} className="form-control mt-3">
                            <legend className="text-center"><h2>Iniciar sesión</h2></legend>
                            <hr/>
                            <div className ="mb-3">
                            <label htmlFor="email" className ="form-label">Email: </label>
                            <input
                                onChange={inputEmail}
                            type ="email"
                            className ="form-control p-2"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Email o teléfono"
                            required
                            />
                            </div>
                            <div className ="mb-3">
                            <label htmlFor="pwd" className ="form-label">Contraseña: </label>
                            <input
                                onChange={inputPwd}
                            type ="password"
                            className ="form-control p-2"
                            id="pwd"
                            name="pwd"
                            placeholder="Contraseña"
                            required
                            />
                            </div>                            
                            <button id="enviarFormulario" type ="submit" className ="btn btn-primary mt-3">
                            Iniciar sesión
                            </button>
                            <hr />
                            <div>
                            <p>
                            ¿Eres nuevo en?
                            <a href={() => false} onClick={registro} className ="link-primary text-decoration-none">Únete ahora</a>
                            </p>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}
