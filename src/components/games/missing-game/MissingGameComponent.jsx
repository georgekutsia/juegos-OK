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
import ButtonTypeComponent from "../../buttons/button-type/ButtonTypeComponent";

function MissingGameComponent({ returnToScreen }) {
  const { t, animalList } = useContext(Context);
  const [rotationSpeed, setRotationSpeed] = useState(5); 
  const [imgChangeSpeed, setImgChangeSpeed] = useState(5000); 
  const [listOfImgs, setListOfImgs] = useState([]);
  const [showSolution, setshowSolution] = useState(false);
  const [removedImage, setRemovedImage] = useState([])
  const [showRemoved, setshowRemoved] = useState(false)

  const handleRandom = () => {
    const randomIndexes = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * animalList.length)
    );
    const randomImages = randomIndexes.map((index) => animalList[index].imagenReal);
    setListOfImgs(randomImages);
  };
  
  useEffect(() => {
    handleRandom();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setListOfImgs((prevImages) => {
        const newOrder = [...prevImages];
        const lastImage = newOrder.pop();
        newOrder.unshift(lastImage);
        return newOrder;
      });
    }, imgChangeSpeed);
    return () => clearInterval(interval); 
  }, [imgChangeSpeed]);
  
  const handleNext = () => {
    handleRandom();
    setRemovedImage([]);
    setshowRemoved(false);
  };

  const handleShow = () => {
    if (listOfImgs.length > 2) {
      setListOfImgs((prevImages) => {
        const updatedImages = [...prevImages];
        const lastRemoved = updatedImages.pop(); // Elimina y guarda la última imagen
        setRemovedImage(lastRemoved); // Actualiza el estado de la imagen eliminada
        setshowSolution(true)
        return updatedImages;
      });
    }
  };
  const handleSolution = () => {
    setshowRemoved(true)
    setshowSolution(false)

  }

  
  return (
    <section className="missing-box">
      <div className="buttons-position-absolute">
        <InfoComponent title1={"ruleOfGameI"} title2={"modeOfGameI"} text1={"shadowGameI"} listOfGames li1={"shadowGame1li1"} li2={"shadowGame1li2"} li3={"shadowGame1li3"}/>
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className="button-next-game">
        <ButtonNextComponent random={handleNext} />
      </div>
      {showSolution &&
      <div className="button-solution-game">
        <ButtonSolutionComponent show={handleSolution} />
      </div>
      }
      <section className="form-missing-box">
        <div className="rotation-speed-control">
          <Form.Label>
            {t("bulala")} {rotationSpeed}s
          </Form.Label>
          <Form.Range
            min="2"
            max="30"
            step="1"
            value={rotationSpeed}
            style={{ width: "50%", height: "10px", padding: "0" }}
            onChange={(e) => setRotationSpeed(Number(e.target.value))}
          />
        </div>
        <div>
          <Form >
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3 rotation-control-radio">
                <Form.Check inline label=" 1s" name="group1" type={type} id={`inline-${type}-1`} onClick={() => setImgChangeSpeed(1000)} />
                <Form.Check inline label=" 3s" name="group1" type={type} id={`inline-${type}-1`} onClick={() => setImgChangeSpeed(3000)} />
                <Form.Check inline label=" 5s" name="group1" type={type} id={`inline-${type}-2`} onClick={() => setImgChangeSpeed(5000)} defaultChecked/>
                <Form.Check inline label=" 9s " name="group1" type={type} id={`inline-${type}-3`} onClick={() => setImgChangeSpeed(9000)} />
              </div>
            ))}
          </Form>
        </div>
      </section>
      <section
        className="spining-missing-box spinning-on"
        style={{ animationDuration: `${rotationSpeed}s` }}
      >
        {listOfImgs.map((img, index) => (
          <img src={img} alt={`Image ${index}`} key={index} style={{ animationDuration: `${rotationSpeed}s` }} />
        ))}
      </section>
      <section className="removed-image-box">
      {showRemoved && (
            <img src={removedImage} alt="Removed" />
        )}
    </section>
        <div className="shadow-game-buttonMode buttonMode-runtocolor">
        <div>
          <ButtonTypeComponent
            classN="button-type-number"
            typeGame="esconder"
            backColor={"var(--nav-blue)"}
            onClick={handleShow}
          />
          </div>
          </div>
    </section>
  );
}

MissingGameComponent.propTypes = {};

export default MissingGameComponent;
