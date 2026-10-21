export const assignedWagonCount = 5;
export const assignedFeedbackMs = 1000;
export const assignedCoupleMs = 700;
export const assignedWagonExitMs = 900;
export const assignedDepartureMs = 2600;

export const assignedLevels = [
  { id: 'easy', nameKey: 'addSubtractEasy', maximum: 10 },
  { id: 'medium', nameKey: 'addSubtractMedium', maximum: 20, missingNumber: true },
  { id: 'hard', nameKey: 'addSubtractHard', maximum: 50, missingNumber: true, timed: true },
];

const randomInteger = (minimum, maximum) => minimum + Math.floor(Math.random() * (maximum - minimum + 1));
const shuffle = values => {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = randomInteger(0, i);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export function createAssignedProblem(maximum, previous) {
  const sign = Math.random() < 0.5 ? '+' : '-';
  let first = sign === '+' ? randomInteger(1, maximum - 1) : randomInteger(2, maximum);
  let second = sign === '+' ? randomInteger(1, maximum - first) : randomInteger(1, first - 1);
  if (previous?.first === first && previous?.second === second && previous?.sign === sign) {
    // A different positive second term keeps the answer unique, even at an endpoint.
    const limit = sign === '+' ? maximum - first : first - 1;
    if (limit > 1) second = second === limit ? 1 : second + 1;
    else { first = sign === '+' ? 1 : maximum; second = 1; }
  }
  const result = sign === '+' ? first + second : first - second;
  const distractors = shuffle(Array.from({ length: maximum }, (_, i) => i + 1).filter(value => value !== second)).slice(0, 2);
  return { first, second, sign, result, options: shuffle([second, ...distractors]) };
}

export const isAssignedAnswer = (problem, sign, number) =>
  (sign === '+' || sign === '-') && Number.isInteger(number) && number > 0
  && (sign === '+' ? problem.first + number : problem.first - number) === problem.result;

export const createAssignedTrain = () => Array.from({ length: assignedWagonCount }, (_, id) => ({ id, connected: false, lost: false }));

export function connectAssignedWagon(wagons) {
  const next = [...wagons].reverse().find(wagon => !wagon.lost && !wagon.connected);
  return next ? wagons.map(wagon => wagon.id === next.id ? { ...wagon, connected: true } : wagon) : wagons;
}

export function loseAssignedWagon(wagons) {
  const next = wagons.find(wagon => !wagon.lost);
  return next ? wagons.map(wagon => wagon.id === next.id ? { ...wagon, lost: true } : wagon) : wagons;
}

export function getAssignedTrainOutcome(wagons) {
  const remaining = wagons.filter(wagon => !wagon.lost);
  if (!remaining.length) return 'lost';
  return remaining.every(wagon => wagon.connected) ? 'departing' : 'playing';
}
