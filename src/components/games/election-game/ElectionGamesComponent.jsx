import { useState, useEffect, useContext } from 'react';
import { ButtonNextComponent } from '../../../components';
import gamesData from '../../../data/gamesData';
import "./electinoGame.css";
import { Context } from "../../../shared/context.js";

function ElectionGamesComponent() {
  const [dataElection] = useState(gamesData.election.juguetes); // Asumiendo que `juguetes` es el array de fotos.
  const [currentImages, setCurrentImages] = useState([null, null]);
  const { dataNavbarImg} = useContext(Context);

  const getRandomIndex = (length) => Math.floor(Math.random() * length);

  const getTwoDifferentImages = () => {
    let firstIndex = getRandomIndex(dataElection.length);
    let secondIndex = getRandomIndex(dataElection.length);

    while (secondIndex === firstIndex) {
      secondIndex = getRandomIndex(dataElection.length);
    }

    return [dataElection[firstIndex], dataElection[secondIndex]];
  };

  const handleNext = () => {
    const [img1, img2] = getTwoDifferentImages();
    setCurrentImages([img1, img2]);
  };

  useEffect(() => {
    handleNext();
  }, []);

  return (
    <div className='election-game-box'>
      <div className="images-container">
        {currentImages[0] && currentImages[1] && (
          <>
            <img src={currentImages[0]} alt="Juguete 1" className="election-image" />
            <img src={dataNavbarImg[1]} alt="Animal"className="election-image" />
            <img src={currentImages[1]} alt="Juguete 2" className="election-image" />
          </>
        )}
      </div>
      <div className="shadow-game-buttonsNext">
        <ButtonNextComponent random={handleNext} />
      </div>
    </div>
  );
}

export default ElectionGamesComponent;
