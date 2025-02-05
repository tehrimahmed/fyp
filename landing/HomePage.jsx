import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import brainImage from "./brain.png"; // Replace with your brain or lightbulb image file

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth/signup"); // Navigate to the Signup page
  };

  return (
    <div className={styles.container}>
      {/* Logo at Top Right */}
      <div className={styles.logo}>L.</div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* Brain/Lightbulb Image */}
          <div className={styles.heroImageContainer}>
            <img src={brainImage} alt="Brain" className={styles.heroImage} />
          </div>

          {/* Text Content */}
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              Personalized Learning<br />
              <span className={styles.heroTitle}>Tailored for You</span>
            </h1>
            <div className={styles.heroTextContent}>
              <p className={styles.heroDescription}>
              Learnify revolutionizes education with AI-driven personalized learning. Our platform adapts to your unique style, delivering tailored content—text, images, and videos—for better understanding and retention. With learning assessments, smart content generation, and progress tracking, Learnify makes learning engaging, efficient, and truly yours. Start your journey today!
              </p>
              <button className={styles.heroButton} onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className={styles.horizontalLine}></div>

      {/* Three Text Boxes */}
      <div className={styles.featuresSection}>
        <div className={styles.featureBox}>
          <h2 className={styles.featureTitle}>Learning Assessment</h2>
          <p className={styles.featureDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
        <div className={styles.featureBox}>
          <h2 className={styles.featureTitle}>Personalized Content</h2>
          <p className={styles.featureDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
        <div className={styles.featureBox}>
          <h2 className={styles.featureTitle}>Progress Tracking</h2>
          <p className={styles.featureDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;