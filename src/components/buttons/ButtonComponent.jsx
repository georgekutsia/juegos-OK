/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-bootstrap"

function ButtonComponent({text, direction}) {
  return (
    <NavLink className="button1" href={direction}  rel="noopener noreferrer">{text}</NavLink>

    
  )
}

export default ButtonComponent