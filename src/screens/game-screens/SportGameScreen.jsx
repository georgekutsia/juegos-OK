import { useState } from 'react';
import {
  ButtonColoredComponent,
  InfoComponent,
  RuntocolorGameComponent,
  ScreenTitleComponent,
  SearchRoomGame,
  LoaderCarComponent
} from '../../components';

import gamesData from '../../data/gamesData';
import './gamesScreen.css';

function SportGameScreen() {
  const [activeGame, setActiveGame] = useState(-1);

  const handleGameOn = (index) => {
    setActiveGame((prev) => (prev === index ? -1 : index));
  };

  const handleReturn = () => setActiveGame(-1);

  const gameComponents = [
    <RuntocolorGameComponent returnToScreen={handleReturn} />,
    <SearchRoomGame returnToScreen={handleReturn} />
    // Agrega más componentes si es necesario
  ];

  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 ? (
        <>
          <ScreenTitleComponent text="sportGameScreen" />
          <div className="buttons-position-absolute">
            <InfoComponent
              title1="typeOfGameI"
              title2="objectiveOfGameI"
              text1="sportGameI1"
              text2="sportGameI2"
            />
          </div>
          <div className="screens-box-items">
            {gamesData.sportGames.map((imgUrl, index) => (
              <ButtonColoredComponent
                key={index}
                imgGame={imgUrl}
                handleGameOn={() => handleGameOn(index)}
                text={gamesData.sportGamesNames[index]}
              />
            ))}
          </div>
        </>
      ) : (
        gameComponents[activeGame] || <LoaderCarComponent />
      )}
    </div>
  );
}

export default SportGameScreen;
