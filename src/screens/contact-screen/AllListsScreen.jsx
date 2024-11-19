import './allLists.css'
import { useContext} from 'react'
import { Context } from "../../shared/context";

import { AnimalsListComponent, ScreenTitleComponent } from '../../components'
function AllListsScreen() {
  const { animalList} = useContext(Context);


  return (
    <div className='screens-box'>
      <ScreenTitleComponent text={'showAllAnimalTitle'} />
      <section className='contact-screen'>
        {animalList.map((hey, index) => (
          <AnimalsListComponent
            index={index}
            key={index}
            fotoR={hey.imagenReal}
            fotoD={hey.imagenAnimada}
            nombre={hey.nombre}
            altura={hey.altura}
            peso={hey.peso}
            velocidad={hey.velocidad}
            armas={hey.armas}
            habilidad={hey.habilidad}
            ubicacion={hey.ubicacion}
          />
        ))}
      </section>
    </div>
  )
}

export default AllListsScreen
