import React from "react";
import { NavigationBar } from "../../trial/dashboard/NavigationBar";
import { QuestionCard } from "./QuestionCard.jsx";
import styles from "./LearningAssessment.module.css";

export const LearningAssessment = () => {
  const handleNext = () => {
    // Handle next question logic
  };

  const handleClose = () => {
    // Handle close logic
  };

  return (
    <div className={styles.container}>
      {/* Replace Navbar with NavigationBar component */}
      <NavigationBar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.heading}>Learning Style Assessment</h1>
          {/* Progress Bar */}
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "50%" }}></div>
          </div>
          <QuestionCard
            title="Question Title"
            question="Lorem Ipsum"
            onNext={handleNext}
            onClose={handleClose}
          />
        </div>
      </main>
    </div>
  );
};

export default LearningAssessment;
