import './App.css'
import MainNavbarComponent from './components/navbars/main-navbar/MainNavbarComponent'
import PortfolioScreen from './screens/portfolio-screen/PortfolioScreen'
import { Context } from "./shared/context";
import { useState } from "react"

function App() {
const [profile, setProfile] = useState(false);
  return (
    <>
<Context.Provider value={{profile, setProfile}}>

    <MainNavbarComponent/>
        <PortfolioScreen/>

</Context.Provider>
    </>
  )
}

export default App
