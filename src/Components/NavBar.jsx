import React, { useState } from 'react';
import CategoryList from './CategoryList';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='navbar__wrapper'>
      <div className='menu-toggle' onClick={() => setShowMenu(!showMenu)}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <CategoryList className={showMenu ? 'active' : ''} />
      <CartWidget />
    </div>
  );
}

export default NavBar;
