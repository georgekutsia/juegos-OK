import { useContext, useEffect, useRef, useState } from 'react';
import './buttonColored.css';
import { Context } from "../../../shared/context";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ButtonColoredComponent({ imgGame, handleGameOn, text, disabled = false, statusText, descriptionText }) {
  const { t } = useContext(Context);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef(null);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mainNavbarMenu-li-span" {...props}>
     {t(descriptionText || text)}
    </Tooltip>
  );


  useEffect(() => {
    if (isButtonClicked && !disabled) {
      setIsExpanded(true);
      const buttonTimeout = setTimeout(() => {
        setIsButtonClicked(false);
      }, 1300);

      const expandTimeout = setTimeout(() => {
        setIsExpanded(false);
    handleGameOn()

      }, 1100);

      return () => {
        clearTimeout(buttonTimeout);
        clearTimeout(expandTimeout);
      };
    }
  }, [isButtonClicked, disabled, handleGameOn]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (disabled) return;
    setIsButtonClicked(true);
  };

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
          <Link className={`btn-colored ${isButtonClicked ? 'btn-co--clicked' : ''}`} href="#" onClick={handleButtonClick} ref={buttonRef} title="Click to activate">
            <div className="containerRotate">
              <div className="left-half"></div>
              <div className="right-half"></div>
              {cardVisual}
            </div>
          </Link>
        </OverlayTrigger>
      )}
      <p className="mobile-game-description">{t(text)}{disabled && statusText ? ` — ${t(statusText)}` : ''}</p>
      <span className={`color-colored color--blue ${isExpanded ? 'expanded' : ''}`} data-value="1"
      ></span>
      <span className={`color-colored color--orange ${isExpanded ? 'expanded' : ''}`} data-value="1"
      ></span>
      <span className={`color-colored color--green ${isExpanded ? 'expanded' : ''}`} data-value="1"
      ></span>
      <span className={`color-colored color--white ${isExpanded ? 'expanded' : ''}`} data-value="1"
      ></span>
      <span className={`color-colored color--violet ${isExpanded ? 'expanded' : ''}`} data-value="1"
      ></span>
    </div>
  );
}

export default ButtonColoredComponent;
