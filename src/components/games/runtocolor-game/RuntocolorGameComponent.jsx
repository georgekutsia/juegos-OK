import PropTypes from 'prop-types';
import ButtonReturnComponent from '../../buttons/button-return/ButtonReturnComponent';
import ButtonNextComponent from '../../buttons/button-next/ButtonNextComponent';
import "./runtocolorGame.css";
import { useContext, useState } from 'react';
import { Context } from "../../../shared/context";
import ButtonTypeComponent from '../../buttons/button-type/ButtonTypeComponent';
import InfoComponent from '../../info/InfoComponent';

function RuntocolorGameComponent({ returnToScreen }) {
  const [color, setColor] = useState("red");
  const [countdown, setCountdown] = useState("letsStart");
  const [timeAmount, setTimeAmount] = useState(5);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [colorArray, setColorArray] = useState([]); // Cambia colorArray a un estado
  const { t } = useContext(Context);

  const countDown = () => {
    setCountdown(timeAmount);
    setIsCountdownActive(true);

    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (typeof prevCountdown === 'string' || prevCountdown <= 1) {
          clearInterval(interval);
          setIsCountdownActive(false);
          return t("timesUp");
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const handleNext = () => {
    if (isCountdownActive) {
      setCountdown(t("timesUp"));
      setIsCountdownActive(false);
      return;
    }
    countDown();

    let newColor;
    do {
      newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    } while (newColor === color);
    setColor(newColor);
  };

  const handleColor = (color) => {
    setColorArray((prevColors) => {
      if (prevColors.includes(color)) {
        return prevColors.filter((c) => c !== color);
      } else {
        return [...prevColors, color];
      }
    });
  };
  

  return (
    <div>
      <div className='buttons-position-absolute'>
        <InfoComponent />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className='button-next-game'>
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className='shadow-game-buttonMode buttonMode-runtocolor'>
      <div>
        <ButtonTypeComponent
          classN='button-type-number'
          typeGame='5s'
          onClick={() => setTimeAmount(5)}
        />
        <ButtonTypeComponent
          classN='button-type-number'
          typeGame='10s'
          onClick={() => setTimeAmount(10)}
        />
      </div>
        <div>
          <ButtonTypeComponent
            classN='button-type-number'
            backColor="var(--orange)"
            onClick={() => handleColor("var(--orange)")}
          />
          <ButtonTypeComponent
            classN='button-type-number'
            backColor="var(--pink)"
            onClick={() => handleColor("var(--pink)")}
          />
          <ButtonTypeComponent
            classN='button-type-number'
            backColor="var(--blue)"
            onClick={() => handleColor("var(--blue)")}
          />
        </div>
        <div>
          <ButtonTypeComponent
            classN='button-type-number'
            backColor="var(--yellow)"
            onClick={() => handleColor("var(--yellow)")}
          />
          <ButtonTypeComponent
            classN='button-type-number'
            backColor="var(--green)"
            onClick={() => handleColor("var(--green)")}
          />
          <ButtonTypeComponent
            classN='button-type-number'
            backColor="var(--red)"
            onClick={() => handleColor("var(--red)")}
          />
        </div>
      </div>
      <div className='colorArray-list' >
        {colorArray.map((color, index) =>
        (<div style={{backgroundColor:color}} key={index}></div>)
        )}
      </div>
      <button className='button-box-run-color' style={{ backgroundColor: color }} onClick={handleNext} disabled={isCountdownActive}>
        {typeof countdown === 'number' ? countdown : t(countdown)}
      </button>
    </div>
  );
}

RuntocolorGameComponent.propTypes = {
  returnToScreen: PropTypes.func
};

export default RuntocolorGameComponent;
