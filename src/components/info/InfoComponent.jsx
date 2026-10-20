/* eslint-disable react/prop-types */
import { useContext, useEffect, useId, useState } from 'react';
import { Context } from '../../shared/context';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import './info.css';

const hoverQuery = '(min-width: 601px) and (hover: hover) and (pointer: fine)';

function InfoComponent({
  title0, text0, title1, text1, title2, text2,
  listOfGames, li1, li2, li3, li4, li5,
}) {
  const { t } = useContext(Context);
  const tooltipId = useId();
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [canHover, setCanHover] = useState(() => window.matchMedia(hoverQuery).matches);
  const listItems = [li1, li2, li3, li4, li5].filter(Boolean);

  useEffect(() => {
    const media = window.matchMedia(hoverQuery);
    const updateHover = () => {
      setCanHover(media.matches);
      setShowTooltip(false);
    };
    media.addEventListener('change', updateHover);
    return () => media.removeEventListener('change', updateHover);
  }, []);

  const content = <>
    {[[title0, text0], [title1, text1], [title2, text2]].map(([title, text], index) => (
      (title || text) && <div key={index}>
        {title && <h4>{t(title)}</h4>}
        {text && <p>{t(text)}</p>}
      </div>
    ))}
    {listOfGames && listItems.length > 0 && <ol>
      {listItems.map((li) => <li key={li}><i className="fa-solid fa-minus" aria-hidden="true" /> {t(li)}</li>)}
    </ol>}
  </>;

  return (
    <div className="info-component-box">
      <OverlayTrigger
        placement="bottom-end"
        trigger={canHover ? ['hover', 'focus'] : []}
        show={canHover && !showPopup && showTooltip}
        onToggle={(visible) => setShowTooltip(canHover && !showPopup && visible)}
        delay={{ show: 50, hide: 200 }}
        overlay={(props) => <Tooltip id={tooltipId} className="info-tooltip-span" {...props}>{content}</Tooltip>}
      >
        <button type="button" className="info-trigger" aria-label={t('gameInformation')} aria-haspopup="dialog" onClick={() => {
          setShowTooltip(false);
          setShowPopup(true);
        }}>
          <img src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1731248917/infor_wyscrx.png" alt="" />
        </button>
      </OverlayTrigger>
      <Modal show={showPopup} onHide={() => { setShowPopup(false); setShowTooltip(false); }} centered className="info-popup" backdropClassName="info-popup-backdrop" aria-label={t('gameInformation')}>
        <Modal.Body className="info-popup-content">
          <button type="button" className="info-popup-close" aria-label={t('closeGameInformation')} onClick={() => setShowPopup(false)}>×</button>
          {content}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InfoComponent;
