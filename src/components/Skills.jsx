import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
<motion.section
  id="skills"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
      <h2>Technical Skills</h2>
     <div className="skills-grid">
  <div className="skill-card">Java</div>
  <div className="skill-card">React</div>
  <div className="skill-card">SQL</div>
  <div className="skill-card">MySQL</div>
  <div className="skill-card">HTML</div>
  <div className="skill-card">CSS</div>
</div>
   </motion.section>
  );
};

export default Skills;