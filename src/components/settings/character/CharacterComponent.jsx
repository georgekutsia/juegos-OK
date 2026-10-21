import { useContext } from 'react';
import './characterComponent.css';
import { Context } from '../../../shared/context';
import navbarCreatures from '../../../data/navbarData';

const choices = [
  ['okina', 'changeOkina'], ['osito', 'changeBear'], ['ranita', 'changeFrog'],
  ['pezi', 'changeFish'], ['leon', 'changeLeon'],
];

function CharacterComponent() {
  const { t, handleChangeCreature, currentCreatureType } = useContext(Context);
  return (
    <div className="character-box">
      <h2>{t('currentPet')}</h2>
      {choices.map(([type, label]) => (
        <button key={type} type="button" className="character-box-button"
          aria-pressed={currentCreatureType === type} onClick={() => handleChangeCreature(type)}>
          <img className="character-box-button-img" src={navbarCreatures[type][0]} alt="" />
          {t(label)}
        </button>
      ))}
    </div>
  );
}

export default CharacterComponent;
