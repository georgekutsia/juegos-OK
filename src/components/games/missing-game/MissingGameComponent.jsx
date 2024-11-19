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
  const { t, animalList } = useContext(Context);
  const [rotationSpeed, setRotationSpeed] = useState(5); 
  const [imgChangeSpeed, setImgChangeSpeed] = useState(5000); 
  const [listOfImgs, setListOfImgs] = useState([]);
  
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
  };
  const handleShow = () => {
    setListOfImgs((prevImages) => prevImages.slice(0, -1));
  };
  return (
    <div className="missing-box">
      <div className="buttons-position-absolute">
        <InfoComponent title1={"ruleOfGameI"} title2={"modeOfGameI"} text1={"shadowGameI"} listOfGames li1={"shadowGame1li1"} li2={"shadowGame1li2"} li3={"shadowGame1li3"}/>
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className="button-next-game">
        <ButtonNextComponent random={handleNext} />
      </div>
      <div className="button-solution-game">
        <ButtonSolutionComponent show={handleShow} />
      </div>
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
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label=" 1s" name="group1" type={type} id={`inline-${type}-1`} onClick={() => setImgChangeSpeed(1000)} />
                <Form.Check inline label=" 3s" name="group1" type={type} id={`inline-${type}-1`} onClick={() => setImgChangeSpeed(3000)} />
                <Form.Check inline label=" 5s" name="group1" type={type} id={`inline-${type}-2`} onClick={() => setImgChangeSpeed(5000)} />
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
            {console.log("speed", rotationSpeed)}
      </section>
    </div>
  );
}

MissingGameComponent.propTypes = {};

export default MissingGameComponent;
