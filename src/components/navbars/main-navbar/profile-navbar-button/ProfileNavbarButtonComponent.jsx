/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./profileNavbarButton.css";
// import {Context} from "../../../../shared/context"
// import { useContext } from "react";
import { NavLink } from "react-router-dom";


function ProfileNavbarButtonComponent({setshowSettings, showSettings}) {
  // const {profile, setProfile} = useContext(Context)

  // const handleClickProfile = () => {
  //   setProfile(!profile)
  // }
  return (
    <li>
      <div className="profile-navbar-info">
        <NavLink className={"nav-link-info"} to={"/"} ><i className="fa-solid fa-info "></i></NavLink>
        <NavLink className={"nav-link-info"} to={"/profile"} ><i className="fa-regular fa-address-card "></i></NavLink>
      </div>
      <div className="profile-navbar-info">
        <NavLink className={"nav-link-info"} onClick={()=>setshowSettings(!showSettings)}><i className="fa-solid fa-gear"></i></NavLink>
        <NavLink className={"nav-link-info"} to={"/contact"} ><i className="fa-solid fa-table-list"></i></NavLink>
      </div>

    </li>
  );
}

export default ProfileNavbarButtonComponent;
