import React, { useEffect, useState } from "react";
import { getProducts } from "../../mock/asyncMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSaludo, setShowSaludo] = useState(false); // Estado para controlar la visibilidad del saludo

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setShowSaludo(true); // Mostrar el saludo después de cargar los productos
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
    {/* Mostrar el saludo si showSaludo es true */}
    {showSaludo && <h1 style={{ fontSize: "2em", marginBottom: "40px" }}>{saludo}</h1>}
    <ItemList products={products} />
  </div>
  );
}

export default ItemListContainer;
