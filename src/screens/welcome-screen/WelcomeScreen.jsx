import ScreenTitleComponent from "../../components/screen-title/ScreenTitleComponent";
import "./welcomeScreen.css";
import { useContext } from "react";
import { Context } from "../../shared/context";
import { BigTitleComponent } from "../../components";

function WelcomeScreen() {
  const { t, dataNavbarImg, currentCreatureName } = useContext(Context);

  return (
    <div className="screens-box welcome-screen">
      <BigTitleComponent text="welcome" />
      <ScreenTitleComponent text="welcomeTo" />
      <section className="welcome-screen-box">
        {dataNavbarImg.slice(1, 6).map((imgSrc, index) => (
          <figure key={index}>
            <img className="welcome-screen-img" src={t(imgSrc)} alt={currentCreatureName} />
            <h3>{t(`${currentCreatureName}${index + 1}`)}</h3>
          </figure>
        ))}
      </section>
    </div>
  );
}

export default WelcomeScreen;
