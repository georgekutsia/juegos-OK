import "./profileNavbarButton.css";
function ProfileNavbarButtonComponent() {
  return (
    <li>
      <span>Información</span>
      <div className="profile-navbar-info">
        <button>
          <i className="fa-solid fa-info"></i>
        </button>
        <button>
          <i className="fa-regular fa-address-card"></i>
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
