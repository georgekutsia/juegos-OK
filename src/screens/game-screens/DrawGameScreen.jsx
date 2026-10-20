import {
  ButtonColoredComponent,
  InfoComponent,
  ScreenTitleComponent,
} from '../../components';
import gamesData from '../../data/gamesData';
import { gameRoutes } from '../../data/gameRoutes';
import './gamesScreen.css';

function DrawGameScreen() {
  const renderGameButtons = () => {
    if (gamesData.drawGames && gamesData.drawGames.length > 0) {
      return (
        <div className="screens-box-items">
          {gamesData.drawGames.map((imgUrl, index) => (
            <ButtonColoredComponent
              key={index}
                imgGame={imgUrl}
                to={gameRoutes[gamesData.drawGamesNames[index]]?.path}
                text={gamesData.drawGamesNames[index]}
                disabled={!gameRoutes[gamesData.drawGamesNames[index]]}
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
    <div className="screens-box setting-screen game-screen">
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
    </div>
  );
}

export default DrawGameScreen;
