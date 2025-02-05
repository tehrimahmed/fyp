import React from "react";
import { Message } from "./Message";
import { NavigationBar } from "../trial/dashboard/NavigationBar"; 
import styles from "./CourseChatWindow.module.css";

const messages = [
  {
    content: "Welcome to the course! How can I assist you today?",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd0d9c1284b7777ddea910cfdbff0a1ec88d78b93401e7da8f9f60c49d7f01ec?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
    isUser: false,
    accentColor: "#02040f",
  },
  {
    content: "I need help with the first assignment.",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd0d9c1284b7777ddea910cfdbff0a1ec88d78b93401e7da8f9f60c49d7f01ec?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
    isUser: true,
    accentColor: "#02040f",
  },
];

const CourseChatWindow = () => {
  return (
    <div className={styles.container}>
      {/* Reusable Navbar */}
      <NavigationBar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>Course Chat</h1>
        </header>

        {/* Message Container */}
        <div className={styles.messageContainer}>
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
        </div>

        {/* Floating Input Area */}
        <div className={styles.inputArea}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Type a message..."
              className={styles.inputText}
            />
            <button className={styles.sendButton}>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseChatWindow;