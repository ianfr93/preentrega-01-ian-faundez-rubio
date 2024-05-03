import CartIcon from "./components/CartIcon/CartIcon"; 
import { useState } from "react"; 
import "./components/CartIcon/CartIcon.css"; 

function CartWidget() {
  const [CartItems, setCartItems] = useState([5]);
  
  return (
    <div className="cart--container"> {/* Contenedor principal del carrito */}
      <CartIcon width={30} height={30}/> 
      <span>{CartItems}</span> 
    </div>
  );
}

export default CartWidget; 