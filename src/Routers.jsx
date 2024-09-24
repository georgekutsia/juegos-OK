import { Route, Routes } from "react-router-dom";
import Error404 from "./screens/error-screen/Error404.jsx";
import { ContactScreen, DrawGameScreen, ProfileScreen, PuzzleGameScreen, QuestionGameScreen, SettingScreen, SoundGameScreen, SportGameScreen, WelcomeScreen } from "./screens/index.js";


function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/settings" element={<SettingScreen />} />
        <Route path="/questions" element={<QuestionGameScreen />} />
        <Route path="/sounds" element={<SoundGameScreen />} />
        <Route path="/sports" element={<SportGameScreen />} />
        <Route path="/drawings" element={<DrawGameScreen />} />
        <Route path="/puzzles" element={<PuzzleGameScreen />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Routers;
