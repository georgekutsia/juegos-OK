import React, { useContext } from 'react'
import { Context } from '../../../shared/context'
import PicColorComponent from './PicColorComponent'
import './background-colors.css'
import BackgroundDirectionComponent from './BackgroundDirectionComponent'
import PredetColorComponent from './PredetColorComponent'
function ColorsComponent() {
  const { setPrimaryColor, setSecondaryColor } = useContext(Context)

  return (
    <section className='color-pic-box'>
      <h3>Selecciona colorores de fondo</h3>
      <div className='color-pic-div'>
        <PicColorComponent handleColor={setPrimaryColor} text={'Primario'} />
        <PicColorComponent
          handleColor={setSecondaryColor}
          text={'Secundario'}
        />
        <BackgroundDirectionComponent />
      </div>
      <section className='color-pic-predet'>
        <h3>Predeterminados</h3>
        <PredetColorComponent prim={"rgb(147, 255, 141)"} sec={"rgb(226, 253, 225)"}/>
        <PredetColorComponent prim={"rgb(255, 249, 141)"} sec={"rgb(252, 249, 201)"} />
        <PredetColorComponent prim={"rgb(255, 209, 141)"} sec={"rgb(253, 232, 200)"} />
        <PredetColorComponent prim={"rgb(141, 185, 255)"} sec={"rgb(201, 220, 250)"} />
        <PredetColorComponent prim={"rgb(255, 141, 251)"} sec={"rgb(253, 207, 251)"} />
        <PredetColorComponent prim={"rgb(255, 141, 145)"} sec={"rgb(248, 196, 198)"}/>
      </section>
    </section>
  )
}

export default ColorsComponent
