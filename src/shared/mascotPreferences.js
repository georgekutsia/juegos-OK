import navbarCreatures from '../data/navbarData';

export const DEFAULT_MASCOT = 'okina';
const PREFERENCE_VERSION = 'okina-default-v1';

export function getSavedMascot() {
  try {
    if (localStorage.getItem('mascotPreferenceVersion') !== PREFERENCE_VERSION) return DEFAULT_MASCOT;
    const saved = localStorage.getItem('selectedCreature');
    return Object.hasOwn(navbarCreatures, saved) ? saved : DEFAULT_MASCOT;
  } catch {
    return DEFAULT_MASCOT;
  }
}

export function saveMascot(type) {
  try {
    if (localStorage.getItem('selectedCreature') !== type || localStorage.getItem('mascotPreferenceVersion') !== PREFERENCE_VERSION) {
      localStorage.setItem('selectedCreatureIndex', '0');
    }
    localStorage.setItem('selectedCreature', type);
    localStorage.setItem('mascotPreferenceVersion', PREFERENCE_VERSION);
  } catch {
    // The selected mascot still works for this visit if storage is unavailable.
  }
}
