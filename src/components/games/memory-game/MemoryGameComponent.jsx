/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from 'react';
import { ButtonReturnComponent, InfoComponent } from '../../../components';
import { Context } from '../../../shared/context';
import './memoryGame.css';

const GRID_OPTIONS = [3, 4, 5, 6];
const PLAYER_COLORS = ['#df5868', '#3e82c4', '#d68c29'];
const THEME_PREVIEW_IMAGES = {
  colors: 'https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1739521729/colorGame_sh3qsa_aozq4f.png',
  figures: 'https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1738968963/iForms_pghwjf.png',
  buildings: '/img/games/memory/memory-card.png',
};
const MEMORY_CARD_IMAGE = '/img/games/memory/memory-card.png';
const MEMORY_CARD_BACKS = {
  colors: '● ● ●',
  figures: '▲ ● ■',
  animals: '🐾',
  vehicles: '⚙',
  buildings: '⌂',
};
const MEMORY_ANIMAL_INDICES = [2, 6, 16, 18, 20, 28, 38, 40, 44, 45, 47, 48, 52, 56, 59, 61, 63, 65];
const MEMORY_ANIMAL_AUDIO_OVERRIDES = {
  65: '/audio/memory/animals/sheep-bleat.ogg',
};
const MEMORY_VEHICLES = [
  ['cargo-ship', 'cargo_ship', '/audio/memory/vehicles/boat-engine.mp3'],
  ['train', 'train_on', '/audio/memory/vehicles/train-horn.mp3'],
  ['pirate-ship', 'pirate_ship', '/audio/memory/vehicles/boat-engine.mp3'],
  ['motorcycle', 'motorcycle', '/audio/memory/vehicles/car-passing.mp3'],
  ['helicopter', 'helicopter', '/audio/memory/vehicles/helicopter-rotor.mp3'],
  ['shopping-cart', 'shopping_cart', '/audio/memory/vehicles/cart-wheels.mp3'],
  ['cement-mixer', 'cement_mixer_truck', '/audio/memory/vehicles/cement-mixer.mp3'],
  ['fire-truck', 'fire_truck', '/audio/memory/vehicles/ambulance.mp3'],
  ['ambulance', 'ambulance', '/audio/memory/vehicles/ambulance.mp3'],
  ['fishing-boat', 'fishing_boat', '/audio/memory/vehicles/boat-engine.mp3'],
  ['bulldozer', 'bulldozer', '/audio/memory/vehicles/car-passing.mp3'],
  ['stroller', 'baby_stroller', '/audio/memory/vehicles/cart-wheels.mp3'],
  ['car', 'cocheob', '/audio/memory/vehicles/car-horn.mp3'],
  ['parachute', 'parachute', '/audio/memory/vehicles/airplane.mp3'],
  ['bicycle', 'bicicletaob', '/audio/memory/vehicles/cart-wheels.mp3'],
  ['toy-train', 'trenob', '/audio/memory/vehicles/train-horn.mp3'],
  ['airplane', 'airplane', '/audio/memory/vehicles/airplane.mp3'],
  ['rocket', 'rocket', '/audio/memory/vehicles/rocket.mp3'],
];

const MEMORY_THEMES = {
  colors: {
    label: 'memoryThemeColors',
    available: true,
    items: Array.from({ length: 18 }, (_, index) => ({ id: `color-${index}`, symbol: '', colorOnly: true, audio: null })),
  },
  figures: {
    label: 'memoryThemeFigures',
    available: true,
    items: [
      ['triangle', '▲'], ['circle', '●'], ['square', '■'], ['diamond', '◆'], ['pentagon', '⬟'], ['cross', '✚'],
      ['star', '★'], ['hexagon', '⬢'], ['flower', '✿'], ['sun', '☀'], ['moon', '☾'], ['umbrella', '☂'],
      ['heart', '♥'], ['club', '♣'], ['sparkle', '✦'], ['plus', '✜'], ['rhombus', '⬥'], ['shield', '⬣'],
    ].map(([id, symbol]) => ({ id, symbol, audio: null })),
  },
  animals: { label: 'memoryThemeAnimals', available: true, items: [] },
  vehicles: { label: 'memoryThemeVehicles', available: true, items: [] },
  buildings: { label: 'memoryThemeBuildings', available: false, items: [] },
};

const shuffle = (cards) => [...cards].sort(() => Math.random() - 0.5);

const makeColor = (index, total) => {
  const hue = Math.round((index * 360) / total);
  const lightness = index % 2 === 0 ? 54 : 44;
  return `hsl(${hue} 78% ${lightness}%)`;
};

const makeFigureColor = (index) => [
  '#6f8f93', '#8b88a9', '#a1828d', '#a58d68', '#758fa7', '#9382a0',
][index % 6];

const createDeck = (gridSize, theme) => {
  const totalCards = gridSize * gridSize;
  const pairs = Math.floor(totalCards / 2);
  const cards = theme.items.slice(0, pairs).flatMap((item, pairId) => {
    const color = item.colorOnly ? makeColor(pairId, pairs) : makeFigureColor(pairId);
    return [0, 1].map((copy) => ({
      id: `${pairId}-${copy}`,
      pairId,
      color,
      symbol: item.symbol,
      image: item.image,
      colorOnly: item.colorOnly,
      audio: item.audio,
    }));
  });

  if (totalCards % 2 !== 0) {
    cards.push({
      id: 'memory-star',
      pairId: 'memory-star',
      color: 'var(--light-violet)',
      isBonus: true,
      symbol: '✪',
      audio: null,
    });
  }

  return shuffle(cards);
};

function MemoryGameComponent({ returnToScreen }) {
  const { t, animalList, objectsData } = useContext(Context);
  const [gridSize, setGridSize] = useState(4);
  const [themeKey, setThemeKey] = useState('figures');
  const [deck, setDeck] = useState(() => createDeck(4, MEMORY_THEMES.figures));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [matchedByPlayer, setMatchedByPlayer] = useState({});
  const [playerCount, setPlayerCount] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [isResolving, setIsResolving] = useState(false);
  const [openOptions, setOpenOptions] = useState(null);
  const timeoutRef = useRef(null);
  const audioRef = useRef(null);
  const audioStopTimeoutRef = useRef(null);
  const vehicleItems = MEMORY_VEHICLES
    .map(([id, match, audio]) => ({ id, image: objectsData.find((url) => url.toLowerCase().includes(match)), audio }))
    .filter((vehicle) => vehicle.image);
  const memoryThemes = {
    ...MEMORY_THEMES,
    animals: {
      ...MEMORY_THEMES.animals,
      items: MEMORY_ANIMAL_INDICES
        .map((index) => animalList[index])
        .filter((animal) => animal?.imagenAnimada)
        .map((animal) => ({
          id: animal.nombre,
          image: animal.imagenAnimada,
          audio: animal.sonido?.[0] || MEMORY_ANIMAL_AUDIO_OVERRIDES[animalList.indexOf(animal)] || null,
        })),
    },
    vehicles: {
      ...MEMORY_THEMES.vehicles,
      available: vehicleItems.length === MEMORY_VEHICLES.length,
      items: vehicleItems,
    },
  };
  const theme = memoryThemes[themeKey];
  const themePreviewImages = {
    ...THEME_PREVIEW_IMAGES,
    animals: memoryThemes.animals.items[0]?.image || MEMORY_CARD_IMAGE,
    vehicles: vehicleItems[0]?.image || MEMORY_CARD_IMAGE,
  };

  useEffect(() => () => {
    clearTimeout(timeoutRef.current);
    clearTimeout(audioStopTimeoutRef.current);
    audioRef.current?.pause();
  }, []);

  const resetGame = (size = gridSize, selectedTheme = theme) => {
    clearTimeout(timeoutRef.current);
    clearTimeout(audioStopTimeoutRef.current);
    audioRef.current?.pause();
    setDeck(createDeck(size, selectedTheme));
    setSelectedCards([]);
    setMatchedPairs([]);
    setMatchedByPlayer({});
    setCurrentPlayer(0);
    setIsResolving(false);
  };

  const chooseGrid = (size) => {
    setGridSize(size);
    resetGame(size);
    setOpenOptions(null);
  };

  const chooseTheme = (nextThemeKey) => {
    const nextTheme = memoryThemes[nextThemeKey];
    if (!nextTheme.available) return;
    setThemeKey(nextThemeKey);
    resetGame(gridSize, nextTheme);
    setOpenOptions(null);
  };

  const choosePlayerCount = (count) => {
    setPlayerCount(count);
    resetGame();
    setOpenOptions(null);
  };

  const playCardAudio = (card) => {
    if (!card.audio) return;

    audioRef.current?.pause();
    clearTimeout(audioStopTimeoutRef.current);

    const audio = new Audio(card.audio);
    audioRef.current = audio;
    audio.play().catch(() => {});
    audioStopTimeoutRef.current = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 3000);
  };

  const revealCard = (card) => {
    const isAlreadySelected = selectedCards.some((selected) => selected.id === card.id);
    const isMatched = matchedPairs.includes(card.pairId);

    if (isResolving || isAlreadySelected || isMatched) return;

    const nextSelection = [...selectedCards, card];
    setSelectedCards(nextSelection);
    playCardAudio(card);

    if (nextSelection.length !== 2) return;

    setIsResolving(true);
    const [firstCard, secondCard] = nextSelection;
    const playerWhoPlayed = currentPlayer;

    timeoutRef.current = setTimeout(() => {
      if (firstCard.pairId === secondCard.pairId) {
        setMatchedPairs((pairs) => [...pairs, firstCard.pairId]);
        setMatchedByPlayer((pairs) => ({ ...pairs, [firstCard.pairId]: playerWhoPlayed }));
      } else {
        setCurrentPlayer((player) => (player + 1) % playerCount);
      }
      setSelectedCards([]);
      setIsResolving(false);
    }, firstCard.pairId === secondCard.pairId ? 450 : 900);
  };

  const totalPairs = Math.floor((gridSize * gridSize) / 2);
  const isComplete = matchedPairs.length === totalPairs;
  const players = Array.from({ length: playerCount }, (_, index) => ({
    color: PLAYER_COLORS[index],
    index,
    score: Object.values(matchedByPlayer).filter((player) => player === index).length,
  }));
  const getPlayerName = (index) => `${t('memoryPlayer')} ${index + 1}`;
  const highestScore = Math.max(...players.map((player) => player.score));
  const winners = players.filter((player) => player.score === highestScore);

  return (
    <section
      className={`memory-game ${playerCount > 1 ? 'memory-game--multiplayer' : ''}`}
      style={{ '--memory-turn-color': PLAYER_COLORS[currentPlayer] }}
      aria-labelledby="memory-game-title"
    >
      <div className="buttons-position-absolute">
        <InfoComponent title1="ruleOfGameI" text1="memoryGameInfo" />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>

      <div className="memory-game-header">
        <h2 id="memory-game-title">{t('interactiveMemory')}</h2>
        <p>{t('memoryGameInstruction')}</p>
        <div className="memory-options-toolbar">
          <div className="memory-option-menu" onMouseEnter={() => setOpenOptions('theme')} onMouseLeave={() => setOpenOptions(null)} onFocus={() => setOpenOptions('theme')} onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setOpenOptions(null)}>
            <button type="button" className="memory-option-trigger" onClick={() => setOpenOptions(openOptions === 'theme' ? null : 'theme')} aria-expanded={openOptions === 'theme'} aria-controls="memory-theme-menu">
              <img className="memory-option-trigger-image" src={themePreviewImages[themeKey]} alt="" />
              <span>{t(theme.label)}</span><span aria-hidden="true">⌄</span>
            </button>
            {openOptions === 'theme' && (
              <div id="memory-theme-menu" className="memory-option-panel memory-option-panel--themes" aria-label={t('memoryChooseTheme')}>
                {Object.entries(memoryThemes).map(([key, memoryTheme]) => (
                  <button key={key} type="button" className={themeKey === key ? 'memory-option-choice memory-option-choice--active' : 'memory-option-choice'} onClick={() => chooseTheme(key)} disabled={!memoryTheme.available} aria-pressed={themeKey === key}>
                    <img className="memory-option-choice-image" src={themePreviewImages[key]} alt="" />
                    {t(memoryTheme.label)}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="memory-option-menu" onMouseEnter={() => setOpenOptions('grid')} onMouseLeave={() => setOpenOptions(null)} onFocus={() => setOpenOptions('grid')} onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setOpenOptions(null)}>
            <button type="button" className="memory-option-trigger" onClick={() => setOpenOptions(openOptions === 'grid' ? null : 'grid')} aria-expanded={openOptions === 'grid'} aria-controls="memory-grid-menu">
              <img className="memory-option-trigger-image" src={MEMORY_CARD_IMAGE} alt="" />
              <span>{gridSize} × {gridSize}</span><span aria-hidden="true">⌄</span>
            </button>
            {openOptions === 'grid' && (
              <div id="memory-grid-menu" className="memory-option-panel" aria-label={t('memoryChooseGrid')}>
                {GRID_OPTIONS.map((size) => (
                  <button key={size} type="button" className={gridSize === size ? 'memory-option-choice memory-option-choice--active' : 'memory-option-choice'} onClick={() => chooseGrid(size)} aria-pressed={gridSize === size}>
                    <img className="memory-option-choice-image" src={MEMORY_CARD_IMAGE} alt="" />
                    {size} × {size}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="memory-option-menu" onMouseEnter={() => setOpenOptions('players')} onMouseLeave={() => setOpenOptions(null)} onFocus={() => setOpenOptions('players')} onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setOpenOptions(null)}>
            <button type="button" className="memory-option-trigger" onClick={() => setOpenOptions(openOptions === 'players' ? null : 'players')} aria-expanded={openOptions === 'players'} aria-controls="memory-players-menu">
              <span className="memory-player-preview" aria-hidden="true">
                {PLAYER_COLORS.slice(0, playerCount).map((color) => <i key={color} style={{ backgroundColor: color }} />)}
              </span>
              <span>{playerCount} {t('memoryPlayer').toLowerCase()}</span><span aria-hidden="true">⌄</span>
            </button>
            {openOptions === 'players' && (
              <div id="memory-players-menu" className="memory-option-panel" aria-label={t('memoryChoosePlayers')}>
                {[1, 2, 3].map((count) => (
                  <button key={count} type="button" className={playerCount === count ? 'memory-option-choice memory-option-choice--active' : 'memory-option-choice'} onClick={() => choosePlayerCount(count)} aria-pressed={playerCount === count}>
                    <span className="memory-player-preview" aria-hidden="true">
                      {PLAYER_COLORS.slice(0, count).map((color) => <i key={color} style={{ backgroundColor: color }} />)}
                    </span>
                    {count}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {playerCount > 1 && (
          <>
            <div className="memory-players" aria-live="polite">
              {players.map((player) => (
                <div key={player.index} className={`memory-player ${currentPlayer === player.index ? 'memory-player--active' : ''}`} style={{ '--memory-player-color': player.color }}>
                  <span><i className="memory-player-color" aria-hidden="true" />{getPlayerName(player.index)}</span>
                  <strong>{t('memoryPoints')}: {player.score}</strong>
                </div>
              ))}
            </div>
            <p className="memory-turn" aria-live="polite">
              {t('memoryTurn')} <strong style={{ color: PLAYER_COLORS[currentPlayer] }}>{getPlayerName(currentPlayer)}</strong>
            </p>
          </>
        )}
        <p className="memory-progress" aria-live="polite">
          {t('memoryPairs')}: {matchedPairs.length} / {totalPairs}
        </p>
      </div>

      {isComplete ? (
        <div className="memory-complete" role="status">
          <p>{t('memoryComplete')}</p>
          <div className="memory-final-scores">
            {players.map((player) => (
              <span key={player.index} style={{ '--memory-player-color': player.color }}>
                <i className="memory-player-color" aria-hidden="true" />
                {getPlayerName(player.index)}: {player.score}
              </span>
            ))}
          </div>
          <p className="memory-winner">
            {winners.length === 1 ? `${t('memoryWinner')}: ${getPlayerName(winners[0].index)}` : t('memoryDraw')}
          </p>
          <button type="button" onClick={() => resetGame()}>{t('memoryPlayAgain')}</button>
        </div>
      ) : (
        <div className="memory-game-board" style={{ '--memory-columns': gridSize }}>
          {deck.map((card) => {
            const isSelected = selectedCards.some((selected) => selected.id === card.id);
            const isMatched = card.isBonus || matchedPairs.includes(card.pairId);
            const isRevealed = isSelected || isMatched;
            const matchingPlayer = matchedByPlayer[card.pairId];
            const cardStyle = {
              ...(card.colorOnly ? { backgroundColor: card.color } : { color: card.color }),
              ...(matchingPlayer !== undefined ? { '--memory-player-color': PLAYER_COLORS[matchingPlayer] } : {}),
            };

            return (
              <button
                key={card.id}
                type="button"
                className={`memory-card ${isRevealed ? 'memory-card--revealed' : ''} ${isMatched ? 'memory-card--matched' : ''} ${card.isBonus ? 'memory-card--bonus' : ''}`}
                onClick={() => revealCard(card)}
                disabled={isResolving || isRevealed}
                aria-label={card.isBonus ? t('memoryBonusCard') : (isRevealed ? t('memoryCardRevealed') : t('memoryCardHidden'))}
              >
                <span className="memory-card-inner">
                  <span className={`memory-card-face memory-card-back memory-card-back--${themeKey}`} aria-hidden="true">
                    {MEMORY_CARD_BACKS[themeKey] || '?'}
                  </span>
                  <span
                    className="memory-card-face memory-card-front"
                    style={cardStyle}
                    aria-hidden="true"
                  >
                    {card.image ? <img className="memory-card-image" src={card.image} alt="" /> : card.symbol}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MemoryGameComponent;
