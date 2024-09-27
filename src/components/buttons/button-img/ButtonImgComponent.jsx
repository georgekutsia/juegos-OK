import { useState } from "react";
import "./buttonImg.css";

// eslint-disable-next-line react/prop-types
function ButtonImgComponent({ img, color, move }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [sizeOn, setsizeOn] = useState(false);

  const animateButton = () => {
    setIsAnimating(true);
    setsizeOn(true)
    setTimeout(() => {
      setsizeOn(false)
    }, 3000);
    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  return (
    <>
        <button style={{ boxShadow: color, transform: sizeOn ? `scale(1.3) translateX(${move})` : `scale(1)`,  }} className={`bubbly-button-img ${isAnimating ? "animate" : ""}`} onClick={animateButton}>
          <img src={img} alt="3" />
        </button>
    </>
  );
}

export default ButtonImgComponent;
