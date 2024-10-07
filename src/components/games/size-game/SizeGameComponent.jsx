import React, { useState, useEffect } from 'react';
import ButtonReturnComponent from "../../buttons/button-return/ButtonReturnComponent";
import "./sizeGame.css";
import PropTypes from "prop-types";
import animalsData from '../../../data/animalsData';

function SizeGameComponent({ returnToScreen }) {
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  useEffect(() => {
    // Selecciona dos animales aleatorios
    const randomAnimals = [];
    while (randomAnimals.length < 2) {
      const randomIndex = Math.floor(Math.random() * animalsData.length);
      const randomAnimal = animalsData[randomIndex];
      // Evita duplicados
      if (!randomAnimals.includes(randomAnimal)) {
        randomAnimals.push(randomAnimal);
      }
    }
    setSelectedAnimals(randomAnimals);
  }, []);

  return (
    <div className="size-game-box">
      <ButtonReturnComponent returnToScreen={returnToScreen} />
      
      <div className="animals-comparison">
        {selectedAnimals.map((animal) => (
          <div key={animal.nombre} className="animal-card">
            <img src={animal.imagenReal} alt={animal.nombre}  width={`${animal.altura}px`} />
          </div>
        ))}
      </div>
    </div>
  );
}

SizeGameComponent.propTypes = {
  returnToScreen: PropTypes.func.isRequired,
};

export default SizeGameComponent;
