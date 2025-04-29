/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../../shared/context";
import "./info.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function InfoComponent({ title1, text1, title2, text2, listOfGames, li1, li2, li3, li4, li5,}) {
  const { t } = useContext(Context);
  const listItems = [li1, li2, li3, li4, li5].filter(Boolean);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="info-tooltip-span" {...props}>
      <div>
        {title1 && <h6>{t(title1)}</h6>}
        {text1 && <p>{t(text1)}</p>}
      </div>
      <div>
        {title2 && <h6>{t(title2)}</h6>}
        {text2 && <p>{t(text2)}</p>}
      </div>
      {listOfGames && listItems.length > 0 && (
        <ol>
          {listItems.map((li, i) => (
            <li key={i}>
              <i className="fa-solid fa-minus"></i> {t(li)}
            </li>
          ))}
        </ol>
      )}
    </Tooltip>
  );

  return (
    <div className="info-component-box">
      <OverlayTrigger placement="bottom-end" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
        <img
          src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1731248917/infor_wyscrx.png"
          alt="Information Button"
        />
      </OverlayTrigger>
    </div>
  );
}

export default InfoComponent;
