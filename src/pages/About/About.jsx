import { motion } from "framer-motion";
import "./About.scss";
import aboutImage from "../../image/logo.webp"; // Assurez-vous que le chemin de l'image est correct

const About = () => {
  return (
    <motion.div
      className="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="background-decor"></div>
      <div className="background-decor2"></div>
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Monde Animal d'Ishaaq
      </motion.h1>
      <motion.img
        src={aboutImage}
        alt="About Monde Animal d'Ishaaq"
        className="about-image"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="content"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      >
        <p>
          Bienvenue sur le site éducatif "Monde Animal d'Ishaaq" ! Notre mission
          est de fournir une plateforme interactive et ludique où les enfants
          peuvent apprendre et découvrir le monde fascinant des animaux.
        </p>
        <p>
          À travers des jeux éducatifs, des quiz, et des activités interactives,
          nous visons à rendre l'apprentissage amusant et engageant. Explorez
          notre site pour découvrir une variété de contenus éducatifs adaptés
          aux jeunes esprits curieux.
        </p>
        <p>
          Notre objectif est de stimuler la curiosité naturelle des enfants et
          de les encourager à en apprendre davantage sur les différents
          animaux, leurs habitats, et leurs comportements. Nous croyons que
          l'éducation peut être à la fois instructive et divertissante, et nous
          nous efforçons de créer une expérience enrichissante pour tous nos
          utilisateurs.
        </p>
        <p>
          Merci de visiter "Monde Animal d'Ishaaq". Nous espérons que vous
          trouverez notre site à la fois éducatif et amusant !
        </p>
      </motion.div>
    </motion.div>
  );
};


export default About;
