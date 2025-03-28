import { useEffect, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';

// Props for the ScrollAnimationWrapper component
interface ScrollAnimationWrapperProps {
  children: ReactNode;
  threshold?: number;
  variants?: Variants;
  className?: string;
  duration?: number;
  delay?: number;
}

// A component wrapper that animates children when they come into view
export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ 
  children, 
  threshold = 0.2,
  variants,
  className = "",
  duration = 0.5,
  delay = 0
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants || {
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration, 
            delay,
            ease: [0.25, 0.1, 0.25, 1] 
          } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Return type for the useScrollAnimation hook
interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  inView: boolean;
  hasAnimated: boolean;
}

// A hook to handle scroll-triggered animations
export function useScrollAnimation(threshold = 0.2, triggerOnce = true): UseScrollAnimationReturn {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  
  return { ref, inView, hasAnimated };
}

// Props for the StaggeredAnimation component
interface StaggeredAnimationProps {
  children: ReactNode | ReactNode[];
  staggerDuration?: number;
  threshold?: number;
}

// A component for multi-stage staggered animations
export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({ 
  children, 
  staggerDuration = 0.1, 
  threshold = 0.2 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { 
          delay: i * staggerDuration,
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }));
    }
  }, [controls, inView, staggerDuration]);
  
  return (
    <div ref={ref}>
      {Array.isArray(children) ? 
        children.map((child, i) => (
          <motion.div
            key={i}
            custom={i}
            animate={controls}
            initial={{ opacity: 0, y: 20 }}
          >
            {child}
          </motion.div>
        )) : 
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 20 }}
          custom={0}
        >
          {children}
        </motion.div>
      }
    </div>
  );
};