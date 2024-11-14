/* eslint-disable react/prop-types */
// import React from 'react'
// import PropTypes from 'prop-types'
import "./typingText.css"
function TypingTextComponent({text}) {
  return (
<div className="typing-slider">
  <h3>{text}</h3>
</div>
  )
}

TypingTextComponent.propTypes = {}

export default TypingTextComponent
