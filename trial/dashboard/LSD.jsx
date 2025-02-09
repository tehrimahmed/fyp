"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Dashboard.module.css";

const ChatBot = ({ onClose, onTestComplete }) => {
  const [messages, setMessages] = useState([]);
  const [responses, setResponses] = useState([]); // Only validated responses.
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testComplete, setTestComplete] = useState(false);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Start the conversation when the component mounts.
  useEffect(() => {
    const startConversation = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/start/");
        const data = await res.json();
        if (data.question) {
          setMessages([{ role: "bot", content: data.question }]);
        }
      } catch (error) {
        setError("Error starting conversation. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    startConversation();
  }, []);

  // Scroll to the bottom whenever messages change.
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-focus the text input whenever it is visible and active.
  useEffect(() => {
    if (!testComplete && !isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [testComplete, isLoading, messages]);

  const handleSend = async (e) => {
    e.preventDefault();

    if (input.trim().length < 5) {
      setError("Please provide a more detailed response (at least 5 characters).");
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/answer/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          responses: responses, // Only send validated responses.
          new_answer: input,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || "An error occurred. Please try again.");
      }
      if (data.question) {
        // If there is a next question, update responses and messages.
        setResponses(data.responses);
        setMessages((prev) => [
          ...prev,
          { role: "user", content: input },
          { role: "bot", content: data.question },
        ]);
      } else if (data.learning_style) {
        // Test complete: Build a summary string of learning styles.
        const learningStyleString = Object.keys(data.learning_style).join(", ");
        setResponses(data.responses);
        setTestComplete(true);
        setMessages((prev) => [
          ...prev,
          { role: "user", content: input },
          {
            role: "bot",
            content: `Test complete! Your learning style is: ${learningStyleString}. Thank you for your responses.`,
          },
        ]);
        onTestComplete(data.learning_style);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <div className={styles.chatBotWrapper}>
      <div className={styles.chatBotHeader}>
        <h2 className={styles.chatBotTitle}>Learning Style Assessment</h2>
      </div>
      <div className={styles.chatBotMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.messageWrapper} ${
              message.role === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            <div className={styles.messageContent}>{message.content}</div>
          </div>
        ))}
        {isLoading && <div className={styles.loadingMessage}>AI is thinking...</div>}
        {error && <div className={styles.errorMessage}>{error}</div>}
        <div ref={chatEndRef} />
      </div>
      <div className={styles.chatBotInputArea}>
        {testComplete ? (
          // When test is complete, show a button to return to the dashboard.
          <button className={styles.closeButton} onClick={onClose}>
            Return to Dashboard
          </button>
        ) : (
          <form onSubmit={handleSend} className={styles.chatBotForm}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response..."
              className={styles.chatBotInput}
              disabled={isLoading}
              autoFocus
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading}>
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
