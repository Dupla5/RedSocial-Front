'use strict'
//Objeto
class Hobbie{
    constructor(nombre,tiempo,idUsuario){
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.idUsuario = idUsuario;
    }
}

class Idioma{
    constructor(nombre,nivel,certificacion,idUsuario){
        this.nombre = nombre;
        this.nivel = nivel;
        this.certificacion = certificacion;
        this.idUsuario = idUsuario;
    }
}



//Variables
const id = +localStorage.getItem('idUsuario');
const URL = `https://backend-dupla5.herokuapp.com/users/getUser?idUsuario=${id}`;
const URL_HOBBIES = 'https://backend-dupla5.herokuapp.com/hobbies/add-hobbies';
const URL_IDIOMAS = 'https://backend-dupla5.herokuapp.com/lenguages/add-lenguages';
const btnCerrarSesion = document.querySelector('#cerrar-sesion');
const btnGuardarHobbie = document.querySelector('#registra-hobbie');
const btnGuardarIdioma = document.querySelector('#registra-idioma');
const nombre = document.querySelector('#nombre');
const nombre_hobbie = document.querySelector('#hobbie');
const tiempo_hobbie = document.querySelector('#tiempo-hobbie');
const nombre_idioma = document.querySelector('#idioma');
const nivel_idioma = document.querySelector('#nivel-idioma');
const certificacion_idioma = document.querySelector('#certificacion');
const formulario_hobbie = document.querySelector('#registro-hobbie');
const formulario_idioma = document.querySelector('#registro-idioma');


//EventListeners
document.addEventListener('DOMContentLoaded', ()=>{
    cargarUsuario();
});

btnGuardarHobbie.addEventListener('click', (e)=>{
    e.preventDefault();
    let hobbie = new Hobbie(nombre_hobbie.value,tiempo_hobbie.value, id);
    agregarHobbies(hobbie);
    formulario_hobbie.reset();
});

btnGuardarIdioma.addEventListener('click', (e) => {
    e.preventDefault();
    let idioma = new Idioma(nombre_idioma.value, nivel_idioma.value, certificacion_idioma.value, id);
    agregarIdiomas(idioma);
    formulario_idioma.reset();
});

btnCerrarSesion.addEventListener('click',cerrarSesion);


function cargarUsuario(){
    fetch(URL)
    .then((data) => {
        if (data.status == 201) {
            return data.json();
        }
    })
    .then(res=>{
        if (res.data) {
            console.log(res.data[0]);
            mostrarDatosUsuario(res.data[0]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

function mostrarDatosUsuario(usuario){
    const {Nombre,A_Paterno,A_Materno} = usuario;
    nombre.textContent = Nombre + " " + A_Paterno + " " + A_Materno 
}



//Funcion Agregar hobbies
function agregarHobbies(hobbie){
    fetch(URL_HOBBIES, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            nombre: hobbie.nombre,
            tiempo: hobbie.tiempo,
            idUsuario: hobbie.idUsuario
        })
    }
    ).then((data) => {
            return data.json();
    }
    ).then(res => {
        if (res.data == "Hobbie agregado correctamente") {
            alert("Se ha agregado correctamente");
            //cargarUsuario();
        }

    }).catch((err) => {
        console.log(err);
    })
}

//Funcion Agregar idiomas

function agregarIdiomas(idioma) {
    fetch(URL_IDIOMAS, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            nombre: idioma.nombre,
            nivel: idioma.nivel,
            certificacion:idioma.certificacion,
            idUsuario: idioma.idUsuario
        })
    }
    ).then((data) => {
        return data.json();
    }
    ).then(res => {
        if (res.data == "Lenguage agregado correctamente") {
            alert("Se ha agregado correctamente");
        }

    }).catch((err) => {
        console.log(err);
    })
}



//Cerrar Sesion
function cerrarSesion(){
    localStorage.clear();
    window.location.href = "./inicio-sesion.html";
}