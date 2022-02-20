import React from "react";
import { SingleOrderItemsTable } from "./SingleOrderItemsTable";

export const SingleOrderTable = ({ order }) => {
  return (
    <tr>
      <td className="lead fw-bold text-center">{order.id}</td>
      <td>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => {
              return (
                <SingleOrderItemsTable key={item.product.id} item={item} />
              );
            })}
            <tr>
              <th colSpan={2}>Order Total</th>
              <td>${order.total}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};
