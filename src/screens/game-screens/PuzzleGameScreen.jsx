import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ButtonColoredComponent,
  InfoComponent,
  ScreenTitleComponent,
} from '../../components';

import { Context } from '../../shared/context';
import gamesData from '../../data/gamesData';
import { gameRoutes } from '../../data/gameRoutes';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './gamesScreen.css';

function PuzzleGameScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showInteractiveGames = searchParams.get('view') === 'interactive';
  const { t } = useContext(Context);

  const interactiveGames = [
    { key: 'interactiveMemory', image: '/img/games/memory/memory-card.png', description: 'interactiveMemoryDescription' },
    { key: 'interactiveSlidingPuzzle', image: '/img/games/sliding-puzzle/sliding-puzzle-card.png', description: 'interactiveSlidingPuzzleDescription' },
    { key: 'interactiveShoot', image: '/img/games/shoot/shoot-card.png', description: 'interactiveShootDescription' },
    { key: 'interactiveGap', image: '/img/games/gap/gap-card.png', description: 'interactiveGapDescription' },
    { key: 'interactiveAddSubtract', image: '/img/games/add-subtract/add-subtract-card.png', description: 'interactiveAddSubtractDescription' },
    { key: 'interactiveMultiplyDivide', image: '/img/games/multiply-divide/multiply-divide-card.png', description: 'interactiveMultiplyDivideDescription' },
    { key: 'interactiveBliblin' },
    { key: 'interactiveMatch' }, { key: 'interactiveMaze' }, { key: 'interactiveSpark' },
    { key: 'interactiveTwist' }, { key: 'interactiveOrbit' }, { key: 'interactiveFlip' },
    { key: 'interactiveQuest' }, { key: 'interactiveZoom' },
  ];

  const renderViewTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mainNavbarMenu-li-span" {...props}>
      {t(showInteractiveGames ? 'showNonInteractiveGames' : 'showInteractiveGames')}
    </Tooltip>
  );

  return (
    <div className="screens-box setting-screen game-screen">
      <ScreenTitleComponent text="puzzleGameScreen" />
      <div className="buttons-position-absolute">
        <InfoComponent
          title1="typeOfGameI"
          title2="objectiveOfGameI"
          text1="puzzleGameI1"
          text2="puzzleGameI2"
        />
        <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 200 }} overlay={renderViewTooltip}>
          <button
            type="button"
            className="puzzle-view-toggle"
            onClick={() => setSearchParams(current => {
              const next = new URLSearchParams(current);
              if (showInteractiveGames) next.delete('view');
              else next.set('view', 'interactive');
              return next;
            })}
            aria-label={t(showInteractiveGames ? 'showNonInteractiveGames' : 'showInteractiveGames')}
            aria-pressed={showInteractiveGames}
          >
            <i className="fa-solid fa-hand-pointer" aria-hidden="true"></i>
          </button>
        </OverlayTrigger>
      </div>
      {showInteractiveGames ? (
        <section className="interactive-games-section" aria-labelledby="interactive-games-title">
          <h3 id="interactive-games-title">{t('interactiveGamesList')}</h3>
          <div className="screens-box-items interactive-games-list">
          {interactiveGames.map(({ key, image, description }) => {
            const gameRoute = gameRoutes[key];

            return (
              <ButtonColoredComponent
                key={key}
                imgGame={image}
                text={key}
                to={gameRoute?.path}
                disabled={!gameRoute}
                statusText={!gameRoute ? 'interactiveGameComingSoon' : undefined}
                descriptionText={description}
              />
            );
          })}
          </div>
        </section>
      ) : (
        <div className="screens-box-items">
          {gamesData.puzzleGames.map((imgUrl, index) => (
            <ButtonColoredComponent
              key={index}
              imgGame={imgUrl}
              to={gameRoutes[gamesData.puzzleGamesNames[index]]?.path}
              text={gamesData.puzzleGamesNames[index]}
              disabled={!gameRoutes[gamesData.puzzleGamesNames[index]]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PuzzleGameScreen;
