import React from "react";
import { Link } from "react-router-dom";

export const SingleOrderItemsTable = ({ item }) => {
  return (
    <tr>
      <td>
        <Link to={`/products${item.product.get_absolute_url}`}>
          {item.product.name}
        </Link>
      </td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
    </tr>
  );
};
