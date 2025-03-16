// src/pages/Feed.js
import React, { useState } from "react";
import FeedPost from "../components/FeedPost";
import "../pages/Feed.css";

const Feed = () => {
  // Dummy Feed Data
  const [posts] = useState([
    {
      id: 1,
      title: "Best Way to Grow Tomatoes 🍅",
      content: "Tomatoes thrive in well-drained soil with plenty of sunlight...",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg",
    },
    {
      id: 2,
      title: "Fresh Basil Recipe 🌿",
      content: "Make delicious pesto using fresh basil from your urban farm...",
      image: "https://source.unsplash.com/300x200/?basil",
    },
    {
      id: 3,
      title: "Success Story: Farmer John 🚜",
      content: "John turned his small backyard into a profitable urban farm...",
      image: "https://source.unsplash.com/300x200/?farmer",
    },
  ]);

  return (
    <div className="feed-container">
      <h2 className="feed-title">Latest Farming Tips & Stories</h2>
      <div className="feed-list">
        {posts.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
