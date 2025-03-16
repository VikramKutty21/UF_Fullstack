// src/pages/Farmers.js
import React, { useState } from "react";
import FarmerCard from "../components/FarmerCard";
import "../pages/Farmers.css";

const Farmers = () => {
  // Dummy Farmers Data
  const [farmers] = useState([
    { id: 1, name: "Vikram's Urban Farm", location: "Los Angeles, CA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8cImnu7qkVtSRFK4Et1K9me_oz-nsYzA6g&s" },
    { id: 2, name: "Green Leaf Gardens", location: "New York, NY", image: "https://media.licdn.com/dms/image/v2/D5612AQH8fHTWUkVMOw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711326695337?e=2147483647&v=beta&t=41gusjLxEV65ieMyy3jKBkAgw1NTFcsbeXf0uOu-PQI" },
    { id: 3, name: "Fresh Harvest Co.", location: "Austin, TX", image: "https://media.istockphoto.com/id/899693088/vector/urban-farming-and-gardening-collage.jpg?s=612x612&w=0&k=20&c=w_-c7HcAOgaomWFDtyvGcjxtBnqgM8lkZuGqcHJE_Bc=" },
   
  ]);

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Farmers Based on Search Input
  const filteredFarmers = farmers.filter((farmer) =>
    farmer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="farmers-container">
      <h2>Meet Our Farmers </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a farmer shop..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Farmers List */}
      <div className="farmers-list">
        {filteredFarmers.length > 0 ? (
          filteredFarmers.map((farmer) => <FarmerCard key={farmer.id} farmer={farmer} />)
        ) : (
          <p className="no-results">No farmers found.</p>
        )}
      </div>
    </div>
  );
};

export default Farmers;
