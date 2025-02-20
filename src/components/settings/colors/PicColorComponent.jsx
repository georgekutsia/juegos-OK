import React from 'react'

function PicColorComponent({ handleColor , text}) {
  const handleColorChange = (event) => {
    handleColor(event.target.value) // Actualiza el estado en App.jsx
  }
  return (
    <section
      className='theme-box-input-section'
      data-aos='zoom-in'
      data-aos-delay='1000'
    >
    <h5>{text}</h5>
      <input type='color' id='colorPicker' onChange={handleColorChange} />
    </section>
  )
}

export default PicColorComponent
