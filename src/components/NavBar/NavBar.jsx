import React, { useState } from 'react';
import CategoryList from '../CategoryList/CategoryList'; 
import CategoryListMobile from '../CategoryListMobile/CategoryListMobile'; 
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import CartIcon from "../CartIcon/CartIcon";

function NavBar() {
  // Estado para controlar si se muestra el menú en dispositivos móviles
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='navbar__wrapper'>
      {/* Botón de menú para dispositivos móviles */}
      <div className='menu-toggle' onClick={() => setShowMenu(!showMenu)}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
   
      {/* Renderizado condicional del menú */}
      {showMenu ? <CategoryListMobile /> : <CategoryList />}
      
      {/* Widget de carrito */}
      <CartWidget />
    </div>
  );
}

export default NavBar;
