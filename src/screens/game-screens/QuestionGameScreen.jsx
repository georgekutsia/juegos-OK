import { useContext, useState } from 'react';
import { ButtonColoredComponent, ElectionGamesComponent } from '../../components';
import gamesData from '../../data/gamesData'; 
import { Context } from "../../shared/context";
import "./gamesScreen.css"

function QuestionGameScreen() {
  const {t} = useContext(Context);
  const [gameOn, setGameOn] = useState(true)
  const [gameOn1, setGameOn1] = useState(false)

  const handleGameOn = ()=> {
    setGameOn(!gameOn)
    setGameOn1(!gameOn1)
  }
  return (
    <div className="screens-box setting-screen">
      <h2>{t("puzzleGame")}</h2>
      {gameOn && 
      <div className="screens-box-items">
        {gamesData.questionGames.map((imgUrl, index) => (
          <ButtonColoredComponent key={index} imgGame={imgUrl} handleGameOn={()=>handleGameOn()}/>
        ))}
      </div>
      }
      {gameOn1 && 
        <ElectionGamesComponent/>
      }
    </div>
  )
}

export default QuestionGameScreen



