/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-bootstrap"
import "./ButtonLinkComponent.css"
function ButtonComponent({text, direction}) {
  return (
    <div>
    <NavLink className="buttonazo" href={direction}  target="_blank"   rel="noopener noreferrer">{text}</NavLink>
    </div>
  )
}

export default ButtonComponent