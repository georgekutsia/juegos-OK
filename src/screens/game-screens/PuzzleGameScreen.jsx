import { useState } from 'react';
import { ButtonColoredComponent, InfoComponent, MissingGameComponent, ScreenTitleComponent, ShadowGamesComponent } from '../../components';
import gamesData from '../../data/gamesData'; 
import "./gamesScreen.css"

function PuzzleGameScreen() {
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
        <ScreenTitleComponent text={"puzzleGameScreen"} />
      <div className='buttons-position-absolute'>
        <InfoComponent title1={"typeOfGameI"}  title2={"objectiveOfGameI"} text1={"puzzleGameI1"} text2={"puzzleGameI2"}/>
      </div>
    </>
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
      {activeGame === 1 && 
        <MissingGameComponent  returnToScreen={handleReturn}/>
      }
    </div>
  );
}

export default PuzzleGameScreen;
