import { useContext } from "react";
import './characterComponent.css';
import { Context } from "../../../shared/context";

function CharacterComponent() {
  const {t, handleChangeCreature } = useContext(Context);

  return (
    <div className="character-box">
      <h2>{t("currentPet")}</h2>
      <button className="character-box-button" onClick={() => handleChangeCreature("osito")}>
      <img className="character-box-button-img" src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726651457/osito7_seokvo.png" alt="Osito mascota" />
      {t("changeBear")}</button>
      <button className="character-box-button" onClick={() => handleChangeCreature("ranita")}>
      <img className="character-box-button-img" src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529846/ranita1_nhjyhu.png" alt="Ranita mascota" />
      {t("changeFrog")}</button>
      <button className="character-box-button" onClick={() => handleChangeCreature("pezi")}>
      <img className="character-box-button-img" src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1739054897/Pezi_n3jtaz.png" alt="Pezi mascota" />
      {t("changeFish")}</button>

    </div>
  );
}

export default CharacterComponent;
