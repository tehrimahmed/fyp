import React from "react";
import styles from "./course-listing.module.css";

export const CourseCard = ({
  title,
  author,
  imageUrl,
  duration,
  level,
  rating,
  onViewCourse,
}) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseInfo}>
        <div className={styles.courseImage}>
          <img src={imageUrl || "/placeholder.svg"} alt={title} />
        </div>
        <div className={styles.courseDetails}>
          <h3 className={styles.courseTitle}>{title}</h3>
          <p className={styles.courseAuthor}>by {author}</p>
          <div className={styles.courseStats}>
            <span className={styles.duration}>{duration}</span>
            <span className={styles.level}>{level}</span>
            <span className={styles.rating}>★ {rating}</span>
          </div>
        </div>
      </div>
      <button className={styles.startCourse} onClick={onViewCourse}>
        View Course
      </button>
    </div>
  );
};

export default CourseCard;
