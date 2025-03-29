import { Variants } from 'framer-motion';

// Fade in animation variants
export const fadeIn = (delay = 0, direction: "up" | "down" | "left" | "right" | "none" = "up"): Variants => {
  let x = 0;
  let y = 0;
  
  if (direction === "up") y = 40;
  if (direction === "down") y = -40;
  if (direction === "left") x = 40;
  if (direction === "right") x = -40;
  
  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6, // Reduced from 0.8 for faster animation
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay * 0.7, // Reduced delay for faster loading
      },
    },
  };
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Slide in animation
export const slideIn = (direction: "up" | "down" | "left" | "right", delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: duration * 0.8, // Reduced duration for faster animation
        delay: delay * 0.7, // Reduced delay for faster loading
      },
    },
  };
};

// Scale animation
export const scaleIn = (delay = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Increased stiffness for faster movement
        damping: 15,
        delay: delay * 0.7, // Reduced delay for faster loading
      },
    },
  };
};

// Bounce animation
export const bounce: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

// Flip animation
export const flip: Variants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Float animation (continuous)
export const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

// Pulse animation (continuous)
export const pulse: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};