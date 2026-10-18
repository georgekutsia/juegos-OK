export const mathVehicles = {
  blueStandard: {
    image: '/img/games/add-subtract/vehicles/blue-car-body.png',
  },
  orangeStandard: {
    image: '/img/games/add-subtract/vehicles/orange-car-body.png',
  },
  lilacStandard: {
    image: '/img/games/add-subtract/vehicles/lilac-car-body.png',
  },
};

export const mathGameModes = [
  { id: 'addition', nameKey: 'addSubtractAddition', vehicle: 'blueStandard' },
  { id: 'subtraction', nameKey: 'addSubtractSubtraction', vehicle: 'blueStandard' },
  { id: 'multiplication', nameKey: 'addSubtractMultiplication', vehicle: 'blueStandard' },
  { id: 'division', nameKey: 'addSubtractDivision', vehicle: 'blueStandard' },
];

export const mathDifficultyLevels = [
  { id: 'easy', nameKey: 'addSubtractEasy' },
  { id: 'medium', nameKey: 'addSubtractMedium' },
  { id: 'hard', nameKey: 'addSubtractHard' },
];

export const additionMaximumOptions = [10, 20, 30, 50, 100];
export const mathRaceSteps = 5;

export const additionOpponentSpeeds = [
  { id: 'slow', durationMs: 120000, nameKey: 'additionOpponentSlow' },
  { id: 'normal', durationMs: 90000, nameKey: 'additionOpponentNormal' },
  { id: 'fast', durationMs: 60000, nameKey: 'additionOpponentFast' },
  { id: 'superFast', durationMs: 30000, nameKey: 'additionOpponentSuperFast' },
];

export const additionAnswerTimeLimits = [
  { id: '5', durationMs: 5000, seconds: 5, nameKey: 'additionTimeFive' },
  { id: '7', durationMs: 7000, seconds: 7, nameKey: 'additionTimeSeven' },
  { id: '10', durationMs: 10000, seconds: 10, nameKey: 'additionTimeTen' },
];
