
import { useState } from 'react';
import { ButtonColoredComponent, InfoComponent, RuntocolorGameComponent, ScreenTitleComponent, SearchRoomGame,  } from '../../components';
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
    <>
      <ScreenTitleComponent text={"sportGameScreen"} />
    <div className='buttons-position-absolute'>
    <InfoComponent title1={"typeOfGameI"}  title2={"objectiveOfGameI"} text1={"sportGameI1"} text2={"sportGameI2"}/>

    </div>
    </>
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
      {activeGame === 1 && 
        <SearchRoomGame returnToScreen={handleReturn} />
      }
    </div>
  );
}

export default SportGameScreen;
