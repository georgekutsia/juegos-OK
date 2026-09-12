import { useContext, useState } from 'react';
import {
  ButtonColoredComponent,
  InfoComponent,
  LoaderCarComponent,
  MemoryGameComponent,
  MissingGameComponent,
  ScreenTitleComponent,
  ShadowGamesComponent
} from '../../components';

import { Context } from '../../shared/context';
import gamesData from '../../data/gamesData';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './gamesScreen.css';

function PuzzleGameScreen() {
  const [activeGame, setActiveGame] = useState(-1);
  const [showInteractiveGames, setShowInteractiveGames] = useState(false);
  const { t } = useContext(Context);

  const interactiveGames = [
    { key: 'interactiveMemory', image: '/img/games/memory/memory-card.png', description: 'interactiveMemoryDescription' },
    { key: 'interactiveShoot', image: '/img/games/shoot/shoot-card.png', description: 'interactiveShootDescription' },
    { key: 'interactiveGap', image: '/img/games/gap/gap-card.png', description: 'interactiveGapDescription' },
    { key: 'interactiveBliblin' },
    { key: 'interactiveMatch' }, { key: 'interactiveMaze' }, { key: 'interactiveSpark' },
    { key: 'interactiveTwist' }, { key: 'interactiveOrbit' }, { key: 'interactiveFlip' },
    { key: 'interactiveQuest' }, { key: 'interactiveZoom' },
  ];

  const handleGameOn = (index) => {
    setActiveGame((prev) => (prev === index ? -1 : index));
  };

  const handleReturn = () => setActiveGame(-1);

  const renderViewTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mainNavbarMenu-li-span" {...props}>
      {t(showInteractiveGames ? 'showNonInteractiveGames' : 'showInteractiveGames')}
    </Tooltip>
  );

  const gameComponents = [
    <ShadowGamesComponent returnToScreen={handleReturn} />,
    <MissingGameComponent returnToScreen={handleReturn} />,
  ];

  const interactiveGameComponents = {
    interactiveMemory: <MemoryGameComponent returnToScreen={handleReturn} />,
  };

  return (
    <div className="screens-box setting-screen">
      {activeGame === -1 ? (
        <>
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
                onClick={() => setShowInteractiveGames((currentView) => !currentView)}
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
                const gameComponent = interactiveGameComponents[key];

                return (
                  <ButtonColoredComponent
                    key={key}
                    imgGame={image}
                    text={key}
                    handleGameOn={() => setActiveGame(key)}
                    disabled={!gameComponent}
                    statusText={!gameComponent ? 'interactiveGameComingSoon' : undefined}
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
                  handleGameOn={() => handleGameOn(index)}
                  text={gamesData.puzzleGamesNames[index]}
                  disabled={!gameComponents[index]}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        interactiveGameComponents[activeGame] || gameComponents[activeGame] || <LoaderCarComponent />
      )}
    </div>
  );
}

export default PuzzleGameScreen;
