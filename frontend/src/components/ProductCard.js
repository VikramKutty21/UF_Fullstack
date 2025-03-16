// src/components/ProductCard.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../components/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="shop-name">🛒 Sold by: <strong>{product.shop}</strong></p>
      <p className="product-price">${product.price}</p>
      <p className="product-quantity">Available: {product.quantity}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>🛒 Add to Cart</button>
    </div>
  );
};

export default ProductCard;
