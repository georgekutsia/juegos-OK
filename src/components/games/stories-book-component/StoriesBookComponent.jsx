import {
  ButtonReturnComponent,
  InfoComponent,
  SpecialStoryGameComponent,
  StoryGameComponent
} from '../../../components'
import './stories-books.css'
import PropTypes from 'prop-types'
import storyData from '../../../data/storyData.js'
import { useState } from 'react'

function StoriesBookComponent({ returnToScreen, ind, indSet }) {
  const [stories, setStories] = useState(storyData)
  const [hoveredBook, setHoveredBook] = useState(null)
  const [activeGame, setActiveGame] = useState(-1)
  const handleGameOn = (index) => {
    setActiveGame((prev) => (prev === index ? -1 : index))
  }

  const handleReturn = () => {
    setActiveGame(-1)
  }

  const colors = [
    '#FF5733',
    '#FFC300',
    '#DAF7A6',
    '#28B463',
    '#a7009c',
    '#3498DB',
    '#8E44AD',
    '#F33139',
    '#2e911e',
    '#BA0716'
  ]

  return (
    <div className='sound-game-box'>
      {activeGame === -1 && (
        <>
          <section className='story-box'>
            {stories.storyList.map((story, index) => {
              const color = colors[index % colors.length]
              const boxShadowColor =
                hoveredBook === index ? 'rgb(255, 255, 255)' : color
              return (
                <div
                  key={index}
                  className='book'
                  style={{
                    background: color,
                    backgroundImage: `linear-gradient(to right, ${color} -20px, #ba0716 26px, transparent 26px)`,
                    boxShadow: `2px 6px 20px 0px ${boxShadowColor}`
                  }}
                  onMouseEnter={() => setHoveredBook(index)}
                  onMouseLeave={() => setHoveredBook(null)}
                  onClick={() => handleGameOn(index)}
                >
                  <h3 className='book-title'>{story.title}</h3>
                  <img className='book-img' src={story.img} alt={index} />
                </div>
              )
            })}
          </section>
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
        </>
      )}
      {activeGame === 0 && (
        <SpecialStoryGameComponent returnToScreen={handleReturn} />
      )}
      {activeGame === 1 && <StoryGameComponent returnToScreen={handleReturn} />}

    </div>
  )
}

StoriesBookComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired
}

export default StoriesBookComponent
