import React from 'react';
import { motion } from 'framer-motion';
import './AnimalCard.scss';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 2, y: 0 },
  hover: { scale: 1.20 }
};

const AnimalCard = ({ animal }) => {
  return (
    <motion.div 
      className="animal-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.5 }}
    >
      <img src={animal.image} alt={animal.name} className="animal-image" />
      <h3 className="animal-name">{animal.name}</h3>
      <p className="animal-description">{animal.description}</p>
      <p><strong>Habitat:</strong> {animal.habitat}</p>
      <p><strong>Faits intéressants:</strong> {animal.facts}</p>
    </motion.div>
  );
};

export default AnimalCard;
