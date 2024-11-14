import PropTypes from 'prop-types'
import { useContext } from "react";
import { Context } from "../../shared/context";
import "./bigTitle.css"
function BigTitleComponent({text}) {
  const { t } = useContext(Context);

  return (
    <h2 className='big-title-box'> {t(text)} </h2>
  )
}

BigTitleComponent.propTypes = {
text: PropTypes.string
}

export default BigTitleComponent
