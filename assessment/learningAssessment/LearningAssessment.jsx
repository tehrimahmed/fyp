import React from "react";
import { NavigationBar } from "../../trial/dashboard/NavigationBar";
import { CourseCard } from "./course-card";
import styles from "./course-listing.module.css";

export const CourseListing = () => {
  const courses = [
    {
      id: 1,
      title: "Learn Mathematics",
      author: "Christopher Morgan",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z65yLkgxc5mOyPW02tzTDDi5yk7jAP.png",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      author: "Sarah Johnson",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z65yLkgxc5mOyPW02tzTDDi5yk7jAP.png",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Physics",
      author: "Michael Smith",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z65yLkgxc5mOyPW02tzTDDi5yk7jAP.png",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Physics",
      author: "Michael Smith",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z65yLkgxc5mOyPW02tzTDDi5yk7jAP.png",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Physics",
      author: "Michael Smith",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z65yLkgxc5mOyPW02tzTDDi5yk7jAP.png",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Physics",
      author: "Michael Smith",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z65yLkgxc5mOyPW02tzTDDi5yk7jAP.png",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.7,
    },
    // Add more courses as needed
  ];

  const [activeTab, setActiveTab] = React.useState("all");

  return (
    <div className={styles.container}>
  <NavigationBar />
  <main className={styles.mainContent}>
    <h1 className={styles.heading}>Personalized Courses</h1>
    <div className={styles.contentWrapper}>
      
      {/* Course Navigation */}
      <div className={styles.courseNav}>
        <button
          className={`${styles.navButton} ${activeTab === "all" ? styles.active : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Courses
        </button>
        <button
          className={`${styles.navButton} ${activeTab === "newest" ? styles.active : ""}`}
          onClick={() => setActiveTab("newest")}
        >
          The Newest
        </button>
        <button
          className={`${styles.navButton} ${activeTab === "rated" ? styles.active : ""}`}
          onClick={() => setActiveTab("rated")}
        >
          Top Rated
        </button>
        <button
          className={`${styles.navButton} ${activeTab === "popular" ? styles.active : ""}`}
          onClick={() => setActiveTab("popular")}
        >
          Most Popular
        </button>
      </div>

      {/* Scrollable Course Grid */}
      <div className={styles.courseGridContainer}>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              author={course.author}
              imageUrl={course.imageUrl}
              duration={course.duration}
              level={course.level}
              rating={course.rating}
            />
          ))}
        </div>
      </div>
    </div>
  </main>
</div>

  );
};

export default CourseListing;
