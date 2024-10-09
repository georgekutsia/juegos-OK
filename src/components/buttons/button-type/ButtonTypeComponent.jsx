import { useContext } from "react";
import "./buttonType.css"
import { Context } from "../../../shared/context";

// eslint-disable-next-line react/prop-types
function ButtonTypeComponent({classN, onClick, typeGame, icon, otherClass}) {

  const {t} = useContext(Context);

  return (
      <button onClick={onClick} className={`${classN} button-ripple ${otherClass}`}>
      {icon ?  <i className={`fa-solid  ${icon}`}></i>:
        t(typeGame)
      }
      </button>
  )
}

export default ButtonTypeComponent