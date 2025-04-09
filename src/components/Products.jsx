import React from "react";
import "./Products.css";
import { appContext } from "../App";
import { useContext, useState } from "react";
export default function Products() {
  const { user, products, cart, setCart } = useContext(appContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory
    );


  const addToCart = (id) => {
    !cart[id] && setCart({ ...cart, [id]: 1 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  return (
    <>
      <h3>{user.name}</h3>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{
      padding: "10px",
      fontSize: "16px",
      width: "60%",
      maxWidth: "400px",
      borderRadius: "6px",
      border: "1px solid var(--border-color)",
    }}
  />
</div>
<div style={{ textAlign: "center", marginTop: "10px" }}>
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    style={{
      padding: "8px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid var(--border-color)",
    }}
  >
    <option value="All">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Books">Books</option>
    <option value="Clothing">Clothing</option>
  </select>
</div>

      <div className="App-Products-Row">
      {filteredProducts.length > 0 ? (
  filteredProducts.map((value, index) => (
    <div key={index} className="App-Products-Box">
      <img src={value.imgUrl} />
      <h3>{value.name}</h3>
      <p>{value.desc}</p>
      <h4>₹{value.price}</h4>
      {cart[value.id] > 0 ? (
        <div>
          <button onClick={() => decrement(value.id)}>-</button>
          {cart[value.id]}
          <button onClick={() => increment(value.id)}>+</button>
        </div>
      ) : (
        <button onClick={() => addToCart(value.id)}>Add to Cart</button>
      )}
    </div>
  ))
) : (
  <p style={{ fontSize: "18px", marginTop: "20px", color: "gray" }}>
    No products match your search.
  </p>
)}


      </div>
      ;
    </>
  );
}