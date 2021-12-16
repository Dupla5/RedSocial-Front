import React from 'react';

export const CodersApp = () => {

    /*
        1.Definir las componentes correspondientes.
        2.Realizar una carpeta por cada componente, dentro de ella contendra el componente y el css correspondiente
        Guardarlo como xxxx.css.
        
        Parte 1:
        Maquetacion Home(Marcos), Login y Registro (Gaby)

        Parte 2:
        La componente Navbar siempre tiene que estar presente en cualquiera de las 4
        Cuando se validen los datos de habilitaran las siguientes y se desabilitaran las 3 anteriores
        Maquetacion Feed (Marcos), Profile, Edit Profile, Help (Gaby)
    */

    return (
        <>
            <div id="codersApp">
                {/* Cargamos componente que contiene el Home,Login,Register 
                    Si los datos se validan en Login o Registe, se renderiza el codersApp con
                    una nuevo componente que contiene Feed(si es desde Login) o el Edit Profile(si es desde Register)
                    Por default el nuevo componete debe la barra de navegacion y el lateral izquierdo
                */}
                {state ? </>: </>}

            </div>
        </>
    )
}
