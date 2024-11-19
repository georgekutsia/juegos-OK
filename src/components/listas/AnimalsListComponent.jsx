/* eslint-disable react/prop-types */
import "./animalsList.css"


// eslint-disable-next-line no-unused-vars
function AnimalsListComponent({fotoR, fotoD, nombre, altura, peso, velocidad, armas, habilidad, ubicacion, index}) {
  return (
          <div className="animal-card">
            <div className="animal-card-img">
              <h2>{index+1}</h2>
              <img src={fotoR} alt="real" />
              <img src={fotoD} alt="animada" />
            </div>
            <div className="animal-card-title">
              <h3>{nombre}</h3>
              <div className="animal-card-title-data">
              <h4>{altura} cm </h4>
              <h4>{peso/1000} kg</h4>
              <h4>{velocidad} km/h </h4>
              </div>
            </div>
            <div className="animal-card-text">
                <p>
                <i className="fa-solid fa-circle-info"></i>
                  {habilidad}
                </p>
                <p>
                <i className="fa-solid fa-earth-americas"></i>
                  {ubicacion}
                </p>
                <p>
                <i className="fa-solid fa-hand-fist"></i>
                  {armas}
                </p>
            </div>
          </div>
  );
}

export default AnimalsListComponent;