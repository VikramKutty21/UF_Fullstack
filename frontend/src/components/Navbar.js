// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>UrbanFarmLink</h1>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/farmers" onClick={() => setMenuOpen(false)}>Farmers</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/feed" onClick={() => setMenuOpen(false)}>Feed</Link>
        <Link to="/chat/farmer123" onClick={() => setMenuOpen(false)}>Chat</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>🛒 Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
