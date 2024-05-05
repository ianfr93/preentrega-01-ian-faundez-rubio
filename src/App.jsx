import React from "react";
import "./App.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="header__wrapper"></div>
      <ItemListContainer Saludo="Hola Bienvenido a tu centro de ventas Tecnologico" />
    </Layout>
  );
}

export default App;
