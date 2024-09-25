import { useState, useEffect, useContext } from 'react';
import { ButtonImgComponent, ButtonNextComponent } from '../../../components';
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
          <div className='election-game-box-imgs'>
          <ButtonImgComponent img={currentImages[0]} color={"0 0px 55px rgb(0, 242, 255)"} move={"30%"}/>
            <img src={dataNavbarImg[1]} alt="Animal"className="election-image" />
          <ButtonImgComponent img={currentImages[1]} color={"0 0px 55px rgb(255, 255, 50)"} move={"-30%"}/>
          </div>
        )}
      </div>
      <div className="shadow-game-buttonsNext">
        <ButtonNextComponent random={handleNext} />
      </div>
    </div>
  );
}

export default ElectionGamesComponent;
