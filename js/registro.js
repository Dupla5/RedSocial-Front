'use strict';
class Usuario {
    constructor(nombre, a_paterno, a_materno, edad, email, pwd, pais, ciudad) {
        this.nombre = nombre;
        this.a_paterno = a_paterno;
        this.a_materno = a_materno;
        this.edad = edad;
        this.email = email;
        this.pwd = pwd;
        this.pais = pais;
        this.ciudad = ciudad;
    }
}


//Variables
const URL = 'https://backend-dupla5.herokuapp.com/users/register'
const formulario = document.querySelector('#formulario-registro')
let nombre = document.querySelector('#nombre');
let a_paterno = document.querySelector('#a_paterno');
let a_materno = document.querySelector('#a_materno');
let edad = document.querySelector('#edad');
let email = document.querySelector('#email');
let pwd = document.querySelector('#pwd');
let pais = document.querySelector('#pais');
let ciudad = document.querySelector('#ciudad');

//Event Listeners
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let usuario = new Usuario(nombre.value, a_paterno.value, a_materno.value, +edad.value, email.value, pwd.value, pais.value, ciudad.value);
    registrarUsuario(usuario);
    formulario.reset();
})


//Funciones



//Registrar un usuario
function registrarUsuario(usuario) {
    fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            nombre: usuario.nombre,
            a_paterno: usuario.a_paterno,
            a_materno: usuario.a_materno,
            edad: usuario.edad,
            email: usuario.email,
            pwd: usuario.pwd,
            pais: usuario.pais,
            ciudad: usuario.ciudad
        })
    })
        .then((data) => {
            if (data.status == 201) {
                return data.json();
            }
        }
        ).then((res) => { 
            if (res.data === "Registro Completado") {
                alert("Registro completado");
                window.location.href = "./inicio-sesion.html";
            }
        })
}









