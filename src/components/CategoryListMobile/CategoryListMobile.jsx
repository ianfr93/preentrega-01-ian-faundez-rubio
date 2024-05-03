import React from 'react';
import './CategoryListMobile.css'; // Importa el archivo CSS del componente CategoryListMobile
import './CategoryListMobile.jsx'; // Importa el archivo JSX del componente CategoryListMobile

function CategoryListMobile() {
  return (
    <nav>
      <ul className="category-list-mobile">
        <li>
          <a href="/#">Marcas</a>
        </li>
        <li>
          <a href="/#">Gamer Zone</a>
        </li>
        <li>
          <a href="/#">Arma tu PC</a>
        </li>
        <li>
          <a href="/#">Outlet Tecnológico</a>
        </li>
        <li>
          <a href="/#">Tiendas</a>
        </li>
        <li>
          <a href="/#">Servicios</a>
        </li>
     
        <li>
          <a href="/#">Seguir mi pedido</a>
        </li>
       
        <li>
          <a href="/#">contacto</a>
        </li>
        <li>
          <button className="login-button">Ingresar</button>
        </li>

      </ul>
    </nav>
  );
}

export default CategoryListMobile;
