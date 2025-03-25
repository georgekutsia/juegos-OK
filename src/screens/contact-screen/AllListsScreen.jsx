import './allLists.css'
import { useContext, useState } from 'react'
import { Context } from '../../shared/context'

import {
  AnimalsListComponent,
  MainNavbarButtonComponent,
  ScreenTitleComponent
} from '../../components'
function AllListsScreen() {
  const { animalList, objectsData } = useContext(Context)
  const [showList, setshowList] = useState(1)

  return (
    <div className='screens-box'>
      <nav className='list-nav'>
        <MainNavbarButtonComponent
          text={'Muestra animales y sus datos en los juegos'}
          img={
            'https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1728374042/buhoRealista.webp_mveruh.png'
          }
          alt={'Animales'}
          onClick={() => setshowList(1)}
        />
        <MainNavbarButtonComponent
          text={'Muestra objetos usables en los juegos'}
          img={
            'https://res.cloudinary.com/dtv1oj9bq/image/upload/q_auto:low/v1740682537/avionOb_mdu2dx.png'
          }
          alt={'Objetos'}
          onClick={() => setshowList(2)}
        />
      </nav>
      {showList === 1 && (
        <>
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
        </>
      )}
      {showList === 2 && (
        <>
          <ScreenTitleComponent text={'showAllObjectsTitle'} />
          <section className='contact-screen'>
            {objectsData.map((hey, index) => (
              <img src={hey} alt='index' key={index} className='contact-img-objects'/>
            ))}
          </section>
        </>
      )}
    </div>
  )
}

export default AllListsScreen
