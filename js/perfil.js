'use strict'
//Variables
const id = localStorage.getItem('idUsuario');
const URL = `https://backend-dupla5.herokuapp.com/users/getUser?idUsuario=${id}`;
const URL_POSTS = 'https://backend-dupla5.herokuapp.com/posts/get-all-posts';
const btnCerrarSesion = document.querySelector('#cerrar-sesion');
const nombre = document.querySelector('#nombre'); 
const posts = document.querySelectorAll('#posts')


//EventListeners
document.addEventListener('DOMContentLoaded', ()=>{
    cargarUsuario();
    cargarPosts();
})

btnCerrarSesion.addEventListener('click',cerrarSesion)

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

//Funcions cargarPosts
function cargarPosts(){
    fetch(URL_POSTS)
        .then((data) => {
                return data.json();
        })
        .then(res => {
            if (res.data) {
                console.log(res.data);
                mostrarPost(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

function mostrarPost(posts){
    posts.forEach((post) => {
        console.log(post);
    });
}

//Cerrar Sesion
function cerrarSesion(){
    localStorage.clear();
    window.location.href = "./inicio-sesion.html";
}