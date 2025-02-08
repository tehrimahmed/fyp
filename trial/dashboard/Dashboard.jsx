import React from "react";
import { useState } from "react"
import { motion } from "framer-motion"
import { CourseCard } from "./CourseCard"
import { NavigationBar } from "./NavigationBar"
import { UserHeader } from "./UserHeader"
import { LearningAnalysis } from "./LearningAnalysis"
import styles from "./Dashboard.module.css"

function FloatingPaths({ position }) {
  const offsetY = 0.1 * (typeof window !== "undefined" ? window.innerHeight-1000 : 0)

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

const courseData = [
  {
    title: "Learn Figma",
    author: "by Christopher Morgan",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4be089ae68497b801a798319e81370f9b10c76fa85a75b660468cafe6f319c4b?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
  },
]

export const Dashboard = () => {
  const [quizResults, setQuizResults] = useState(null)

  const handleTakeTest = () => {
    const results = {
      learningStyle: "Visual Learner",
      strengths: "Problem Solving, Creativity",
      weaknesses: "Time Management",
    }
    setQuizResults(results)
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
              {courseData.map((course, index) => (
                <CourseCard key={`repeat1-${index}`} {...course} />
              ))}
              {courseData.map((course, index) => (
                <CourseCard key={`repeat2-${index}`} {...course} />
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
                <h2 className={styles.learnBotTitle}>LearnBot</h2>
                {quizResults ? (
                  <div className={styles.quizResults}>
                    <p>
                      <strong>Learning Style:</strong> {quizResults.learningStyle}
                    </p>
                    <p>
                      <strong>Strengths:</strong> {quizResults.strengths}
                    </p>
                    <p>
                      <strong>Weaknesses:</strong> {quizResults.weaknesses}
                    </p>
                  </div>
                ) : (
                  <p className={styles.learnBotDescription}>Your personal AI Assistant</p>
                )}
                <button className={styles.tryButton} onClick={handleTakeTest}>
                  {quizResults ? "Retake Test" : "Give it a Go"}
                </button>
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
    </div>
  )
}

export default Dashboard

