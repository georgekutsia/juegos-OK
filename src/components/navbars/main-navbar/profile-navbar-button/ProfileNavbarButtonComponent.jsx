import "./profileNavbarButton.css";
import {Context} from "../../../../shared/context"
import { useContext } from "react";


function ProfileNavbarButtonComponent() {
  const {profile, setProfile} = useContext(Context)

  const handleClickProfile = () => {
    setProfile(!profile)
  }
  return (
    <li>
      <span>Información</span>
      <div className="profile-navbar-info">
        <button>
          <i className="fa-solid fa-info"></i>
        </button>
        <button  onClick={()=>handleClickProfile()}>
          <i  onClick={()=>handleClickProfile()} className="fa-regular fa-address-card"></i>
        </button>
      </div>
      <div className="profile-navbar-info">
        <button>
          <i className="fa-regular fa-futbol"></i>
        </button>
        <button>
          <i className="fa-regular fa-envelope"></i>
        </button>
      </div>
    </li>
  );
}

export default ProfileNavbarButtonComponent;
