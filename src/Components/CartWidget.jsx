import CartIcon from "./CartIcon";
import { useState } from "react";

function CartWidget() {
  const [CartItems, setCartItems]=
  useState([5]);
  return (
    <div>
      <CartIcon width={40} height={40}/>
      <span>{CartItems}</span>
    </div>
  );
}
export default CartWidget;

