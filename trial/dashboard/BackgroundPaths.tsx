"use client"
import React from "react";
import { motion } from "framer-motion"
import styles from "./BackgroundPaths.module.css"

function FloatingPaths({ position }: { position: number }) {
  const offsetY = 0.1 * (typeof window !== "undefined" ? window.innerHeight : 0)

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

export function BackgroundPaths() {
  return (
    <div className={styles.backgroundPaths}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  )
}

