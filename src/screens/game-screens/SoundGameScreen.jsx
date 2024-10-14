import { useContext, useState } from 'react';
import { ButtonColoredComponent, SoundGameComponent } from '../../components';
import gamesData from '../../data/gamesData'; 
import { Context } from "../../shared/context";
import "./gamesScreen.css";

function SoundGameScreen() {
  const { t } = useContext(Context);
  const [activeGame, setActiveGame] = useState(-1);
  
  const handleGameOn = (index) => {
    setActiveGame((prev) => prev === index ? -1 : index);  
  };

  const handleReturn = () => {
    setActiveGame(-1);
  };



  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 && <h2>{t("songGameScreen")}</h2>}
      {activeGame === -1 && 
        <div className="screens-box-items">
          {gamesData.soundGames.map((imgUrl, index) => (
            <ButtonColoredComponent 
              key={index} 
              imgGame={imgUrl} 
              handleGameOn={() => handleGameOn(index)} 
              text={gamesData.soundGamesNames[index]}
            />
          ))}
        </div>
      }
      {activeGame === 0 && <SoundGameComponent returnToScreen={handleReturn} />}
    </div>
  );
}

export default SoundGameScreen;
