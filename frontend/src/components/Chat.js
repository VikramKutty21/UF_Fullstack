// src/components/Chat.js
import "./Chat.css";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

const Chat = ({ farmerId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const chatRef = collection(db, "chats", farmerId, "messages");
    const q = query(chatRef, orderBy("timestamp"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [farmerId]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    await addDoc(collection(db, "chats", farmerId, "messages"), {
      senderId: userId,
      text: newMessage,
      timestamp: new Date(),
    });

    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <h2>Chat with Farmer</h2>
      <div className="chat-box">
        {messages.map((msg) => (
          <p key={msg.id} className={msg.senderId === userId ? "sent" : "received"}>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
