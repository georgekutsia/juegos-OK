import { ButtonNextComponent, ButtonReturnComponent, ButtonSolutionComponent } from "../../../components";
import "./soundGame.css";
import PropTypes from "prop-types";
import animalsData from '../../../data/animalsData';
import { useState, useEffect } from "react";

function SoundGameComponent({ returnToScreen }) {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [currentAnimal, setCurrentAnimal] = useState(null)
  const [showSolution, setshowSolution] = useState(false)

  const animalsWithSound = animalsData.filter(animal => animal.sonido);

  const getRandomAnimalWithSound = () => {
    const randomIndex = Math.floor(Math.random() * animalsWithSound.length);
    return animalsWithSound[randomIndex];
  };

  useEffect(() => {
    const randomAnimal = getRandomAnimalWithSound();
    setSelectedAnimal(randomAnimal);
  }, []);

  const handlePlaySound = () => {
    if (selectedAnimal) {
      let bla = selectedAnimal.sonido
      const indiceAleatorio = Math.floor(Math.random() * bla.length);
      setCurrentAnimal(selectedAnimal.imagenReal)
      console.log(indiceAleatorio)
      const animalSound = new Audio(selectedAnimal.sonido[0]);
      animalSound.play();
    }
  };

  const handleNext = () => {
    const newAnimal = getRandomAnimalWithSound();
    setSelectedAnimal(newAnimal);
    setshowSolution(false)
  };

  const handleSolution = () => {
    setshowSolution(true)
  };

  return (
    <div className="sound-game-box">
      {selectedAnimal && (
        <>
        <h3>{}</h3>
        {showSolution && 
        <img className="sound-solution-img" src={currentAnimal} alt="imagen" />
        }
          <img
            className="sound-game-btn"
            onClick={handlePlaySound}
            src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728509085/Sound-btn-_svs90u.png"
            alt="button"
          />
          <ButtonReturnComponent returnToScreen={returnToScreen} />
          <div className="shadow-game-buttonsNext">
            <ButtonNextComponent random={handleNext} />
          </div>
          <div className="shadow-game-buttonsSolution">
            <ButtonSolutionComponent show={handleSolution} />
          </div>
        </>
      )}
    </div>
  );
}

SoundGameComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired,
};

export default SoundGameComponent;
