import PropTypes from 'prop-types'

import ButtonReturnComponent from '../../buttons/button-return/ButtonReturnComponent'
import ButtonNextComponent from '../../buttons/button-next/ButtonNextComponent'
import ButtonSolutionComponent from '../../buttons/button-solution/ButtonSolutionComponent'
import "./runtocolorGame.css"
import { useContext, useState } from 'react'
import { Context } from "../../../shared/context";
import ButtonTypeComponent from '../../buttons/button-type/ButtonTypeComponent'
import InfoComponent from '../../info/InfoComponent'

function RuntocolorGameComponent({ returnToScreen }) {
  const [color, setColor] = useState("red")
  const [countdown, setCountdown] = useState("letsStart") 
  const [timeAmount, setTimeAmount] = useState(5)
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const { t } = useContext(Context);
  const colorArray = ["blue", "red", "green", "yellow"]

  const countDown = () => {
    setCountdown(timeAmount)
    setIsCountdownActive(true) // Marca que la cuenta atrás está activa

    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (typeof prevCountdown === 'string' || prevCountdown <= 1) {
          clearInterval(interval) // Limpia el intervalo cuando llega a 0 o muestra "timesUp"
          setIsCountdownActive(false) // Marca que la cuenta atrás ha terminado
          return t("timesUp") 
        }
        return prevCountdown - 1 
      })
    }, 1000) 
  }

  const handleNext = () => {
    if (isCountdownActive) {
      // Si la cuenta atrás está activa, forzar que termine inmediatamente
      setCountdown(t("timesUp"))
      setIsCountdownActive(false)
      return
    }
    
    countDown() 
    let newColor
    do {
      newColor = colorArray[Math.floor(Math.random() * colorArray.length)]
    } while (newColor === color) 
    setColor(newColor)
  }

  const handleShow = () => {}

  return (
    <div>
    <div className='buttons-position-absolute'>
      <InfoComponent/>
      <ButtonReturnComponent returnToScreen={returnToScreen} />
    </div>
      <div className='button-next-game'>
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className='button-solution-game'>
        <ButtonSolutionComponent show={handleShow} />
      </div>
      <div className='shadow-game-buttonMode'>
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
      <button className='button-box-run-color' style={{backgroundColor: color}} onClick={handleNext} disabled={isCountdownActive}>
        {typeof countdown === 'number' ? countdown : t(countdown)} 
      </button>
    </div>
  )
}

RuntocolorGameComponent.propTypes = {
  returnToScreen: PropTypes.func
}

export default RuntocolorGameComponent
