import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ products }) {
  const { id } = useParams();
  
  const product = products.find((product) => product.id === parseInt(id));
  const [count, setCount] = useState(0);

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  const handleAddToCart = () => {
    console.log("Agregado al carrito:", product, "Cantidad:", count);
  };

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="item-detail">
      {/* Título del producto */}
      <h2>{product.titulo}</h2>
      {/* Imagen del producto */}
      <img className="item-detail__image" src={product.imagen} alt={product.titulo} />
      {/* Descripción del producto */}
      <p className="item-detail__description">{product.descripcion}</p>
      {/* Precio del producto */}
      <p className="item-detail__price">Precio: ${product.precio}</p>
      {/* Stock del producto */}
      <p className="item-detail__stock">Stock disponible: {product.stock}</p>
      {/* Contador de productos */}
      <ItemCount stock={product.stock} count={count} onCountChange={handleCountChange} />
      {/* Botón para agregar al carro */}
      <button className="item-detail__button" onClick={handleAddToCart}>Agregar al carrito</button>
      
      {/* Banner de medios de pago */}
      <div className="medios-de-pago">
        <img src="https://comyuonline.cl/wp-content/uploads/2022/05/webpay.png" alt="Medios de Pago" />
      </div>
    </div>
  );
}

export default ItemDetail;
