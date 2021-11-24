'use strict'

//Variables
const URL = "https://backend-dupla5.herokuapp.com/users/login";
let email = document.querySelector('#email');
let pwd = document.querySelector('#pwd');
let formulario = document.querySelector('#form');
let btnEnviar = document.querySelector('#enviarFormulario');

//Eventos AddEvenLister
formulario.addEventListener('submit', (e) => {
    e.preventDefault();  //Para que nos nos redireccione habilitamos esta linea
    mandarDatos();
})


//Funcion
const mandarDatos = () => {
    fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            email: email.value,
            pwd: pwd.value,
        })
    }
    ).then((data) => {
        if (data.status == 201) {
            return data.json();
        }
    }
    ).then(res => {
        if (res.data){
            const idUsuario = res.data[0].id_Usuario;
            localStorage.setItem('idUsuario',idUsuario);
            window.location.href = "./perfil.html";
        }
        
    }).catch((err) => {
        console.log(err);
    })

}




