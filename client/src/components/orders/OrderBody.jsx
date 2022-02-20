import React from "react";

import { SingleOrderTable } from "./SingleOrderTable";

export const OrderBody = ({ orders }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-center">Order Number</th>
          <th className="text-center">Products in Order</th>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders.map((order) => {
            return <SingleOrderTable key={order.id} order={order} />;
          })}
      </tbody>
    </table>
  );
};
