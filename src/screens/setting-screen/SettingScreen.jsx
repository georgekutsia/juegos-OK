import { LanguageComponent,} from '../../components';
import CharacterComponent from '../../components/settings/character/CharacterComponent';
import './settingScreen.css';

function SettingScreen() {

  return (
    <div className="screens-box setting-screen">
      <h2>Setting Screen</h2>
      <LanguageComponent />
      <CharacterComponent />
    </div>
  );
}

export default SettingScreen;
