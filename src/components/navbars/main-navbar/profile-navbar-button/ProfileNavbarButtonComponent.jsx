import "./profileNavbarButton.css";
// import {Context} from "../../../../shared/context"
// import { useContext } from "react";
import { NavLink } from "react-router-dom";


function ProfileNavbarButtonComponent() {
  // const {profile, setProfile} = useContext(Context)

  // const handleClickProfile = () => {
  //   setProfile(!profile)
  // }
  return (
    <li>
      <div className="profile-navbar-info">
        <NavLink className={"nav-link-info"} to={"/"} ><i className="fa-solid fa-info "></i></NavLink>
        <NavLink className={"nav-link-info"} to={"/portfolio"} ><i className="fa-regular fa-address-card "></i></NavLink>
      </div>
      <div className="profile-navbar-info">
        <NavLink className={"nav-link-info"} to={"/settings"} ><i className="fa-solid fa-gear"></i></NavLink>
        <NavLink className={"nav-link-info"} to={"/contact"} ><i className="fa-regular fa-envelope"></i></NavLink>
      </div>
    </li>
  );
}

export default ProfileNavbarButtonComponent;
