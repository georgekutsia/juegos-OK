/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'
import { Context } from "../../shared/context";

import { useContext } from "react";
import "./info.css"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function InfoComponent({title1, text1, title2, text2, listOfGames, li1, li2, li3, li4, li5}) {
  const { t } = useContext(Context);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="info-tooltip-span" {...props}>
    <div>
    <h6>{t(title1)}</h6>
      <p> {t(text1)} </p>
    </div>
    <div>
    <h6>{t(title2)}</h6>
      <p>{t(text2)}</p>
    </div>
    {listOfGames &&
      <p>
        <ol>
        {li1 && <li>{t(li1)}</li>}
        {li2 && <li>{t(li2)}</li>}
        {li3 && <li>{t(li3)}</li>}
        {li4 && <li>{t(li4)}</li>}
        {li5 && <li>{t(li5)}</li>}
        </ol>
      </p>
    }
    </Tooltip>
  );
  return (
    <div className="info-component-box">
      <OverlayTrigger placement="bottom-end" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
      <img src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1731248917/infor_wyscrx.png" alt="Information Button" />
      </OverlayTrigger>
    </div>
  )
}

InfoComponent.propTypes = {}

export default InfoComponent
