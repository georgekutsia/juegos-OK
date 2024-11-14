import { useContext, useState } from "react";
import "./buttonType.css";
import { Context } from "../../../shared/context";
import PropTypes from "prop-types"
// eslint-disable-next-line react/prop-types
function ButtonTypeComponent({ classN, onClick, typeGame, icon, otherClass, setActiveIndex, activeIndex, thisIndex }) {
  const { t } = useContext(Context);
  const [myIndex] = useState(thisIndex)

const handleClicks = () => {
  onClick()
  setActiveIndex(myIndex)
}

  return (
    <button
      onClick={()=>handleClicks()}
      className={`${classN} button-ripple ${otherClass} ${
        myIndex ===  activeIndex ? "button-clicked" : ""
      }`}
    >
      {icon ? <i className={`fa-solid ${icon}`}></i> : t(typeGame)}
    </button>
  );
}
ButtonTypeComponent.propTypes = {
  returnToScreen: PropTypes.func,
  thisIndex: PropTypes.number
}


export default ButtonTypeComponent;
