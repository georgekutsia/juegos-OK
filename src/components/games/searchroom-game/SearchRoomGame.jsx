import React, { useRef, useState } from 'react'
import './searchRoom.css'
import {
  InfoComponent,
  ButtonReturnComponent,
  TimerComponent
} from '../../../components'
import searchRoomData from '../../../data/searchRoomData'
import './searchRoom.css'
function SearchRoomGame({ returnToScreen }) {
  const [selectedImg, setSelectedImg] = useState(null)
  const imageRef = useRef(null)

  const handleFullscreen = () => {
    if (imageRef.current) {
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen()
      } else if (imageRef.current.webkitRequestFullscreen) {
        // Safari
        imageRef.current.webkitRequestFullscreen()
      } else if (imageRef.current.msRequestFullscreen) {
        // IE/Edge
        imageRef.current.msRequestFullscreen()
      }
    }
  }
  const handleSmallScreen = () => {
      document.exitFullscreen()
  }
  return (
    <>
      <div className='buttons-position-absolute'>
        <InfoComponent
          title1={'ruleOfGameI'}
          title2={'modeOfGameI'}
          text1={'searchRoom1'}
          listOfGames
          li1={'searchRoom2'}
          li2={'searchRoom3'}
        />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className='searchroom-img-container'>
        {searchRoomData.filter(Boolean).map((imgSrc, index) => (
          <img
            src={imgSrc}
            alt={`image-${index}`}
            key={index}
            onClick={() => setSelectedImg(imgSrc)}
            className='searchroom-img'
          />
        ))}
        <div className='selected-image-display'>
          <i className='fa-solid fa-expand' onClick={handleFullscreen} ></i>
          <img
            src={selectedImg || 'https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529846/ranita1_nhjyhu.png'}
            alt='Selected'
            ref={imageRef}
            onDoubleClick={handleSmallScreen}
          />
        </div>
        <TimerComponent timerClass={'one'} />
      </div>
    </>
  )
}

export default SearchRoomGame
