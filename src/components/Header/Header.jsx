import React from 'react';
import { motion } from 'framer-motion';
import "./Header.scss"

const Header = () => {
  return (
    <motion.header initial={{ y: -250 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <h1>Monde Animal d'Ishaaq</h1>
    </motion.header>
  );
};

export default Header;