import React from 'react'
import { InicioSesion } from './InicioSesion'
import { Menu } from './Menu'

export const ContenidoPrincipal = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <Menu />
            </nav>
            <div id="contenedor" className="container">
                <InicioSesion />
            </div>
        </>
    )
}
