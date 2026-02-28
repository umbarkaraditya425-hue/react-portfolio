import React from "react";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
  id="about"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
      <h2>About Me</h2>
      <p>
        I am Aditya Umbarkar, currently pursuing B.E. in Electronics &
        Communication from A.C Patil College of Engineering, Mumbai University.
      </p>
      <p>Expected Graduation: 2028</p>
      <p>
        I am passionate about web development and building real-world
        applications using React and modern technologies.
      </p>
    </motion.section>
  );
};

export default About;