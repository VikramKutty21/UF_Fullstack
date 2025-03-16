// src/components/FeedPost.js
import React, { useState } from "react";
import "./FeedPost.css";

const FeedPost = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Like Function
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Add Comment Function
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="feed-post">
      <h3 className="post-title">{post.title}</h3>
      <img src={post.image} alt={post.title} className="post-image" />
      <p className="post-content">{post.content}</p>

      {/* Like Button */}
      <button className="like-button" onClick={handleLike}>
        ❤️ {likes} Likes
      </button>

      {/* Comment Section */}
      <div className="comments">
        <h4>Comments</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>🗨️ {comment}</li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default FeedPost;
