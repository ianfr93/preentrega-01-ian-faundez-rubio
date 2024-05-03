import React, { useState } from 'react';
import CategoryList from '../CategoryList/CategoryList'; 
import CategoryListMobile from '../CategoryListMobile/CategoryListMobile'; 
// Import CartWidget using the correct relative path
import CartWidget from '../../CartWidget/CartWidget'; // Go up one level from NavBar and then to CartWidget
import './NavBar.css';
import CartIcon from '../CartIcon';

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
