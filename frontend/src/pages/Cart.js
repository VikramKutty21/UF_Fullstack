// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
            </div>
          ))}
          <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
