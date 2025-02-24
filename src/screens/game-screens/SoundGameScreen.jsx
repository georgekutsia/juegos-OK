import {  useState } from 'react';
import { ButtonColoredComponent, InfoComponent, ScreenTitleComponent, SoundGameComponent, StoriesBookComponent, StoryGameComponent } from '../../components';
import gamesData from '../../data/gamesData'; 
import "./gamesScreen.css";

function SoundGameScreen() {
  const [activeGame, setActiveGame] = useState(-1);
  
  const handleGameOn = (index) => {
    setActiveGame((prev) => prev === index ? -1 : index);  
  };

  const handleReturn = () => {
    setActiveGame(-1);
  };



  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 && 
      <>
        <ScreenTitleComponent text={"songGameScreen"} />
      <div className='buttons-position-absolute'>
          <InfoComponent title1={"typeOfGameI"}  title2={"objectiveOfGameI"} text1={"soundGameI1"} text2={"soundGameI2"}/>
      </div>
    </>
      }
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
      {activeGame === 1 && <StoriesBookComponent returnToScreen={handleReturn} ind={activeGame} indSet={setActiveGame} />}
    </div>
  );
}

export default SoundGameScreen;
