import React from "react";
import Item from "../ItemList/Item";

function ItemListContainer({ saludo }) {
  return (
    <div>
      <h1>{saludo}</h1>
      <Item
        item={{
          id: 2,
          titulo: "Smartphone Samsung Galaxy S20 Ultra",
          precio: 1199.99,
          descripcion: "Teléfono inteligente con cámara de 108MP, pantalla Dynamic AMOLED de 6.9 pulgadas y 5G.",
          imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_118683455_2178377_1?wid=1500&hei=1500&qlt=70",
          stock: 15
        }}
      />
    </div>
  );
}

export default ItemListContainer;
