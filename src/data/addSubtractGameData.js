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
  { id: 'subtraction', nameKey: 'addSubtractSubtraction', illustration: 'crane' },
  { id: 'multiplication', nameKey: 'addSubtractMultiplication', vehicle: 'blueStandard', available: false },
  { id: 'division', nameKey: 'addSubtractDivision', vehicle: 'blueStandard', available: false },
];

export const mathGameGroups = {
  addSubtract: { titleKey: 'interactiveAddSubtract', modes: ['addition', 'subtraction'] },
  multiplyDivide: { titleKey: 'interactiveMultiplyDivide', modes: ['multiplication', 'division'] },
};

export const mathDifficultyLevels = [
  { id: 'easy', nameKey: 'addSubtractEasy' },
  { id: 'medium', nameKey: 'addSubtractMedium' },
  { id: 'hard', nameKey: 'addSubtractHard' },
];

export const additionMaximumOptions = [10, 20, 30, 50, 100];
export const mathRaceSteps = 5;
export const additionPlayerMoveDurationMs = 1920;
export const subtractionBalloonCount = 30;
export const subtractionCrowCount = 10;
export const subtractionHardCrowLimit = 5;
export const subtractionCrowFlightMs = 900;
export const subtractionCrowLandingMs = 200;
export const subtractionRopeFallMs = 800;

export const getSubtractionCrowPhase = (index, elapsedMs, durationMs) => {
  const landsAt = ((index + 1) * durationMs) / subtractionCrowCount;
  return Math.max(0, Math.min(1, (elapsedMs - landsAt + subtractionCrowFlightMs) / subtractionCrowFlightMs));
};

// Reserve at least one balloon for each remaining question, and enough capacity
// to use all 30 by the fifth answer, even with the smallest maximum (10).
export const createSubtractionProblem = (maximum, remainingBalloons, completedRounds) => {
  const futureRounds = mathRaceSteps - completedRounds - 1;
  const minimumAnswer = Math.max(1, remainingBalloons - futureRounds * (maximum - 1));
  const maximumAnswer = Math.min(maximum - 1, remainingBalloons - futureRounds);
  const answer = minimumAnswer + Math.floor(Math.random() * (maximumAnswer - minimumAnswer + 1));
  const firstNumber = answer + 1 + Math.floor(Math.random() * (maximum - answer));
  return { firstNumber, secondNumber: firstNumber - answer, answer };
};

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
