/* eslint-disable react/prop-types */
// import React from 'react'

import ButtonComponent from "../buttons/button-link/ButtonLinkComponent"
import "./profileComponent.css"
function ProfileComponent({name, text, img, aosDuration}) {
  return (
    <div data-aos="fade-down" data-aos-duration={aosDuration} className="profile-component-box">
      <ButtonComponent text={"llevar a linkedin"} direction={"www.google.com"}/>
      <ButtonComponent text={"a mi portfolio"} direction={"www.linkedin.com"}/>
      <h2>{name}</h2>
      <h3>{text}</h3>
      <img src={img} alt="Img no encontrada" width={"200px"} />
    </div>
  )
}

export default ProfileComponent