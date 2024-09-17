import './App.css'
import MainNavbarComponent from './components/navbars/main-navbar/MainNavbarComponent'
import { Context } from "./shared/context";
import { useState } from "react"
import Routers from "./Routers";
import {useTranslation } from 'react-i18next';



function App() {
  const {t, i18n} = useTranslation(["translation"])
const [profile, setProfile] = useState(true);


const changeLanguage = (code) => {
  i18n.changeLanguage(code);
}
  return (
    <div className='app-box'>
<Context.Provider value={{t, changeLanguage, profile, setProfile}}>
    <MainNavbarComponent/>
    <Routers/>
</Context.Provider>
    </div>
  )
}

export default App
