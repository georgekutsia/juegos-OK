import { useContext, useState } from "react";
import "./buttonSolution.css"
import { Context } from "../../../shared/context";

// eslint-disable-next-line react/prop-types
function ButtonSolutionComponent({show}) {
  const {t} = useContext(Context);

  const [isAnimating, setIsAnimating] = useState(false);
  const [showButton, setshowButton] = useState(true)
  const [fadeOut, setfadeOut] = useState(true)

  const animateButton = () => {
    setIsAnimating(true);
    setfadeOut(true)

    setTimeout(() => {
      setfadeOut(false)
    }, 1000);
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
    setTimeout(() => {
      setshowButton(false);
      show()

    }, 400);
    setTimeout(() => {
      setshowButton(true)
    }, 1000);
  };

  return (
    <>
        {showButton && 
            <button className={`bubbly-button ${isAnimating ? 'animate' : ''}`}  onClick={animateButton}>
              {t("solution")}
            </button>
        }
    </>
);
}

export default ButtonSolutionComponent
