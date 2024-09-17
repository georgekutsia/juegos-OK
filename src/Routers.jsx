import { Route, Routes } from "react-router-dom";
import Error404 from "./screens/error-screen/Error404.jsx";
import PortfolioScreen from "./screens/portfolio-screen/PortfolioScreen.jsx";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio" element={<PortfolioScreen />} />
        {/* <Route path="/s" element={<PortfolioScreen />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Routers;
