import './shadowGame.css';
import gamesData from '../../../data/gamesData';
import { useState, useEffect } from 'react';
import { ButtonTypeComponent, ButtonSolutionComponent, ButtonNextComponent} from '../../../components';

function ShadowGamesComponent() {
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [showImg, setShowImg] = useState('');
  const [partsBoxSize, setPartsBoxSize] = useState("");
  const [showAnswer, setShowAnswer] = useState("")
  const [randomPorcentage, setRandomPorcentage] = useState(Math.floor(Math.random() * gamesData.animals.length) )
   const handleRandom = ()  =>{
    setRandomPorcentage(Math.floor(Math.random() * (30 - (-30) + 1)) + (-30));

   }
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
      setShowImg(showImg); 
      setShowAnswer("")
      if(showImg === "part-game-img"){
    setPartsBoxSize("shadow-game-img-box")
      }
      return newIndex;
    });
    handleRandom()
  };
  const handleShow = () => {
    setShowAnswer("show-game-img")
    setPartsBoxSize("")
  };
  const handleBlur = () => {
    setShowImg("blur-game-img")
    setPartsBoxSize("")
    setShowAnswer("")
  }
  const handleShadow = () => {
    setShowImg("shadow-game-img")
    setPartsBoxSize("")
    setShowAnswer("")

  }
  const handlePart = () => {
    setShowImg("part-game-img")
    setPartsBoxSize("shadow-game-img-box")
    setShowAnswer("")
  }

  return (
    <div className="shadow-game-box">
      <div className="shadow-game-buttonsNext">
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className="shadow-game-buttonsSolution">
        <ButtonSolutionComponent show={handleShow} />
      </div>
      <div>
      <div className="shadow-game-buttonMode">
        <ButtonTypeComponent onClick={()=>handleBlur()} classN={"button-type-blur"} typeGame={"typeBlur"}/>
        <ButtonTypeComponent onClick={()=>handleShadow()} classN={"button-type-shadow"}  typeGame={"typeShadow"}/>
        <ButtonTypeComponent onClick={()=>handlePart()} classN={"button-type-part"}  typeGame={"typePart"}/>
      </div>
      </div>
      <div className={partsBoxSize}>
      {shuffledAnimals.length > 0 && (
      <img onClick={()=>handleShow()}  className={`${showImg} ${showAnswer}`} style={showImg === "part-game-img" ? { transform: `translate(${randomPorcentage}%, ${randomPorcentage}%)` } : {}} src={shuffledAnimals[currentIndex]} alt="animal"
  />
)}

      </div>
    </div>
  );
}

export default ShadowGamesComponent;
