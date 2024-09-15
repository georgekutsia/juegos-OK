// import React from 'react'

import ButtonComponent from "../../components/buttons/button-link/ButtonLinkComponent"
import ProfileComponent from "../../components/profile/ProfileComponent"

function PortfolioScreen() {


  return (
    <div>
    <ProfileComponent name={"Lizbeth"} text={"Voy a matar a George por no recordar mi nombre"} img={"dnaljnsdln"}/>
    <ProfileComponent name={"Yeray"} text={"Hoy no puedo, mi frase favorita"} img={"hkgdfa86isab"}/>
    <ProfileComponent name={"George"} text={"Hoy no puedo, mi frase favorita"} img={"hkgdfa86isab"}/>
    <ButtonComponent text={"Volver a los juegos"}/>
    </div>
  )
}

export default PortfolioScreen