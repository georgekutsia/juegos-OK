import { useContext, useState } from 'react';
import { ButtonColoredComponent, ShadowGamesComponent } from '../../components';
import gamesData from '../../data/gamesData'; 
import { Context } from "../../shared/context";
import "./gamesScreen.css"

function PuzzleGameScreen() {
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
        {gamesData.puzzleGames.map((imgUrl, index) => (
          <ButtonColoredComponent key={index} imgGame={imgUrl} handleGameOn={()=>handleGameOn()}/>
        ))}
      </div>
      }
      {gameOn1 && 
      <ShadowGamesComponent/>
      }
    </div>
  );
}

export default PuzzleGameScreen;
