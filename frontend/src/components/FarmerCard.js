// src/components/FarmerCard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/FarmerCard.css";

const FarmerCard = ({ farmer }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="farmer-card">
      {/* Left Side: Farmer Image */}
      <img src={farmer.image} alt={farmer.name} className="farmer-image" />

      {/* Right Side: Farmer Details */}
      <div className="farmer-details">
        <h3>{farmer.name}</h3>
        <p>🌍 {farmer.location}</p>

        <div className="farmer-actions">
          <button className={`follow-button ${isFollowing ? "following" : ""}`} onClick={handleFollow}>
            {isFollowing ? "✔ Following" : "+ Follow"}
          </button>

          <Link to={`/farmers/${farmer.id}`} className="view-profile">
            View Profile ➡️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FarmerCard;
