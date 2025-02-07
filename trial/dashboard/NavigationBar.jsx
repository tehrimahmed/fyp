// Updated React component with logout functionality
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.css";

export const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, session)
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className={styles.navigation}>
      {/* Logo */}
      <div className={styles.logo}>L.</div>

      {/* Navigation Icons */}
      <div className={styles.navIcons}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7fc2b275562aafe30a65d7ac7e4cfe93814d5f4ac6829df1734ec9df2f19f28?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="Dashboard"
          className={styles.navIcon}
          onClick={() => navigate("/dashboard")}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b85cf9a4e390b224a4d007c5ecc44c5cf1745b7726d6420f26dc031a900918d?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="Learning Assessment"
          className={styles.navIcon}
          onClick={() => navigate("/assessment")}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d900109aa870b98371309b6d4f9a3c2a543c7c974e3a375d75e2194966767c99?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="User Profile"
          className={styles.navIcon}
          onClick={() => navigate("/profile")}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab221be42c930fb36b0ad2803acde8368e1e54037ff94b72fa970ac6ac2a050?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="Chatbot"
          className={styles.navIcon}
          onClick={() => navigate("/chat")}
        />
      </div>

      {/* Logout Icon */}
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'%3E%3C/path%3E%3Cpolyline points='8 7 3 12 8 17'%3E%3C/polyline%3E%3Cline x1='3' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E"
        alt="Logout"
        className={`${styles.navIcon} ${styles.logoutIcon}`}
        onClick={() => navigate("/")}
      />
    </nav>
  );
};

export default NavigationBar;
