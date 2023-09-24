import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        MoveGim
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/Ejercicios">Ejercicios</Link>
          </li>
          <li>
            <Link to="/Recetas">Recetas</Link>
          </li>
          <li>
            <Link to="/Suplementos">Suplementos</Link>
          </li>
          <li>
            <Link to="/Equipamento">Equipamento</Link>
          </li>
          <li>
            <Link to="/Carrito">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </Link>
          </li>
          <li>
            <Link to="/Usuario">
                <FontAwesomeIcon icon="fa-solid fa-user" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
