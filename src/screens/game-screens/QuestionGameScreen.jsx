import {
  ButtonColoredComponent,
  InfoComponent,
  ScreenTitleComponent,
} from '../../components';

import gamesData from '../../data/gamesData';
import { gameRoutes } from '../../data/gameRoutes';
import './gamesScreen.css';

function QuestionGameScreen() {
  return (
    <div className="screens-box setting-screen game-screen">
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
            to={gameRoutes[gamesData.questionGamesNames[index]]?.path}
            text={gamesData.questionGamesNames[index]}
            disabled={!gameRoutes[gamesData.questionGamesNames[index]]}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionGameScreen;
