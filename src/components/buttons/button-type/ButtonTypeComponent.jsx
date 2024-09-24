import { useContext } from "react";
import "./buttonType.css"
import { Context } from "../../../shared/context";

// eslint-disable-next-line react/prop-types
function ButtonTypeComponent({classN, onClick, typeGame}) {

  const {t} = useContext(Context);

  return (
      <button onClick={onClick} className={`${classN} button-ripple`}>
         {t(typeGame)}
      </button>
  )
}

export default ButtonTypeComponent