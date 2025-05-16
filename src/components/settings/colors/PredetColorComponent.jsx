import React, { useContext } from 'react'
import { Context } from '../../../shared/context'

function PredetColorComponent({ prim, sec }) {
  const { setPrimaryColor, setSecondaryColor } = useContext(Context)

  // ✅ Función para actualizar y guardar en LocalStorage
  const handlePresetColor = () => {
    setPrimaryColor(prim)
    setSecondaryColor(sec)

    // 👉 Guardar en LocalStorage
    localStorage.setItem('primaryColor', prim)
    localStorage.setItem('secondaryColor', sec)
  }

  return (
    <button
      className='predet-btn'
      style={{ backgroundColor: `${prim}` }}
      onClick={handlePresetColor}
    />
  )
}

export default PredetColorComponent
