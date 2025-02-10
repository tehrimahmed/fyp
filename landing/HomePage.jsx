import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, ArrowRight, BarChart, Layout, Target } from "lucide-react";
import styles from "./HomePage.module.css";
import brainImage from "./brain.png";

// COMPONENT: FloatingPaths
function FloatingPaths({ position }) {
  const offsetY = 0.1 * window.innerHeight;

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} ${-189 + i * 6 + offsetY}C-${
      380 - i * 5 * position
    } ${-189 + i * 6 + offsetY} -${312 - i * 5 * position} ${
      216 - i * 6 + offsetY
    } ${152 - i * 5 * position} ${343 - i * 6 + offsetY}C${
      616 - i * 5 * position
    } ${470 - i * 6 + offsetY} ${684 - i * 5 * position} ${
      875 - i * 6 + offsetY
    } ${684 - i * 5 * position} ${875 - i * 6 + offsetY}`,
    width: 0.5 + i * 0.03,
  }));

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
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// COMPONENT: BackgroundPaths
function BackgroundPaths() {
  return (
    <div className={styles.backgroundPaths}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}

// MAIN COMPONENT: HomePage
const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth/signup");
  };

  return (
    <div className={styles.pageWrapper}>
      <BackgroundPaths />

      <div className={styles.contentWrapper}>
        <div className={styles.logo}>L.</div>

        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroImageContainer}>
              <img
                src={brainImage || "/placeholder.svg"}
                alt="Brain"
                className={styles.heroImage}
                style={{ filter: "invert(1)" }}
              />
            </div>

            <div className={styles.heroTextContainer}>
              <h1 className={styles.heroTitle}>
                Personalized Learning
                <br />
                <span className={styles.heroSubtitle}>Tailored for You</span>
              </h1>
              <div className={styles.heroTextContent}>
                <p className={styles.heroDescription}>
                  Learnify revolutionizes education with AI-driven personalized
                  learning. Our platform adapts to your unique style, delivering
                  tailored content—text, images, and videos—for better
                  understanding and retention. With learning assessments, smart
                  content generation, and progress tracking, Learnify makes
                  learning engaging, efficient, and truly yours. Start your
                  journey today!
                </p>
                <button
                  className={styles.heroButton}
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.featureBox}>
            <div className={styles.featureContent}>
              <div className={styles.featureIcon}>
                <BarChart className="w-5 h-5 text-white" />
              </div>
              <h2 className={styles.featureTitle}>Learning Assessment</h2>
              <p className={styles.featureDescription}>
                Discover your unique learning style through an adaptive
                assessment designed to tailor content to your strengths.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn More <ArrowRight className={styles.featureLinkIcon} />
              </a>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.featureContent}>
              <div className={styles.featureIcon}>
                <Layout className="w-5 h-5 text-white" />
              </div>
              <h2 className={styles.featureTitle}>Personalized Content</h2>
              <p className={styles.featureDescription}>
                Get AI-generated lessons, exercises, and explanations customized
                to match your learning preferences for maximum retention.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn More <ArrowRight className={styles.featureLinkIcon} />
              </a>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.featureContent}>
              <div className={styles.featureIcon}>
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className={styles.featureTitle}>Progress Tracking</h2>
              <p className={styles.featureDescription}>
                Monitor your growth with real-time insights and personalized
                feedback to stay on track and achieve your learning goals.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn More <ArrowRight className={styles.featureLinkIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
