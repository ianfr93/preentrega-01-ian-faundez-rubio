import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ products }) {
  const { id } = useParams(); 
  const product = products.find(product => product.id === parseInt(id)); 

  if (!product) return <h1>Producto no encontrado</h1>;

  return (
    <div>
      <h2>{product.titulo}</h2>
      <img src={product.imagen} alt={product.titulo} />
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      {/* Otros detalles del producto */}
    </div>
  );
}

export default ItemDetail;
