// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Farmers from "./pages/Farmers";
import FarmerDetails from "./pages/FarmerDetails";
import Products from "./pages/Products";
import Feed from "./pages/Feed";
import ChatPage from "./pages/ChatPage";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/farmers/:id" element={<FarmerDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/chat/:farmerId" element={<ChatPage />} /> {/* Chat Route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
