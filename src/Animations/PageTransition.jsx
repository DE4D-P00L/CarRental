import { motion } from "framer-motion";
const PageTransition = ({ children, className }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.2,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="bg-gray-900">
      <motion.div
        {...anim(slide)}
        className="fixed top-0 left-0 w-screen h-screen bg-base-100 z-[30]"
      />
      <motion.div {...anim(perspective)} className="bg-base-100">
        <motion.div {...anim(opacity)} className={className}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default PageTransition;
