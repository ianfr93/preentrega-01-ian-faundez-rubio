import React from 'react';
import logo from '../assets/azul.svg'; 

function Brand() {
  return (
    <div>
      <img src={logo} alt="Logo de Shoppy" style={{ width: '200px', height: 'auto', marginTop:'20px' }} />
    </div>
  );
}

export default Brand;
