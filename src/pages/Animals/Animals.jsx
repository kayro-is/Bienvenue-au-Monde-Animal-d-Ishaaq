
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import './Animals.scss';

const Animals = () => {
  const animalData = [
    { name: 'Lion', description: 'Le roi de la jungle, connu pour sa crinière majestueuse et son rugissement puissant.', image: '/lion.jpg' },
    { name: 'Elephant', description: 'Le plus grand animal terrestre, reconnaissable par ses grandes oreilles et sa trompe.', image: '/elephant.jpg' },
    { name: 'Tigre', description: 'Un grand félin carnivore, célèbre pour ses rayures oranges et noires.', image: '/tigre.jpg' },
    { name: 'Girafe', description: 'Le plus grand mammifère terrestre, identifiable par son long cou et ses pattes élancées.', image: '/giraf.jpg' },
    { name: 'Zèbre', description: 'Un herbivore africain distinctif, connu pour ses rayures noires et blanches.', image: '/zébre.jpg' },
    { name: 'Panda', description: 'Un ours noir et blanc adoré, natif de la Chine, principalement mangeur de bambou.', image: '/panda.jpg' },
    { name: 'Koala', description: 'Un marsupial australien arboricole, connu pour son régime alimentaire à base de feuilles d\'eucalyptus.', image: '/koala.jpg' },
    { name: 'Pingouin', description: 'Un oiseau non volant des régions antarctiques, connu pour son plumage noir et blanc et sa démarche enjouée.', image: '/penguin.jpg' },
    { name: 'Rhinocéros', description: 'Un grand mammifère herbivore avec une ou deux cornes sur le nez, souvent menacé par le braconnage.', image: '/rhinoceros.jpg' },
    { name: 'Kangourou', description: 'Un marsupial australien célèbre pour sa poche ventrale et ses puissants sauts.', image: '/kangaroo.jpg' },
    { name: 'Ours polaire', description: 'Un grand prédateur de l\'Arctique, connu pour son pelage blanc et sa capacité à nager sur de longues distances.', image: '/Ours_polaire.jpg' },
    { name: 'Lémurien', description: 'Un primate endémique de Madagascar, célèbre pour ses grands yeux et ses comportements sociaux complexes.', image: '/Lémurien.jpg' },
    { name: 'Hippopotame', description: 'Un grand mammifère semi-aquatique d\'Afrique, connu pour sa grande bouche et son comportement territorial.', image: '/hippopotame.jpg' },
    { name: 'Guépard', description: 'Le mammifère terrestre le plus rapide, capable d\'atteindre des vitesses de 100 km/h en courtes distances.', image: '/Guépard.jpg' },
    { name: 'Flamant rose', description: 'Un oiseau aquatique connu pour sa couleur rose vibrante et ses longues pattes fines.', image: '/Flamant rose.jpg' },
    { name: 'Loup', description: 'Un grand canidé sauvage, célèbre pour ses hurlements et sa vie en meute.', image: '/Loup.jpg' },
    { name: 'Paon', description: 'Un oiseau célèbre pour ses plumes colorées et sa queue spectaculaire qu\'il déploie pour impressionner les femelles.', image: '/Paon.jpg' },
    { name: 'Chameau', description: 'Un grand mammifère désertique connu pour ses bosses qui stockent la graisse et sa capacité à survivre dans des conditions arides.', image: '/Chameau.jpg' },
    { name: 'Gorille', description: 'Le plus grand des primates, célèbre pour sa force, son intelligence et ses comportements sociaux complexes.', image: '/Gorille.jpg' },
    { name: 'Loutre', description: 'Un petit mammifère semi-aquatique, connu pour son comportement joueur et sa capacité à utiliser des outils.', image: '/Loutre.jpg' },
    { name: 'Ara', description: 'Un perroquet coloré et intelligent, souvent trouvé dans les forêts tropicales d\'Amérique du Sud.', image: '/Ara.jpg' },
    { name: 'Serpent', description: 'Un reptile sans pattes, connu pour sa peau écailleuse et sa capacité à se glisser dans des espaces étroits.', image: '/Serpent.jpg' },
    { name: 'Orang-outan', description: 'Un grand primate arboricole d\'Asie du Sud-Est, connu pour ses longs bras et son comportement intelligent.', image: '/images/orangutan.jpg' },
    { name: 'Hippocampe', description: 'Un petit poisson avec une tête en forme de cheval, connu pour sa capacité à se camoufler et à nager debout.', image: '/images/seahorse.jpg' },
    { name: 'Émeu', description: 'Un grand oiseau incapable de voler, natif d\'Australie, connu pour sa vitesse de course impressionnante.', image: '/images/emu.jpg' },
    { name: 'Puma', description: 'Un grand félin solitaire, également connu sous le nom de cougar ou lion des montagnes, trouvé en Amérique.', image: '/images/puma.jpg' },
    { name: 'Lynx', description: 'Un félin de taille moyenne, identifiable par ses oreilles pointues et ses pattes robustes, souvent trouvé dans les forêts boréales.', image: '/images/lynx.jpg' },
    { name: 'Phoque', description: 'Un mammifère marin, connu pour son corps fusiforme et sa capacité à plonger profondément dans l\'océan.', image: '/images/seal.jpg' },
    { name: 'Tortue géante', description: 'Une grande tortue terrestre, célèbre pour sa longévité et trouvée principalement dans les îles Galápagos et les Seychelles.', image: '/images/giant_tortoise.jpg' },
    { name: 'Jaguar', description: 'Un grand félin tacheté d\'Amérique du Sud, connu pour sa force et ses compétences de chasse exceptionnelles.', image: '/images/jaguar.jpg' },
    { name: 'Maki catta', description: 'Un lémurien endémique de Madagascar, connu pour sa queue annelée noir et blanc et ses grands yeux.', image: '/images/ring_tailed_lemur.jpg' },
    { name: 'Chauve-souris', description: 'Un mammifère volant, capable d\'écolocation pour chasser les insectes et trouver son chemin dans l\'obscurité.', image: '/images/bat.jpg' },
    { name: 'Bison', description: 'Un grand herbivore d\'Amérique du Nord, connu pour sa grande bosse sur le dos et sa barbe hirsute.', image: '/images/bison.jpg' },
    { name: 'Caracal', description: 'Un félin de taille moyenne, reconnaissable par ses oreilles noires et pointues avec des touffes de poils.', image: '/images/caracal.jpg' },
    { name: 'Dauphin', description: 'Un cétacé intelligent et sociable, connu pour ses acrobaties et sa capacité à communiquer par des sifflements.', image: '/images/dolphin.jpg' },
    { name: 'Échidné', description: 'Un mammifère ovipare d\'Australie et de Nouvelle-Guinée, couvert de piquants et utilisant une langue longue pour attraper les insectes.', image: '/images/echidna.jpg' },
    { name: 'Gazelle', description: 'Un gracieux herbivore des savanes africaines, connu pour sa rapidité et ses sauts agiles.', image: '/images/gazelle.jpg' },
    { name: 'Iguane', description: 'Un grand lézard herbivore d\'Amérique centrale et du Sud, célèbre pour ses écailles vertes et sa crête dorsale.', image: '/images/iguana.jpg' },
    { name: 'Loriquet', description: 'Un petit perroquet coloré d\'Australie et des îles environnantes, connu pour son alimentation à base de nectar.', image: '/images/lory.jpg' },
    { name: 'Manchot', description: 'Un oiseau aquatique de l\'hémisphère sud, adapté à la vie dans les eaux glaciales de l\'Antarctique.', image: '/images/penguin2.jpg' },
    { name: 'Narval', description: 'Un cétacé de l\'Arctique, surnommé la "licorne des mers" en raison de sa longue défense torsadée.', image: '/images/narwhal.jpg' },
    { name: 'Ocelot', description: 'Un félin tacheté des forêts tropicales d\'Amérique centrale et du Sud, connu pour ses compétences de grimpeur.', image: '/images/ocelot.jpg' },
    { name: 'Pangolin', description: 'Un mammifère couvert d\'écailles, connu pour se rouler en boule pour se protéger et son régime alimentaire à base de fourmis.', image: '/images/pangolin.jpg' },
    { name: 'Tapir', description: 'Un grand herbivore au nez préhensile, trouvé dans les forêts tropicales d\'Amérique du Sud et d\'Asie du Sud-Est.', image: '/images/tapir.jpg' },
    { name: 'Morse', description: 'Un grand mammifère marin de l\'Arctique, reconnaissable par ses longues défenses et ses moustaches.', image: '/images/walrus.jpg' },
    { name: 'Mandrill', description: 'Un primate coloré de la famille des babouins, connu pour son visage coloré et ses comportements sociaux.', image: '/images/mandrill.jpg' }
  ];

  return (
    <div className="animals-page">
      <h2>Liste des Animaux</h2>
      <div className="animal-grid">
        {animalData.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Animals;
