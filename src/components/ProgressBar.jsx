import { useSpring, motion, useScroll } from "framer-motion";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="progress-bar
  fixed top-0 left-0 right-0 z-[1000] 
  bg-sky-600 h-1
  "
      style={{ scaleX }}
    />
  );
}

export { ProgressBar };


