import './App.css'
import MainNavbarComponent from './components/navbars/main-navbar/MainNavbarComponent'
import { Context } from './shared/context'
import { useState, useEffect } from 'react'
import Routers from './Routers'
import objectsDataList from './data/objectsData'
import animalsDataEsp from './data/animalsDataEsp'
import animalsDataGer from './data/animalsDataGer'

import { useTranslation } from 'react-i18next'
import dataNavbarCreatures from './data/navbarData'
import dataNavbarCreaturesNames from './data/navbarNamesData'

function App() {
  const { t, i18n } = useTranslation(['translation'])
  const [profile, setProfile] = useState(true)

  // 🔄 Recuperar colores y dirección desde LocalStorage
  const savedPrimaryColor = localStorage.getItem('primaryColor') || '#ffa578';
  const savedSecondaryColor = localStorage.getItem('secondaryColor') || '#eac0ab';
  const savedVertical = localStorage.getItem('vertical') || 'bottom';
  const savedHorizontal = localStorage.getItem('horizontal') || 'right';

  const [primaryColor, setPrimaryColor] = useState(savedPrimaryColor); 
  const [secondaryColor, setSecondaryColor] = useState(savedSecondaryColor); 
  const [vertical, setvertical] = useState(savedVertical);
  const [horizontal, sethorizontal] = useState(savedHorizontal);

  const creatureTypes = Object.keys(dataNavbarCreatures)
  const creatureNames = Object.keys(dataNavbarCreaturesNames)
  const [objectsData, setobjectsData] = useState(objectsDataList)
  const [animalList, setanimalList] = useState(animalsDataEsp)

  const [currentCreatureType, setCurrentCreatureType] = useState(creatureTypes[0])
  const [currentCreatureName, setCurrentCreatureName] = useState(creatureNames[0])
  const [dataNavbarImg, setDataNavbarImg] = useState(dataNavbarCreatures[currentCreatureType])
  const [dataNavbarName, setDataNavbarName] = useState(dataNavbarCreaturesNames[currentCreatureName])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    if (code === 'esp') {
      setanimalList(animalsDataEsp)
    } else if (code === 'ger') {
      setanimalList(animalsDataGer)
    }
  }

  const handleChangeCreature = (newCreatureType) => {
    setCurrentCreatureType(newCreatureType)
    setDataNavbarImg(dataNavbarCreatures[newCreatureType])
    setCurrentCreatureName(newCreatureType)
    setDataNavbarName(dataNavbarCreaturesNames[newCreatureType])
  }

  return (
    <Context.Provider
      value={{
        t,
        changeLanguage,
        profile,
        setProfile,
        currentCreatureType,
        handleChangeCreature,
        dataNavbarImg,
        currentCreatureName,
        dataNavbarName,
        animalList,
        setanimalList,
        objectsData,
        setobjectsData,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        setvertical,
        sethorizontal,
        vertical,
        horizontal
      }}
    >
      <div
        className='app-box body'
        style={{
          backgroundImage: `linear-gradient(to ${vertical} ${horizontal}, ${primaryColor}, ${secondaryColor})`
        }}
      >
        <MainNavbarComponent />
        <Routers />
      </div>
    </Context.Provider>
  )
}

export default App
