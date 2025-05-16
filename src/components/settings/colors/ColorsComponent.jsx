import React, { useContext, useEffect } from 'react'
import { Context } from '../../../shared/context'
import PicColorComponent from './PicColorComponent'
import './background-colors.css'
import BackgroundDirectionComponent from './BackgroundDirectionComponent'
import PredetColorComponent from './PredetColorComponent'

function ColorsComponent() {
  const { 
    setPrimaryColor, 
    setSecondaryColor, 
    setvertical, 
    sethorizontal 
  } = useContext(Context)

  // 👉 Recuperar colores y dirección desde LocalStorage al cargar el componente
  useEffect(() => {
    const savedPrimaryColor = localStorage.getItem('primaryColor');
    const savedSecondaryColor = localStorage.getItem('secondaryColor');
    const savedVertical = localStorage.getItem('vertical') || 'bottom';
    const savedHorizontal = localStorage.getItem('horizontal') || 'right';

    if (savedPrimaryColor) setPrimaryColor(savedPrimaryColor);
    if (savedSecondaryColor) setSecondaryColor(savedSecondaryColor);
    setvertical(savedVertical);
    sethorizontal(savedHorizontal);
  }, [setPrimaryColor, setSecondaryColor, setvertical, sethorizontal]);

  // 👉 Funciones para manejar el cambio de color y guardar en LocalStorage
  const handlePrimaryColor = (color) => {
    setPrimaryColor(color);
    localStorage.setItem('primaryColor', color);
  };

  const handleSecondaryColor = (color) => {
    setSecondaryColor(color);
    localStorage.setItem('secondaryColor', color);
  };

  const handleDirectionChange = (vertical, horizontal) => {
    setvertical(vertical);
    sethorizontal(horizontal);
    localStorage.setItem('vertical', vertical);
    localStorage.setItem('horizontal', horizontal);
  };

  return (
    <section className='color-pic-box'>
      <h3>Selecciona colores de fondo</h3>
      <div className='color-pic-div'>
        <PicColorComponent handleColor={handlePrimaryColor} text={'Primario'} />
        <PicColorComponent handleColor={handleSecondaryColor} text={'Secundario'} />
        <BackgroundDirectionComponent handleDirectionChange={handleDirectionChange} />
      </div>
      <section className='color-pic-predet'>
        <h3>Predeterminados</h3>
        <PredetColorComponent prim={"rgb(147, 255, 141)"} sec={"rgb(226, 253, 225)"} />
        <PredetColorComponent prim={"rgb(255, 249, 141)"} sec={"rgb(252, 249, 201)"} />
        <PredetColorComponent prim={"rgb(255, 209, 141)"} sec={"rgb(253, 232, 200)"} />
        <PredetColorComponent prim={"rgb(141, 185, 255)"} sec={"rgb(201, 220, 250)"} />
        <PredetColorComponent prim={"rgb(255, 141, 251)"} sec={"rgb(253, 207, 251)"} />
        <PredetColorComponent prim={"rgb(255, 141, 145)"} sec={"rgb(248, 196, 198)"} />
      </section>
    </section>
  )
}

export default ColorsComponent
