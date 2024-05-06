import React from "react";
import "./App.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="header__wrapper"></div>
      <ItemListContainer saludo="¡Hola! Bienvenido a nuestra tienda"/>
    </Layout>
  );
}

export default App;
