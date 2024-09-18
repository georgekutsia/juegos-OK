import "./buttonPrueba.css"
// eslint-disable-next-line react/prop-types
function ButtonPrueba({loquesea, color, size}) {
  return (
<button className="button-prueba" style={{backgroundColor:`${color}`, height:`${size}`, width:`${size}`}}> {loquesea}</button>
  )
}

export default ButtonPrueba