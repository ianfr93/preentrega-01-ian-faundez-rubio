// Brand.jsx
import React from 'react';
import logo from '../../assets/azul.svg';
import './Brand.css'; 

function Brand() {
  return (
    <div>
      <a href="/">
        <img src={logo} alt="Logo de Shoppy" className="brand-logo" />
      </a>
    </div>
  );
}

export default Brand;
