import { useContext } from "react";
import "./buttonReturn.css";
import { Context } from "../../../shared/context";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// eslint-disable-next-line react/prop-types
function ButtonReturnComponent({returnToScreen, rotateClass}) {
  const { t } = useContext(Context);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mainNavbarMenu-li-span" {...props}>
     {t("returnText")}
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="bottom" delay={{ show: 800, hide: 200 }} overlay={renderTooltip}>
    <button className={ rotateClass ? `${rotateClass}` :`button-return `} onClick={()=>returnToScreen()}>
    <i className="fa-solid fa-rotate-left"></i>
    </button>
    </OverlayTrigger>

  )
}

export default ButtonReturnComponent