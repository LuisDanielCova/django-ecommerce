import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import { CartTableBody } from "./CartTableBody";

export const CartTable = ({ title, isCheckout }) => {
  const { cart } = useContext(CartContext);
  const [message, setMessage] = useState("");
  const [element, setElement] = useState(React.element);

  useEffect(() => {
    if (cart.items.length === 0) {
      setMessage("You have no products in your cart");

      setElement(<p className="lead">{message}</p>);
    } else {
      setElement(<CartTableBody cart={cart} isCheckout={isCheckout} />);
    }
  }, [cart]);

  return (
    <div className="container my-5">
      <h1 className="display-5">Your {title}</h1>
      <hr />
      {element}
    </div>
  );
};
