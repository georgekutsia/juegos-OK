import PropTypes from 'prop-types'
import { useContext } from "react";
import { Context } from "../../shared/context";
import "./title.css"
function ScreenTitleComponent({text}) {
  const { t } = useContext(Context);

  return (
    <h2 className='screen-title-box'> {t(text)} </h2>
  )
}

ScreenTitleComponent.propTypes = {
text: PropTypes.string
}

export default ScreenTitleComponent
