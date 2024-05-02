import React, { useState } from 'react';
import CategoryList from './CategoryList';
import CategoryListMobile from './CategoryListMobile';
import CartWidget from './CartWidget';
import './NavBar.css';
import CartIcon from './CartIcon';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='navbar__wrapper'>
      <div className='menu-toggle' onClick={() => setShowMenu(!showMenu)}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
   
      {showMenu ? <CategoryListMobile /> : <CategoryList />}
      <CartWidget />
    </div>
  );
}

export default NavBar;
