import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ saludo, products }) {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if (id) {
      const filtered = products.filter(product => product.category === id);
      setFilteredProducts(filtered);
      setCategoryTitle(getCategoryTitle(id));
    } else {
      setFilteredProducts(products);
      setCategoryTitle('Todos los productos');
    }
  }, [id, products]);

  const getCategoryTitle = (categoryId) => {
    switch (categoryId) {
      case 'productos':
        return 'Marcas';
      case 'gamer-zone':
        return 'Gamer Zone';
      case 'arma-tu-pc':
        return 'Arma tu PC';
      case 'tiendas':
        return 'Tiendas';
      case 'servicios':
        return 'Servicios';
      case 'seguir-mi-pedido':
        return 'Seguir mi pedido';
      case 'contacto':
        return 'Contacto';
      default:
        return 'Todos los productos';
    }
  };

  if (filteredProducts.length === 0) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '40px' }}>{saludo}</h1>
      <h2>{categoryTitle}</h2>
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
