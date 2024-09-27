import { useContext, useState } from "react";

import "./buttonNext.css"
import { Context } from "../../../shared/context";
// eslint-disable-next-line react/prop-types
function ButtonNextComponent({random}) {
  const {t} = useContext(Context);

  const [showButton, setshowButton] = useState(true)
  const handleClick = () => {
    random()
    setTimeout(() => {
      setshowButton(false);
    }, 400);
    setTimeout(() => {
      setshowButton(true)
    }, 1000);
  }
  return (
    <>
    {showButton &&
      <button  onClick={handleClick} className="button-next">{t("next")}</button>
    }
    </>
  )
}

export default ButtonNextComponent