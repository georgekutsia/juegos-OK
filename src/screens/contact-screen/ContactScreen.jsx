import "./contactScreen.css"
import animalsData from "../../data/animalsData"
import { useEffect, useState } from "react"
import { AnimalsListComponent } from "../../components"
function ContactScreen() {

const [data, setdata] = useState([])

useEffect(() => {
  
  setdata(animalsData)
}, [animalsData])

  return (
  <div className="screens-box contact-screen">
     {data.map((hey, index) =>
      <AnimalsListComponent index={index} key={index} fotoR={hey.imagenReal} fotoD={hey.imagenAnimada} nombre={hey.nombre} altura={hey.altura} peso={hey.peso} velocidad={hey.velocidad} habilidad={hey.habilidad} ubicacion={hey.ubicacion}/>
     )}
  </div>
  )
}

export default ContactScreen