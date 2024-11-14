import { useContext, useState, useRef, useEffect } from "react";
import MainNavbarButtonComponent from "./main-navbar-button/MainNavbarButtonComponent";
import "./MainNavbar.css";
import ProfileNavbarButtonComponent from "./profile-navbar-button/ProfileNavbarButtonComponent";
import { Context } from "../../../shared/context.js";
import SettingComponent from "../../settings/SettingComponent.jsx";

function MainNavbarComponent() {
  const { dataNavbarName, dataNavbarImg } = useContext(Context);
  const [showSettings, setshowSettings] = useState(false);
  const settingsRef = useRef(null); // Referencia para SettingComponent

  // Cierra el menú al hacer clic fuera de SettingComponent
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setshowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="mainNavbar">
        <input
          id="mainNavbarMenu"
          type="checkbox"
          onClick={() => setshowSettings(false)}
        />
        <label htmlFor="mainNavbarMenu">
          <img className="mainNavbarMenu-img" src={dataNavbarImg[0]} alt="menu" />
        </label>
        <ul className="mainNavbarMenu">
          <MainNavbarButtonComponent
            text={dataNavbarName[0]}
            img={dataNavbarImg[1]}
            alt={"Juegos"}
            navLinkTo="/questions"
          />
          <MainNavbarButtonComponent
            text={dataNavbarName[1]}
            img={dataNavbarImg[2]}
            alt={"Sonidos"}
            navLinkTo="/sounds"
          />
          <MainNavbarButtonComponent
            text={dataNavbarName[2]}
            img={dataNavbarImg[3]}
            alt={"Deportes"}
            navLinkTo="/sports"
          />
          <MainNavbarButtonComponent
            text={dataNavbarName[3]}
            img={dataNavbarImg[4]}
            alt={"Dibujos"}
            navLinkTo="/drawings"
          />
          <MainNavbarButtonComponent
            text={dataNavbarName[4]}
            img={dataNavbarImg[5]}
            alt={"Puzzles"}
            navLinkTo="/puzzles"
          />
          <ProfileNavbarButtonComponent
            setshowSettings={setshowSettings}
            showSettings={showSettings}
          />
          <div className="navbar-setting-box" ref={settingsRef}>
            {showSettings && <SettingComponent />}
          </div>
        </ul>
      </nav>
    </>
  );
}

export default MainNavbarComponent;
