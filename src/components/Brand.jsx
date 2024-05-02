import React from 'react';
import logo from '../assets/azul.svg'; 

function Brand() {
  return (
    <div>

      <a href="/">
        <img src={logo} alt="Logo de Shoppy" style={{ width: '180px', height: 'auto', marginTop:'12px',}} />
      </a>
    </div>
  );
}

export default Brand;
