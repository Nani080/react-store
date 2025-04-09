import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Admin from "./components/Admin";

import { createContext, useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const appContext = createContext();
function App(props) {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : { name: "", email: "", password: "" };
  });
  
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });
  
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  
  const products = [
    { id: 1, name: "Product 1", price: 56, category: "Electronics",desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/1/350/350" },
    { id: 2, name: "Product 2", price: 40, category: "Books",desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/2/350/350" },
    { id: 3, name: "Product 3", price: 35, category: "Clothing",desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/3/350/350" },
    { id: 4, name: "Product 4", price: 25, category: "Books",desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/4/350/350" },
    { id: 5, name: "Product 5", price: 95, category: "Clothing",desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/5/350/350" },
    { id: 6, name: "Product 6", price: 85, category: "Electronics",desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/6/350/350" },
  ];
  return (
    <BrowserRouter>
      <appContext.Provider
        value={{ users, setUsers, user, setUser, products, cart, setCart,orders,setOrders, darkMode, setDarkMode }}
      >
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Admin />} />

        </Routes>
        <Footer />
      </appContext.Provider>
    </BrowserRouter>
  );
}
export default App;