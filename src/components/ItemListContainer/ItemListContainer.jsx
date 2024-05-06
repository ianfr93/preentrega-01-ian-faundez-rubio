import { useEffect, useState } from "react";
import { getProducts } from "../../mock/asyncMock";

import ItemList from "../ItemList/ItemList";

function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;