import React from "react";

function ItemDetail({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Otros detalles del producto */}
    </div>
  );
}

export default ItemDetail;
