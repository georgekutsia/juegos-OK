import "./buttonType.css"
// eslint-disable-next-line react/prop-types
function ButtonTypeComponent({classN}) {
  return (
      <button className={`${classN} button-ripple`}>
      click
      </button>
  )
}

export default ButtonTypeComponent