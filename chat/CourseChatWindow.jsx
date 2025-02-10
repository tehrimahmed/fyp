"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Message } from "./Message";
import { NavigationBar } from "../trial/dashboard/NavigationBar";
import { ChatHistory } from "./ChatHistory";
import {
  ChevronLeft,
  ChevronRight,
  Paperclip,
  Send,
  Smile,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CourseChatWindow.module.css";

const chatHistory = [
  { id: 1, title: "Introduction to React", date: "2024-02-07" },
  { id: 2, title: "JavaScript Basics", date: "2024-02-06" },
  { id: 3, title: "CSS Fundamentals", date: "2024-02-05" },
];

const suggestedQuestions = [
  "How do React components work?",
  "What are React hooks?",
  "Explain the virtual DOM",
  "What is JSX?",
  "How does state management work?",
  "What are props in React?",
  "Explain useEffect",
  "What is Context API?",
];

const botResponses = [
  "I'd be happy to help you understand React components.",
  "Let me explain how state management works in React.",
  "Here's what you need to know about React hooks.",
  "The virtual DOM is a key concept in React. Let me explain.",
  "Props and state are fundamental to React. Here's how they work.",
];

const FloatingPaths = ({ position }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offsetY = 0.1 * (windowHeight - 200);

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M${1076 + i * 5 * position} ${-189 + i * 6 + offsetY}C${
      1076 + i * 5 * position
    } ${-189 + i * 6 + offsetY} ${1008 + i * 5 * position} ${
      216 - i * 6 + offsetY
    } ${544 + i * 5 * position} ${343 - i * 6 + offsetY}C${
      80 + i * 5 * position
    } ${470 - i * 6 + offsetY} ${12 + i * 5 * position} ${
      875 - i * 6 + offsetY
    } ${12 + i * 5 * position} ${875 - i * 6 + offsetY}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className={styles.floatingPaths}>
      <svg viewBox="0 0 696 316" fill="none" className={styles.svg}>
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const BackgroundPaths = () => {
  return (
    <div className={styles.backgroundPaths}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
};

const SuggestedQuestions = ({ onQuestionClick }) => {
  return (
    <div className={styles.suggestedQuestionsContainer}>
      <div className={styles.suggestedQuestions}>
        {suggestedQuestions
          .concat(suggestedQuestions)
          .map((question, index) => (
            <button
              key={index}
              className={styles.suggestedQuestion}
              onClick={() => onQuestionClick(question)}
            >
              {question}
            </button>
          ))}
      </div>
    </div>
  );
};

const CourseChatWindow = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isInitialState, setIsInitialState] = useState(true);
  const messageContainerRef = useRef(null);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomResponse = () => {
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleSendMessage = (text = inputMessage) => {
    if (text.trim()) {
      const userMessage = {
        content: text,
        isUser: true,
        accentColor: "#02040f",
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputMessage("");
      setIsInitialState(false);

      // Simulate bot response after a short delay
      setTimeout(() => {
        const botMessage = {
          content: getRandomResponse(),
          isUser: false,
          accentColor: "#02040f",
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.container}>
      <NavigationBar />
      <BackgroundPaths />
      <div className={styles.chatContainer}>
        <main
          className={`${styles.mainContent} ${
            isInitialState ? styles.withGradient : ""
          }`}
        >
          {/* Course Info Header */}
          <header className={styles.header}>
            <div className={styles.courseInfo}>
              <h1 className={styles.title}>React Fundamentals</h1>
              <span className={styles.subtitle}>Module 1: Getting Started</span>
            </div>
          </header>

          {/* NEW WRAPPER: Chat Body */}
          <div className={styles.chatBody} ref={messageContainerRef}>
            <AnimatePresence mode="wait">
              {isInitialState ? (
                <motion.div
                  className={styles.initialState}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -30, // move up more on exit
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.h2
                    className={styles.initialTitle}
                    initial={{ opacity: 0, x: -30 }} // Start from a position slightly off-screen to the left
                    animate={{ opacity: 1, x: 0 }} // Move into place with full opacity
                    transition={{ delay: 0.2, duration: 1.2 }}
                  >
                    What would you like to learn?
                  </motion.h2>

                  <SuggestedQuestions onQuestionClick={handleSendMessage} />
                </motion.div>
              ) : (
                <motion.div
                  className={styles.messageContainer}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }} // delay to allow the initial state to exit completely
                >
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Message {...message} />
                    </motion.div>
                  ))}
                  <div ref={endOfMessagesRef} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area remains as-is */}
          <div className={styles.inputArea}>
            <div className={styles.inputWrapper}>
              <button
                className={styles.inputButton}
                aria-label="Add attachment"
              >
                <Paperclip size={20} />
              </button>
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={styles.inputText}
                rows={1}
              />
              <button className={styles.inputButton} aria-label="Add emoji">
                <Smile size={20} />
              </button>
              <button
                className={styles.sendButton}
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </main>

        {/* Chat History Sidebar */}
        <div
          className={`${styles.historySidebar} ${
            isHistoryOpen ? styles.open : ""
          }`}
        >
          <button
            className={styles.historyToggle}
            onClick={() => setIsHistoryOpen(!isHistoryOpen)}
            aria-label="Toggle chat history"
          >
            {isHistoryOpen ? (
              <ChevronRight size={24} />
            ) : (
              <ChevronLeft size={24} />
            )}
          </button>
          <ChatHistory chats={chatHistory} />
        </div>
      </div>
    </div>
  );
};

export default CourseChatWindow;
