import { useState, useEffect, useContext } from 'react';
import ButtonReturnComponent from "../../buttons/button-return/ButtonReturnComponent";
import "./sizeGame.css";
import PropTypes from "prop-types";
import animalsData from '../../../data/animalsData';
import { Context } from "../../../shared/context.js";
import ButtonSolutionComponent from '../../buttons/button-solution/ButtonSolutionComponent';
import ButtonNextComponent from '../../buttons/button-next/ButtonNextComponent';

function SizeGameComponent({ returnToScreen }) {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const { dataNavbarImg } = useContext(Context);
  const [img1, setimg1] = useState("")
  const [img2, setimg2] = useState("")
  const [toggleQuestion, setToggleQuestion] = useState(0)
  const { t } = useContext(Context);

 
  const selectRandomAnimals = () => {
    const randomAnimals = [];
    while (randomAnimals.length < 2) {
      const randomIndex = Math.floor(Math.random() * animalsData.length);
      const randomAnimal = animalsData[randomIndex];
      if (!randomAnimals.includes(randomAnimal)) {
        randomAnimals.push(randomAnimal);
      }
    }
    return randomAnimals;
  };

 
  const handleNext = () => {
    setimg1("")
    setimg2("")
    const newAnimals = selectRandomAnimals();
    setSelectedAnimals(newAnimals);
    setToggleQuestion(Math.floor(Math.random() * 3));
  };

  
 
  const handleSolutionVelocidad = () => {
    let diff = 0; 
    if (selectedAnimals[0].velocidad > selectedAnimals[1].velocidad) {
      setimg1("size-game-img-isbig");
      diff = selectedAnimals[0].velocidad - selectedAnimals[1].velocidad;
    if(diff <= 400){
      setimg2("size-game-img-ismall0");
    } else if(diff >= 1200){
      setimg2("size-game-img-ismall2");
    } else {
      setimg2("size-game-img-ismall1");
    }

    } else if (selectedAnimals[0].peso < selectedAnimals[1].peso) {
      setimg1("size-game-img-ismall");
      setimg2("size-game-img-isbig");
      diff = selectedAnimals[1].peso - selectedAnimals[0].peso;
      if(diff <= 400){
        setimg1("size-game-img-ismall0");
      } else if(diff >= 1000){
        setimg1("size-game-img-ismall2");
      } else {
        setimg1("size-game-img-ismall1");
      }
  
    } else {
      setimg1("size-game-img-isbig")
      setimg2("size-game-img-isbig")
    }
  };
 
  const handleSolutionPeso = () => {
    let diff = 0; 
    if (selectedAnimals[0].peso > selectedAnimals[1].peso) {
      setimg1("size-game-img-isbig");
      diff = selectedAnimals[0].peso - selectedAnimals[1].peso;
    if(diff <= 400){
      setimg2("size-game-img-ismall0");
    } else if(diff >= 1200){
      setimg2("size-game-img-ismall2");
    } else {
      setimg2("size-game-img-ismall1");
    }

    } else if (selectedAnimals[0].peso < selectedAnimals[1].peso) {
      setimg1("size-game-img-ismall");
      setimg2("size-game-img-isbig");
      diff = selectedAnimals[1].peso - selectedAnimals[0].peso;
      if(diff <= 400){
        setimg1("size-game-img-ismall0");
      } else if(diff >= 1000){
        setimg1("size-game-img-ismall2");
      } else {
        setimg1("size-game-img-ismall1");
      }
  
    } else {
      setimg1("size-game-img-isbig")
      setimg2("size-game-img-isbig")
    }
  };
  const handleSolutionAltura = () => {
    let diff = 0; 
    if (selectedAnimals[0].altura > selectedAnimals[1].altura) {
      setimg1("size-game-img-isbig");
      diff = selectedAnimals[0].altura - selectedAnimals[1].altura;
    if(diff <= 400){
      setimg2("size-game-img-ismall0");
    } else if(diff >= 1200){
      setimg2("size-game-img-ismall2");
    } else {
      setimg2("size-game-img-ismall1");
    }

    } else if (selectedAnimals[0].altura < selectedAnimals[1].altura) {
      setimg1("size-game-img-ismall");
      setimg2("size-game-img-isbig");
      diff = selectedAnimals[1].altura - selectedAnimals[0].altura;
      if(diff <= 400){
        setimg1("size-game-img-ismall0");
      } else if(diff >= 1000){
        setimg1("size-game-img-ismall2");
      } else {
        setimg1("size-game-img-ismall1");
      }
  
    } else {
      setimg1("size-game-img-isbig")
      setimg2("size-game-img-isbig")
    }
  };
  
  



  useEffect(() => { 
    setSelectedAnimals(selectRandomAnimals());
  }, []);

  if (selectedAnimals.length < 2) {
    return <div>Cargando animales...</div>; 
  }

  return (
    <div className="size-game-box">
      <ButtonReturnComponent returnToScreen={returnToScreen} />
      {toggleQuestion === 0 &&
      <h3>     {t("elMasAlto")}</h3>
      }
      {toggleQuestion === 1 &&
      <h3>cual es el animal mas pesado?</h3>
      }
      {toggleQuestion === 2 &&
      <h3>cual es el animal mas veloz?</h3>
      }
      <div className="animals-comparison">
      <div >
        {img1 && 
          <h2>{selectedAnimals[0].altura/10}cm {selectedAnimals[0].peso/1000}Kg  {selectedAnimals[0].velocidad}km/h </h2>
        }
          <img  className={`size-img ${img1}`}  src={selectedAnimals[0].imagenReal}  alt={selectedAnimals[0].nombre} />
          </div>
      <div >
          {img1 &&
              <h2>{selectedAnimals[1].altura/10}cm {selectedAnimals[1].peso/1000}Kg {selectedAnimals[1].velocidad}km/h</h2>
          }
          <img  className={`size-img ${img2}`}  src={selectedAnimals[1].imagenReal}  alt={selectedAnimals[1].nombre} />
          </div>
      </div>
        <img src={dataNavbarImg[1]} alt="Animal" className="size-main-image" />
      <div className="shadow-game-buttonsNext">
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className="shadow-game-buttonsSolution">
      {toggleQuestion === 0 &&
        <ButtonSolutionComponent  show={handleSolutionAltura} />
      }
      {toggleQuestion === 1 &&
        <ButtonSolutionComponent  show={handleSolutionPeso} />
      }
      {toggleQuestion === 2 &&
        <ButtonSolutionComponent  show={handleSolutionVelocidad} />
      }
      </div>
    </div>
  );
}

SizeGameComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired,
};

export default SizeGameComponent;

// ok estoy mirando si hago el tamaño de la solución que cargue el tamaño según el dato que guarda de altura de cada animal, pero hay 
//demasiada diferencia y queda feo en pantalla...
//otra opción es que calcule la altura y al resultado del mas grande, que lo dejaré con tamaño fijo, le restaré el del pequeño, para hacer
//ver la diferencia entre ellos mejor en la pantalla