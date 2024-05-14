import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar"; 
import useProducts from "./hooks/useProducts";

function App() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" products={products} />} />
          <Route path="/category/:id" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" products={products} />} />
          <Route path="/item/:id" element={<ItemDetailContainer products={products} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
