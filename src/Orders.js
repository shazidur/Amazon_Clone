import React, { useState, useEffect } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./Firebase";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    console.log("------->> ", db);
    // if (!user) {
    //   db.collection("users")
    //     .dos(user?.uid)
    //     .collection("orders")
    //     .orderBy("created", "desc")
    //     .setSnapshot((snapshot) =>
    //       setOrders(
    //         snapshot.doc.map((doc) => ({
    //           id: doc.id,
    //           data: doc.data(),
    //         }))
    //       )
    //     );
    // } else {
    //   setOrders([]);
    // }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
