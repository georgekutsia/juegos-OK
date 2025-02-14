import ButtonLanguageComponent from "../../buttons/button-language/ButtonLanguageComponent"
import "./languageComponent.css"
import { useContext } from "react";
import { Context } from "../../../shared/context";
function LanguageComponent() {
  const {t } = useContext(Context);

  return (
    <div className="language-box">
    <h2>{t("lang_actual")}</h2>
    <div className="language-box-election">
      <ButtonLanguageComponent text={"lang_ger"} language={"ger"}/>
      <ButtonLanguageComponent text={"lang_esp"} language={"esp"}/>
    </div>
    </div>
  )
}

export default LanguageComponent