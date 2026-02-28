import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Aditya</span> 👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Typewriter
            words={[
              "Frontend Developer",
              "React Developer",
              "Problem Solver",
            ]}
            loop
            cursor
          />
        </motion.h2>

      </div>
    </section>
  );
};

export default Hero;