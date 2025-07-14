import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#2D3B36" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 500);
      }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            style={{
              fontFamily: "Inter",
              fontWeight: 800,
              fontSize: "60px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SKINCARE
          </motion.h1>
          
          <motion.div
            className="mt-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-0.5 bg-white mx-auto" style={{ maxWidth: "200px" }} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;