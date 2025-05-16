import { useRef, useState, useEffect, useContext } from "react"
import PropTypes from 'prop-types'
import { Context } from "../../shared/context"
import {TimerButtonComponent} from "../../components"
import "./timer-stiles.css"
function TimerComponent({timerClass=""}) {
  const { t } = useContext(Context)
  const [count, setCount] = useState(0)
  const [savedTimes, setSavedTimes] = useState(() => {
    const stored = localStorage.getItem(`savedTimes${timerClass}`)
    try {
      return stored ? JSON.parse(stored) : []
    } catch (e) {
      console.error("Error parseando localStorage:", e)
      return []
    }
  })
  const intervalRef = useRef(null)
  useEffect(() => {
    localStorage.setItem(`savedTimes${timerClass}`, JSON.stringify(savedTimes))
  }, [savedTimes])

  const handleStart = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)
    }
  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
const handleStopStart = () =>{
  if (!intervalRef.current) {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  } else{
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
}
  const handleReset = () => {
    handleStop()
    setCount(0)
  }

  const handleSave = () => {
    if (count > 0) {
      const newTimes = [count, ...savedTimes]
      setSavedTimes(newTimes)
    }
  }

  const handleClear = () => {
    localStorage.removeItem("savedTimes")
    setSavedTimes([])
  }

  return (
    <div className={`timer-comp-box-${timerClass}`}>
      <h2 onClick={handleStopStart}> {count}</h2>
      <div className={`timer-comp-btn-div-${timerClass}`}>
      <TimerButtonComponent handles={handleStart} fas={"play"} i={"start"}/>
      <TimerButtonComponent handles={handleStop} fas={"stop"} i={"stop"}/>
      <TimerButtonComponent handles={handleReset} fas={"rotate"} i={"restart"}/>
      <TimerButtonComponent handles={handleSave} fas={"location-pin"} i={"saveTime"}/>
      <TimerButtonComponent handles={handleClear} fas={"trash-can"} i={"deleteAll"}/>
      </div>
      <h5 className="saved-times">{t('timer.times')}</h5>
      <ul className="displayFlex">
      {savedTimes.length > 0 ? (
    savedTimes.map((time, index) => {
      const realPosition = savedTimes.length - index;
      return (
        <li key={index}>
          <span>{realPosition})</span> {time}s
        </li>
      );
    })
        ) : (
          <li>{t('timer.noTimes')}</li>
        )}
      </ul>
    </div>
  )
}
TimerComponent.propTypes = {
  timerClass: PropTypes.string
  }
export default TimerComponent
