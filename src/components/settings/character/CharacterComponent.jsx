import { useContext, useEffect, useState } from "react";
import './characterComponent.css';
import { Context } from "../../../shared/context";

function CharacterComponent() {
  const { t, handleChangeCreature } = useContext(Context);
  const [selectedCreature, setSelectedCreature] = useState(null);

  // 👉 Recuperar el valor del LocalStorage al cargar el componente
  useEffect(() => {
    const savedCreature = localStorage.getItem("selectedCreature");
    if (savedCreature) {
      setSelectedCreature(savedCreature);
      handleChangeCreature(savedCreature);
    }
  }, [handleChangeCreature]);

  // 👉 Función para cambiar la criatura y guardarla en LocalStorage
  const handleCreatureClick = (creature) => {
    setSelectedCreature(creature);
    handleChangeCreature(creature);
    localStorage.setItem("selectedCreature", creature); // Guarda en LocalStorage
  };

  return (
    <div className="character-box">
      <h2>{t("currentPet")}</h2>

      <button 
        className={`character-box-button ${selectedCreature === "osito" ? "active" : ""}`} 
        onClick={() => handleCreatureClick("osito")}
      >
        <img 
          className="character-box-button-img" 
          src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726651457/osito7_seokvo.png" 
          alt="Osito mascota" 
        />
        {t("changeBear")}
      </button>

      <button 
        className={`character-box-button ${selectedCreature === "ranita" ? "active" : ""}`} 
        onClick={() => handleCreatureClick("ranita")}
      >
        <img 
          className="character-box-button-img" 
          src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529846/ranita1_nhjyhu.png" 
          alt="Ranita mascota" 
        />
        {t("changeFrog")}
      </button>

      <button 
        className={`character-box-button ${selectedCreature === "pezi" ? "active" : ""}`} 
        onClick={() => handleCreatureClick("pezi")}
      >
        <img 
          className="character-box-button-img" 
          src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1739054897/Pezi_n3jtaz.png" 
          alt="Pezi mascota" 
        />
        {t("changeFish")}
      </button>

      <button 
        className={`character-box-button ${selectedCreature === "leon" ? "active" : ""}`} 
        onClick={() => handleCreatureClick("leon")}
      >
        <img 
          className="character-box-button-img" 
          src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1747387542/leon1_ty9fu3.png" 
          alt="León mascota" 
        />
        {t("changeLeon")}
      </button>

    </div>
  );
}

export default CharacterComponent;
