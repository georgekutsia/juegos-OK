import './App.css'
import MainNavbarComponent from './components/navbars/main-navbar/MainNavbarComponent'
import { Context } from './shared/context'
import { useCallback, useEffect, useState } from 'react'
import Routers from './Routers'
import objectsDataList from './data/objectsData'
import animalsDataEsp from './data/animalsDataEsp'
import animalsDataGer from './data/animalsDataGer'

import { useTranslation } from 'react-i18next'
import dataNavbarCreatures from './data/navbarData'
import dataNavbarCreaturesNames from './data/navbarNamesData'
import { DEFAULT_MASCOT, getSavedMascot, saveMascot } from './shared/mascotPreferences'

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

  const [objectsData, setobjectsData] = useState(objectsDataList)
  const [animalList, setanimalList] = useState(animalsDataEsp)

  const [currentCreatureType, setCurrentCreatureType] = useState(getSavedMascot)
  const currentCreatureName = currentCreatureType
  const dataNavbarImg = dataNavbarCreatures[currentCreatureType]
  const dataNavbarName = dataNavbarCreaturesNames[currentCreatureType]

  useEffect(() => { saveMascot(currentCreatureType) }, [currentCreatureType])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    if (code === 'esp') {
      setanimalList(animalsDataEsp)
    } else if (code === 'ger') {
      setanimalList(animalsDataGer)
    }
  }

  const handleChangeCreature = useCallback(newCreatureType => {
    setCurrentCreatureType(Object.hasOwn(dataNavbarCreatures, newCreatureType) ? newCreatureType : DEFAULT_MASCOT)
  }, [])

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
