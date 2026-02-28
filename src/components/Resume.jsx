import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
<motion.section
  id="resume"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
      <h2>Resume</h2>
      <a href="/Aditya_Umbarkar_Resume.pdf" download>
        Download Full Resume
      </a>
    </motion.section>
  );
};

export default Resume;