import React, { useState, useEffect } from "react";
import "./Jeux2.scss";

// Liste des images d'animaux et leurs noms correspondants
const animalImages = [
  { name: "lion", image: "/lion.jpg" },
  { name: "elephant", image: "/elephant.jpg" },
  { name: "giraf", image: "/giraf.jpg" },
  { name: "panda", image: "/panda.jpg" },
  { name: "zébre", image: "/zébre.jpg" },
  { name: "singe", image: "/singe.jpg" }
];

// Fonction pour mélanger un tableau
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const HiddenAnimalGame = () => {
  // État pour les cartes, mélange initial des images dupliquées pour créer des paires
  const [cards, setCards] = useState(() => shuffleArray([...animalImages, ...animalImages]));
  // État pour les indices des cartes retournées
  const [flippedIndices, setFlippedIndices] = useState([]);
  // État pour les paires trouvées
  const [matchedPairs, setMatchedPairs] = useState([]);
  // État pour le score
  const [score, setScore] = useState(0);
  // État pour le message de félicitations
  const [message, setMessage] = useState("");

  // Effet pour gérer la logique de comparaison des cartes retournées
  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [index1, index2] = flippedIndices;
      if (cards[index1].name === cards[index2].name) {
        // Si les cartes correspondent, ajoutez le nom à matchedPairs et augmentez le score
        setMatchedPairs([...matchedPairs, cards[index1].name]);
        setScore(score + 1);
        // Réinitialiser flippedIndices pour permettre de cliquer sur de nouvelles cartes
        setFlippedIndices([]);
        // Si toutes les paires sont trouvées, afficher un message de félicitations
        if (matchedPairs.length + 1 === cards.length / 2) {
          setMessage("Félicitations ! Vous avez trouvé toutes les paires !");
        }
      } else {
        // Si les cartes ne correspondent pas, retournez-les après un délai de 1 seconde
        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000);
      }
    }
  }, [flippedIndices, cards, matchedPairs, score]);

  // Gestion du clic sur une carte
  const handleCardClick = (index) => {
    // Ne permet pas de cliquer sur plus de deux cartes ou sur une carte déjà retournée ou appariée
    if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedPairs.includes(cards[index].name)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  return (
    <div className="hidden-animal-game">
      <h2>Trouvez les Paires d'Animaux</h2>
      <div className="score">Score: {score}</div>
      <div className="game-board">
        {cards.map((card, index) => (
          <div
            key={`${card.name}-${index}`} // Utilisation d'une clé stable pour chaque carte
            className={`tile ${flippedIndices.includes(index) || matchedPairs.includes(card.name) ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {(flippedIndices.includes(index) || matchedPairs.includes(card.name)) && (
              <img
                src={card.image}
                alt={card.name}
                className="animal-image"
              />
            )}
          </div>
        ))}
      </div>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default HiddenAnimalGame;
