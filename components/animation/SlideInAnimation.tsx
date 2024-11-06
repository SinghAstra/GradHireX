import { motion } from "framer-motion";
import React from "react";

interface SlideInAnimationProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
  distance?: number;
}

const slideVariants = {
  left: (distance: number) => ({
    hidden: { opacity: 0, x: distance },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -distance },
  }),
  right: (distance: number) => ({
    hidden: { opacity: 0, x: -distance },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: distance },
  }),
  up: (distance: number) => ({
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -distance },
  }),
  down: (distance: number) => ({
    hidden: { opacity: 0, y: -distance },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: distance },
  }),
};

const SlideInAnimation: React.FC<SlideInAnimationProps> = ({
  children,
  direction = "right",
  duration = 0.3,
  delay = 0,
  className = "",
  distance = 20,
}) => {
  const variants = slideVariants[direction](distance);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;
