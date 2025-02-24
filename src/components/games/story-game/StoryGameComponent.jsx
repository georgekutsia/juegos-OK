import {
  ButtonNextComponent,
  ButtonReturnComponent,
  InfoComponent
} from '../../../components'
import './storyGame.css'

import PropTypes from 'prop-types'
import storyData from '../../../data/storyData'
import { useState, useEffect } from 'react'

function StoryGameComponent({ returnToScreen }) {
  const [story, setStory] = useState(storyData)
  const [storyCount, setStoryCount] = useState(0)
  const [showImage, setShowImage] = useState(false)
  const [soundingDisp, setsoundingDisp] = useState("none")
  const [playingIndex, setPlayingIndex] = useState(null) // Estado para el botón que está sonando
  const [playing, setPlaying] = useState(false) // Estado para el botón que está sonando
  const [pointer1, setpointer1] = useState("") // Estado para el botón que está sonando
  const [pointer2, setpointer2] = useState("") // Estado para el botón que está sonando
  

  useEffect(() => {
    story.jirafaImg.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [story])

  const animalSound1 = new Audio(story.jirafaSound[storyCount - 1])
  const animalSound2 = new Audio(story.jirafaSound[storyCount])

  animalSound1.onended = () => {
    setShowImage(true)
    setPlayingIndex(null) // Habilita todos los botones cuando termina el sonido
    setPlaying(false) // Habilita todos los botones cuando termina el sonido
    setpointer1("")
  }

  animalSound2.onended = () => {
    setShowImage(true)
    setPlayingIndex(null) // Habilita todos los botones cuando termina el sonido
    setPlaying(false) // Habilita todos los botones cuando termina el sonido
    setpointer2("")
  }

  const handlePlaySound1 = () => {
    setpointer1("none")
    animalSound1.play()
    animalSound2.pause()
    animalSound2.currentTime = 0
    setShowImage(false)
    setPlayingIndex(storyCount - 1)
    setPlaying(true) // Habilita todos los botones cuando termina el sonido

  }

  const handlePlaySound2 = () => {
    setsoundingDisp("flex")
    setpointer2("none")
    animalSound2.play()
    animalSound1.pause()
    animalSound1.currentTime = 0
    setStoryCount((prevCount) => prevCount + 1)
    setShowImage(false)
    setPlayingIndex(storyCount)
    setPlaying(true) // Habilita todos los botones cuando termina el sonido
  }

  const handlePlaySoundSpecific = (ind) => {
    const specificSound = new Audio(story.jirafaSound[ind])
    specificSound.play()
    setStoryCount(ind+1)
    specificSound.onended = () => {
      setShowImage(true)
      setPlayingIndex(null) // Habilita todos los botones cuando termina el sonido
      setPlaying(false) // Habilita todos los botones cuando termina el sonido

    }
    setPlayingIndex(ind) // Deshabilita el botón actual
    setPlaying(true) 
    setShowImage(false)
  }

  const handleNext = () => {
    const newAnimal = getRandomAnimalWithSound()
    setStory(newAnimal)
    setStoryCount(0)
    setShowImage(false)
  }

  return (
    <div className='story-game-box'>
      {story && (
        <>
            <h2>
              {storyCount } / {story.jirafaSound.length}
            </h2>
            {showImage ? (
              <div className='story-image'>
                <img
                  src={story.jirafaImg[storyCount - 1]}
                  alt={`Imagen ${storyCount - 1}`}
                  loading='lazy'
                />
              </div>
            ) : (
              <div className='story-image-sounding'>
                <img
                  src='https://res.cloudinary.com/dtv1oj9bq/image/upload/v1740237548/icon1_xfsehr.png'
                  alt='sounding image'
                  style={{display:soundingDisp}}
                />
              </div>
            )}
          <div className='story-game-btn-box'>
            {storyCount > 0 && (
              <div className='btn-count-box'>
                <h3>
                  {storyCount} <i className='fa-solid fa-repeat'></i>
                </h3>
                <img
                  style={{pointerEvents:pointer1}}
                  className='story-game-btn'
                  onClick={handlePlaySound1}
                  src='https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728509085/Sound-btn-_svs90u.png'
                  alt='button'
                />
              </div>
            )}
            <div className='btn-count-box'>
              <h3>
                {storyCount + 1} <i className='fa-solid fa-arrow-right'></i>
              </h3>
              <img
                  style={{pointerEvents:pointer2}}
                className='story-game-btn'
                onClick={handlePlaySound2}
                src='https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728509085/Sound-btn-_svs90u.png'
                alt='button'
              />
            </div>
          </div>
          <div className='story-game-allbtns'>
            {story.jirafaSound.map((st, index) => (
              <button
                key={index}
                onClick={() => handlePlaySoundSpecific(index)}
                disabled={playing}
                style={{ backgroundColor: playingIndex === index? 'lightgreen' : '' }}
              >
                {index+1}
              </button>
            ))}
          </div>
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
          <div className='button-next-game'>
            <ButtonNextComponent random={handleNext} />
          </div>
        </>
      )}
    </div>
  )
}

StoryGameComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired
}

export default StoryGameComponent
