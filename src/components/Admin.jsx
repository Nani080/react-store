import React, { useContext } from "react";
import { appContext } from "../App";

export default function Admin() {
  const { users, orders } = useContext(appContext);

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <h2>👑 Admin Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <h3>Users</h3>
          <p>{users.length}</p>
        </div>
        <div style={cardStyle}>
          <h3>Orders</h3>
          <p>{orders.length}</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>
      </div>

      <hr />

      <h3>📦 All Orders</h3>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.email} - ₹{order.total} - {order.status}
          </li>
        ))}
      </ul>

      <h3>👤 Registered Users</h3>
      <ul>
  {users
    .filter((u) => u.email !== "admin@email.com")
    .map((user, index) => (
      <li key={index}>
        {user.name} ({user.email})
      </li>
    ))}
</ul>

    </div>
  );
}

const cardStyle = {
  backgroundColor: "var(--card-bg)",
  color: "var(--font-color)",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  flex: "1",
  minWidth: "200px",
  border: "1px solid var(--border-color)",
  textAlign: "center",
};
