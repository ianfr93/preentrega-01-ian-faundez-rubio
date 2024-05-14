import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../mock/asyncMock';
import './ItemListContainer.css';

function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div className="item-list-container">
      <h1 className="saludo">{saludo}</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <h2>{product.titulo}</h2>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
              <p>Stock disponible: {product.stock}</p>
              <img src={product.imagen} alt={product.titulo} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
