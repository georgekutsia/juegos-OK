import { Route, Routes } from "react-router-dom";
import Error404 from "./screens/error-screen/Error404.jsx";
import { ContactScreen, PortfolioScreen, SettingScreen, WelcomeScreen } from "./screens/index.js";


function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio" element={<PortfolioScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/settings" element={<SettingScreen />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Routers;
