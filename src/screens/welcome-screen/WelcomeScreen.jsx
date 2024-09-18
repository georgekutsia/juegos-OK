import { ButtonPrueba } from "../../components"
import "./welcomeScreen.css"



function WelcomeScreen() {
  return (
    <div className="screens-box welcome-screen">
<ButtonPrueba loquesea={"botón azul"} color={"blue"} size={"50px"}/>
<ButtonPrueba   loquesea={"botón verde"} color={"green"} size={"90px"}/>
<ButtonPrueba   loquesea={"botón rojo"} color={"red"} size={"150px"}/>
<ButtonPrueba   loquesea={"botón amarillo"} color={"yellow"} size={"65px"}/>
<ButtonPrueba   loquesea={"botón naranja"} color={"orange"} size={"80px"}/>

    </div>
  )
}

export default WelcomeScreen