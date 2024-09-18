/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Context } from "../../../../shared/context";

function MainNavbarButtonComponent({ text, img, alt, onClick }) {
  const {t  } = useContext(Context);

  return (
    <li onClick={onClick}>
      <span>{t(text)}</span>
      <img src={img} alt={alt} />
    </li>
  );
}

export default MainNavbarButtonComponent;
