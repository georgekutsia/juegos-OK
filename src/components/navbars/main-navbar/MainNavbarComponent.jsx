import { useContext } from "react";
import MainNavbarButtonComponent from "./main-navbar-button/MainNavbarButtonComponent";
import "./MainNavbar.css";
import ProfileNavbarButtonComponent from "./profile-navbar-button/ProfileNavbarButtonComponent";
import { Context } from "../../../shared/context.js";


function MainNavbarComponent() {
  const {  dataNavbarName , dataNavbarImg, } = useContext(Context);

  return (
    <>
      <nav className="mainNavbar">
        <input id="mainNavbarMenu" type="checkbox" />
        <label htmlFor="mainNavbarMenu">
          <img className="mainNavbarMenu-img" src={dataNavbarImg[0]} alt="menu" />
        </label>
        <ul className="mainNavbarMenu">
          <MainNavbarButtonComponent text={dataNavbarName[0]} img={dataNavbarImg[1]} alt={"juegos"} navLinkTo="/questions" />
          <MainNavbarButtonComponent text={dataNavbarName[1]} img={dataNavbarImg[2]} alt={"juegos"}  navLinkTo="/sounds"  />
          <MainNavbarButtonComponent text={dataNavbarName[2]} img={dataNavbarImg[3]} alt={"Información"}  navLinkTo="/sports"  />
          <MainNavbarButtonComponent text={dataNavbarName[3]} img={dataNavbarImg[4]} alt={"Información"}  navLinkTo="/drawings"  />
          <MainNavbarButtonComponent text={dataNavbarName[4]} img={dataNavbarImg[5]} alt={"juegos"}  navLinkTo="/puzzles"  />
          <ProfileNavbarButtonComponent />
        </ul>

      </nav>
    </>
  );
}

export default MainNavbarComponent;
