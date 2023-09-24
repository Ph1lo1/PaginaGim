import React from 'react'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <Link to='/'>
                Inicio
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/Contacto'>
                Contacto
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/Catalogo'>
                Catalogo
            </Link>
            </li>
            <li class="nav-item">
                <Link to='/Carrito'>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar