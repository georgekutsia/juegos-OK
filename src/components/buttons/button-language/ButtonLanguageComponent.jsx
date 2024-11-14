import "./buttonLanguageComponent.css"

import { useContext } from "react";
import { Context } from "../../../shared/context";
// eslint-disable-next-line react/prop-types
function ButtonLanguageComponent({text, language}) {
  const {t , changeLanguage} = useContext(Context);

  return (
    <div>
    <button onClick={() => changeLanguage(language)}> {t(text)}</button>
    </div>
  )
}

export default ButtonLanguageComponent