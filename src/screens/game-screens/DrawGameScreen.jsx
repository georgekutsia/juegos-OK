import { useState } from 'react';
import {
  ButtonColoredComponent,
  InfoComponent,
  LoaderCarComponent,
  RedLight,
  ScreenTitleComponent,
  // ShadowGamesComponent,
  // SoundGameScreen,
} from '../../components';
import gamesData from '../../data/gamesData';
import './gamesScreen.css';

function DrawGameScreen() {
  const [activeGame, setActiveGame] = useState(-1);

  const handleGameOn = (index) => {
    setActiveGame((prev) => (prev === index ? -1 : index));
  };

  const handleReturn = () => setActiveGame(-1);

  const gameComponents = [
    <RedLight />,
  ];

  const renderGameButtons = () => {
    if (gamesData.drawGames && gamesData.drawGames.length > 0) {
      return (
        <div className="screens-box-items">
          {gamesData.drawGames.map((imgUrl, index) => (
            <ButtonColoredComponent
              key={index}
              imgGame={imgUrl}
              handleGameOn={() => handleGameOn(index)}
              text={gamesData.drawGamesNames[index]}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="loaderTime-box">
          <div className="loaderTime"></div>
          <div className="loaderTime-text">Juegos en desarrollo</div>
        </div>
      );
    }
  };

  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 ? (
        <>
          <ScreenTitleComponent text="drawGameScreen" />
          <div className="buttons-position-absolute">
            <InfoComponent
              title1="typeOfGameI"
              title2="objectiveOfGameI"
              text1="drawGameI1"
              text2="drawGameI2"
            />
          </div>
          {renderGameButtons()}
        </>
      ) : (
        gameComponents[activeGame] || <LoaderCarComponent />
      )}
    </div>
  );
}

export default DrawGameScreen;
