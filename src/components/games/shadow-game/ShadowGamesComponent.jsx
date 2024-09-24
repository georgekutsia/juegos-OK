import './shadowGame.css';
import gamesData from '../../../data/gamesData';
import { useState, useEffect } from 'react';
import ButtonNextComponent from '../../buttons/button-next/ButtonNextComponent';
import ButtonSolutionComponent from '../../buttons/button-solution/ButtonSolutionComponent';
import ButtonTypeComponent from '../../buttons/button-type/ButtonTypeComponent';

function ShadowGamesComponent() {
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [showImg, setShowImg] = useState('');

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const shuffled = shuffleArray([...gamesData.animals]); 
    setShuffledAnimals(shuffled);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % shuffledAnimals.length; 
      setShowImg(''); 
      return newIndex;
    });
  };
  const handleShow = () => {
    setShowImg('shadow-game-show');
  };

  return (
    <div className="shadow-game-box">
      <div className="shadow-game-buttonsNext">
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className="shadow-game-buttonsSolution">
        <ButtonSolutionComponent show={handleShow} />
      </div>
      <div>
        <ButtonTypeComponent classN={"button-type-blur"}/>
        <ButtonTypeComponent classN={"button-type-shadow"}/>
        <ButtonTypeComponent classN={"button-type-part"}/>
      </div>
      {shuffledAnimals.length > 0 && (
        <img
          className={`${showImg} shadow-game-img`}
          src={shuffledAnimals[currentIndex]}
          alt="animal"
        />
      )}
    </div>
  );
}

export default ShadowGamesComponent;
