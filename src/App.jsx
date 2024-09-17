import './App.css'
import MainNavbarComponent from './components/navbars/main-navbar/MainNavbarComponent'
import { Context } from "./shared/context";
import { useState } from "react"
import Routers from "./Routers";

function App() {
const [profile, setProfile] = useState(true);
  return (
    <>
<Context.Provider value={{profile, setProfile}}>
    <MainNavbarComponent/>
    <Routers/>
</Context.Provider>
    </>
  )
}

export default App
