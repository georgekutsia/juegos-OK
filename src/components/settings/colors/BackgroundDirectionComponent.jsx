import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../shared/context'

function BackgroundDirectionComponent() {
  const { setvertical, sethorizontal, vertical, horizontal, primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor } = useContext(Context)

  const [isDisabled, setIsDisabled] = useState(true) // Estado booleano

  useEffect(() => {
    if (primaryColor !== "#ffa578" || secondaryColor !== "#eac0ab") {
      setIsDisabled(false) // Habilita el botón
    } else {
      setIsDisabled(true) // Deshabilita el botón
    }
  }, [primaryColor, secondaryColor])

  const handleVerticalChange = () => {
    if (vertical === 'bottom') {
      setvertical("top")
    } else {
      setvertical("bottom")
    }
  }

  
  const handleReset = () => {
    setPrimaryColor("#ffa578")
    setSecondaryColor("#eac0ab")
    setvertical("bottom")
    sethorizontal("right")
  }
  const handleHorizontalChange = () => {
    if (horizontal === 'right') {
      sethorizontal("left")
    } else {
      sethorizontal("right")
    }
  }

  return (
    <div className='background-directions'>
      {vertical === 'top' ? (
        <i className='fa-solid fa-arrow-up' onClick={handleVerticalChange}></i>
      ) : (
        <i className='fa-solid fa-arrow-down' onClick={handleVerticalChange}></i>
      )}
      
      {horizontal === 'right' ? (
        <i className='fa-solid fa-arrow-right' onClick={handleHorizontalChange}></i>
      ) : (
        <i className='fa-solid fa-arrow-left' onClick={handleHorizontalChange}></i>
      )}

      {/* Icono de reset con clase dinámica */}
      <i className={`fa-solid fa-rotate-left ${isDisabled ? "disabled-icon" : "active-icon"}`} onClick={()=>handleReset()}></i>
    </div>
  )
}

export default BackgroundDirectionComponent;
