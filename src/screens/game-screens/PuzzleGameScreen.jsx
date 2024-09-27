import { useContext, useState } from 'react';
import { ButtonColoredComponent, ShadowGamesComponent } from '../../components';
import gamesData from '../../data/gamesData'; 
import { Context } from "../../shared/context";
import "./gamesScreen.css"

function PuzzleGameScreen() {
  const { t } = useContext(Context);
  const [activeGame, setActiveGame] = useState(-1);
  
  const handleGameOn = (index) => {
    setActiveGame((prev) => prev === index ? -1 : index);  
  };
  const handleReturn = () => {
    setActiveGame(-1)
  }
  return (
    <div className="screens-box setting-screen">
    {activeGame === -1 &&
      <h2>{t("puzzleGameScreen")}</h2>
    }
      {activeGame === -1 && 
        <div className="screens-box-items">
          {gamesData.puzzleGames.map((imgUrl, index) => (
            <ButtonColoredComponent  key={index}  imgGame={imgUrl}  handleGameOn={() => handleGameOn(index)}  
              text={gamesData.puzzleGamesNames[index]}

            />
          ))}
        </div>
      }
      {activeGame === 0 && 
        <ShadowGamesComponent  returnToScreen={handleReturn}/>
      }
    </div>
  );
}

export default PuzzleGameScreen;
