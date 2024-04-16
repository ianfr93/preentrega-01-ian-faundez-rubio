import React from 'react';
import logo from '../assets/azul.svg'; 

function Brand() {
  return (
    <div>

      <a href="/">
        <img src={logo} alt="Logo de Shoppy" style={{ width: '200px', height: 'auto', marginTop:'13px',}} />
      </a>
    </div>
  );
}

export default Brand;
