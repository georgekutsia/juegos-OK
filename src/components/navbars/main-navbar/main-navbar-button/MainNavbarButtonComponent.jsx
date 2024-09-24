import { useContext } from "react";
import { Context } from "../../../../shared/context";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MainNavbarButtonComponent({ text, img, alt, navLinkTo, }) {
  const { t } = useContext(Context);
  return (
    <li >
      <NavLink to={navLinkTo} className={({ isActive }) =>   isActive ? "activeButton" : "inactiveButton"
        }>
        <span>{t(text)}</span>
        <img src={img} alt={alt} />
      </NavLink>
    </li>
  );
}

export default MainNavbarButtonComponent;
