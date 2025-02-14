/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-bootstrap"
import "./profileComponent.css"
function ProfileComponent({name, text, img, aosDuration, aosDelay, extraInfo}) {
  return (
    <div data-aos="fade-down" data-aos-duration={aosDuration} data-aos-delay={aosDelay} className="profile-component-box">
      <h2>{name}</h2>
      <h4>{text}</h4>
      <img src={img} alt="Img no encontrada" width={"200px"} />
      {extraInfo &&
      <NavLink href="https://portfolio-george-kutsia.netlify.app" target="_blank" style={{color:"blue"}}> Portfolio...</NavLink>
      }
    </div>
  )
}

export default ProfileComponent