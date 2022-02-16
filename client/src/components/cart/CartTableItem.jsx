import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../App";

export const CartTableItem = ({ product, quantity, setTotal }) => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal((previous) => {
      return previous + product.price * quantity;
    });
  }, []);

  const deleteItem = () => {
    const cartWithoutItem = cart.items.filter(
      (item) => item.product.id !== product.id
    );

    setCart({ items: cartWithoutItem });

    localStorage.setItem("cart", JSON.stringify({ items: cartWithoutItem }));

    setTotal((previous) => {
      return previous - product.price * quantity;
    });

    navigate("/cart");
  };

  return (
    <tr>
      <td>
        <Link to={`/products${product.get_absolute_url}`}>{product.name}</Link>
      </td>
      <td>${product.price}</td>
      <td>{quantity}</td>
      <td>${(product.price * quantity).toFixed(2)}</td>
      <td>
        <i className="bi bi-x-circle" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};
