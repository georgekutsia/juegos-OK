/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'
import { useState, useEffect, useContext } from 'react'
import { Context } from "./../../../shared/context";
import ButtonNextComponent from "../../buttons/button-next/ButtonNextComponent"
import ButtonReturnComponent from "../../buttons/button-return/ButtonReturnComponent"
import ButtonSolutionComponent from "../../buttons/button-solution/ButtonSolutionComponent"
import InfoComponent from "../../info/InfoComponent"

function MissingGameComponent({ returnToScreen }) {
  const { animalList} = useContext(Context);
  const [listOfImgs, setlistOfImgs] = useState(animalList)

  const handleNext = () => {
  }

  const handleShow = () => {

  }
  return (
    <div>
        <div className='buttons-position-absolute'>
      <InfoComponent title1={"ruleOfGameI"}  title2={"modeOfGameI"}   text1={"shadowGameI"} listOfGames li1={"shadowGame1li1"} li2={"shadowGame1li2"} li3={"shadowGame1li3"} />
      <ButtonReturnComponent returnToScreen={returnToScreen} />
    </div>
      <div className='button-next-game'>
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className='button-solution-game'>
        <ButtonSolutionComponent show={handleShow} />
      </div>
      {/* {listOfImgs.map((hey, index)=> 
      <h1 key={index}> {hey.nombre}</h1>)} */}
      <section>
        <button>O</button>
        <button>O</button>
        <button>O</button>
      </section>
    </div>

  )
}

MissingGameComponent.propTypes = {}

export default MissingGameComponent
