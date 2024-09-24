// estete archivo sirve para tener las importaciones mas limpias y simples. en lugar de tener que
// importar 9 componentes en 9 lineas diferentes, todas se importan desde un mismo sitio y queda
// el componente en el que se importa más limpio con una sola línea de importación
export { default as WelcomeScreen } from "./welcome-screen/WelcomeScreen";
export { default as ProfileScreen } from "./portfolio-screen/ProfileScreen";
export { default as ProfileComponent } from "./error-screen/Error404";
export { default as ContactScreen } from "./contact-screen/ContactScreen";
export { default as SettingScreen } from "./setting-screen/SettingScreen";

// screens de juegos
export { default as DrawGameScreen } from "./game-screens/DrawGameScreen";
export { default as  PuzzleGameScreen} from "./game-screens/PuzzleGameScreen";
export { default as  QuestionGameScreen} from "./game-screens/QuestionGameScreen";
export { default as  SoundGameScreen} from "./game-screens/SoundGameScreen";
export { default as SportGameScreen } from "./game-screens/SportGameScreen";
