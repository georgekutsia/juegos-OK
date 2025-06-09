import PropTypes from 'prop-types'
import ButtonReturnComponent from '../../buttons/button-return/ButtonReturnComponent'
import ButtonNextComponent from '../../buttons/button-next/ButtonNextComponent'
import './runtocolorGame.css'
import { useContext, useRef, useState } from 'react'
import { Context } from '../../../shared/context'
import ButtonTypeComponent from '../../buttons/button-type/ButtonTypeComponent'
import InfoComponent from '../../info/InfoComponent'
import finalRing from '../../../../src/audio/beep-warning-6387.mp3'

function RuntocolorGameComponent({ returnToScreen }) {
  const [color, setColor] = useState('red')
  const [countdown, setCountdown] = useState('letsStart')
  const [timeAmount, setTimeAmount] = useState(5)
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [colorArray, setColorArray] = useState(['var(--white)'])
  const [showAlert, setshowAlert] = useState(false)
  const intervalRef = useRef(null)
  const { t } = useContext(Context)
  const audioRef = useRef(new Audio(finalRing))

  const colorGroups = [
    ['var(--orange)', 'var(--pink)', 'var(--blue)', 'var(--grey)'],
    ['var(--white)', 'var(--brown)', 'var(--violet)', 'var(--darkGreen)'],
    ['var(--yellow)', 'var(--green)', 'var(--red)', 'var(--black)']
  ]

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const countDown = () => {
    clearExistingInterval()
    setCountdown(timeAmount)
    setIsCountdownActive(true)

    intervalRef.current = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (typeof prevCountdown === 'string' || prevCountdown <= 1) {
          clearExistingInterval()
          setIsCountdownActive(false)
          audioRef.current.play()
          return t('timesUp')
        }
        return prevCountdown - 1
      })
    }, 1000)
  }

  const handleNext = () => {
    if (isCountdownActive) {
      clearExistingInterval()
      setCountdown(t('timesUp'))
      setIsCountdownActive(false)
      return
    }

    if (colorArray.length === 0) {
      setshowAlert(true)
      setTimeout(() => setshowAlert(false), 2000)
      return
    }

    countDown()
    let newColor
    do {
      newColor = colorArray[Math.floor(Math.random() * colorArray.length)]
    } while (newColor === color && colorArray.length > 1)
    setColor(newColor)
  }

  const handleColor = (color) => {
    setColorArray((prevColors) => {
      if (prevColors.length > 1) {
        if (prevColors.includes(color)) {
          return prevColors.filter((c) => c !== color)
        } else {
          return [...prevColors, color]
        }
      }

      if (prevColors.includes(color) && prevColors.length === 1) {
        setshowAlert(true)
        setTimeout(() => setshowAlert(false), 2000)
        return prevColors
      }

      return [...prevColors, color]
    })
  }

  return (
    <>
      <div className='buttons-position-absolute'>
        <InfoComponent
          title0={'objectiveOfGameI'}
          title1={'ruleOfGameI'}
          title2={'modeOfGameI'}
          text0={'colorRunGameObjective'}
          text1={'colorRunGameI'}
          listOfGames
          li1={'colorRunGameIli1'}
          li2={'colorRunGameIli2'}
          li3={'colorRunGameIli3'}
        />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className='button-next-game'>
        <ButtonNextComponent random={handleNext} />
      </div>

      <div className='shadow-game-buttonMode buttonMode-runtocolor'>
        <h3>{t('chooseDuration')}</h3>
        <div className='slider-time-container'>
          <input
            type='range'
            min='5'
            max='120'
            step='5'
            value={timeAmount}
            onChange={(e) => setTimeAmount(Number(e.target.value))}
          />
        </div>

        <div className='choosecolor-div'>
          <h3>{t('chooseColors1')}</h3>
          <h3>{t('chooseColors2')}</h3>
        </div>

        {colorGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {group.map((color, index) => (
              <ButtonTypeComponent
                key={index}
                classN='button-type-number'
                backColor={color}
                onClick={() => handleColor(color)}
                isSelected={colorArray.includes(color)} 
              />
            ))}
          </div>
        ))}
      </div>

      {showAlert && (
        <div className='position-absolute-alert'>{t('nocolorAlert')}</div>
      )}

      <div className='colorArray-list'>
        {colorArray.length > 0 ? (
          colorArray.map((color, index) => (
            <div
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => handleColor(color)} // <- Añadido para que al hacer clic, lo quite
              title={color}
            ></div>
          ))
        ) : (
          <h1>{t('noColor')}</h1>
        )}
      </div>

      <button
        className='button-box-run-color'
        style={{ backgroundColor: color }}
        onClick={handleNext}
        disabled={isCountdownActive}
      >
        <h6 className='colorTimedown-display'>{timeAmount}s</h6>
        {typeof countdown === 'number' ? countdown : t(countdown)}
      </button>
    </>
  )
}

RuntocolorGameComponent.propTypes = {
  returnToScreen: PropTypes.func
}

export default RuntocolorGameComponent
