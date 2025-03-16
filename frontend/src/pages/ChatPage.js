// src/pages/ChatPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";

const ChatPage = () => {
  const { farmerId } = useParams(); // Get farmer ID from URL
  const userId = "user123"; // Replace with actual logged-in user ID

  return (
    <div className="chat-page">
      <h2>Chat with Farmer {farmerId}</h2>
      <Chat farmerId={farmerId} userId={userId} />
    </div>
  );
};

export default ChatPage;
