
import Jeux from "./jeux/Jeux";
import Jeux2 from "./jeux/Jeux2";
import "./GameSelector.scss";




    const GameSelector = () => {
        return (
          <div className="game-selector">
            <h1>Jeux et Quiz sur les Animaux</h1>
            <div className="games-container">
              <div className="game-column">
                <h2>Devinez l'Animal</h2>
                <Jeux />
              </div>
              <div className="game-column">
                <h2>Trouvez l'Animal Caché</h2>
                <Jeux2 />
              </div>
            </div>
          </div>
        );
      }

export default GameSelector;
