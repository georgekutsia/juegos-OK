/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { ButtonReturnComponent, InfoComponent } from '../../../components';
import { Context } from '../../../shared/context';
import './slidingPuzzleGame.css';

const BOARD_SIZE = 3;
// Artwork offsets and scale are fractions of the board, keeping the complete
// drawing inside its image tiles. Tile 8 is reserved for the empty space.
const LEVELS = {
  3: {
    variants: [
      { image: '/img/games/sliding-puzzle/levels/crayon-3.png', imageTiles: [1, 4, 7], shuffleMoves: 40 },
      { image: '/img/games/sliding-puzzle/levels/chair-3.png', imageTiles: [0, 3, 4], shuffleMoves: 40 },
      { image: '/img/games/sliding-puzzle/levels/train-3.png', imageTiles: [3, 4, 5], artwork: { scale: 0.9, x: 0.05, y: 0.32 }, shuffleMoves: 40 },
      { image: '/img/games/sliding-puzzle/levels/caterpillar-3.png', imageTiles: [0, 1, 4], shuffleMoves: 40 },
      { image: '/img/games/sliding-puzzle/levels/bus-3.png', imageTiles: [3, 4, 5], artwork: { scale: 1, x: 0, y: -1 / 3 }, shuffleMoves: 40 },
      { image: '/img/games/sliding-puzzle/levels/rocket-3.png', imageTiles: [1, 4, 7], artwork: { scale: 0.78, x: 0.11, y: 0.11 }, shuffleMoves: 40 },
    ],
  },
  4: { image: '/img/games/sliding-puzzle/levels/apple-tree-4.png', imageTiles: [0, 1, 3, 4], shuffleMoves: 65 },
  5: { image: '/img/games/sliding-puzzle/levels/butterfly-flower-5.png', imageTiles: [1, 3, 4, 5, 7], artwork: { scale: 0.68, x: 0.16, y: 0.21 }, shuffleMoves: 90 },
};

const getPuzzleForLevel = (level) => {
  const levelConfig = LEVELS[level];
  if (!levelConfig.variants) return levelConfig;
  return levelConfig.variants[Math.floor(Math.random() * levelConfig.variants.length)];
};

const isSolved = (board) => board.every((tile, index) => tile === (index === board.length - 1 ? null : index));
const isImageSolved = (board, imageTiles) => {
  const [referenceTile, ...otherTiles] = imageTiles;
  const referencePosition = board.indexOf(referenceTile);
  const referenceRow = Math.floor(referencePosition / BOARD_SIZE);
  const referenceColumn = referencePosition % BOARD_SIZE;
  const targetReferenceRow = Math.floor(referenceTile / BOARD_SIZE);
  const targetReferenceColumn = referenceTile % BOARD_SIZE;

  return otherTiles.every((tile) => {
    const currentPosition = board.indexOf(tile);
    const currentRow = Math.floor(currentPosition / BOARD_SIZE);
    const currentColumn = currentPosition % BOARD_SIZE;
    const targetRow = Math.floor(tile / BOARD_SIZE);
    const targetColumn = tile % BOARD_SIZE;

    return currentRow - referenceRow === targetRow - targetReferenceRow
      && currentColumn - referenceColumn === targetColumn - targetReferenceColumn;
  });
};

const shuffleBoard = (shuffleMoves, imageTiles) => {
  const board = [...Array(BOARD_SIZE * BOARD_SIZE - 1).keys(), null];
  let emptyIndex = board.length - 1;
  let previousEmptyIndex = -1;

  for (let move = 0; move < shuffleMoves; move += 1) {
    const row = Math.floor(emptyIndex / BOARD_SIZE);
    const column = emptyIndex % BOARD_SIZE;
    const neighbours = [
      row > 0 ? emptyIndex - BOARD_SIZE : null,
      row < BOARD_SIZE - 1 ? emptyIndex + BOARD_SIZE : null,
      column > 0 ? emptyIndex - 1 : null,
      column < BOARD_SIZE - 1 ? emptyIndex + 1 : null,
    ].filter((index) => index !== null && index !== previousEmptyIndex);
    const nextIndex = neighbours[Math.floor(Math.random() * neighbours.length)];
    [board[emptyIndex], board[nextIndex]] = [board[nextIndex], board[emptyIndex]];
    previousEmptyIndex = emptyIndex;
    emptyIndex = nextIndex;
  }

  return isSolved(board) || isImageSolved(board, imageTiles) ? shuffleBoard(shuffleMoves, imageTiles) : board;
};

const createGame = (level) => {
  const puzzle = getPuzzleForLevel(level);
  return {
    board: shuffleBoard(puzzle.shuffleMoves, puzzle.imageTiles),
    puzzle,
  };
};

function SlidingPuzzleGameComponent({ returnToScreen }) {
  const { t } = useContext(Context);
  const [level, setLevel] = useState(3);
  const [game, setGame] = useState(() => createGame(3));
  const [moves, setMoves] = useState(0);
  const [complete, setComplete] = useState(false);
  const { board, puzzle } = game;

  const resetGame = (nextLevel = level) => {
    setLevel(nextLevel);
    setGame(createGame(nextLevel));
    setMoves(0);
    setComplete(false);
  };

  const moveTile = (index) => {
    if (complete) return;

    const emptyIndex = board.indexOf(null);
    const rowDistance = Math.abs(Math.floor(index / BOARD_SIZE) - Math.floor(emptyIndex / BOARD_SIZE));
    const columnDistance = Math.abs((index % BOARD_SIZE) - (emptyIndex % BOARD_SIZE));
    const isAdjacent = rowDistance + columnDistance === 1;

    if (!isAdjacent) return;

    const nextBoard = [...board];
    [nextBoard[index], nextBoard[emptyIndex]] = [nextBoard[emptyIndex], nextBoard[index]];
    setGame((currentGame) => ({ ...currentGame, board: nextBoard }));
    setMoves((currentMoves) => currentMoves + 1);
    if (isImageSolved(nextBoard, puzzle.imageTiles)) setComplete(true);
  };

  const getTilePosition = (tile) => {
    const row = Math.floor(tile / BOARD_SIZE);
    const column = tile % BOARD_SIZE;
    const { scale = 1, x = 0, y = 0 } = puzzle.artwork ?? {};
    const imageSize = BOARD_SIZE * scale;
    return {
      backgroundImage: `url(${puzzle.image})`,
      backgroundPosition: `${((column - BOARD_SIZE * x) * 100) / (imageSize - 1)}% ${((row - BOARD_SIZE * y) * 100) / (imageSize - 1)}%`,
      backgroundSize: `${imageSize * 100}% ${imageSize * 100}%`,
    };
  };

  // Use the same framing in the tiles, reference and completed picture.
  const renderArtwork = (className = '') => {
    const { scale = 1, x = 0, y = 0 } = puzzle.artwork ?? {};
    return <svg className={`sliding-puzzle-artwork ${className}`.trim()} viewBox="0 0 3 3" width="300" height="300" aria-hidden="true">
      <rect width="3" height="3" fill="#fff8e4" />
      <image href={puzzle.image} x={BOARD_SIZE * x} y={BOARD_SIZE * y} width={BOARD_SIZE * scale} height={BOARD_SIZE * scale} />
    </svg>;
  };

  return (
    <section className="sliding-puzzle-game" aria-labelledby="sliding-puzzle-title">
      <div className="buttons-position-absolute">
        <InfoComponent title1="ruleOfGameI" text1="slidingPuzzleInfo" />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>

      <header className="sliding-puzzle-header">
        <h2 id="sliding-puzzle-title">{t('interactiveSlidingPuzzle')}</h2>
        <p>{t('slidingPuzzleInstruction')}</p>
        <div className="sliding-puzzle-levels" aria-label={t('slidingPuzzleChooseLevel')}>
          {Object.keys(LEVELS).map((levelNumber) => {
            const pieceCount = Number(levelNumber);
            return (
            <button
              key={pieceCount}
              type="button"
              className={level === pieceCount ? 'sliding-puzzle-level sliding-puzzle-level--active' : 'sliding-puzzle-level'}
              onClick={() => resetGame(pieceCount)}
              aria-pressed={level === pieceCount}
            >
              {pieceCount} {t('slidingPuzzlePieces')}
            </button>
            );
          })}
        </div>
        <p className="sliding-puzzle-moves" aria-live="polite">{t('slidingPuzzleMoves')}: {moves}</p>
      </header>

      {complete ? (
        <div className="sliding-puzzle-complete" role="status">
          <div className="sliding-puzzle-confetti" aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
          </div>
          {renderArtwork('sliding-puzzle-complete-image')}
          <p>{t('slidingPuzzleComplete')}</p>
          <button type="button" onClick={() => resetGame()}>{t('slidingPuzzlePlayAgain')}</button>
        </div>
      ) : (
        <div className="sliding-puzzle-content">
          <div
            className="sliding-puzzle-board"
            style={{ '--sliding-puzzle-size': BOARD_SIZE }}
            aria-label={t('slidingPuzzleBoard')}
          >
            {board.map((tile, index) => {
              const emptyIndex = board.indexOf(null);
              const rowDistance = Math.abs(Math.floor(index / BOARD_SIZE) - Math.floor(emptyIndex / BOARD_SIZE));
              const columnDistance = Math.abs((index % BOARD_SIZE) - (emptyIndex % BOARD_SIZE));
              const isMovable = tile !== null && rowDistance + columnDistance === 1;
              const hasImage = puzzle.imageTiles.includes(tile);

              return tile === null ? (
                <div key={`empty-${index}`} className="sliding-puzzle-empty" aria-label={t('slidingPuzzleEmpty')} />
              ) : (
                <button
                  key={tile}
                  type="button"
                  className={`sliding-puzzle-tile ${hasImage ? 'sliding-puzzle-tile--image' : 'sliding-puzzle-tile--plain'} ${isMovable ? 'sliding-puzzle-tile--movable' : ''}`}
                  style={hasImage ? getTilePosition(tile) : undefined}
                  onClick={() => moveTile(index)}
                  aria-label={`${t('slidingPuzzleTile')} ${tile + 1}${isMovable ? `, ${t('slidingPuzzleCanMove')}` : ''}`}
                />
              );
            })}
          </div>
          <aside className="sliding-puzzle-reference" aria-label={t('slidingPuzzleReference')}>
            <span>{t('slidingPuzzleReference')}</span>
            {renderArtwork()}
          </aside>
        </div>
      )}
    </section>
  );
}

export default SlidingPuzzleGameComponent;
