

import { motion } from 'framer-motion';
import Slider from 'react-slick';
import './Home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quiz from '../../components/quiz/Quiz';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="home">
      <motion.h2 initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        Bienvenue au Monde Animal d'Ishaaq
      </motion.h2>
      <motion.p initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        Découvrez nos animaux incroyables et nos expositions fascinantes.
      </motion.p>
      
      {/* Carrousel d'images */}
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="/ishaaqO.webp" alt="ishaaq" />
          </div>
          <div>
            <img src="/lion.jpg" alt="Lion" />
          </div>
          <div>
            <img src="/elephant.jpg" alt="Éléphant" />
          </div>
          <div>
            <img src="tigre.jpg" alt="Girafe" />
          </div>
        </Slider>
      </div>
      
      <Quiz />
      
      {/* Section des informations pratiques */}
      <div className="education">
        <h3>Apprends la vie des animaux</h3>
        <div className="facts">
          <div className="fact-item">
            <h4>Fait amusant sur les lions</h4>
            <p>Les lions dorment jusqu'à 20 heures par jour. Leur rugissement peut être entendu jusqu'à 8 km de distance.</p>
          </div>
          <div className="fact-item">
            <h4>Fait amusant sur les éléphants</h4>
            <p>Les éléphants peuvent communiquer sur de longues distances en utilisant des sons de basse fréquence appelés infrasons.</p>
          </div>
          <div className="fact-item">
            <h4>Fait amusant sur les girafes</h4>
            <p>Les girafes ont des langues noires qui peuvent mesurer jusqu'à 45 cm de long. Elles utilisent leur langue pour attraper les feuilles des arbres.</p>
          </div>
        </div>
        <div className="resources">
          <h4>Ressources pour en savoir plus</h4>
          <ul>
            <li><a href="https://www.wwf.fr/agir-au-quotidien/education-environnement" target="_blank" rel="noopener noreferrer">WWF France - Éducation à l'environnement</a></li>
            <li><a href="https://www.nationalgeographic.fr/animaux" target="_blank" rel="noopener noreferrer">National Geographic - Animaux</a></li>
            <li><a href="https://www.zooactu.com/" target="_blank" rel="noopener noreferrer">Zoo Actu - Informations sur les animaux</a></li>
          </ul>
        </div>
      </div>

       {/* Section des vidéos éducatives */}
       <div className="videos">
        <h3>Vidéos éducatives</h3>
        <div className="video-list">
          <div className="video-item">
            <iframe width="500" height="400" src="/lion.mp4" title="Vidéo éducative 1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>Découvrez le comportement des lions dans la savane.</p>
          </div>
          <div className="video-item">
            <iframe width="500" height="400" src="/elephant.mp4" title="Vidéo éducative 2" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>La preuve de l'intelligence des éléphants.</p>
          </div>
          <div className="video-item">
            <iframe width="500" height="400" src="/tigre.mp4" title="Vidéo éducative 3" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>Un grand félin carnivore, célèbre pour ses rayures oranges et noires.</p>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Home;
