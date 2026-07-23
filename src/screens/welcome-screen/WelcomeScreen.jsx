import ScreenTitleComponent from "../../components/screen-title/ScreenTitleComponent";
import "./welcomeScreen.css";
import { useContext, useState } from "react";
import { Context } from "../../shared/context";
import { BigTitleComponent } from "../../components";
import { NavLink } from "react-router-dom";

const creatureRoutes = [
  "/questions",
  "/sounds",
  "/sports",
  "/drawings",
  "/puzzles",
];

const sectionDescriptionKeys = [
  "questionGameI1",
  "soundGameI1",
  "sportGameI1",
  "drawGameI1",
  "puzzleGameI1",
];

function WelcomeScreen() {
  const { t, dataNavbarImg, currentCreatureName } = useContext(Context);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="screens-box welcome-screen">
      <p className="mobile-warning">{t("mobileWarning")}</p>
      <BigTitleComponent text="welcome" />
      <ScreenTitleComponent text="welcomeTo" />
      <section className="welcome-screen-box">
        {dataNavbarImg.slice(1, 6).map((imgSrc, index) => (
          <NavLink
            className={`welcome-screen-link ${
              hoveredIndex !== null && index < hoveredIndex ? "move-left" : ""
            } ${
              hoveredIndex !== null && index > hoveredIndex ? "move-right" : ""
            }`}
            key={imgSrc}
            to={creatureRoutes[index]}
            state={{ openNavbar: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <figure>
              <img
                className="welcome-screen-img"
                src={imgSrc}
                alt={t(`${currentCreatureName}${index + 1}`)}
              />
              <h3 className="welcome-screen-name">
                {t(`${currentCreatureName}${index + 1}`)}
              </h3>
              <p className="welcome-screen-description">
                {t(sectionDescriptionKeys[index])}
              </p>
            </figure>
          </NavLink>
        ))}
      </section>
    </div>
  );
}

export default WelcomeScreen;
