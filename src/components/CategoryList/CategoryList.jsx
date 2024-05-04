import "./CategoryList.css";
import React from "react"; 

function CategoryList() {
  return (
    <nav>
      <ul className="category-list">
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
          <a href="/#">Tiendas</a>
        </li>
        <li>
          <a href="/#">Servicios</a>
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

export default CategoryList;
