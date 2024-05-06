import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { getProducts } from "./mock/asyncMock";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/product/:id" element={<ItemDetail products={products} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
