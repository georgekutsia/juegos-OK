import "./buttonReturn.css"
// eslint-disable-next-line react/prop-types
function ButtonReturnComponent({returnToScreen, rotateClass}) {
  return (
    <button className={ rotateClass ? `${rotateClass}` :`button-return `} onClick={()=>returnToScreen()}>
    <i className="fa-solid fa-rotate-left"></i>
    </button>
  )
}

export default ButtonReturnComponent