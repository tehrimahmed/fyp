import React from "react"
import styles from "./CourseChatWindow.module.css"
import { Clock } from "lucide-react"

export const ChatHistory = ({ chats }) => {
  return (
    <div className={styles.historyContent}>
      <h2 className={styles.historyTitle}>Chat History</h2>
      <div className={styles.historyList}>
        {chats.map((chat) => (
          <button key={chat.id} className={styles.historyItem}>
            <div className={styles.historyItemContent}>
              <h3 className={styles.historyItemTitle}>{chat.title}</h3>
              <div className={styles.historyItemMeta}>
                <Clock size={14} />
                <span>{new Date(chat.date).toLocaleDateString()}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

