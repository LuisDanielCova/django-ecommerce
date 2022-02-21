import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../App";
import { OrderBody } from "./OrderBody";

export const OrderTable = () => {
  const { token } = useContext(TokenContext);
  const [orders, setOrders] = useState([]);
  const [table, setTable] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
      const response = await axios.get(
        `https://the-wardrobe-server.herokuapp.com/api/v1/orders/`
      );
      console.log(response.data);
      setOrders(response.data);
    };

    if (token) {
      getOrders();
    }
  }, [token]);

  useEffect(() => {
    if (orders.length > 0) {
      setTable(<OrderBody orders={orders} />);
    } else {
      setTable(<p className="lead">You have no orders</p>);
    }
  }, [orders]);

  return (
    <div className="container card p-2">
      <h2 className="display-5">My Orders</h2>
      <hr />
      {table}
    </div>
  );
};
