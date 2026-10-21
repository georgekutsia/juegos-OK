import { useContext } from "react";
import { Context } from "../../../../shared/context";
import { NavLink } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// eslint-disable-next-line react/prop-types
function MainNavbarButtonComponent({ text, img, navLinkTo, }) {
  const { t } = useContext(Context);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mainNavbarMenu-li-span" {...props}>
     {t(text)}
    </Tooltip>
  );

  return (
    <li >
      <NavLink to={navLinkTo} aria-label={t(text)} className={({ isActive }) => isActive ? "activeButton" : "inactiveButton"}>
        <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
            <img src={img} alt="" />
        </OverlayTrigger>
        {/* <span>{t(text)}</span> */}
      </NavLink>
    </li>
  );
}

export default MainNavbarButtonComponent;
