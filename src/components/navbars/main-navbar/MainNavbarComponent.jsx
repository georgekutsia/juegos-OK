import MainNavbarButtonComponent from "./main-navbar-button/MainNavbarButtonComponent";
import "./MainNavbar.css";
import ProfileNavbarButtonComponent from "./profile-navbar-button/ProfileNavbarButtonComponent";

function MainNavbarComponent() {
  return (
    <>
      <nav className="mainNavbar">
        <input id="mainNavbarMenu" type="checkbox" />
        <label htmlFor="mainNavbarMenu">Menu</label>
        <ul className="mainNavbarMenu">
          <MainNavbarButtonComponent text={"juegos"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529846/ranita1_nhjyhu.png"} alt={"juegos"}/>
          <MainNavbarButtonComponent text={"otra cosa"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529847/ranita3_du2o6y.png"} alt={"juegos"}/>
          <MainNavbarButtonComponent text={"algo más"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529847/ranita2_qslknb.png"} alt={"juegos"}/>
          <MainNavbarButtonComponent text={"información"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529847/ranita4_abtxpu.png"} alt={"Información"}/>
          <ProfileNavbarButtonComponent></ProfileNavbarButtonComponent>
        </ul>
      </nav>

    </>
  );
}

export default MainNavbarComponent;
