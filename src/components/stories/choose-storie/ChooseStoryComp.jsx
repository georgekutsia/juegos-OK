import React, { useState, useEffect } from 'react'
import {
  ButtonReturnComponent,
  InfoComponent
} from '../../../components'
import PropTypes from 'prop-types'

function ChooseStoryComp({ returnToScreen, data }) {
  const [story] = useState(data)
  const [playing, setPlaying] = useState(false)
  const [showImages, setShowImages] = useState(false)
  const [firstImage, setFirstImage] = useState(false)
  const [currentStep, setCurrentStep] = useState(null)
  const [activeImage, setActiveImage] = useState(null)
  const [lastSound, setLastSound] = useState(story.start?.sound || null)
  const [lastImage, setLastImage] = useState(story.start?.image || null)
  const [isFirstSound, setIsFirstSound] = useState(true)

  const handlePlaySound = () => {
    if (!lastSound) return
    setPlaying(true)
    if (isFirstSound) {
      setFirstImage(true)
    } else {
      setActiveImage(lastImage)
    }
    const audio = new Audio(lastSound)
    audio.play()
    audio.onended = () => {
      setPlaying(false)
      if (isFirstSound) {
        setFirstImage(false)
        setIsFirstSound(false)
      } else {
        setActiveImage(null) // ← limpiamos la imagen tras repetir sonido
      }
  
      setShowImages(true)
    }
  }
  

  const handleOptionClick = (option) => {
    if (!option.sound) return

    setPlaying(true)
    setShowImages(false)

    const imageToShow = option.displayImage || option.image
    setActiveImage(imageToShow)
    setLastImage(imageToShow)
    setLastSound(option.sound)

    const audio = new Audio(option.sound)
    audio.play()
    audio.onended = () => {
      setPlaying(false)
      setCurrentStep(option.id)
      setShowImages(true)
    }
  }

  // Borra la imagen activa al mostrar nuevas opciones
  useEffect(() => {
    if (showImages) {
      setActiveImage(null)
    }
  }, [showImages])

  const [pointer1] = useState('')

  return (
    <div className='story-game-box'>
      <div className='buttons-position-absolute'>
        <InfoComponent
          title1={'ruleOfGameI'}
          title2={'modeOfGameI'}
          text1={'animalSoundGameI1'}
          listOfGames
          li1={'animalSoundGameI1li1'}
          li2={'animalSoundGameI1li2'}
        />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>

      {/* Imagen activa de una opción */}
      {activeImage && (
        <div className='story-active-image-box'>
          <img src={activeImage} alt='Escena en curso' className='choice-active-image' 
            data-aos='zoom-in'
          />
        </div>
      )}

      {/* Imagen inicial (solo al inicio) */}
      {firstImage && (
        <div className='story-active-image-box'>
          <img src={story.start.image} alt='Escena de inicio' className='choice-active-image' data-aos='zoom-in'/>
        </div>
      )}

      <section className='choose-story-game-btn-box'>
  {!activeImage && !firstImage && (
          <div className='btn-count-box'>
            <h3><i className='fa-solid fa-repeat' onClick={handlePlaySound}></i></h3>
            <img
              onClick={handlePlaySound}
              style={{ pointerEvents: pointer1, cursor: 'pointer' }}
              className='choose-story-game-btn'
              src='https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728509085/Sound-btn-_svs90u.png'
              alt='Repetir sonido'
            />
          </div>
        )}
      </section>

      <section>
        {/* PRIMER NIVEL: opciones1 */}
        {!activeImage && showImages && currentStep === null && (
          <div className='story-choice-images-box'>
            {story.options1.map((option, index) => (
              typeof option === 'string' ? null : (
                <img
                  key={index}
                  src={option.image}
                  alt={`Opción ${index + 1}`}
                  onClick={() => handleOptionClick(option)}
                  className='choice-buttons-hover'
                  data-aos='zoom-in'
                />
              )
            ))}
          </div>
        )}

        {/* SIGUIENTES NIVELES */}
        {!activeImage && showImages && currentStep && Array.isArray(story[currentStep]) && (
          <div className='story-choice-images-box'>
            {story[currentStep].map((option, index) => (
              typeof option === 'string' ? null : (
                <img
                  key={index}
                  src={option.image}
                  alt={`Opción ${index + 1}`}
                  onClick={() => handleOptionClick(option)}
                  className='choice-buttons-hover'
                  data-aos='zoom-in'
                />
              )
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

ChooseStoryComp.propTypes = {
  returnToScreen: PropTypes.func.isRequired,
  data: PropTypes.object
}

export default ChooseStoryComp
