// import React from 'react'
import "./portfolioScreen.css"
import ProfileComponent from "../../components/profile/ProfileComponent"
import "./portfolioScreen.css"
function PortfolioScreen() {


  return (
    <div className="profile-screen">
    <ProfileComponent name={"Antonio"} text={"Voy a matar a George por no recordar mi nombre"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726531400/antoniopixel_b25xdd.png"}/>
    <ProfileComponent name={"Lizbeth"} text={"Hoy no puedo, mi frase favorita"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726531401/lizbethpixel_eawhru.png"}/>
    <ProfileComponent name={"George"} text={"Hoy no puedo, mi frase favorita"} img={"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726531646/giopixxel_q22dcc.png"}/>
    </div>
  )
}

export default PortfolioScreen