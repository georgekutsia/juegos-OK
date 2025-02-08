import PropTypes from 'prop-types';
import ButtonReturnComponent from '../../buttons/button-return/ButtonReturnComponent';
import ButtonNextComponent from '../../buttons/button-next/ButtonNextComponent';
import "./runtocolorGame.css";
import { useContext, useRef, useState } from 'react';
import { Context } from "../../../shared/context";
import ButtonTypeComponent from '../../buttons/button-type/ButtonTypeComponent';
import InfoComponent from '../../info/InfoComponent';
import finalRing from "../../../../public/audio/beep-warning-6387.mp3";

function RuntocolorGameComponent({ returnToScreen }) {
  const [color, setColor] = useState("red");
  const [countdown, setCountdown] = useState("letsStart");
  const [timeAmount, setTimeAmount] = useState(5);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [colorArray, setColorArray] = useState(["var(--white)"]);
  const [showAlert, setshowAlert] = useState(false); // Control para mostrar alertas
  const intervalRef = useRef(null); // Referencia para gestionar intervalos
  const { t } = useContext(Context);
  const audioRef = useRef(new Audio(finalRing)); // Referencia al sonido final

  // Limpia cualquier intervalo existente
  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Inicia la cuenta atrás
  const countDown = () => {
    clearExistingInterval(); // Limpia intervalos previos
    setCountdown(timeAmount);
    setIsCountdownActive(true);

    intervalRef.current = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (typeof prevCountdown === 'string' || prevCountdown <= 1) {
          clearExistingInterval();
          setIsCountdownActive(false);
          audioRef.current.play(); // Reproduce el sonido final
          return t("timesUp");
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  // Maneja el evento "Siguiente"
  const handleNext = () => {
    if (isCountdownActive) {
      clearExistingInterval(); // Detiene la cuenta activa si se hace clic
      setCountdown(t("timesUp"));
      setIsCountdownActive(false);
      return;
    }

    if (colorArray.length === 0) {
      // Alerta si solo queda un color
      setshowAlert(true);
      setTimeout(() => setshowAlert(false), 2000);
      return;
    }

    countDown();
    let newColor;
    do {
      newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    } while (newColor === color && colorArray.length > 1); // Evita repetir colores
    setColor(newColor);
  };

  // Maneja la lógica de agregar o eliminar colores
  const handleColor = (color) => {
    setColorArray((prevColors) => {
      if (prevColors.length > 1) {
        if (prevColors.includes(color)) {
          return prevColors.filter((c) => c !== color); // Elimina el color si ya hay en el array
        } else {
          return [...prevColors, color]; // Agrega el color al array
        }
      }

      if (prevColors.includes(color) && prevColors.length === 1) {
        // Alerta si intentas eliminar el único color, porque sin colores eso da fallo
        setshowAlert(true);
        setTimeout(() => setshowAlert(false), 2000);
        return prevColors;
      }

      return [...prevColors, color]; // Agrega el color si no está
    });
  };

  return (
    <div>
      <div className="buttons-position-absolute">
      <InfoComponent title1={"ruleOfGameI"}  title2={"modeOfGameI"}   text1={"colorRunGameI"} listOfGames li1={"colorRunGameIli1"} li2={"colorRunGameIli2"} li3={"colorRunGameIli3"} />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className="button-next-game">
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className="shadow-game-buttonMode buttonMode-runtocolor">
        <div>
          <ButtonTypeComponent
            classN="button-type-number"
            typeGame="5s"
            onClick={() => setTimeAmount(5)}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            typeGame="10s"
            onClick={() => setTimeAmount(10)}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            typeGame="15s"
            onClick={() => setTimeAmount(15)}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            typeGame="25s"
            onClick={() => setTimeAmount(25)}
          />
        </div>
        <div>
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--orange)"
            onClick={() => handleColor("var(--orange)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--pink)"
            onClick={() => handleColor("var(--pink)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--blue)"
            onClick={() => handleColor("var(--blue)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--grey)"
            onClick={() => handleColor("var(--grey)")}
          />
        </div>
        <div>
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--white)"
            onClick={() => handleColor("var(--white)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--brown)"
            onClick={() => handleColor("var(--brown)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--violet)"
            onClick={() => handleColor("var(--violet)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--darkGreen)"
            onClick={() => handleColor("var(--darkGreen)")}
          />
        </div>
        <div>
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--yellow)"
            onClick={() => handleColor("var(--yellow)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--green)"
            onClick={() => handleColor("var(--green)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--red)"
            onClick={() => handleColor("var(--red)")}
          />
          <ButtonTypeComponent
            classN="button-type-number"
            backColor="var(--black)"
            onClick={() => handleColor("var(--black)")}
          />
        </div>
      </div>
      {showAlert && (
        <div className="position-absolute-alert">{t("nocolorAlert")}</div>
      )}
      <div className="colorArray-list">
        {colorArray.length > 0 ? (
          colorArray.map((color, index) => (
            <div style={{ backgroundColor: color }} key={index}></div>
          ))
        ) : (
          <h1>{t("noColor")}</h1>
        )}
      </div>
      <button
        className="button-box-run-color"
        style={{ backgroundColor: color }}
        onClick={handleNext}
        disabled={isCountdownActive}
      >
        <h6 className="colorTimedown-display">{timeAmount}s</h6>
        {typeof countdown === "number" ? countdown : t(countdown)}
      </button>
    </div>
  );
}

RuntocolorGameComponent.propTypes = {
  returnToScreen: PropTypes.func,
};

export default RuntocolorGameComponent;
