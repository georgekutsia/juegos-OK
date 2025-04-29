import { useContext, useState } from 'react'
import './buttonType.css'
import { Context } from '../../../shared/context'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function ButtonTypeComponent({
  classN,
  onClick,
  typeGame,
  icon,
  otherClass,
  setActiveIndex,
  activeIndex,
  thisIndex,
  backColor,
  isSelected
}) {
  const { t } = useContext(Context)
  const [myIndex] = useState(thisIndex)

  const handleClicks = () => {
    onClick()
    if (setActiveIndex) {
      setActiveIndex(myIndex)
    }
  }

  const isActive =
    typeof isSelected === 'boolean'
      ? isSelected // para botones de colores seleccionados
      : myIndex === activeIndex // para botones con índice

  return (
    <button
      onClick={handleClicks}
      style={{ backgroundColor: backColor }}
      className={`${classN} button-ripple ${otherClass} ${
        isActive ? '' : 'button-clicked'
      }`}
    >
      {isSelected ? (
        <i className='fa-solid fa-check' ></i>
      ) : icon ? (
        <i className={`fa-solid ${icon}`}></i>
      ) : (
        t(typeGame)
      )}
    </button>
  )
}

ButtonTypeComponent.propTypes = {
  returnToScreen: PropTypes.func,
  thisIndex: PropTypes.number,
  isSelected: PropTypes.bool
}

export default ButtonTypeComponent
