/* eslint-disable react/prop-types */
import './shadowGame.css'
// import animalsData from '../../../data/animalsDataEsp'
import { useState, useEffect, useContext } from 'react'
import { Context } from "./../../../shared/context";
import {
  ButtonTypeComponent,
  ButtonSolutionComponent,
  ButtonNextComponent,
  ButtonReturnComponent,
  InfoComponent,
  TypingTextComponent
} from '../../../components'
function ShadowGamesComponent({ returnToScreen }) {
  const { animalList} = useContext(Context);
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showImg, setShowImg] = useState('')
  const [partsBoxSize, setPartsBoxSize] = useState('')
  const [showAnswer, setShowAnswer] = useState('')
  const [showRealImage, setShowRealImage] = useState(false) // Nuevo estado para controlar el tipo de imagen
  const [rotation, setRotation] = useState(0)
  const [activeIndex, setactiveIndex] = useState(0)


  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

useEffect(() => {
  const shuffled = shuffleArray([...animalList]);
  setShuffledAnimals(shuffled);
  const randomIndex = Math.floor(Math.random() * shuffled.length);
  setCurrentIndex(randomIndex);
}, [animalList]);


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
    setShowAnswer('show-game-img') //esa clase contiene los elementos que resetean todo los valores y al darle a siguiente, sigue el juego con las modificaciones
    setPartsBoxSize('')
    setRotation(0)
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
    <div className='buttons-position-absolute'>
      <InfoComponent title1={"ruleOfGameI"}  title2={"modeOfGameI"}  text1={"shadowGameI"} listOfGames li1={"shadowGame1li1"} li2={"shadowGame1li2"} li3={"shadowGame1li3"} />
      <ButtonReturnComponent returnToScreen={returnToScreen} />
      
    </div>
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
            thisIndex= {1}
            setActiveIndex={setactiveIndex}
            activeIndex={activeIndex}
          />
          <ButtonTypeComponent
            onClick={handleShadow}
            classN='button-type-shadow'
            typeGame='typeShadow'
            thisIndex= {2}
            setActiveIndex={setactiveIndex}
            activeIndex={activeIndex}
          />
          <ButtonTypeComponent
            onClick={handlePart}
            classN='button-type-part'
            typeGame='typePart'
            thisIndex= {3}
            setActiveIndex={setactiveIndex}
            activeIndex={activeIndex}
          />
          <ButtonTypeComponent
            onClick={handleRotate}
            classN='button-type-rotate'
            typeGame='typeRotate'
            thisIndex= {4}
            setActiveIndex={setactiveIndex}
            activeIndex={activeIndex}
          />
          <ButtonTypeComponent
            onClick={toggleImageType}
            classN='button-type-real'
            typeGame='typeReal'
            thisIndex= {5}
            setActiveIndex={setactiveIndex}
            activeIndex={activeIndex}
          />
          <ButtonTypeComponent
            onClick={handleReset}
            classN='button-type-reset'
            typeGame='typeReset'
            thisIndex= {0}
            setActiveIndex={setactiveIndex}
            activeIndex={activeIndex}
          />
        </div>
      </div>
      <div className={partsBoxSize}>
        {shuffledAnimals.length > 0 && (
          <>
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
                : { transform: `translate(0, 0)  rotate(${rotation}deg) `  }
            }
            src={
              showRealImage
                ? shuffledAnimals[currentIndex].imagenReal
                : shuffledAnimals[currentIndex].imagenAnimada
            }
            alt={shuffledAnimals[currentIndex].nombre}
          />
          {showAnswer === "show-game-img" &&
          <TypingTextComponent text={shuffledAnimals[currentIndex].nombre}/>
          }
          </>
        )}
      </div>
    </div>
  )
}

export default ShadowGamesComponent
