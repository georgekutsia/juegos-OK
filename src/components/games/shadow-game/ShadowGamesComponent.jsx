/* eslint-disable react/prop-types */
import './shadowGame.css'
import animalsData from '../../../data/animalsData'
import { useState, useEffect } from 'react'
import {
  ButtonTypeComponent,
  ButtonSolutionComponent,
  ButtonNextComponent,
  ButtonReturnComponent
} from '../../../components'

function ShadowGamesComponent({ returnToScreen }) {
  const [shuffledAnimals, setShuffledAnimals] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showImg, setShowImg] = useState('')
  const [partsBoxSize, setPartsBoxSize] = useState('')
  const [showAnswer, setShowAnswer] = useState('')
  const [showRealImage, setShowRealImage] = useState(false) // Nuevo estado para controlar el tipo de imagen
  const [rotation, setRotation] = useState(0)

  const handleRandom = () => {
    // Genera un índice aleatorio en el rango de 0 a shuffledAnimals.length - 1
    const randomIndex = Math.floor(Math.random() * shuffledAnimals.length)
    setCurrentIndex(randomIndex)
  }

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    const shuffled = shuffleArray([...animalsData])
    setShuffledAnimals(shuffled)
    // Genera un animal aleatorio al cargar el componente
    handleRandom()
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % shuffledAnimals.length
      setShowImg(showImg)
      setShowAnswer('')
      if (showImg === 'part-game-img') {
        setPartsBoxSize('shadow-game-img-box')
      }
      return newIndex
    })
  }

  const handleShow = () => {
    setShowAnswer('show-game-img')
    setPartsBoxSize('')
  }

  const handleBlur = () => {
    setShowImg('blur-game-img')
    setPartsBoxSize('')
    setShowAnswer('')
  }

  const handleShadow = () => {
    setShowImg('shadow-game-img')
    setPartsBoxSize('')
    setShowAnswer('')
  }

  const handlePart = () => {
    setShowImg('part-game-img')
    setPartsBoxSize('shadow-game-img-box')
    setShowAnswer('')
  }

  const setRandomRotation = () => {
    const rotation =
      Math.random() < 0.5
        ? Math.floor(Math.random() * (120 - 20)) - 120
        : Math.floor(Math.random() * (120 - 20)) + 120
    setRotation(rotation)
  }

  const handleRotate = () => {
    setShowAnswer('')
    setRandomRotation()
  }

  const handleReset = () => {
    setShowAnswer('')
    setRotation(0)
    setShowAnswer('show-game-img')
    setPartsBoxSize('')
    setShowImg('')
  }

  const toggleImageType = () => {
    setShowRealImage((prevShowRealImage) => !prevShowRealImage) // Cambia entre imagen real y animada
  }

  return (
    <div className='shadow-game-box'>
      <ButtonReturnComponent returnToScreen={returnToScreen} />
      <div className='button-next-game'>
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className='button-solution-game'>
        <ButtonSolutionComponent show={handleShow} />
      </div>
      <div>
        <div className='shadow-game-buttonMode'>
          <ButtonTypeComponent
            onClick={handleBlur}
            classN='button-type-blur'
            typeGame='typeBlur'
          />
          <ButtonTypeComponent
            onClick={handleShadow}
            classN='button-type-shadow'
            typeGame='typeShadow'
          />
          <ButtonTypeComponent
            onClick={handlePart}
            classN='button-type-part'
            typeGame='typePart'
          />
          <ButtonTypeComponent
            onClick={handleRotate}
            classN='button-type-rotate'
            typeGame='typeRotate'
          />
          <ButtonTypeComponent
            onClick={toggleImageType}
            classN='button-type-real'
            typeGame='typeReal'
          />
          <ButtonTypeComponent
            onClick={handleReset}
            classN='button-type-reset'
            typeGame='typeReset'
            icon='fa-rotate-left'
            otherClass='small-button'
          />
        </div>
      </div>
      <div className={partsBoxSize}>
        {shuffledAnimals.length > 0 && (
          <img
            onClick={handleShow}
            className={`${showImg} ${showAnswer} shadow-game-img-size`}
            style={
              showImg === 'part-game-img'
                ? {
                    transform: `translate(${Math.random() * 100 - 50}%, ${
                      Math.random() * 100 - 50
                    }%) rotate(${rotation}deg)`
                  }
                : { transform: `rotate(${rotation}deg)` }
            }
            src={
              showRealImage
                ? shuffledAnimals[currentIndex].imagenReal
                : shuffledAnimals[currentIndex].imagenAnimada
            }
            alt={shuffledAnimals[currentIndex].nombre}
          />
        )}
      </div>
    </div>
  )
}

export default ShadowGamesComponent
