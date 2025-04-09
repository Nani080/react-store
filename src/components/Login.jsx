import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
export default function Login() {
  const Navigate = useNavigate();
  const { user, setUser, users, setUsers,cart } = useContext(appContext);
  const [msg, setMsg] = useState();
  const handleSubmit = () => {
    const found = users.find(
      (value) => value.email === user.email && value.password === user.password
    );
    if (found) {
      setUser(found); // ← just to ensure the latest info is stored
      Object.keys(cart).length > 0 ? Navigate("/cart") : Navigate("/");
    } else if (
      user.email === "admin@email.com" &&
      user.password === "admin123"
    ) {
      // admin override
      setUser({ name: "Admin", email: "admin@email.com", password: "admin123" });
      Navigate("/admin");
    } else {
      setMsg("Invalid Credentials");
    }
  };
  
  // return (
  //   <div>
  //     <h2>Login Form</h2>
  //     {msg}
  //     <p>
  //       <input
  //         type="text"
  //         placeholder="Email address"
  //         onChange={(e) => setUser({ ...user, email: e.target.value })}
  //       ></input>
  //     </p>
  //     <p>
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         onChange={(e) => setUser({ ...user, password: e.target.value })}
  //       ></input>
  //     </p>
  //     <p>
  //       <button onClick={handleSubmit}>Log In</button>
  //     </p>
  //     <p>
  //       <Link to="../register">New User Register Here!</Link>
  //     </p>
  //   </div>
  // );

  return (
    <div className="form-container">
      <h2>Login</h2>
      {msg && <div className="form-error">{msg}</div>}
      <input
        type="text"
        placeholder="Email address"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleSubmit}>Log In</button>
      <p>
        <Link to="../register">New User? Register Here!</Link>
      </p>
    </div>
  );
};
