import React from "react";
import styles from "./SelectCourse.module.css";
import { NavigationBar } from "../trial/dashboard/NavigationBar";

const courses = [
  {
    id: 1,
    title: "Learn Figma",
    description: "Master the basics of Figma for UI/UX design.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4be089ae68497b801a798319e81370f9b10c76fa85a75b660468cafe6f319c4b?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4be089ae68497b801a798319e81370f9b10c76fa85a75b660468cafe6f319c4b?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
  },
  // Add more courses here
];

const SelectCourse = () => {
  return (
    <div className={styles.container}>
      {/* Reusable Navbar */}
      <NavigationBar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>Select a Course</h1>
        </header>

        {/* Course List */}
        <div className={styles.courseList}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <img
                src={course.image}
                alt={course.title}
                className={styles.courseImage}
              />
              <div className={styles.courseDetails}>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <p className={styles.courseDescription}>{course.description}</p>
                <button className={styles.selectButton}>Select Course</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SelectCourse;