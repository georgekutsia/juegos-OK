import PropTypes from "prop-types"
import { useContext } from "react"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Context } from "../../shared/context"
import "./timer-stiles.css"

function TimerButtonComponent({handles, fas, i}) {
      const { t } = useContext(Context)
  
  return (
    <OverlayTrigger placement='top' overlay={<Tooltip id='tooltip-bottom'>{t(`timer.${i}`)}</Tooltip>}>
    <button onClick={handles}><i className={`fa-solid fa-${fas}`}></i></button>
    </OverlayTrigger>

  )
}
TimerButtonComponent.propTypes = {
  handles: PropTypes.func,
  fas: PropTypes.string,
  i:PropTypes.string
  }
export default TimerButtonComponent