'use strict';

try{
    async function getUser() {
        let response = await fetch(`localhost:4000/usuario`);
        let data = await response.json()
        return data;
    }

    const response = getUser();
    console.log(response);
}catch(e){
    console.log('')
}



