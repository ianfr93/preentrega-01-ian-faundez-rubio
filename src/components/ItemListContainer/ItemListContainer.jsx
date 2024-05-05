import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer({ saludo }) {
  const { count, decrement, increment } = useCount(0);

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemCount
        count={count}
        decrement={decrement}
        increment={increment}
        stock={5}
      />
    </div>
  );
}

export default ItemListContainer;