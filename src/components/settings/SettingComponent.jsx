import {ColorsComponent, LanguageComponent, CharacterComponent} from "../../components"
import "./setting.css"
function SettingComponent() {
  return (
    <div className="setting-box">
      <LanguageComponent />
      <CharacterComponent />
      <ColorsComponent/>
    </div>
  )
}

SettingComponent.propTypes = {}

export default SettingComponent
