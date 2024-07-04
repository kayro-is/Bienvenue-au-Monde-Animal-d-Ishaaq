import React, { useState, useEffect } from "react";
import "./Jeux2.scss";

const animalImages = [
  { name: "lion", image: "/lion.jpg" },
  { name: "elephant", image: "/elephant.jpg" },
  { name: "giraf", image: "/giraf.jpg" },
  { name: "panda", image: "/panda.jpg" },
  { name: "zébre", image: "/zébre.jpg" },
  { name: "singe", image: "/singe.jpg" }
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const HiddenAnimalGame = () => {
  const [cards, setCards] = useState(shuffleArray(animalImages));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [index1, index2] = flippedIndices;
      if (cards[index1].name === cards[index2].name) {
        setMatchedPairs([...matchedPairs, cards[index1].name]);
        setScore(score + 1);
        if (matchedPairs.length + 1 === cards.length / 2) {
          setMessage("Félicitations ! Vous avez trouvé toutes les paires !");
        }
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  }, [flippedIndices]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
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
            key={index}
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
