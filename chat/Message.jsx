import React from "react";
import styles from "./Message.module.css";

export const Message = ({ content, isUser, accentColor }) => {
  return (
    <div
      className={`${styles.messageContainer} ${isUser ? styles.reversed : ""}`}
    >
      <div
        className={styles.messageBox}
        style={{ backgroundColor: isUser ? "#f0f4ff" : "#fff" }}
      >
        <div className={styles.messageContent}>{content}</div>
        <div
          className={styles.borderAccent}
          style={{ backgroundColor: accentColor }}
        />
      </div>
    </div>
  );
};

export default Message;