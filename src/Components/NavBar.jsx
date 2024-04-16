import React from 'react';
import CategoryList from './CategoryList';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className='navbar__wrapper'>

      <CategoryList/>
      <CartWidget/>
    </div>
   
  );
}

export default NavBar;
