import { useContext } from 'react';
import './buttonColored.css';
import { Context } from "../../../shared/context";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ButtonColoredComponent({ imgGame, to, text, disabled = false, statusText, descriptionText }) {
  const { t } = useContext(Context);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mainNavbarMenu-li-span" {...props}>
     {t(descriptionText || text)}
    </Tooltip>
  );


  const cardVisual = imgGame ? (
    <img src={imgGame} alt="" className="colored-img imageRotate" />
  ) : (
    <div className="colored-img colored-img--placeholder" aria-hidden="true" />
  );

  return (
    <div className="game-button-item">
      {disabled ? (
        <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
          <span className="btn-colored-tooltip-target" tabIndex="0">
            <button
              type="button"
              className="btn-colored btn-colored--disabled"
              disabled
              aria-label={statusText ? `${t(text)} — ${t(statusText)}` : t(text)}
            >
              <div className="containerRotate">
                {cardVisual}
              </div>
            </button>
          </span>
        </OverlayTrigger>
      ) : (
        <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
          <Link className="btn-colored" to={to} aria-label={t(text)}>
            <div className="containerRotate">
              <div className="left-half"></div>
              <div className="right-half"></div>
              {cardVisual}
            </div>
          </Link>
        </OverlayTrigger>
      )}
      <p className="mobile-game-description">{t(text)}{disabled && statusText ? ` — ${t(statusText)}` : ''}</p>
    </div>
  );
}

export default ButtonColoredComponent;
