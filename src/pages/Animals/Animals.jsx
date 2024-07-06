
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import { motion } from 'framer-motion';
import './Animals.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const Animals = () => {
  const animalData = [
    {
      name: 'Lion',
      description: 'Le roi de la jungle, connu pour sa crinière majestueuse et son rugissement puissant. Les lions vivent en groupes sociaux appelés "troupes" ou "prides" et sont des chasseurs redoutables.',
      habitat: 'Savane africaine et quelques forêts denses en Inde.',
      facts: 'Les lionnes sont principalement responsables de la chasse tandis que les mâles protègent le territoire.',
      image: '/lion.jpg'
    },
    {
      name: 'Elephant',
      description: 'Le plus grand animal terrestre, reconnaissable par ses grandes oreilles et sa trompe. Les éléphants sont connus pour leur intelligence et leur mémoire exceptionnelle.',
      habitat: 'Forêts et savanes d\'Afrique, forêts d\'Asie du Sud et du Sud-Est.',
      facts: 'Les éléphants utilisent leur trompe pour boire, se nourrir, et communiquer avec les autres membres de leur troupeau.',
      image: '/elephant.jpg'
    },
    {
      name: 'Tigre',
      description: 'Un grand félin carnivore, célèbre pour ses rayures oranges et noires. Les tigres sont des chasseurs solitaires et nocturnes.',
      habitat: 'Forêts tropicales, prairies, et marécages d\'Asie.',
      facts: 'Chaque tigre a un motif de rayures unique, similaire à une empreinte digitale humaine.',
      image: '/tigre.jpg'
    },
    {
      name: 'Girafe',
      description: 'Le plus grand mammifère terrestre, identifiable par son long cou et ses pattes élancées. Les girafes utilisent leur long cou pour atteindre les feuilles des arbres.',
      habitat: 'Savane africaine et boisements ouverts.',
      facts: 'Malgré leur long cou, les girafes ont le même nombre de vertèbres cervicales que les humains.',
      image: '/giraf.jpg'
    },
    {
      name: 'Zèbre',
      description: 'Un herbivore africain distinctif, connu pour ses rayures noires et blanches. Les rayures des zèbres sont uniques à chaque individu, aidant à camoufler et à confondre les prédateurs.',
      habitat: 'Savane et prairies africaines.',
      facts: 'Les zèbres vivent en groupes sociaux et sont très agiles et rapides pour échapper aux prédateurs.',
      image: '/zébre.jpg'
    },
    {
      name: 'Panda',
      description: 'Un ours noir et blanc adoré, natif de la Chine, principalement mangeur de bambou. Les pandas sont connus pour leur caractère docile et leur apparence mignonne.',
      habitat: 'Forêts de bambou des montagnes de Chine.',
      facts: 'Malgré leur régime principalement végétarien, les pandas appartiennent à la famille des carnivores.',
      image: '/panda.jpg'
    },
    {
      name: 'Koala',
      description: 'Un marsupial australien arboricole, connu pour son régime alimentaire à base de feuilles d\'eucalyptus. Les koalas passent la majeure partie de leur temps à dormir dans les arbres.',
      habitat: 'Forêts d\'eucalyptus d\'Australie.',
      facts: 'Les koalas dorment jusqu\'à 20 heures par jour pour conserver leur énergie.',
      image: '/koala.jpg'
    },
    {
      name: 'Pingouin',
      description: 'Un oiseau non volant des régions antarctiques, connu pour son plumage noir et blanc et sa démarche enjouée. Les pingouins sont d\'excellents nageurs et passent beaucoup de temps dans l\'eau.',
      habitat: 'Régions antarctiques et côtes rocheuses.',
      facts: 'Les pingouins utilisent leurs ailes comme des nageoires pour se propulser dans l\'eau.',
      image: '/penguin.jpg'
    },
    {
      name: 'Rhinocéros',
      description: 'Un grand mammifère herbivore avec une ou deux cornes sur le nez, souvent menacé par le braconnage. Les rhinocéros ont une peau épaisse et sont très territoriaux.',
      habitat: 'Savane africaine et forêts denses d\'Asie.',
      facts: 'Les cornes de rhinocéros sont faites de kératine, la même substance que les ongles humains.',
      image: '/rhinoceros.jpg'
    },
    {
      name: 'Kangourou',
      description: 'Un marsupial australien célèbre pour sa poche ventrale et ses puissants sauts. Les kangourous se déplacent en sautant et sont très rapides.',
      habitat: 'Plaines et forêts d\'Australie.',
      facts: 'Les kangourous peuvent couvrir jusqu\'à 8 mètres en un seul saut.',
      image: '/kangaroo.jpg'
    },
    {
      name: 'Ours polaire',
      description: 'Un grand prédateur de l\'Arctique, connu pour son pelage blanc et sa capacité à nager sur de longues distances. Les ours polaires sont des chasseurs solitaires.',
      habitat: 'Régions arctiques.',
      facts: 'Les ours polaires ont une couche de graisse épaisse qui les isole du froid extrême.',
      image: '/ours_polaire.jpg'
    },
    {
      name: 'Lémurien',
      description: 'Un primate endémique de Madagascar, célèbre pour ses grands yeux et ses comportements sociaux complexes. Les lémuriens sont principalement nocturnes.',
      habitat: 'Forêts tropicales de Madagascar.',
      facts: 'Les lémuriens communiquent par des vocalisations et des marquages olfactifs.',
      image: '/lémurien.jpg'
    },
    {
      name: 'Hippopotame',
      description: 'Un grand mammifère semi-aquatique d\'Afrique, connu pour sa grande bouche et son comportement territorial. Les hippopotames passent beaucoup de temps dans l\'eau.',
      habitat: 'Rivières et lacs d\'Afrique subsaharienne.',
      facts: 'Les hippopotames peuvent rester immergés sous l\'eau pendant plusieurs minutes.',
      image: '/hippopotame.jpg'
    },
    {
      name: 'Guépard',
      description: 'Le mammifère terrestre le plus rapide, capable d\'atteindre des vitesses de 100 km/h en courtes distances. Les guépards sont des chasseurs diurnes.',
      habitat: 'Savane africaine.',
      facts: 'Les guépards ont des griffes semi-rétractiles qui leur offrent une meilleure adhérence lors des courses rapides.',
      image: '/Guépard.jpg'
    },
    {
      name: 'Flamant rose',
      description: 'Un oiseau aquatique connu pour sa couleur rose vibrante et ses longues pattes fines. Les flamants roses se nourrissent de crevettes et d\'algues.',
      habitat: 'Lacs salés et lagunes des régions tropicales et subtropicales.',
      facts: 'La couleur rose des flamants roses provient des caroténoïdes présents dans leur alimentation.',
      image: '/flamant rose.jpg'
    },
    {
      name: 'Loup',
      description: 'Un grand canidé sauvage, célèbre pour ses hurlements et sa vie en meute. Les loups sont des chasseurs coopératifs et ont une hiérarchie sociale complexe.',
      habitat: 'Forêts, toundras et prairies d\'Amérique du Nord, d\'Europe et d\'Asie.',
      facts: 'Les loups peuvent parcourir de longues distances à la recherche de nourriture, parfois jusqu\'à 20 km par jour.',
      image: '/loup.jpg'
    },
    {
      name: 'Paon',
      description: 'Un oiseau célèbre pour ses plumes colorées et sa queue spectaculaire qu\'il déploie pour impressionner les femelles. Les paons sont également connus pour leur cri distinctif.',
      habitat: 'Forêts tropicales d\'Asie du Sud.',
      facts: 'La queue d\'un paon mâle peut atteindre jusqu\'à 2 mètres de long.',
      image: '/paon.jpg'
    },
    {
      name: 'Chameau',
      description: 'Un grand mammifère désertique connu pour ses bosses qui stockent la graisse et sa capacité à survivre dans des conditions arides. Les chameaux sont souvent utilisés comme animaux de trait.',
      habitat: 'Déserts et steppes d\'Afrique du Nord et d\'Asie centrale.',
      facts: 'Les chameaux peuvent boire jusqu\'à 40 litres d\'eau en une seule fois.',
      image: '/chameau.jpg'
    },
    {
      name: 'Gorille',
      description: 'Le plus grand des primates, célèbre pour sa force, son intelligence et ses comportements sociaux complexes. Les gorilles vivent en groupes familiaux dirigés par un mâle dominant appelé "dos argenté".',
      habitat: 'Forêts tropicales d\'Afrique centrale.',
      facts: 'Les gorilles partagent environ 98% de leur ADN avec les humains.',
      image: '/gorille.jpg'
    },
    {
      name: 'Loutre',
      description: 'Un petit mammifère semi-aquatique, connu pour son comportement joueur et sa capacité à utiliser des outils. Les loutres se nourrissent principalement de poissons et de crustacés.',
      habitat: 'Rivières, lacs et côtes du monde entier.',
      facts: 'Les loutres de mer utilisent des pierres pour ouvrir les coquillages.',
      image: '/loutre.jpg'
    },
    {
      name: 'Ara',
      description: 'Un perroquet coloré et intelligent, souvent trouvé dans les forêts tropicales d\'Amérique du Sud. Les aras sont connus pour leur capacité à imiter les sons et les paroles.',
      habitat: 'Forêts tropicales et subtropicales d\'Amérique du Sud.',
      facts: 'Certains aras peuvent vivre jusqu\'à 50 ans ou plus en captivité.',
      image: '/ara.jpg'
    },
    {
      name: 'Serpent',
      description: 'Un reptile sans pattes, connu pour sa peau écailleuse et sa capacité à se glisser dans des espaces étroits. Les serpents varient en taille et en dangerosité.',
      habitat: 'Divers habitats à travers le monde, des déserts aux forêts tropicales.',
      facts: 'Les serpents utilisent leur langue pour sentir l\'environnement.',
      image: '/serpent.jpg'
    },
    {
      name: 'Orang-outan',
      description: 'Un grand primate arboricole d\'Asie du Sud-Est, connu pour ses longs bras et son comportement intelligent. Les orangs-outans passent la majeure partie de leur vie dans les arbres.',
      habitat: 'Forêts tropicales de Bornéo et de Sumatra.',
      facts: 'Les orangs-outans construisent des nids dans les arbres pour dormir chaque nuit.',
      image: '/orang-outan.jpg'
    },
    {
      name: 'Hippocampe',
      description: 'Un petit poisson avec une tête en forme de cheval, connu pour sa capacité à se camoufler et à nager debout. Les hippocampes mâles portent les œufs dans une poche ventrale.',
      habitat: 'Herbiers marins et récifs coralliens du monde entier.',
      facts: 'Les hippocampes peuvent changer de couleur pour se fondre dans leur environnement.',
      image: '/hippocampe.jpg'
    },
    {
      name: 'Puma',
      description: 'Un grand félin solitaire, également connu sous le nom de cougar ou lion des montagnes, trouvé en Amérique. Les pumas sont des chasseurs agiles et puissants.',
      habitat: 'Montagnes, forêts et déserts d\'Amérique du Nord et du Sud.',
      facts: 'Les pumas peuvent sauter jusqu\'à 5 mètres en hauteur.',
      image: '/puma.jpg'
    },
    {
      name: 'Lynx',
      description: 'Un félin de taille moyenne, identifiable par ses oreilles pointues et ses pattes robustes, souvent trouvé dans les forêts boréales. Les lynx sont des chasseurs solitaires.',
      habitat: 'Forêts boréales et montagnes d\'Europe, d\'Asie et d\'Amérique du Nord.',
      facts: 'Les lynx ont des touffes de poils sur leurs oreilles qui améliorent leur audition.',
      image: '/lynx.jpg'
    },
    {
      name: 'Phoque',
      description: 'Un mammifère marin, connu pour son corps fusiforme et sa capacité à plonger profondément dans l\'océan. Les phoques sont d\'excellents nageurs.',
      habitat: 'Côtes et océans du monde entier, des régions arctiques aux régions tempérées.',
      facts: 'Les phoques peuvent retenir leur souffle jusqu\'à 20 minutes.',
      image: '/phoque.jpg'
    },
    {
      name: 'Tortue géante',
      description: 'Une grande tortue terrestre, célèbre pour sa longévité et trouvée principalement dans les îles Galápagos et les Seychelles. Les tortues géantes peuvent vivre plus de 100 ans.',
      habitat: 'Îles Galápagos et Seychelles.',
      facts: 'Les tortues géantes peuvent peser plus de 300 kg.',
      image: '/Tortue géante.jpg'
    },
    {
      name: 'Jaguar',
      description: 'Un grand félin tacheté d\'Amérique du Sud, connu pour sa force et ses compétences de chasse exceptionnelles. Les jaguars sont de puissants nageurs.',
      habitat: 'Forêts tropicales et marécages d\'Amérique du Sud.',
      facts: 'Les jaguars ont la morsure la plus puissante de tous les grands félins.',
      image: '/jaguar.jpg'
    },
    {
      name: 'Bison',
      description: 'Un grand herbivore d\'Amérique du Nord, connu pour sa grande bosse sur le dos et sa barbe hirsute. Les bisons vivent en troupeaux et sont des symboles de la prairie américaine.',
      habitat: 'Prairies et plaines d\'Amérique du Nord.',
      facts: 'Les bisons peuvent courir à des vitesses allant jusqu\'à 60 km/h.',
      image: '/bison.jpg'
    },
    {
      name: 'Caracal',
      description: 'Un félin de taille moyenne, reconnaissable par ses oreilles noires et pointues avec des touffes de poils. Les caracals sont d\'excellents chasseurs et grimpeurs.',
      habitat: 'Savane et forêts d\'Afrique, du Moyen-Orient et d\'Asie centrale.',
      facts: 'Les caracals peuvent sauter jusqu\'à 3 mètres de hauteur pour attraper des oiseaux en vol.',
      image: '/caracal.jpg'
    },
    {
      name: 'Dauphin',
      description: 'Un cétacé intelligent et sociable, connu pour ses acrobaties et sa capacité à communiquer par des sifflements. Les dauphins vivent en groupes appelés "pods".',
      habitat: 'Océans et mers du monde entier.',
      facts: 'Les dauphins utilisent l\'écholocation pour naviguer et chasser.',
      image: '/dauphin.jpg'
    },
   
    {
      name: 'Gazelle',
      description: 'Un gracieux herbivore des savanes africaines, connu pour sa rapidité et ses sauts agiles. Les gazelles vivent en troupeaux et sont des proies communes pour les grands prédateurs.',
      habitat: 'Savane et prairies africaines.',
      facts: 'Les gazelles peuvent atteindre des vitesses de 80 km/h en courant.',
      image: '/images/gazelle.jpg'
    },
    {
      name: 'Iguane',
      description: 'Un grand lézard herbivore d\'Amérique centrale et du Sud, célèbre pour ses écailles vertes et sa crête dorsale. Les iguanes sont des animaux diurnes.',
      habitat: 'Forêts tropicales et zones arides d\'Amérique centrale et du Sud.',
      facts: 'Les iguanes peuvent détacher leur queue pour échapper aux prédateurs.',
      image: '/images/iguana.jpg'
    },
    {
      name: 'Loriquet',
      description: 'Un petit perroquet coloré d\'Australie et des îles environnantes, connu pour son alimentation à base de nectar. Les loriquets sont très sociaux et vivent en groupes.',
      habitat: 'Forêts tropicales et subtropicales d\'Australie et des îles environnantes.',
      facts: 'Les loriquets utilisent leur langue brossée pour récolter le nectar des fleurs.',
      image: '/images/lory.jpg'
    },
    {
      name: 'Manchot',
      description: 'Un oiseau aquatique de l\'hémisphère sud, adapté à la vie dans les eaux glaciales de l\'Antarctique. Les manchots sont d\'excellents nageurs.',
      habitat: 'Régions antarctiques et subantarctiques.',
      facts: 'Les manchots empereurs peuvent plonger à des profondeurs de plus de 500 mètres.',
      image: '/images/penguin2.jpg'
    },
    {
      name: 'Narval',
      description: 'Un cétacé de l\'Arctique, surnommé la "licorne des mers" en raison de sa longue défense torsadée. Les narvals utilisent leur défense pour se battre et sonder la glace.',
      habitat: 'Océans arctiques.',
      facts: 'La défense du narval est en fait une longue dent qui peut atteindre jusqu\'à 3 mètres de long.',
      image: '/images/narwhal.jpg'
    },
    {
      name: 'Ocelot',
      description: 'Un félin tacheté des forêts tropicales d\'Amérique centrale et du Sud, connu pour ses compétences de grimpeur. Les ocelots sont solitaires et nocturnes.',
      habitat: 'Forêts tropicales et subtropicales d\'Amérique centrale et du Sud.',
      facts: 'Les ocelots ont un excellent sens de la vue et de l\'ouïe, ce qui en fait des chasseurs efficaces.',
      image: '/images/ocelot.jpg'
    },
    {
      name: 'Pangolin',
      description: 'Un mammifère couvert d\'écailles, connu pour se rouler en boule pour se protéger et son régime alimentaire à base de fourmis. Les pangolins sont les seuls mammifères entièrement couverts d\'écailles.',
      habitat: 'Forêts tropicales et savanes d\'Afrique et d\'Asie.',
      facts: 'Les pangolins peuvent consommer jusqu\'à 70 millions de fourmis par an.',
      image: '/images/pangolin.jpg'
    },
    {
      name: 'Tapir',
      description: 'Un grand herbivore au nez préhensile, trouvé dans les forêts tropicales d\'Amérique du Sud et d\'Asie du Sud-Est. Les tapirs sont excellents nageurs et passent beaucoup de temps dans l\'eau.',
      habitat: 'Forêts tropicales d\'Amérique du Sud et d\'Asie du Sud-Est.',
      facts: 'Les tapirs utilisent leur nez pour attraper les feuilles et les fruits.',
      image: '/images/tapir.jpg'
    },
    {
      name: 'Morse',
      description: 'Un grand mammifère marin de l\'Arctique, reconnaissable par ses longues défenses et ses moustaches. Les morses utilisent leurs défenses pour se hisser sur la glace.',
      habitat: 'Régions arctiques.',
      facts: 'Les morses peuvent plonger à des profondeurs de plus de 100 mètres à la recherche de nourriture.',
      image: '/images/morse.jpg'
    },
    {
      name: 'Mandrill',
      description: 'Un primate coloré de la famille des babouins, connu pour son visage coloré et ses comportements sociaux. Les mandrills vivent en groupes appelés "hordes".',
      habitat: 'Forêts tropicales d\'Afrique centrale.',
      facts: 'Les mandrills mâles ont un visage multicolore unique, avec des nuances de bleu et de rouge.',
      image: '/images/mandrill.jpg'
    }
  ];

  return (
    <motion.div className="animals-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <h2>Liste des Animaux</h2>
      <motion.div className="animal-grid" variants={containerVariants} initial="hidden" animate="visible">
        {animalData.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Animals;