import CharacterComponent from "./character/CharacterComponent"
import LanguageComponent from "./idiomas/LanguageComponent"
import "./setting.css"
function SettingComponent() {
  return (
    <div className="setting-box">
      <LanguageComponent />
      <CharacterComponent />
    </div>
  )
}

SettingComponent.propTypes = {}

export default SettingComponent
