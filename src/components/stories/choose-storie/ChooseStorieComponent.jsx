import { useContext, useState } from 'react'
import {
  ButtonReturnComponent,
  InfoComponent,
} from '../../../components'
import PropTypes from 'prop-types'
import storyData from '../../../data/electionStoryData'
import '../../games/stories-book-component/stories-books.css'
import { Link } from 'react-router-dom'
import { choiceStoryRoutes } from '../../../data/gameRoutes'
import { Context } from '../../../shared/context'

function ChooseStoryComponent({ returnToScreen }) {
  const { t } = useContext(Context)
  const [hoveredBook, setHoveredBook] = useState(null)

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
      <section className='story-box'>
        {storyData.storyList.map((story, index) => {
          const route = choiceStoryRoutes[index]
          const Book = route ? Link : 'div'
          const color = colors[index % colors.length]
          const boxShadowColor = hoveredBook === index ? 'rgb(255, 255, 255)' : color
          return (
            <Book
              key={index}
              className={`book${route ? '' : ' book--disabled'}`}
              {...(route ? { to: route.path } : { 'aria-disabled': true })}
              style={{
                background: color,
                backgroundImage: `linear-gradient(to right, ${color} -20px, #ba0716 26px, transparent 26px)`,
                boxShadow: `2px 6px 20px 0px ${boxShadowColor}`
              }}
              onMouseEnter={() => setHoveredBook(index)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <h3 className='book-title'>{story.title}</h3>
              <img className='book-img-png' src={story.img} alt="" />
              {!route && <span className="book-status">{t('interactiveGameComingSoon')}</span>}
            </Book>
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
    </div>
  )
}

ChooseStoryComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired
}

export default ChooseStoryComponent
