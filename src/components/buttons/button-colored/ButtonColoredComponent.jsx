import { useContext, useEffect, useRef, useState } from 'react';
import './buttonColored.css';
import { Context } from "../../../shared/context";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ButtonColoredComponent({ imgGame, handleGameOn,text }) {
  const { t } = useContext(Context);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef(null);

  console.log(text)
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mainNavbarMenu-li-span" {...props}>
     {t(text)}
    </Tooltip>
  );


  useEffect(() => {
    if (isButtonClicked) {
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
  }, [isButtonClicked]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
  };

  return (
    <>
      <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
          <Link className={`btn-colored ${isButtonClicked ? 'btn-colored--clicked' : ''}`} href="#" onClick={handleButtonClick} ref={buttonRef} title="Click to activate">
            <div className="containerRotate">
              <div className="left-half"></div>
              <div className="right-half"></div>
              <img src={imgGame} alt="img-game" className="colored-img imageRotate" />
            </div>
          </Link>
        </OverlayTrigger>
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
    </>
  );
}

export default ButtonColoredComponent;
