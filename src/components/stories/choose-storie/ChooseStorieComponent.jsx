import React, { useState } from 'react'
import {
  ButtonReturnComponent,
  InfoComponent,
  ChooseStoryComp
} from '../../../components'
import PropTypes from 'prop-types'
import storyData from '../../../data/electionStoryData'
import '../../games/stories-book-component/stories-books.css'
import storyTree from '../../../data/storyTreeData'
// Supón que estos son tus componentes individuales de historia

function ChooseStoryComponent({ returnToScreen }) {
  const [leandroStory, setleandroStory] = useState(storyTree)
  const [hoveredBook, setHoveredBook] = useState(null)
  const [activeStory, setActiveStory] = useState(-1)

  const handleReturn = () => {
    setActiveStory(-1)
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

  // Puedes mapear los componentes de historia a índices
  const storyComponents = [
    <ChooseStoryComp returnToScreen={handleReturn} data={leandroStory} />,
    <ChooseStoryComp returnToScreen={handleReturn} />,
    // Agrega más si necesitas
  ]

  return (
    <div className='sound-game-box'>
      {activeStory === -1 ? (
        <>
          <section className='story-box'>
            {storyData.storyList.map((story, index) => {
              const color = colors[index % colors.length]
              const boxShadowColor = hoveredBook === index ? 'rgb(255, 255, 255)' : color
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
                  onClick={() => setActiveStory(index)}
                >
                  <h3 className='book-title'>{story.title}</h3>
                  <img className='book-img-png' src={story.img} alt={index} />
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
      ) : (
        storyComponents[activeStory] || <div>Historia no disponible</div>
      )}
    </div>
  )
}

ChooseStoryComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired
}

export default ChooseStoryComponent
