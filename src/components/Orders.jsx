import React from "react";
import { appContext } from "../App";
import { useContext, useState } from "react";
import "./Orders.css";

export default function Orders() {
  const { orders, cart, user, products } = useContext(appContext);
  const [expandedOrders, setExpandedOrders] = useState([]);
  const toggleOrder = (index) => {
    setExpandedOrders((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  
  // return (
  //   <div>
  //     <h3>My Orders</h3>

  //     <ol>
  //       {orders.map(
  //         (value) =>
  //           value.email === user.email && (
  //             <li>
  //               {value.orderDate}-{value.email}-
  //               {Object.keys(value.items).length}-{value.status}-{value.total}
  //             </li>
  //           )
  //       )}
  //     </ol>
  //     <hr></hr>
  //   </div>
  // );
  return (
    <div className="orders-container">
      <h3>📦 My Orders</h3>
      <div>
  {orders.map(
    (order, index) =>
      order.email === user.email && (
        <div key={index} className="order-card">
          <h4>
            Order #{index + 1}
            <button
              onClick={() => toggleOrder(index)}
              style={{
                marginLeft: "10px",
                fontSize: "12px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              {expandedOrders.includes(index) ? "Hide Items" : "Show Items"}
            </button>
          </h4>
          <div className="order-details">
            <p><strong>Date:</strong> {order.orderDate}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Total Items:</strong> {Object.keys(order.items).length}</p>

            {expandedOrders.includes(index) && (
              <ul style={{ marginTop: "10px" }}>
                {Object.entries(order.items).map(([productId, quantity]) => {
  const product = products.find((p) => p.id === productId);
  return (
    <li key={productId}>
      {product ? `${product.name}` : `Product ID: ${productId}`} — Qty: {quantity}
    </li>
  );
})}

              </ul>
            )}

            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total Amount:</strong> ₹{order.total}</p>
          </div>
        </div>
      )
  )}
</div>


      <hr />
    </div>
  );
  
}