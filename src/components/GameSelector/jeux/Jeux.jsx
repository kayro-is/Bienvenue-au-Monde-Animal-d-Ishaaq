import React, { useState } from "react";
import { motion } from "framer-motion";
import './Jeux.scss';


const animalHints = [
  { hint: "Je suis le roi de la jungle", answer: "lion", image: "lion.jpg" },
  { hint: "Je suis le plus grand mammifère terrestre", answer: "elephant" },
  { hint: "Je suis connu pour mon long cou", answer: "giraffe" },
  { hint: "Je suis un animal noir et blanc qui aime le bambou", answer: "panda" },
  { hint: "Je suis célèbre pour mes rayures", answer: "zebre" },
  { hint: "Je suis souvent vu en train de sauter de branche en branche", answer: "singe" },
  { hint: "Je suis le plus grand mammifère marin", answer: "baleine" },
  { hint: "Je suis un oiseau nocturne avec de grands yeux", answer: "hibou" },
  { hint: "Je suis connu pour mon pelage rayé et ma vitesse", answer: "tigre" },
  { hint: "Je suis un oiseau qui ne peut pas voler mais court très vite", answer: "autruche" },
  { hint: "Je vis dans l'océan et j'ai huit bras", answer: "poulpe" },
  { hint: "Je suis un petit insecte rouge avec des points noirs", answer: "coccinelle" },
  { hint: "Je suis un grand reptile avec une peau écailleuse et des dents pointues", answer: "crocodile" },
  { hint: "Je suis un insecte qui se transforme en papillon", answer: "chenille" },
  { hint: "Je suis un animal qui a une carapace et peut vivre longtemps", answer: "tortue" },
  { hint: "Je suis connu pour mes grandes défenses en ivoire", answer: "mammouth" },
  { hint: "Je suis un poisson qui peut gonfler pour se protéger", answer: "poisson-globe" },
  { hint: "Je suis un animal célèbre pour ma lenteur", answer: "paresseux" },
  { hint: "Je suis un oiseau coloré qui peut imiter les sons humains", answer: "perroquet" },
  { hint: "Je suis un grand félin avec une crinière majestueuse", answer: "lion" },
  { hint: "Je suis un insecte qui produit du miel", answer: "abeille" },
  { hint: "Je suis un animal de compagnie qui miaule", answer: "chat" },
  { hint: "Je suis un animal de compagnie qui aboie", answer: "chien" },
  { hint: "Je suis un grand mammifère avec une trompe", answer: "éléphant" },
  { hint: "Je suis un oiseau qui symbolise la paix", answer: "colombe" },
  { hint: "Je suis un animal aquatique connu pour son chant", answer: "baleine" },
  { hint: "Je suis un animal marin avec des pinces et une coquille dure", answer: "crabe" },
  { hint: "Je suis un grand oiseau de proie avec un bec crochu", answer: "aigle" },
  { hint: "Je suis un amphibien connu pour ma capacité à sauter", answer: "grenouille" },
  { hint: "Je suis un grand herbivore africain avec une corne sur le nez", answer: "rhinocéros" },
  { hint: "Je suis un petit mammifère nocturne avec une fourrure douce", answer: "chauve-souris" },
  { hint: "Je suis un reptile connu pour changer de couleur", answer: "caméléon" },
  { hint: "Je suis un petit mammifère qui vole la nuit", answer: "chauve-souris" },
  { hint: "Je suis un grand animal marin avec des tentacules", answer: "calamar géant" },
  { hint: "Je suis un insecte qui vit en colonie et est très organisé", answer: "fourmi" },
  { hint: "Je suis un animal connu pour ma lenteur et ma vie dans les arbres", answer: "paresseux" },
  { hint: "Je suis un oiseau connu pour mon chant et mon plumage bleu", answer: "geai bleu" },
  { hint: "Je suis un poisson qui peut se gonfler pour se protéger", answer: "poisson-globe" },
  { hint: "Je suis un animal nocturne avec des yeux brillants et des griffes acérées", answer: "lynx" },
  { hint: "Je suis un petit rongeur avec des incisives longues", answer: "souris" },
  { hint: "Je suis un grand mammifère des montagnes avec de la laine épaisse", answer: "yack" }
];

const GuessTheAnimal = () => {
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userGuess.toLowerCase() === animalHints[currentHintIndex].answer) {
      setScore(score + 1);
      setFeedback("Bravo ! Bonne réponse 🎉.");
      setIsCorrect(true);
      setShowAnswer(false);
    } else {
      setFeedback(`Oups ! Mauvaise réponse😔. La bonne réponse est: ${animalHints[currentHintIndex].answer}`);
      setIsCorrect(false);
      setShowAnswer(true);
    }
    setUserGuess("");
    setTimeout(() => {
      setCurrentHintIndex((currentHintIndex + 1) % animalHints.length);
      setFeedback("");
      setShowAnswer(false);
    }, 3000); // Affiche la réponse correcte pendant 3 secondes avant de passer à la question suivante
  };

  return (
    <div className="guess-the-animal">
      <h2>Devinez l'Animal</h2>
      <div className="score">Score: {score}</div>
      <motion.div
        className="hint"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {animalHints[currentHintIndex].hint}
      </motion.div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          placeholder="Votre réponse..."
        />
        <button type="submit">Devinez</button>
      </form>
      {feedback && (
        <motion.div
          className={`feedback ${isCorrect ? "correct" : "incorrect"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {feedback}
        </motion.div>
      )}
      {showAnswer && !isCorrect && (
        <motion.div
          className="correct-answer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          La bonne réponse était: {animalHints[currentHintIndex].answer}
        </motion.div>
      )}
    </div>
  );
};

const Games = () => {
  return (
    <div>
      <GuessTheAnimal />
    </div>
  );
};

export default Games;