import {
  ButtonColoredComponent,
  InfoComponent,
  ScreenTitleComponent,
} from '../../components';

import gamesData from '../../data/gamesData';
import { gameRoutes } from '../../data/gameRoutes';
import './gamesScreen.css';

function SportGameScreen() {
  return (
    <div className="screens-box setting-screen game-screen">
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
            to={gameRoutes[gamesData.sportGamesNames[index]]?.path}
            text={gamesData.sportGamesNames[index]}
            disabled={!gameRoutes[gamesData.sportGamesNames[index]]}
          />
        ))}
      </div>
    </div>
  );
}

export default SportGameScreen;
