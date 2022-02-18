import React, { useState } from "react";
import { CartTableItem } from "./CartTableItem";

export const CartTableBody = ({ cart, isCheckout }) => {
  const [total, setTotal] = useState(0);

  return (
    <div className="card p-2">
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            {!isCheckout && (
              <th>
                <i className="bi bi-trash3"></i>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.items.map((item) => {
              return (
                <CartTableItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                  setTotal={setTotal}
                  isCheckout={isCheckout}
                />
              );
            })}
          <tr>
            <th colSpan={3}>Total</th>
            <td colSpan={2}>${total?.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};
