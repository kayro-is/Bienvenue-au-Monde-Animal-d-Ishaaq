import React, { useState, useEffect } from 'react';
import './Quiz.scss';

// Interface pour définir la structure d'une question

// Une grande liste de questions pour le quiz
const questions = [
  { question: "Quel animal a la langue la plus longue ?", options: ["Girafe", "Éléphant", "Lion"], answer: "Girafe" },
  { question: "Combien de temps les lions dorment-ils chaque jour ?", options: ["8 heures", "12 heures", "20 heures"], answer: "20 heures" },
  { question: "Quel animal utilise des infrasons pour communiquer ?", options: ["Éléphant", "Lion", "Gorille"], answer: "Éléphant" },
  { question: "Quel est l'animal le plus rapide ?", options: ["Guépard", "Lion", "Tigre"], answer: "Guépard" },
  { question: "Quel mammifère peut voler ?", options: ["Chauve-souris", "Oiseau", "Écureuil"], answer: "Chauve-souris" },
  { question: "Quel est le plus grand animal marin ?", options: ["Baleine bleue", "Requin", "Dauphin"], answer: "Baleine bleue" },
  { question: "Combien de bosses a un dromadaire ?", options: ["Une", "Deux", "Trois"], answer: "Une" },
  { question: "Quel animal vit le plus longtemps ?", options: ["Tortue géante", "Éléphant", "Baleine"], answer: "Tortue géante" },
  { question: "Quel est l'oiseau le plus grand ?", options: ["Autruche", "Aigle", "Albatros"], answer: "Autruche" },
  { question: "Quel animal a le cœur le plus grand ?", options: ["Baleine bleue", "Éléphant", "Girafe"], answer: "Baleine bleue" },
  { question: "Quel est l'animal terrestre le plus lourd ?", options: ["Éléphant", "Rhinocéros", "Hippopotame"], answer: "Éléphant" },
  { question: "Quel oiseau peut voler à reculons ?", options: ["Colibri", "Perroquet", "Aigle"], answer: "Colibri" },
  { question: "Quel animal a les griffes les plus longues ?", options: ["Paresseux", "Tigre", "Lion"], answer: "Paresseux" },
  { question: "Quel animal est connu pour changer de couleur ?", options: ["Caméléon", "Octopus", "Pélican"], answer: "Caméléon" },
  { question: "Quel animal peut dormir debout ?", options: ["Cheval", "Chien", "Chat"], answer: "Cheval" },
  { question: "Quel mammifère marin est connu pour chanter ?", options: ["Baleine", "Dauphin", "Phoque"], answer: "Baleine" },
  { question: "Quel animal a une mémoire excellente ?", options: ["Éléphant", "Lion", "Serpent"], answer: "Éléphant" },
  { question: "Quel oiseau est le symbole de la paix ?", options: ["Colombe", "Pigeon", "Canari"], answer: "Colombe" },
  { question: "Quel animal peut régénérer des parties de son corps ?", options: ["Étoile de mer", "Poisson", "Tortue"], answer: "Étoile de mer" },
  { question: "Quel est le plus grand reptile ?", options: ["Crocodile", "Varan de Komodo", "Serpent"], answer: "Crocodile" },
  { question: "Quel animal est connu pour ses rayures ?", options: ["Zèbre", "Tigre", "Girafe"], answer: "Zèbre" },
  { question: "Quel oiseau ne peut pas voler ?", options: ["Autruche", "Canard", "Aigle"], answer: "Autruche" },
  { question: "Quel est le plus petit oiseau du monde ?", options: ["Colibri", "Moineau", "Canari"], answer: "Colibri" },
  { question: "Quel mammifère est connu pour hiberner ?", options: ["Ours", "Écureuil", "Renard"], answer: "Ours" },
  { question: "Quel animal utilise des outils pour se nourrir ?", options: ["Chimpanzé", "Éléphant", "Girafe"], answer: "Chimpanzé" },
  { question: "Quel est le plus grand prédateur de l'océan ?", options: ["Requin blanc", "Orque", "Baleine"], answer: "Requin blanc" },
  { question: "Quel insecte produit du miel ?", options: ["Abeille", "Guêpe", "Mouche"], answer: "Abeille" },
  { question: "Quel animal est connu pour sa lenteur ?", options: ["Paresseux", "Tortue", "Éléphant"], answer: "Paresseux" },
  { question: "Quel animal a une trompe ?", options: ["Éléphant", "Rhinocéros", "Hippopotame"], answer: "Éléphant" },
  { question: "Quel animal est le plus bruyant ?", options: ["Singes hurleurs", "Éléphant", "Lion"], answer: "Singes hurleurs" },
  { question: "Quel oiseau peut tourner sa tête à 270 degrés ?", options: ["Hibou", "Aigle", "Colombe"], answer: "Hibou" },
  { question: "Quel est le plus grand marsupial ?", options: ["Kangourou", "Koala", "Opossum"], answer: "Kangourou" },
  { question: "Quel animal est capable de marcher sur l'eau ?", options: ["Basilic", "Grenouille", "Canard"], answer: "Basilic" },
  { question: "Quel poisson peut gonfler pour se protéger ?", options: ["Poisson-globe", "Saumon", "Truite"], answer: "Poisson-globe" },
  { question: "Quel animal est le plus intelligent ?", options: ["Dauphin", "Singe", "Chien"], answer: "Dauphin" },
  { question: "Quel animal est nocturne ?", options: ["Chauve-souris", "Écureuil", "Ours"], answer: "Chauve-souris" },
  { question: "Quel oiseau a des plumes roses ?", options: ["Flamant rose", "Colibri", "Perroquet"], answer: "Flamant rose" },
  { question: "Quel animal est le roi de la jungle ?", options: ["Lion", "Tigre", "Éléphant"], answer: "Lion" },
  { question: "Quel insecte peut soulever 50 fois son propre poids ?", options: ["Fourmi", "Abeille", "Mouche"], answer: "Fourmi" },
  { question: "Quel animal peut se déplacer sous terre ?", options: ["Taupe", "Souris", "Rat"], answer: "Taupe" },
  { question: "Quel animal vit dans un terrier ?", options: ["Lapin", "Chien", "Chat"], answer: "Lapin" },
  { question: "Quel est le plus grand félin ?", options: ["Tigre", "Lion", "Jaguar"], answer: "Tigre" },
  { question: "Quel animal a des griffes rétractiles ?", options: ["Chat", "Chien", "Éléphant"], answer: "Chat" },
  { question: "Quel oiseau est célèbre pour son mimétisme vocal ?", options: ["Perroquet", "Aigle", "Moineau"], answer: "Perroquet" },
  { question: "Quel animal est utilisé pour la police montée ?", options: ["Cheval", "Chien", "Chameau"], answer: "Cheval" },
  { question: "Quel animal a une fourrure épaisse et blanche ?", options: ["Ours polaire", "Renard arctique", "Loup"], answer: "Ours polaire" },
  { question: "Quel mammifère est le plus petit ?", options: ["Musaraigne étrusque", "Souris", "Hamster"], answer: "Musaraigne étrusque" },
  { question: "Quel animal peut changer de sexe ?", options: ["Poisson-clown", "Poisson rouge", "Tortue"], answer: "Poisson-clown" },
  { question: "Quel animal est connu pour sa sagesse ?", options: ["Hibou", "Chien", "Cheval"], answer: "Hibou" },
  { question: "Quel animal est le plus venimeux ?", options: ["Méduse-boîte", "Serpent", "Araignée"], answer: "Méduse-boîte" },
  { question: "Quel est le plus grand oiseau de proie ?", options: ["Condor", "Aigle", "Faucon"], answer: "Condor" },
  { question: "Quel animal a une coquille dure ?", options: ["Tortue", "Escargot", "Crabe"], answer: "Tortue" },
  { question: "Quel animal est le plus long ?", options: ["Ver géant", "Serpent", "Anguille"], answer: "Serpent" },
  { question: "Quel animal peut marcher sur deux pattes ?", options: ["Kangourou", "Chien", "Chat"], answer: "Kangourou" },
  { question: "Quel animal a des cornes en spirale ?", options: ["Antilope", "Bélier", "Chèvre"], answer: "Antilope" },
  { question: "Quel animal est connu pour son cri ?", options: ["Paresseux", "Chauve-souris", "Chien"], answer: "Paresseux" },
  { question: "Quel animal a un long cou ?", options: ["Girafe", "Éléphant", "Chameau"], answer: "Girafe" },
  { question: "Quel est le plus grand primate ?", options: ["Gorille", "Chimpanzé", "Orang-outan"], answer: "Gorille" },
  { question: "Quel animal peut vivre sans eau pendant des mois ?", options: ["Chameau", "Éléphant", "Lion"], answer: "Chameau" },
  { question: "Quel animal a des poils rayés ?", options: ["Tigre", "Lion", "Guépard"], answer: "Tigre" },
  { question: "Quel animal utilise son bec pour casser des noix ?", options: ["Ara", "Pigeon", "Colibri"], answer: "Ara" },
  { question: "Quel animal a une queue préhensile ?", options: ["Singes", "Chien", "Chat"], answer: "Singes" },
  { question: "Quel animal est le plus petit mammifère volant ?", options: ["Chauve-souris bourdon", "Oiseau", "Insecte"], answer: "Chauve-souris bourdon" },
  { question: "Quel animal a des piquants ?", options: ["Porc-épic", "Écureuil", "Ours"], answer: "Porc-épic" },
  { question: "Quel animal peut courir le plus vite ?", options: ["Guépard", "Tigre", "Lion"], answer: "Guépard" },
  { question: "Quel est le plus grand mammifère terrestre ?", options: ["Éléphant", "Hippopotame", "Rhinocéros"], answer: "Éléphant" },
  { question: "Quel animal a une crinière ?", options: ["Lion", "Éléphant", "Girafe"], answer: "Lion" },
  { question: "Quel animal peut voir dans l'obscurité ?", options: ["Chauve-souris", "Chat", "Chien"], answer: "Chat" },
  { question: "Quel animal utilise des ultrasons pour se déplacer ?", options: ["Chauve-souris", "Oiseau", "Dauphin"], answer: "Chauve-souris" },
  { question: "Quel animal a un bec en forme de cuillère ?", options: ["Spatule", "Canard", "Aigle"], answer: "Spatule" },
  { question: "Quel animal est le plus grand carnivore terrestre ?", options: ["Ours polaire", "Lion", "Tigre"], answer: "Ours polaire" },
  { question: "Quel animal peut marcher sur la surface de l'eau ?", options: ["Basilic", "Grenouille", "Canard"], answer: "Basilic" },
  { question: "Quel animal a des rayures ?", options: ["Zèbre", "Girafe", "Éléphant"], answer: "Zèbre" },
  { question: "Quel animal a un nez en forme de trompe ?", options: ["Éléphant", "Rhinocéros", "Girafe"], answer: "Éléphant" },
  { question: "Quel animal peut survivre dans le désert ?", options: ["Chameau", "Éléphant", "Girafe"], answer: "Chameau" },
  { question: "Quel animal peut changer de couleur pour se camoufler ?", options: ["Caméléon", "Grenouille", "Serpent"], answer: "Caméléon" },
  { question: "Quel animal est connu pour sa capacité à voler en arrière ?", options: ["Colibri", "Aigle", "Perroquet"], answer: "Colibri" },
  { question: "Quel animal a des cornes en forme de spirale ?", options: ["Antilope", "Bélier", "Chèvre"], answer: "Antilope" },
  { question: "Quel animal peut sauter le plus haut ?", options: ["Puma", "Lion", "Tigre"], answer: "Puma" },
  { question: "Quel animal a des nageoires ?", options: ["Poisson", "Dauphin", "Tortue"], answer: "Poisson" },
  { question: "Quel animal peut gonfler pour paraître plus gros ?", options: ["Poisson-globe", "Serpent", "Grenouille"], answer: "Poisson-globe" },
  { question: "Quel animal a des branchies ?", options: ["Poisson", "Dauphin", "Tortue"], answer: "Poisson" },
  { question: "Quel animal est le plus bruyant ?", options: ["Singes hurleurs", "Éléphant", "Lion"], answer: "Singes hurleurs" },
  { question: "Quel oiseau peut tourner sa tête à 270 degrés ?", options: ["Hibou", "Aigle", "Colombe"], answer: "Hibou" },
  { question: "Quel est le plus grand marsupial ?", options: ["Kangourou", "Koala", "Opossum"], answer: "Kangourou" },
  { question: "Quel animal est capable de marcher sur l'eau ?", options: ["Basilic", "Grenouille", "Canard"], answer: "Basilic" },
  { question: "Quel poisson peut gonfler pour se protéger ?", options: ["Poisson-globe", "Saumon", "Truite"], answer: "Poisson-globe" },
  { question: "Quel animal est le plus intelligent ?", options: ["Dauphin", "Singe", "Chien"], answer: "Dauphin" },
  { question: "Quel animal est nocturne ?", options: ["Chauve-souris", "Écureuil", "Ours"], answer: "Chauve-souris" },
  { question: "Quel oiseau a des plumes roses ?", options: ["Flamant rose", "Colibri", "Perroquet"], answer: "Flamant rose" },
  { question: "Quel animal est le roi de la jungle ?", options: ["Lion", "Tigre", "Éléphant"], answer: "Lion" },
  { question: "Quel insecte peut soulever 50 fois son propre poids ?", options: ["Fourmi", "Abeille", "Mouche"], answer: "Fourmi" },
  { question: "Quel animal peut se déplacer sous terre ?", options: ["Taupe", "Souris", "Rat"], answer: "Taupe" },
  { question: "Quel animal vit dans un terrier ?", options: ["Lapin", "Chien", "Chat"], answer: "Lapin" },
  { question: "Quel est le plus grand félin ?", options: ["Tigre", "Lion", "Jaguar"], answer: "Tigre" },
  { question: "Quel animal a des griffes rétractiles ?", options: ["Chat", "Chien", "Éléphant"], answer: "Chat" },
  { question: "Quel oiseau est célèbre pour son mimétisme vocal ?", options: ["Perroquet", "Aigle", "Moineau"], answer: "Perroquet" },
  { question: "Quel animal est utilisé pour la police montée ?", options: ["Cheval", "Chien", "Chameau"], answer: "Cheval" },
  { question: "Quel animal a une fourrure épaisse et blanche ?", options: ["Ours polaire", "Renard arctique", "Loup"], answer: "Ours polaire" },
  { question: "Quel mammifère est le plus petit ?", options: ["Musaraigne étrusque", "Souris", "Hamster"], answer: "Musaraigne étrusque" },
  { question: "Quel animal peut changer de sexe ?", options: ["Poisson-clown", "Poisson rouge", "Tortue"], answer: "Poisson-clown" },
  { question: "Quel animal est connu pour sa sagesse ?", options: ["Hibou", "Chien", "Cheval"], answer: "Hibou" },
  { question: "Quel animal est le plus venimeux ?", options: ["Méduse-boîte", "Serpent", "Araignée"], answer: "Méduse-boîte" },
  { question: "Quel est le plus grand oiseau de proie ?", options: ["Condor", "Aigle", "Faucon"], answer: "Condor" },
{ question: "Quel animal a une coquille dure ?", options: ["Tortue", "Escargot", "Crabe"], answer: "Tortue" },
{ question: "Quel animal est le plus long ?", options: ["Ver géant", "Serpent", "Anguille"], answer: "Serpent" },
{ question: "Quel animal peut marcher sur deux pattes ?", options: ["Kangourou", "Chien", "Chat"], answer: "Kangourou" },
{ question: "Quel animal a des cornes en spirale ?", options: ["Antilope", "Bélier", "Chèvre"], answer: "Antilope" },
{ question: "Quel animal est connu pour son cri ?", options: ["Paresseux", "Chauve-souris", "Chien"], answer: "Paresseux" },
{ question: "Quel animal a un long cou ?", options: ["Girafe", "Éléphant", "Chameau"], answer: "Girafe" },
{ question: "Quel est le plus grand primate ?", options: ["Gorille", "Chimpanzé", "Orang-outan"], answer: "Gorille" },
{ question: "Quel animal peut vivre sans eau pendant des mois ?", options: ["Chameau", "Éléphant", "Lion"], answer: "Chameau" },
{ question: "Quel animal a des poils rayés ?", options: ["Tigre", "Lion", "Guépard"], answer: "Tigre" },
{ question: "Quel animal utilise son bec pour casser des noix ?", options: ["Ara", "Pigeon", "Colibri"], answer: "Ara" },
{ question: "Quel animal a une queue préhensile ?", options: ["Singes", "Chien", "Chat"], answer: "Singes" },
{ question: "Quel animal est le plus petit mammifère volant ?", options: ["Chauve-souris bourdon", "Oiseau", "Insecte"], answer: "Chauve-souris bourdon" },
{ question: "Quel animal a des piquants ?", options: ["Porc-épic", "Écureuil", "Ours"], answer: "Porc-épic" },
{ question: "Quel animal peut courir le plus vite ?", options: ["Guépard", "Tigre", "Lion"], answer: "Guépard" },
{ question: "Quel est le plus grand mammifère terrestre ?", options: ["Éléphant", "Hippopotame", "Rhinocéros"], answer: "Éléphant" },
{ question: "Quel animal a une crinière ?", options: ["Lion", "Éléphant", "Girafe"], answer: "Lion" },
{ question: "Quel animal peut voir dans l'obscurité ?", options: ["Chauve-souris", "Chat", "Chien"], answer: "Chat" },
{ question: "Quel animal utilise des ultrasons pour se déplacer ?", options: ["Chauve-souris", "Oiseau", "Dauphin"], answer: "Chauve-souris" },
{ question: "Quel animal a un bec en forme de cuillère ?", options: ["Spatule", "Canard", "Aigle"], answer: "Spatule" },
{ question: "Quel animal est le plus grand carnivore terrestre ?", options: ["Ours polaire", "Lion", "Tigre"], answer: "Ours polaire" },
{ question: "Quel animal peut marcher sur la surface de l'eau ?", options: ["Basilic", "Grenouille", "Canard"], answer: "Basilic" },
{ question: "Quel animal a des rayures ?", options: ["Zèbre", "Girafe", "Éléphant"], answer: "Zèbre" },
{ question: "Quel animal a un nez en forme de trompe ?", options: ["Éléphant", "Rhinocéros", "Girafe"], answer: "Éléphant" },
{ question: "Quel animal peut survivre dans le désert ?", options: ["Chameau", "Éléphant", "Girafe"], answer: "Chameau" },
{ question: "Quel animal peut changer de couleur pour se camoufler ?", options: ["Caméléon", "Grenouille", "Serpent"], answer: "Caméléon" },
{ question: "Quel animal est connu pour sa capacité à voler en arrière ?", options: ["Colibri", "Aigle", "Perroquet"], answer: "Colibri" },
{ question: "Quel animal a des cornes en forme de spirale ?", options: ["Antilope", "Bélier", "Chèvre"], answer: "Antilope" },
{ question: "Quel animal peut sauter le plus haut ?", options: ["Puma", "Lion", "Tigre"], answer: "Puma" },
{ question: "Quel animal a des nageoires ?", options: ["Poisson", "Dauphin", "Tortue"], answer: "Poisson" },
{ question: "Quel animal peut gonfler pour paraître plus gros ?", options: ["Poisson-globe", "Serpent", "Grenouille"], answer: "Poisson-globe" },
{ question: "Quel animal a des branchies ?", options: ["Poisson", "Dauphin", "Tortue"], answer: "Poisson" },
{ question: "Quel animal est le plus bruyant ?", options: ["Singes hurleurs", "Éléphant", "Lion"], answer: "Singes hurleurs" },
{ question: "Quel oiseau peut tourner sa tête à 270 degrés ?", options: ["Hibou", "Aigle", "Colombe"], answer: "Hibou" },
{ question: "Quel est le plus grand marsupial ?", options: ["Kangourou", "Koala", "Opossum"], answer: "Kangourou" },
{ question: "Quel animal est capable de marcher sur l'eau ?", options: ["Basilic", "Grenouille", "Canard"], answer: "Basilic" },
{ question: "Quel poisson peut gonfler pour se protéger ?", options: ["Poisson-globe", "Saumon", "Truite"], answer: "Poisson-globe" },
{ question: "Quel animal est le plus intelligent ?", options: ["Dauphin", "Singe", "Chien"], answer: "Dauphin" },
{ question: "Quel animal est nocturne ?", options: ["Chauve-souris", "Écureuil", "Ours"], answer: "Chauve-souris" },
{ question: "Quel oiseau a des plumes roses ?", options: ["Flamant rose", "Colibri", "Perroquet"], answer: "Flamant rose" },
{ question: "Quel animal est le roi de la jungle ?", options: ["Lion", "Tigre", "Éléphant"], answer: "Lion" },
{ question: "Quel insecte peut soulever 50 fois son propre poids ?", options: ["Fourmi", "Abeille", "Mouche"], answer: "Fourmi" },
{ question: "Quel animal peut se déplacer sous terre ?", options: ["Taupe", "Souris", "Rat"], answer: "Taupe" },
{ question: "Quel animal vit dans un terrier ?", options: ["Lapin", "Chien", "Chat"], answer: "Lapin" },
{ question: "Quel est le plus grand félin ?", options: ["Tigre", "Lion", "Jaguar"], answer: "Tigre" },
{ question: "Quel animal a des griffes rétractiles ?", options: ["Chat", "Chien", "Éléphant"], answer: "Chat" },
{ question: "Quel oiseau est célèbre pour son mimétisme vocal ?", options: ["Perroquet", "Aigle", "Moineau"], answer: "Perroquet" },
{ question: "Quel animal est utilisé pour la police montée ?", options: ["Cheval", "Chien", "Chameau"], answer: "Cheval" },
{ question: "Quel animal a une fourrure épaisse et blanche ?", options: ["Ours polaire", "Renard arctique", "Loup"], answer: "Ours polaire" },
{ question: "Quel mammifère est le plus petit ?", options: ["Musaraigne étrusque", "Souris", "Hamster"], answer: "Musaraigne étrusque" },
{ question: "Quel animal peut changer de sexe ?", options: ["Poisson-clown", "Poisson rouge", "Tortue"], answer: "Poisson-clown" },
{ question: "Quel animal est connu pour sa sagesse ?", options: ["Hibou", "Chien", "Cheval"], answer: "Hibou" },
{ question: "Quel animal est le plus venimeux ?", options: ["Méduse-boîte", "Serpent", "Araignée"], answer: "Méduse-boîte" },
{ question: "Quel est le plus grand oiseau de proie ?", options: ["Condor", "Aigle", "Faucon"], answer: "Condor" }
];


const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Nombre de questions à afficher par session de quiz
const numberOfQuestions = 10;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answerStatus, setAnswerStatus] = useState(null);

  useEffect(() => {
    // Mélanger les questions et sélectionner les premières 'numberOfQuestions' questions
    const shuffledQuestions = shuffleArray(questions).slice(0, numberOfQuestions);
    setQuizQuestions(shuffledQuestions);
  }, []);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    setAnswerStatus(option === quizQuestions[currentQuestion].answer ? 'correct' : 'incorrect');
  };

  const handleNextQuestion = () => {
    if (answerStatus === 'correct') {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setAnswerStatus(null);
    } else {
      setShowScore(true);
    }
  };

  // Vérifiez si quizQuestions est vide ou si l'index currentQuestion est hors limites
  if (!quizQuestions.length || !quizQuestions[currentQuestion]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          Vous avez obtenu {score} sur {quizQuestions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className={`option-button ${selectedOption === option ? (answerStatus === 'correct' ? 'correct' : 'incorrect') : ''}`}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="next-button" onClick={handleNextQuestion} disabled={selectedOption === null}>
            Suivant
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;