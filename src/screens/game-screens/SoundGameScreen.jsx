import {
  ButtonColoredComponent,
  InfoComponent,
  ScreenTitleComponent,
} from '../../components';

import gamesData from '../../data/gamesData';
import { gameRoutes } from '../../data/gameRoutes';
import './gamesScreen.css';

function SoundGameScreen() {
  return (
    <div className="screens-box setting-screen game-screen">
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
            to={gameRoutes[gamesData.soundGamesNames[index]]?.path}
            text={gamesData.soundGamesNames[index]}
            disabled={!gameRoutes[gamesData.soundGamesNames[index]]}
          />
        ))}
      </div>
    </div>
  );
}

export default SoundGameScreen;
