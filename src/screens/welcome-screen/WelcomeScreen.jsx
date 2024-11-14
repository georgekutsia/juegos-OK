import ScreenTitleComponent from "../../components/screen-title/ScreenTitleComponent"
import "./welcomeScreen.css"
import { useContext } from "react";
import { Context } from "../../shared/context";
import { BigTitleComponent } from "../../components";


function WelcomeScreen() {
  const { t } = useContext(Context);
  const {  dataNavbarImg, currentCreatureName } = useContext(Context);
  return (
    <div className="screens-box welcome-screen">
         <BigTitleComponent text={"welcome"}/>
        <ScreenTitleComponent text={"welcomeTo"}/>
        <section className="welcome-screen-box">
          <figure>
            <img className="welcome-screen-img" src={t(dataNavbarImg[0])} alt={currentCreatureName} />
            <h3>{t(`${currentCreatureName}1`)} </h3>
          </figure>
          <figure>
            <img className="welcome-screen-img" src={t(dataNavbarImg[1])} alt={currentCreatureName} />
            <h3>{t(`${currentCreatureName}2`)} </h3>
          </figure>
          <figure>
            <img className="welcome-screen-img" src={t(dataNavbarImg[2])} alt={currentCreatureName} />
            <h3>{t(`${currentCreatureName}3`)} </h3>
          </figure>
          <figure>
            <img className="welcome-screen-img" src={t(dataNavbarImg[3])} alt={currentCreatureName} />
            <h3>{t(`${currentCreatureName}4`)} </h3>
          </figure>
          <figure>
            <img className="welcome-screen-img" src={t(dataNavbarImg[4])} alt={currentCreatureName} />
            <h3>{t(`${currentCreatureName}5`)} </h3>
          </figure>
          </section>
    </div>
  )
}

export default WelcomeScreen