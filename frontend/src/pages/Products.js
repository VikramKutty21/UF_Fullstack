// src/pages/Products.js
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../pages/Products.css";

const Products = () => {
  // Dummy Product Data
  const [products] = useState([
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 3.99,
      quantity: "1 kg",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg",
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 2.49,
      quantity: "500g",
      image: "https://nationaltoday.com/wp-content/uploads/2022/05/3-Spinach-1200x834.jpg",
    },
    {
      id: 3,
      name: "Carrots",
      price: 4.99,
      quantity: "1 kg",
      image: "https://www.jiomart.com/images/product/original/590003546/carrot-orange-500-g-product-images-o590003546-p590003546-0-202408070949.jpg?im=Resize=(1000,1000)",
    },
    {
      id: 4,
      name: "Organic Strawberries",
      price: 5.99,
      quantity: "500g",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSYLCFC4Ska7l9dviARNNZHJCjJ8PpcIYOA&s",
    },
    {
      id: 5,
      name: "Bell Peppers",
      price: 3.49,
      quantity: "1 kg",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnCg8A3IK7inonWrRpUVlLiIYdEDQik7r0dUgocSMVPAa1jHRGsiscLj6XXx5VnYKQrahYKvyoMgyd_glNG05PZzIX3TtTDVdyC3NNbRdgba8zRZ36SpLZmQ&usqp=CAE",
    },
    {
      id: 6,
      name: "Fresh Apples",
      price: 6.99,
      quantity: "1 kg",
      image: "data:image/jpeg;base64,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",
    },
  ]);

  return (
    <div className="products-container">
      <h2 className="products-title">Explore Fresh Produce</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
