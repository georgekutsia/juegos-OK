import { useContext } from "react";
import MainNavbarButtonComponent from "./main-navbar-button/MainNavbarButtonComponent";
import "./MainNavbar.css";
import ProfileNavbarButtonComponent from "./profile-navbar-button/ProfileNavbarButtonComponent";
import {Context} from "../../../shared/context"
function MainNavbarComponent() {

  const {profile } = useContext(Context);

  const handleClick = () => {
    profile
  }
  return (
    <>
      <nav className="mainNavbar">
        <input id="mainNavbarMenu" type="checkbox" />
        <label htmlFor="mainNavbarMenu"><img className="mainNavbarMenu-img" src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529846/ranita1_nhjyhu.png" alt="menu" /></label>
        <ul className="mainNavbarMenu">
          <MainNavbarButtonComponent text={"Juegos de Tita"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726563884/ranita5_rpmmzq.png"} alt={"juegos"} onClick={handleClick}/>
          <MainNavbarButtonComponent text={"Preguntas de Nito"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529847/ranita3_du2o6y.png"} alt={"juegos"}/>
          <MainNavbarButtonComponent text={"Canciones de Croqui"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529847/ranita2_qslknb.png"} alt={"juegos"}/>
          <MainNavbarButtonComponent text={"Deportes de Salti"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726564486/ranita6_ay9nbm.png"} alt={"Información"}/>
          <MainNavbarButtonComponent text={"Dibujos de Pepo"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529847/ranita4_abtxpu.png"} alt={"Información"}/>
          <ProfileNavbarButtonComponent/>
        </ul>
      </nav>

    </>
  );
}

export default MainNavbarComponent;
