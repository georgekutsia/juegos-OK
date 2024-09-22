import { useContext, useState } from "react";

import "./buttonNext.css"
import { Context } from "../../../shared/context";
function ButtonNextComponent() {
  const {t} = useContext(Context);

  const [showButton, setshowButton] = useState(true)
  const handleClick = () => {
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
      <button data-aos="fade-up" onClick={()=>handleClick()} className="button-next">{t("next")}</button>
    }
    </>
  )
}

export default ButtonNextComponent