import './shadowGame.css';
import animalsData from '../../../data/animalsData';
import { useState, useEffect } from 'react';
import { ButtonTypeComponent, ButtonSolutionComponent, ButtonNextComponent, ButtonReturnComponent } from '../../../components';

// eslint-disable-next-line react/prop-types
function ShadowGamesComponent({returnToScreen}) {
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [showImg, setShowImg] = useState('');
  const [partsBoxSize, setPartsBoxSize] = useState("");
  const [showAnswer, setShowAnswer] = useState("");
  const [randomAnimal, setrandomAnimal] = useState(Math.floor(Math.random() * animalsData.length));
  const [showRealImage, setShowRealImage] = useState(false); // Nuevo estado para controlar el tipo de imagen

  const handleRandom = () => {
    setrandomAnimal(Math.floor(Math.random() * (30 - (-30) + 1)) + (-30));
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const shuffled = shuffleArray([...animalsData]);
    setShuffledAnimals(shuffled);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % shuffledAnimals.length; 
      setShowImg(showImg); 
      setShowAnswer("");
      if(showImg === "part-game-img") {
        setPartsBoxSize("shadow-game-img-box");
      }
      return newIndex;
    });
    handleRandom();
  };

  const handleShow = () => {
    setShowAnswer("show-game-img");
    setPartsBoxSize("");
  };

  const handleBlur = () => {
    setShowImg("blur-game-img");
    setPartsBoxSize("");
    setShowAnswer("");
  };

  const handleShadow = () => {
    setShowImg("shadow-game-img");
    setPartsBoxSize("");
    setShowAnswer("");
  };

  const handlePart = () => {
    setShowImg("part-game-img");
    setPartsBoxSize("shadow-game-img-box");
    setShowAnswer("");
  };

  const toggleImageType = () => {
    setShowRealImage((prevShowRealImage) => !prevShowRealImage); // Cambia entre imagen real y animada
  };

  return (
    <div className="shadow-game-box">
      <ButtonReturnComponent returnToScreen={returnToScreen}/>
      <div className="shadow-game-buttonsNext">
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className="shadow-game-buttonsSolution">
        <ButtonSolutionComponent show={handleShow} />
      </div>
      <div>
        <div className="shadow-game-buttonMode">
            <ButtonTypeComponent onClick={() => handleBlur()} classN={"button-type-blur"} typeGame={"typeBlur"} />
            <ButtonTypeComponent onClick={() => handleShadow()} classN={"button-type-shadow"} typeGame={"typeShadow"} />
            <ButtonTypeComponent onClick={() => handlePart()} classN={"button-type-part"} typeGame={"typePart"} />
            <ButtonTypeComponent onClick={() => toggleImageType()} classN={"button-type-real"} typeGame={"typeReal"} />
        </div>
        <div>
        </div>
      </div>
      <div className={partsBoxSize}>
        {shuffledAnimals.length > 0 && (
          <img
            onClick={() => handleShow()}
            className={`${showImg} ${showAnswer} shadow-game-img-size` }
            style={showImg === "part-game-img" ? { transform: `translate(${randomAnimal}%, ${randomAnimal}%)` } : {}}
            src={showRealImage ? shuffledAnimals[currentIndex].imagenReal : shuffledAnimals[currentIndex].imagenAnimada} // Cambia entre imagenAnimada e imagenReal
            alt={shuffledAnimals[currentIndex].nombre} // Usa el nombre del animal
          />
        )}
      </div>
    </div>
  );
}

export default ShadowGamesComponent;
