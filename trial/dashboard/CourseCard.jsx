import React from "react";
import styles from "./Dashboard.module.css";

export const CourseCard = ({ title, author, imageUrl }) => {
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
      <button className={styles.viewCourse}>View course</button>
    </div>
  );
};

export default CourseCard;