
import { useState } from 'react';
import { ButtonColoredComponent, InfoComponent, ScreenTitleComponent,  } from '../../components';
import gamesData from '../../data/gamesData'; 
import "./gamesScreen.css"

function DrawGameScreen() {
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
      <ScreenTitleComponent text={"drawGameScreen"} />
      <div className='buttons-position-absolute'>
        <InfoComponent title1={"typeOfGameI"}  title2={"objectiveOfGameI"} text1={"drawGameI1"} text2={"drawGameI2"}/>
      </div>
    </>
      }
      {activeGame === -1 && 
        <div className="screens-box-items">
          {gamesData.drawGames.map((imgUrl, index) => (
            <ButtonColoredComponent  key={index}  imgGame={imgUrl}  handleGameOn={() => handleGameOn(index)}  
              text={gamesData.drawGamesNames[index]}
            />
          ))}
        </div>
      }
      {activeGame === 0 && 
        {/* <ShadowGamesComponent  returnToScreen={handleReturn}/> */}

      }
      {activeGame === 1 && 
        {/* <SoundGameScreen /> */}
      }
    </div>
  );
}

export default DrawGameScreen;
