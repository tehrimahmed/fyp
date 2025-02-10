"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { CourseCard } from "./CourseCard"
import { NavigationBar } from "./NavigationBar"
import { UserHeader } from "./UserHeader"
import { LearningAnalysis } from "./LearningAnalysis"
import styles from "./Dashboard.module.css"
import ChatBot from "./LSD"

function FloatingPaths({ position }) {
  const offsetY = 0.1 * (typeof window !== "undefined" ? window.innerHeight - 1000 : 0)

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} ${-189 + i * 6 + offsetY}C-${
      380 - i * 5 * position
    } ${-189 + i * 6 + offsetY} -${312 - i * 5 * position} ${216 - i * 6 + offsetY} ${152 - i * 5 * position} ${
      343 - i * 6 + offsetY
    }C${616 - i * 5 * position} ${470 - i * 6 + offsetY} ${
      684 - i * 5 * position
    } ${875 - i * 6 + offsetY} ${684 - i * 5 * position} ${875 - i * 6 + offsetY}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className={styles.floatingPaths}>
      <svg viewBox="0 0 696 316" fill="none" className={styles.svg}>
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

function BackgroundPaths() {
  return (
    <div className={styles.backgroundPaths}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  )
}

// Dummy courses with extra details (CLOs and PLOs)
const courseData = [
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
];


export const Dashboard = () => {
  const [chatOpen, setChatOpen] = useState(false)
  const [testResult, setTestResult] = useState(null)

  // When the user chooses to take or retake the test, open the ChatBot modal.
  const handleTakeTest = () => {
    setChatOpen(true)
  }

  // When the ChatBot test is completed, update the testResult.
  // (Note: the ChatBot’s internal "Return to Dashboard" button closes the modal.)
  const handleTestComplete = (result) => {
    setTestResult(result)
  }

  // Format the learning style result:
  // If all scores are 0 or all are 1, label as "Balanced Learner";
  // Otherwise, join the keys with a score of 1 using a slash.
  const formatLearningStyle = (style) => {
    const values = Object.values(style)
    const total = values.length
    const sum = values.reduce((acc, v) => acc + v, 0)
    if (sum === 0 || sum === total) {
      return "Balanced Learner"
    }
    return Object.entries(style)
      .filter(([_, value]) => value === 1)
      .map(([key, _]) => key)
      .join("/")
  }

  return (
    <div className={styles.dashboardWrapper}>
      <BackgroundPaths />
      <div className={styles.dashboard}>
        <NavigationBar />
        <div className={styles.mainContent}>
          <UserHeader />
          <LearningAnalysis onTakeTest={handleTakeTest} />
          <div className={styles.coursesSection}>
            <h2 className={styles.sectionTitle}>Personalized Courses</h2>
            <div className={styles.courseFilters}>
              <button className={styles.filterActive}>All Courses</button>
              <button className={styles.filter}>The Newest</button>
              <button className={styles.filter}>Top Rated</button>
              <button className={styles.filter}>Most Popular</button>
            </div>
            <div className={styles.coursesList}>
              {courseData.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.progressSection}>
            <div className={styles.progressHeader}>
              <div>
                <h3 className={styles.progressTitle}>Progress</h3>
                <div className={styles.progressSubtitle}>Learning Hours</div>
              </div>
              <button className={styles.periodSelector}>
                Weekly
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f619a9a6863ff87ac9c63b39afb766a69ff2814d83ce8df9874ab1c5015e48?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
                  alt=""
                  className={styles.dropdownIcon}
                />
              </button>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0176335d5cc319ae867fe63642d99c464bca773a6671dd1f2fb33e3efaa262?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
              alt="Learning progress chart"
              className={styles.progressChart}
            />
          </div>
          <div className={styles.learnBotSection}>
            <div className={styles.learnBotContent}>
              <div>
                <h2 className={styles.learnBotTitle}>
                  {testResult ? "Learning Style" : "Diagnostic Test"}
                </h2>
                {testResult ? (
                  <div className={styles.quizResults}>
                    <p className={styles.learnBotDescription}>
                      {formatLearningStyle(testResult)}
                    </p>
                    <button className={styles.tryButton} onClick={handleTakeTest}>
                      Retake Test
                    </button>
                  </div>
                ) : (
                  <>
                    <p className={styles.learnBotDescription}>Your personal AI Assistant</p>
                    <button className={styles.tryButton} onClick={handleTakeTest}>
                      Take Test
                    </button>
                  </>
                )}
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70bc9d88e6578682c2e5f12d5ff69266676d75d988e8f84617bdbbbda1589a33?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
                alt="LearnBot assistant"
                className={styles.learnBotImage}
              />
            </div>
          </div>
        </div>
      </div>
      {chatOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <ChatBot
              onClose={() => setChatOpen(false)}
              onTestComplete={handleTestComplete}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
