import {  useState } from 'react';
import { ButtonColoredComponent, ElectionGamesComponent, InfoComponent, ScreenTitleComponent, SizeGameComponent } from '../../components';
import gamesData from '../../data/gamesData'; 
import "./gamesScreen.css"

function QuestionGameScreen() {
  const [activeGame, setActiveGame] = useState(-1);

  const handleGameOn = (index) => {
    setActiveGame((prev) => prev === index ? -1 : index); // Toggle the active game
  };
  const handleReturn = () => {
    setActiveGame(-1)
  }

  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 && 
    <>
      <ScreenTitleComponent text={"questionGameScreen"} />
      <div className='buttons-position-absolute'>
        <InfoComponent title1={"typeOfGameI"}  title2={"objectiveOfGameI"} text1={"questionGameI1"} text2={"questionGameI2"}/>
      </div>
    </>
      }
      {activeGame === -1 && 
        <div className="screens-box-items">
          {gamesData.questionGames.map((imgUrl, index) => (
            <ButtonColoredComponent 
              key={index} 
              imgGame={imgUrl} 
              handleGameOn={() => handleGameOn(index)}  
              text={gamesData.questionGamesNames[index]}
            />
          ))}
        </div>
      }
      {activeGame === 0 && 
        <ElectionGamesComponent returnToScreen={handleReturn}/>
      }
      {activeGame === 1 && 
        <SizeGameComponent  returnToScreen={handleReturn}/>
      }
      {/* Add more game components as needed */}
    </div>
  );
}

export default QuestionGameScreen;
