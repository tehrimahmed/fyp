import React from "react";
import styles from "./Dashboard.module.css";

export const UserHeader = () => {
  return (
    <header className={styles.userHeader}>
      <div className={styles.userHeaderText}>
      <h1 className={styles.greeting}>Welcome!</h1>
      <p className={styles.subGreeting}>
        Let's get started with your learning journey!
      </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8afe6bc2b3ae2c842291ae6ff8f6aa87a610f2663ff83a247977853389c249c5?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
        alt="Welcome illustration"
        className={styles.headerImage}
      />
    </header>
  );
};

export default UserHeader;
