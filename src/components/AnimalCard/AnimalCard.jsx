
import { motion } from 'framer-motion';
import "./AnimalCard.scss"

const AnimalCard = ({ animal }) => {
  return (
    <motion.div className="animal-card" whileHover={{ scale: 1.1 }}>
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
    </motion.div>
  );
};

export default AnimalCard;