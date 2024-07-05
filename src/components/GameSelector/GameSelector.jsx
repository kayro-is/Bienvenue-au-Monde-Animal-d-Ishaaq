import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Jeux from "./jeux/Jeux";
import Jeux2 from "./jeux/Jeux2";
import "./GameSelector.scss";

const GameSelector = () => {
  const [selectedGame, setSelectedGame] = useState("Jeux1");

  return (
    <div className="game-selector">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Jeux et Quiz sur les Animaux
      </motion.h1>
      <div className="button-container">
        <button onClick={() => setSelectedGame("Jeux1")}>Devinez l'Animal</button>
        <button onClick={() => setSelectedGame("Jeux2")}>Trouvez l'Animal Caché</button>
      </div>
      <div className="games-container">
        <AnimatePresence mode="wait">
          {selectedGame === "Jeux1" && (
            <motion.div
              key="Jeux1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="game-content"
            >
              <Jeux />
            </motion.div>
          )}
          {selectedGame === "Jeux2" && (
            <motion.div
              key="Jeux2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="game-content"
            >
              <Jeux2 />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GameSelector;
