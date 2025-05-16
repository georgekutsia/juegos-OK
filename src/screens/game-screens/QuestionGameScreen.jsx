import { useState } from 'react';
import {
  ButtonColoredComponent,
  ElectionGamesComponent,
  InfoComponent,
  ScreenTitleComponent,
  SizeGameComponent,
  LoaderCarComponent
} from '../../components';

import gamesData from '../../data/gamesData';
import './gamesScreen.css';

function QuestionGameScreen() {
  const [activeGame, setActiveGame] = useState(-1);

  const handleGameOn = (index) => {
    setActiveGame((prev) => (prev === index ? -1 : index));
  };

  const handleReturn = () => setActiveGame(-1);

  const gameComponents = [
    <ElectionGamesComponent returnToScreen={handleReturn} />,
    <SizeGameComponent returnToScreen={handleReturn} />
    // Puedes seguir agregando más componentes aquí
  ];

  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 ? (
        <>
          <ScreenTitleComponent text="questionGameScreen" />
          <div className="buttons-position-absolute">
            <InfoComponent
              title1="typeOfGameI"
              title2="objectiveOfGameI"
              text1="questionGameI1"
              text2="questionGameI2"
            />
          </div>
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
        </>
      ) : (
        gameComponents[activeGame] || <LoaderCarComponent />
      )}
    </div>
  );
}

export default QuestionGameScreen;
