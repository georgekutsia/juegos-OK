import { useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AddSubtractGameComponent, ButtonReturnComponent, ChooseStoryComponent,
  ChooseStoryComp, ElectionGamesComponent, MemoryGameComponent,
  MissingGameComponent, MultiplyDivideGameComponent, RedLight,
  RuntocolorGameComponent, SearchRoomGame, ShadowGamesComponent,
  SizeGameComponent, SlidingPuzzleGameComponent, SoundGameComponent,
  SpecialStoryGameComponent, StoriesBookComponent, StoryGameComponent,
} from '../../components';
import { gameRoutes, getMathGamePath, resolveGameRoute } from '../../data/gameRoutes';
import storyTree from '../../data/storyTreeData';
import { Context } from '../../shared/context';
import Error404 from '../error-screen/Error404';
import './gamesScreen.css';

const components = {
  electionGame: ElectionGamesComponent,
  sizeGame: SizeGameComponent,
  animalSoundGame: SoundGameComponent,
  storyGame: StoriesBookComponent,
  friendStoryGame: ChooseStoryComponent,
  colorRun: RuntocolorGameComponent,
  searchroom: SearchRoomGame,
  drawShapes: RedLight,
  shadowGame: ShadowGamesComponent,
  missingGame: MissingGameComponent,
  interactiveMemory: MemoryGameComponent,
  interactiveSlidingPuzzle: SlidingPuzzleGameComponent,
  interactiveAddSubtract: AddSubtractGameComponent,
  interactiveMultiplyDivide: MultiplyDivideGameComponent,
  okinaStory: SpecialStoryGameComponent,
  jifiStory: StoryGameComponent,
  schoolStory: ChooseStoryComp,
};

function GameScreen() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useContext(Context);
  const screenRef = useRef(null);
  const route = resolveGameRoute(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    screenRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  if (!route) return <Error404 />;

  const GameComponent = components[route.game];
  const category = `/${pathname.split('/')[1]}`;
  const returnToScreen = () => navigate(route.parent || (route.interactive ? '/puzzles?view=interactive' : category));

  return (
    <div ref={screenRef} tabIndex={-1} className="screens-box setting-screen game-screen game-screen--playing" aria-label={t(route.game in gameRoutes ? route.game : 'storyGame')}>
      {route.game === 'drawShapes' && (
        <div className="buttons-position-absolute redlight-return">
          <ButtonReturnComponent returnToScreen={returnToScreen} />
        </div>
      )}
      <GameComponent
        key={pathname}
        returnToScreen={returnToScreen}
        initialMode={route.mode}
        initialLevel={route.level}
        onSelectLevel={(mode, level) => navigate(getMathGamePath(mode, level))}
        onReturnToMenu={() => navigate(gameRoutes.interactiveAddSubtract.path)}
        {...(route.game === 'schoolStory' ? { data: storyTree } : {})}
      />
    </div>
  );
}

export default GameScreen;
