import React, { useState } from "react";
import { NavigationBar } from "../../trial/dashboard/NavigationBar";
import { CourseCard } from "./course-card";
import { useNavigate } from "react-router-dom";
import styles from "./course-listing.module.css";

export const CourseListing = () => {
// Dummy courses with extra details (CLOs and PLOs)
const courses = [
  {
    id: 1,
    title: "Learn Mathematics",
    author: "Christopher Morgan",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3771/3771518.png",  // Math formula icon
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.8,
    clos: ["CLO 1: Understand algebra", "CLO 2: Solve equations"],
    plos: ["PLO 1: Critical thinking", "PLO 2: Problem solving"],
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    author: "Sarah Johnson",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/681/681662.png",  // Design tools icon
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.9,
    clos: ["CLO 1: User research", "CLO 2: Wireframing"],
    plos: ["PLO 1: Creativity", "PLO 2: Design thinking"],
  },
  {
    id: 3,
    title: "Advanced Physics",
    author: "Michael Smith",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2941/2941552.png",  // Atom/physics icon
    duration: "12 weeks",
    level: "Advanced",
    rating: 4.7,
    clos: ["CLO 1: Mechanics", "CLO 2: Thermodynamics"],
    plos: ["PLO 1: Analytical skills", "PLO 2: Research skills"],
  },
  {
    id: 4,
    title: "Introduction to Programming",
    author: "John Doe",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // Programming/code icon
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.5,
    clos: ["CLO 1: Understand basic syntax", "CLO 2: Write simple programs"],
    plos: ["PLO 1: Logical thinking", "PLO 2: Problem-solving skills"],
  },
  {
    id: 5,
    title: "Data Science Essentials",
    author: "Emily Davis",
    imageUrl:
      // Ensure this URL works; if not, find a similar data analysis icon on Flaticon.
      // Example alternative search terms could include 'data science', 'data analysis', etc.
      "https://cdn-icons-png.flaticon.com/512/2922/2922510.png", 
      // Data analysis icon
      duration:"8 weeks",
      level:"Intermediate",
      rating:"4.8" ,
      clos:["CLO1 : Data wrangling","CLO2 : Data visualization"] ,
     plos:["PLO1 : Analytical skills","PLO2 : Statistical knowledge"]
   },
   {
     id :6 ,
     title :"World History Overview" ,
     author :"Linda Green" ,
     imageUrl :
       // Example alternative search terms could include 'history', 'world history', etc.
       `https://cdn-icons-png.flaticon.com/512/3068/3068165.png`, 
       duration :"10 weeks" , 
       level :"Intermediate" , 
       rating :"4.7" , 
       clos:["CLO1 : Understand key historical events","CLO2 : Analyze historical trends"] ,  
        plos:["PLO1 : Critical analysis","PLO2:Cultural awareness"]
   }
];


  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  // Open modal with course details when "View Course" is clicked
  const handleViewCourse = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to chat when "Start Learning" is clicked in the modal
  const handleStartLearning = () => {
    setIsModalOpen(false);
    navigate("/chat");
  };

  return (
    <div className={styles.container}>
      <NavigationBar />
      <main className={styles.mainContent}>
        <h1 className={styles.heading}>Personalized Courses</h1>
        <div className={styles.contentWrapper}>
          {/* Course Navigation */}
          <div className={styles.courseNav}>
            <button
              className={`${styles.navButton} ${
                activeTab === "all" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Courses
            </button>
            <button
              className={`${styles.navButton} ${
                activeTab === "newest" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("newest")}
            >
              The Newest
            </button>
            <button
              className={`${styles.navButton} ${
                activeTab === "rated" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("rated")}
            >
              Top Rated
            </button>
            <button
              className={`${styles.navButton} ${
                activeTab === "popular" ? styles.active : ""
              }`}
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
                  onViewCourse={() => handleViewCourse(course)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Modal for course details */}
      {isModalOpen && selectedCourse && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button className={styles.closeIcon} onClick={closeModal}>
              ×
            </button>
            <h2>{selectedCourse.title}</h2>
            <div className={styles.courseMeta}>
              <p>
                <strong>Author:</strong> {selectedCourse.author}
              </p>
              <p>
                <strong>Duration:</strong> {selectedCourse.duration}
              </p>
              <p>
                <strong>Level:</strong> {selectedCourse.level}
              </p>
              <p>
                <strong>Rating:</strong> {selectedCourse.rating}
              </p>
            </div>
            <div>
              <h3>Course Learning Outcomes (CLOs):</h3>
              <ul>
                {selectedCourse.clos.map((clo, index) => (
                  <li key={index}>{clo}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Program Learning Outcomes (PLOs):</h3>
              <ul>
                {selectedCourse.plos.map((plo, index) => (
                  <li key={index}>{plo}</li>
                ))}
              </ul>
            </div>
            <div className={styles.modalActions}>
              <button
                className={styles.startCourse}
                onClick={handleStartLearning}
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseListing;
