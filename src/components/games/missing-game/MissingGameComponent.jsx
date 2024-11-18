/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { Context } from "./../../../shared/context";
import ButtonNextComponent from "../../buttons/button-next/ButtonNextComponent";
import ButtonReturnComponent from "../../buttons/button-return/ButtonReturnComponent";
import ButtonSolutionComponent from "../../buttons/button-solution/ButtonSolutionComponent";
import InfoComponent from "../../info/InfoComponent";
import { Form } from "react-bootstrap";
import "./missingGame.css";

function MissingGameComponent({ returnToScreen }) {
  const {t, animalList } = useContext(Context);
  const [rotationSpeed, setRotationSpeed] = useState(15); // Velocidad en segundos

  const initialImages = [
    animalList[0].imagenReal,
    animalList[1].imagenReal,
  ];

  const [listOfImgs, setListOfImgs] = useState(initialImages);

  // Cambia el orden de las imágenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setListOfImgs((prevImages) => {
        const newOrder = [...prevImages];
        const lastImage = newOrder.pop(); // Quita la última imagen
        newOrder.unshift(lastImage); // Añádela al principio
        return newOrder;
      });
    }, 3000); // Cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  const handleNext = () => {
    // Agregar funcionalidad personalizada para el botón "Next"
  };

  const handleShow = () => {
    // Agregar funcionalidad personalizada para el botón "Show"
  };

  return (
    <div className="missing-box">
      <div className="buttons-position-absolute">
        <InfoComponent
          title1={"ruleOfGameI"}
          title2={"modeOfGameI"}
          text1={"shadowGameI"}
          listOfGames
          li1={"shadowGame1li1"}
          li2={"shadowGame1li2"}
          li3={"shadowGame1li3"}
        />
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className="button-next-game">
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className="button-solution-game">
        <ButtonSolutionComponent show={handleShow} />
      </div>
      <div className="rotation-speed-control">
        <Form.Label>{t("bulala")} {rotationSpeed}s</Form.Label>
        <Form.Range min="2" max="30" step="1" value={rotationSpeed} style={{ width: "50%", height: "10px", padding: "0" }}
          onChange={(e) => setRotationSpeed(e.target.value)} 
        />
      </div>
      <section className="spining-missing-box spinning-on" style={{ animationDuration: `${rotationSpeed}s` }}>
        {listOfImgs.map((img, index) => (
          <img
            src={img}
            alt={`Image ${index}`}
            key={index}
            style={{ animationDuration: `${rotationSpeed}s` }}
          />
        ))}
      </section>
    </div>
  );
}

MissingGameComponent.propTypes = {};

export default MissingGameComponent;
