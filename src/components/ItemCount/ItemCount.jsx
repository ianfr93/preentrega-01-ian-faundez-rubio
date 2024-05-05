import React from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, count, increment, decrement }) {
  const handleDecrement = () => {
    if (count > 0) {
      decrement();
    }
  };

  const handleIncrement = () => {
    if (count < stock) {
      increment();
    }
  };

  return (
    <div className="item--count__container">
      <div className="item--count--counter__container">
        <button className="item--count-button" onClick={handleDecrement}>
          -
        </button>
        <span className="item--count-button">{count}</span>
        <button
          className="item--count-button"
          onClick={handleIncrement}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
}
