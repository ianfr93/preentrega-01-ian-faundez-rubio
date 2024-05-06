import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/product/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
