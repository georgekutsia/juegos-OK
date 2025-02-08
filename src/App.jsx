import './App.css'
import MainNavbarComponent from './components/navbars/main-navbar/MainNavbarComponent';
import { Context } from "./shared/context";
import { useState } from "react";
import Routers from "./Routers";
import animalsDataEsp from './data/animalsDataEsp'
import animalsDataGer from './data/animalsDataGer'

import { useTranslation } from 'react-i18next';
import dataNavbarCreatures from './data/navbarData'; 
import dataNavbarCreaturesNames from './data/navbarNamesData'; 

function App() {
  const { t, i18n } = useTranslation(["translation"]);
  const [profile, setProfile] = useState(true);
  console.log("bulala", t)

  const creatureTypes = Object.keys(dataNavbarCreatures);
  const creatureNames = Object.keys(dataNavbarCreaturesNames);
  const [animalList, setanimalList] = useState(animalsDataEsp)
  const [currentCreatureType, setCurrentCreatureType] = useState(creatureTypes[0]); 
  const [currentCreatureName, setCurrentCreatureName] = useState(creatureNames[0]); 
  const [dataNavbarImg, setDataNavbarImg] = useState(dataNavbarCreatures[currentCreatureType]);
  const [dataNavbarName, setDataNavbarName] = useState(dataNavbarCreaturesNames[currentCreatureName]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    console.log("...--SS", i18n)
    if(code === "esp"){
    setanimalList(animalsDataEsp)
    } else if( code === "ger"){
    setanimalList(animalsDataGer)
    }
  };

  const handleChangeCreature = (newCreatureType) => {
    setCurrentCreatureType(newCreatureType);
    setDataNavbarImg(dataNavbarCreatures[newCreatureType]);
    setCurrentCreatureName(newCreatureType);
    setDataNavbarName(dataNavbarCreaturesNames[newCreatureType]);
  };

  return (
    <div className='app-box'>
      <Context.Provider value={{ t, changeLanguage,  profile,  setProfile, currentCreatureType, handleChangeCreature,  dataNavbarImg, currentCreatureName, dataNavbarName, animalList, setanimalList }}>
        <MainNavbarComponent />
        <Routers />
      </Context.Provider>
    </div>
  );
}

export default App;
