import React from "react";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";

function ItemListContainer({ saludo }) {
  const { isLoading, products } = useProducts();

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "40px" }}>{saludo}</h1>
      <ItemList products={products}>
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div>
              <h2>{product.titulo}</h2>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
              <p>Stock disponible: {product.stock}</p>
            </div>
          </Link>
        ))}
      </ItemList>
    </div>
  );
}

export default ItemListContainer;
