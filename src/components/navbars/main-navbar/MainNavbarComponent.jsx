import { useContext, useState, useRef, useEffect } from "react";
import MainNavbarButtonComponent from "./main-navbar-button/MainNavbarButtonComponent";
import "./MainNavbar.css";
import ProfileNavbarButtonComponent from "./profile-navbar-button/ProfileNavbarButtonComponent";
import { Context } from "../../../shared/context.js";
import SettingComponent from "../../settings/SettingComponent.jsx";

function MainNavbarComponent() {
  const { dataNavbarName, dataNavbarImg, handleChangeCreature } = useContext(Context);
  const [showSettings, setshowSettings] = useState(false);
  const [menuIcon, setMenuIcon] = useState(dataNavbarImg[0]); // Estado para el ícono del menú
  const settingsRef = useRef(null);

  // ✅ Recuperar el valor de LocalStorage al cargar
  useEffect(() => {
    const savedCreature = localStorage.getItem("selectedCreature");
    if (savedCreature) {
      handleChangeCreature(savedCreature);
    }
  }, [handleChangeCreature]);

  // ✅ Recuperar el icono desde el LocalStorage
  useEffect(() => {
    const savedIconIndex = localStorage.getItem("selectedCreatureIndex");
    if (savedIconIndex) {
      setMenuIcon(dataNavbarImg[parseInt(savedIconIndex)]);
    } else {
      setMenuIcon(dataNavbarImg[0]); // Valor por defecto si no hay en localStorage
    }
  }, [dataNavbarImg]);

  // ✅ Manejo del clic fuera del componente
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
          <img className="mainNavbarMenu-img" src={menuIcon} alt="menu" />
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
