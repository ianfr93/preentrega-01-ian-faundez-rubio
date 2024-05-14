import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ saludo, products }) {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (id) {
      const filtered = products.filter(product => product.category === id);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [id, products]);

  if (filteredProducts.length === 0) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '40px' }}>{saludo}</h1>
      <ItemList products={filteredProducts}>
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/item/${product.id}`}>
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
