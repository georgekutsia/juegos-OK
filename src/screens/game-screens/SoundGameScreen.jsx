import { useState } from 'react';
import {
  ButtonColoredComponent,
  InfoComponent,
  ScreenTitleComponent,
  SoundGameComponent,
  StoriesBookComponent,
  StoryGameComponent,
  LoaderCarComponent,
  ChooseStoryComponent
} from '../../components';

import gamesData from '../../data/gamesData';
import './gamesScreen.css';

function SoundGameScreen() {
  const [activeGame, setActiveGame] = useState(-1);

  const handleGameOn = (index) => {
    setActiveGame((prev) => (prev === index ? -1 : index));
  };

  const handleReturn = () => setActiveGame(-1);

  const gameComponents = [
    <SoundGameComponent returnToScreen={handleReturn} />,
    <StoriesBookComponent returnToScreen={handleReturn} ind={activeGame} indSet={setActiveGame}/>,
    <ChooseStoryComponent returnToScreen={handleReturn} />
    // Puedes seguir añadiendo más componentes aquí si necesitas
  ];

  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 ? (
        <>
          <ScreenTitleComponent text="songGameScreen" />
          <div className="buttons-position-absolute">
            <InfoComponent
              title1="typeOfGameI"
              title2="objectiveOfGameI"
              text1="soundGameI1"
              text2="soundGameI2"
            />
          </div>
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
        </>
      ) : (
        gameComponents[activeGame] || <LoaderCarComponent />
      )}
    </div>
  );
}

export default SoundGameScreen;
