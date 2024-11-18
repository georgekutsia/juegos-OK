/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { Context } from "./../../../shared/context";
import ButtonNextComponent from "../../buttons/button-next/ButtonNextComponent";
import ButtonReturnComponent from "../../buttons/button-return/ButtonReturnComponent";
import ButtonSolutionComponent from "../../buttons/button-solution/ButtonSolutionComponent";
import InfoComponent from "../../info/InfoComponent";
import "./missingGame.css";

function MissingGameComponent({ returnToScreen }) {
  const { animalList } = useContext(Context);

  const initialImages = [
    "https://cards.scryfall.io/normal/front/5/f/5f03c944-1929-4cb2-a373-d57eefa29ed1.jpg?1591228198",
    "https://cards.scryfall.io/normal/front/3/8/38806934-dd9c-4ad4-a59c-a16dce03a14a.jpg?1730488762",
    "https://cards.scryfall.io/normal/front/3/8/38806934-dd9c-4ad4-a59c-a16dce03a14a.jpg?1730488762",
    "https://cards.scryfall.io/normal/front/5/f/5f03c944-1929-4cb2-a373-d57eefa29ed1.jpg?1591228198",
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
    }, 3000); // Cada 5 segundos

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
      {/* Muestra las imágenes rotando cada 5 segundos */}
      <section className="spining-missing-box spinning-on">
        {listOfImgs.map((img, index) => (
          <img src={img} alt={`Image ${index}`} key={index} />
        ))}
      </section>
    </div>
  );
}

MissingGameComponent.propTypes = {};

export default MissingGameComponent;
