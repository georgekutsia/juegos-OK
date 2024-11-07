
import { useState } from 'react';
import { ButtonColoredComponent, RuntocolorGameComponent, ScreenTitleComponent,  } from '../../components';
import gamesData from '../../data/gamesData'; 
import "./gamesScreen.css"

function SportGameScreen() {
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
      <ScreenTitleComponent text={"sportGameScreen"} />
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
        <RuntocolorGameComponent returnToScreen={handleReturn} />
      }
    </div>
  );
}

export default SportGameScreen;
