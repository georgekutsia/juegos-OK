import {
  ButtonNextComponent,
  ButtonReturnComponent,
  InfoComponent
} from '../../../components'
import './special-story.css'
import PropTypes from 'prop-types'
import storyDataObs from '../../../data/randomStoryData'
import { useState, useEffect } from 'react'

function SpecialStoryGameComponent({ returnToScreen }) {
  const [story, setStory] = useState(storyDataObs)
  const [storyCount, setStoryCount] = useState(0)
  const [imgCount, setimgCount] = useState(0)
  const [showImage, setShowImage] = useState(false)
  const [soundingDisp, setsoundingDisp] = useState('none')
  const [playingIndex, setPlayingIndex] = useState(null)
  const [allOptionsShown, setallOptionsShown] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [pointer1, setpointer1] = useState('')
  const [pointer2, setpointer2] = useState('')

  useEffect(() => {
    story.transportObs.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [story])

  const animalSound1 = new Audio(story.OkinaSound[storyCount - 1])
  const animalSound2 = new Audio(story.OkinaSound[storyCount])

  const animalSound3= new Audio(story[`part${storyCount}`])

  animalSound1.onended = () => {
    setShowImage(true)
    setPlayingIndex(null)
    setPlaying(false)
    setpointer1('')
    setallOptionsShown(true);
  }
  const handleSound = () => {
    animalSound3.play()
  }
  animalSound2.onended = () => {
    setShowImage(true)
    setPlayingIndex(null)
    setPlaying(false)
    setpointer2('')
    setallOptionsShown(true);
  }

  const handleCountImg = () => {
    setimgCount(prev => prev + 1)
    if(imgCount >= story[`part${storyCount}`].length-2){ //para que aparezcan los botones de reproducir sonido que desaparecen mientras haya opciones de respuesta
        alert("hey")
        setallOptionsShown(false);
      }
  }
  const handlePlaySound1 = () => {
    setpointer1('none')
    setimgCount(0)
    setallOptionsShown(false);
    animalSound1.play()
    animalSound2.pause()
    animalSound2.currentTime = 0
    setShowImage(false)
    setPlayingIndex(storyCount - 1)
    setPlaying(true)
  }

  const handlePlaySound2 = () => {
    setsoundingDisp('flex')
    setpointer2('none')
    setimgCount(0)
    setallOptionsShown(false);
    animalSound2.play()
    animalSound1.pause()
    animalSound1.currentTime = 0
    setStoryCount((prevCount) => prevCount + 1)
    setShowImage(false)
    setPlayingIndex(storyCount)
    setPlaying(true)
  }

  const handlePlaySoundSpecific = (ind) => {
    const specificSound = new Audio(story.OkinaSound[ind])
    specificSound.play()
    setStoryCount(ind + 1)
    specificSound.onended = () => {
      setShowImage(true)
      setPlayingIndex(null)
      setPlaying(false)
    }
    setPlayingIndex(ind)
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
    <button onClick={()=>handleSound()}>sljbdsljbnadljb</button>
      {story && (
        <>
          <h2>
            {storyCount} / {story.OkinaSound.length}
          </h2>
          {showImage ? (
            <div
              className={
                storyCount === story.transportObs.length - 1
                  ? `story-image`
                  : `story-image-last`
              }
            >
              <img
                src={story[`part${storyCount}`][imgCount]}
                alt={`Imagen ${storyCount - 1}`}
                loading='lazy'
              />
              {imgCount < story[`part${storyCount}`].length - 1 && (
                <button onClick={() => handleCountImg()}>¡No!</button>
              )}
            </div>
          ) : (
            <div className='story-image-sounding'>
              <img
                src='https://res.cloudinary.com/dtv1oj9bq/image/upload/v1740237548/icon1_xfsehr.png'
                alt='sounding image'
                style={{ display: soundingDisp }}
              />
            </div>
          )}
          <div className='story-game-btn-box'>
            {storyCount > 0 &&  !allOptionsShown &&(
              <div className='btn-count-box'>
                <h3>
                  {storyCount} <i className='fa-solid fa-repeat'></i>
                </h3>
                <img
                  style={{ pointerEvents: pointer1 }}
                  className='story-game-btn'
                  onClick={handlePlaySound1}
                  src='https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728509085/Sound-btn-_svs90u.png'
                  alt='button'
                />
              </div>
            )}
            {storyCount <= story.OkinaSound.length - 1 && !allOptionsShown &&  (
                <div className='btn-count-box'>
                  <h3>
                    {storyCount + 1} <i className='fa-solid fa-arrow-right'></i>
                  </h3>
                  <img
                    style={{ pointerEvents: pointer2 }}
                    className='story-game-btn'
                    onClick={handlePlaySound2}
                    src='https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728509085/Sound-btn-_svs90u.png'
                    alt='button'
                  />
                </div>
              )}
          </div>
          <div className='story-game-allbtns'>
            {story.OkinaSound.map((st, index) => (
              <button
                key={index}
                onClick={() => handlePlaySoundSpecific(index)}
                disabled={playing}
                style={{
                  backgroundColor: playingIndex === index ? 'lightgreen' : ''
                }}
              >
                {index + 1}
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

SpecialStoryGameComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired
}

export default SpecialStoryGameComponent
