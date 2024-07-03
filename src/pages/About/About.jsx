import React from 'react';
import { motion } from 'framer-motion';
import "./About.scss"

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>About Our Zoo</h2>
      <p>Learn more about our mission and the animals we care for.</p>
    </motion.div>
  );
};

export default About;