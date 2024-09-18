import { useContext } from "react";
import './characterComponent.css';
import { Context } from "../../../shared/context";

function CharacterComponent() {
  const {t, currentCreatureType, handleChangeCreature, dataNavbarImg } = useContext(Context);

  return (
    <div className="character-box">
      <h2>{t("currentPet")} 
      <img className="character-box-h2-img" src={dataNavbarImg[0]} alt={currentCreatureType} />
      </h2>
      
      <button className="character-box-button" onClick={() => handleChangeCreature("osito")}>
      <img className="character-box-button-img" src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726651457/osito7_seokvo.png" alt="" />
      {t("changeBear")}</button>

      <button className="character-box-button" onClick={() => handleChangeCreature("ranita")}>
      <img className="character-box-button-img" src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529846/ranita1_nhjyhu.png" alt="" />
      {t("changeFrog")}</button>
    </div>
  );
}

export default CharacterComponent;
