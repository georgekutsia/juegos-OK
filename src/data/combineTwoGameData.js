export const combineTwoLevels = [
  { id: 'easy', nameKey: 'addSubtractEasy', maximum: 10, beams: '#e58b2c', rail: '#8b42bf' },
  { id: 'medium', nameKey: 'addSubtractMedium', maximum: 20, beams: '#2f9d73', rail: '#327ad3', hasGivenNumber: true },
  { id: 'hard', nameKey: 'addSubtractHard', maximum: 50, beams: '#9161c4', rail: '#e25a56', hasGivenNumber: true, timed: true },
];

export const combineTwoSteps = 5;
export const combineTwoAnswerFeedbackMs = 1000;
export const combineTwoClimbMs = 1400;
export const combineTwoDescentMs = 2700;
export const combineTwoDamageLimit = 5;
export const combineTwoCollapseMs = 1200;

export function createCombineTwoTarget(maximum, previous) {
  const target = 2 + Math.floor(Math.random() * (maximum - 1));
  return target === previous ? (target === maximum ? 2 : target + 1) : target;
}

export function createCombineTwoProblem(maximum, previous, hasGivenNumber = false) {
  const target = createCombineTwoTarget(maximum, previous);
  return {
    target,
    fixedIndex: hasGivenNumber ? (Math.random() < 0.5 ? 0 : 1) : null,
    fixedNumber: hasGivenNumber ? 1 + Math.floor(Math.random() * (target - 1)) : null,
  };
}

export const getCombineTwoInitialValues = problem => [0, 1].map(index =>
  index === problem.fixedIndex ? String(problem.fixedNumber) : '');

export function isCombineTwoAnswer(values, target) {
  return Array.isArray(values) && values.length === 2 && values.every(value => /^[0-9]+$/.test(value))
    && Number(values[0]) + Number(values[1]) === target;
}
