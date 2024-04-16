import CartIcon from "./CartIcon";
import { useState } from "react";
import "./CartIcon.css";

function CartWidget() {
  const [CartItems, setCartItems]=
  useState([5]);
  return (
    <div className="cart--container">
      <CartIcon width={40} height={40}/>
      <span>{CartItems}</span>
    </div>
  );
}
export default CartWidget;

