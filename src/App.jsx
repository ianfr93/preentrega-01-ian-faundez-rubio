import React from "react";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/product/:id" element={<ItemDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
