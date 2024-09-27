
import { useContext, useState } from 'react';
import { ButtonColoredComponent,  } from '../../components';
import gamesData from '../../data/gamesData'; 
import { Context } from "../../shared/context";
import "./gamesScreen.css"

function SportGameScreen() {
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

      <h2>{t("sportGameScreen")}</h2>
    }
      {activeGame === -1 && 
        <div className="screens-box-items">
          {gamesData.sportGames.map((imgUrl, index) => (
            <ButtonColoredComponent  key={index}  imgGame={imgUrl}  handleGameOn={() => handleGameOn(index)}  
              text={gamesData.sportGamesNames[index]}
            />
          ))}
        </div>
      }
      {activeGame === 0 && 
        {/* <SoundGameScreen /> */}
      }
    </div>
  );
}

export default SportGameScreen;
