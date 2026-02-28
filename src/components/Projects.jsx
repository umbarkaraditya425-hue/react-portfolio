import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Student Management System</h3>
          <p>
            Web-based application to manage student records including
            attendance, marks, and personal details.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>MySQL</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Projects;