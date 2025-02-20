import React, { useContext } from 'react'
import { Context } from '../../../shared/context'

function PredetColorComponent({prim, sec}) {
  const { setPrimaryColor, setSecondaryColor } = useContext(Context)

  return (
    <button
    className='predet-btn'
    style={{backgroundColor:`${prim}`}}
    onClick={() => {
      setPrimaryColor(prim)
      setSecondaryColor(sec)
    }}
  ></button>
  )
}

export default PredetColorComponent