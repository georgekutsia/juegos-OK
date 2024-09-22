import { useContext, useState } from "react";
import "./buttonSolution.css"
import { Context } from "../../../shared/context";

function ButtonSolutionComponent() {
  const {t} = useContext(Context);

  const [isAnimating, setIsAnimating] = useState(false);
  const [showButton, setshowButton] = useState(true)

  const animateButton = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
    setTimeout(() => {
      setshowButton(false);
    }, 400);
    setTimeout(() => {
      setshowButton(true)
    }, 1000);
  };

  return (
    <>
        {showButton && 
            <button data-aos="fade-up" className={`bubbly-button ${isAnimating ? 'animate' : ''}`}  onClick={animateButton}>
              {t("solution")}
            </button>
        }
    </>
);
}

export default ButtonSolutionComponent
