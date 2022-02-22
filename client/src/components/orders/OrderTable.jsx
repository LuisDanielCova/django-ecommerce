import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../App";
import { Loading } from "../layout/Loading";
import { OrderBody } from "./OrderBody";

export const OrderTable = () => {
  const { token } = useContext(TokenContext);
  const [orders, setOrders] = useState([]);
  const [table, setTable] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setIsLoading(true);
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/orders/`
        );
        setOrders(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    if (token) {
      getOrders();
    }
  }, [token]);

  useEffect(() => {
    if (orders.length > 0) {
      setTable(<OrderBody orders={orders} />);
    } else if (isLoading) {
      setTable("");
    } else {
      setTable(<p className="lead">You have no orders</p>);
    }
  }, [orders, isLoading]);

  return (
    <div className="container card p-2">
      <h2 className="display-5">My Orders</h2>
      <hr />
      <Loading isLoading={isLoading} />
      {table}
    </div>
  );
};
