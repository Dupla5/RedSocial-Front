'use strict';
//Variables


//Event Listeners
document.addEventListener('DOMContentLoaded', obtenerDatos);


//Funciones
//Conexion al BackEnd
function obtenerDatos() {
    fetch("http://localhost:3000/usuario/")
        .then((respuesta) => { 
            return respuesta.json() })
        .then((data) => { console.log(data) })
}









