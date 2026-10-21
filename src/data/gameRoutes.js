// Stable URLs, independent of catalogue order and the selected language.
export const gameRoutes = {
  electionGame: { path: '/questions/elecciones' },
  sizeGame: { path: '/questions/tamanos-y-fuerzas' },
  animalSoundGame: { path: '/sounds/sonidos-de-animales' },
  storyGame: { path: '/sounds/cuentos-y-aventuras' },
  friendStoryGame: { path: '/sounds/historias-de-los-amigos' },
  colorRun: { path: '/sports/colores-a-correr' },
  searchroom: { path: '/sports/busca-el-tesoro' },
  drawShapes: { path: '/drawings/dibuja-formas' },
  shadowGame: { path: '/puzzles/siluetas-y-animales' },
  missingGame: { path: '/puzzles/imagen-desaparecida' },
  interactiveMemory: { path: '/puzzles/memoria', interactive: true },
  interactiveSlidingPuzzle: { path: '/puzzles/rompecabezas-deslizante', interactive: true },
  interactiveAddSubtract: { path: '/puzzles/sumas-y-restas', interactive: true },
  interactiveMultiplyDivide: { path: '/puzzles/multiplicaciones-y-divisiones', interactive: true },
  combineTwo: { path: '/puzzles/sumas-y-restas/combina-dos', interactive: true, parent: '/puzzles/sumas-y-restas' },
};

export const storyRoutes = [
  { path: `${gameRoutes.storyGame.path}/los-despistes-de-okina`, game: 'okinaStory', parent: gameRoutes.storyGame.path },
  { path: `${gameRoutes.storyGame.path}/jifi-la-jirafa`, game: 'jifiStory', parent: gameRoutes.storyGame.path },
];

export const choiceStoryRoutes = [
  { path: `${gameRoutes.friendStoryGame.path}/primer-dia-de-cole`, game: 'schoolStory', parent: gameRoutes.friendStoryGame.path },
];

export const mathModeSlugs = { addition: 'sumas', subtraction: 'restas' };
export const mathLevelSlugs = { easy: 'facil', medium: 'medio', hard: 'dificil' };

export const getMathGamePath = (mode, level) =>
  mode === 'combineTwo' ? `${gameRoutes.combineTwo.path}/${mathLevelSlugs[level]}`
    : `${gameRoutes.interactiveAddSubtract.path}/${mathModeSlugs[mode]}/${mathLevelSlugs[level]}`;

const mathRoutes = Object.entries(mathModeSlugs).flatMap(([mode, slug]) => [
  { path: `${gameRoutes.interactiveAddSubtract.path}/${slug}`, game: 'interactiveAddSubtract', mode, level: 'easy', interactive: true },
  ...Object.keys(mathLevelSlugs).map(level => ({ path: getMathGamePath(mode, level), game: 'interactiveAddSubtract', mode, level, interactive: true })),
]);

const routes = [
  ...Object.entries(gameRoutes).map(([game, route]) => ({ ...route, game })),
  ...storyRoutes,
  ...choiceStoryRoutes,
  ...mathRoutes,
  ...Object.keys(mathLevelSlugs).map(level => ({
    ...gameRoutes.combineTwo, path: getMathGamePath('combineTwo', level), game: 'combineTwo', level,
  })),
];

export const resolveGameRoute = pathname => routes.find(({ path }) => path === pathname.replace(/\/+$/, ''));
