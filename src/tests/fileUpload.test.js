import { fileUpload } from "../helpers/fileUpload";

describe('Pruebas en fileUpload', () =>{

    test('debe de cargar la imagen y retornar la URL', async() => {
      
        const resp = await fetch('https://cdn.pixabay.com/photo/2020/11/14/14/47/kids-5741934_960_720.png');
        const blob = await resp.blob();   

        const file = new File([blob], 'imagen.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

    })
    
    


})