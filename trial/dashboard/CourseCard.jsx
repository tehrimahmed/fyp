import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Dashboard.module.css";

export const CourseCard = ({ title, author, imageUrl }) => {
  const navigate = useNavigate(); // Initialize navigate
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseInfo}>
        <div className={styles.courseImage}>
          {imageUrl && <img src={imageUrl} alt="" />}
        </div>
        <div className={styles.courseDetails}>
          <div className={styles.courseTitle}>{title}</div>
          <div className={styles.courseAuthor}>{author}</div>
        </div>
      </div>
      <button className={styles.viewCourse} onClick={() => navigate("/chat")}>
        View course
      </button>
    </div>
  );
};

export default CourseCard;
