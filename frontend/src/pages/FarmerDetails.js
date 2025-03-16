// src/pages/FarmerDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const FarmerDetails = () => {
  const { id } = useParams();

  return (
    <div className="farmer-details">
      <h2>Farmer Profile</h2>
      <p>🌍 Location: City, Country</p>

      {/* Chat Button */}
      <Link to={`/chat/${id}`} className="chat-button">
        💬 Chat with Farmer
      </Link>
    </div>
  );
};

export default FarmerDetails;
