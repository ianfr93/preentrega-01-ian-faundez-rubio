import React from 'react';
import './App.css'; 
import Brand from './components/Brand';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  return (
    <div>
      <div className="header__wrapper">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer Saludo="Hola Bienvenido a tu centro de ventas Tecnologico"/>
    </div>
  );
}


export default App;
