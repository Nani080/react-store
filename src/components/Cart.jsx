// import React, { useState, useEffect } from "react";
// import { useContext } from "react";
// import { appContext } from "../App";
// import { useNavigate } from "react-router-dom";
// export default function Cart() {
//   const { products, cart, setCart, orders, setOrders, user } =
//     useContext(appContext);
//   const Navigate = useNavigate();
//   const [orderValue, setOrderValue] = useState(0);
//   const handleDelete = (id) => {
//     setCart({ ...cart, [id]: 0 });
//   };
//   const increment = (id) => {
//     setCart({ ...cart, [id]: cart[id] + 1 });
//   };
//   const decrement = (id) => {
//     setCart({ ...cart, [id]: cart[id] - 1 });
//   };
//   const placeOrder = () => {
//     setOrders([
//       ...orders,
//       {
//         email: user.email,
//         orderDate: Date(),
//         items: cart,
//         status: "pending",
//         total: orderValue,
//       },
//     ]);
//     setCart({});
//     Navigate("/orders");
//   };
//   useEffect(() => {
//     setOrderValue(
//       products.reduce((sum, value) => {
//         return sum + value.price * (cart[value.id] ?? 0);
//       }, 0)
//     );
//   }, [cart]);
//   return (
//     <div>
//       <h2>My Cart</h2>
//       {Object.keys(cart).length > 0 ? (
//         <>
//           {products.map(
//             (value) =>
//               cart[value.id] > 0 && (
//                 <div>
//                   {value.name}-{value.price}-
//                   <button onClick={() => decrement(value.id)}>-</button>
//                   {cart[value.id]}
//                   <button onClick={() => increment(value.id)}>+</button>-
//                   {value.price * cart[value.id]}-
//                   <button onClick={() => handleDelete(value.id)}>Delete</button>
//                 </div>
//               )
//           )}
//           <h3>Order Value:{orderValue}</h3>
//           <p>
//             {user.email ? (
//               <button onClick={placeOrder}>Place Order</button>
//             ) : (
//               <button onClick={()=>Navigate("/login")}>Login to Order</button>
//             )}
//           </p>
//         </>
//       ) : (
//         <h5>Your cart is Empty</h5>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from "react";
import { appContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { products, cart, setCart, orders, setOrders, user } = useContext(appContext);
  const Navigate = useNavigate();
  const [orderValue, setOrderValue] = useState(0);

  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };

  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };

  const placeOrder = () => {
    setOrders([
      ...orders,
      {
        email: user.email,
        orderDate: Date(),
        items: cart,
        status: "pending",
        total: orderValue,
      },
    ]);
    setCart({});
    Navigate("/orders");
  };

  useEffect(() => {
    setOrderValue(
      products.reduce((sum, value) => {
        return sum + value.price * (cart[value.id] ?? 0);
      }, 0)
    );
  }, [cart, products]);

  return (
    <div className="container">
      <h2>🛒 My Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <>
          <div style={{ marginTop: "20px" }}>
            {products.map(
              (value) =>
                cart[value.id] > 0 && (
                  <div className="cart-row" key={value.id}>
                    <div>{value.name}</div>
                    <div>₹{value.price}</div>
                    <div>
                      <button onClick={() => decrement(value.id)}>-</button>
                      <span style={{ margin: "0 10px" }}>{cart[value.id]}</span>
                      <button onClick={() => increment(value.id)}>+</button>
                    </div>
                    <div>₹{value.price * cart[value.id]}</div>
                    <div>
                      <button onClick={() => handleDelete(value.id)}>Delete</button>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="cart-summary">
            <h3>🧾 Order Summary</h3>
            <p>Total Items: {Object.values(cart).reduce((a, b) => a + b, 0)}</p>
            <p>Total Amount: ₹{orderValue}</p>
            <p>
              {user.email ? (
                <button onClick={placeOrder}>Place Order</button>
              ) : (
                <button onClick={() => Navigate("/login")}>Login to Order</button>
              )}
            </p>
          </div>
        </>
      ) : (
        <h5>Your cart is empty.</h5>
      )}
    </div>
  );
}
