import React, { useState } from 'react'
import './searchRoom.css'
import {
  InfoComponent,
  ButtonReturnComponent,
} from '../../../components'
import searchRoomData from '../../../data/searchRoomData'

function SearchRoomGame({ returnToScreen }) {
  const [selectedImg, setSelectedImg] = useState(null)

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
        <img
          src={selectedImg || 'https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726529846/ranita1_nhjyhu.png'}
          alt='Selected'
          className='selected-image-display'
        />
      </div>
    </>
  )
}

export default SearchRoomGame
