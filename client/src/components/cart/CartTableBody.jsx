import React, { useState } from "react";
import { CartTableItem } from "./CartTableItem";

export const CartTableBody = ({ cart }) => {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>
              <i className="bi bi-trash3"></i>
            </th>
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
                />
              );
            })}
        </tbody>
      </table>
      <hr />
      <p className="fw-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
};
