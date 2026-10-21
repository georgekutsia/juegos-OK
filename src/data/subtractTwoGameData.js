export const subtractTwoDeflationMs = 4000;
export const subtractTwoCrowFlightMs = 900;
export const subtractTwoWeightDropMs = 650;
export const subtractTwoFlightMs = 2600;

export function createSubtractTwoProblem(maximum, previous, hasGivenNumber = false) {
  let target = 1 + Math.floor(Math.random() * (maximum - 1));
  if (target === previous) target = target === maximum - 1 ? 1 : target + 1;
  const second = 1 + Math.floor(Math.random() * (maximum - target));
  const fixedIndex = hasGivenNumber ? (Math.random() < 0.5 ? 0 : 1) : null;
  return { target, fixedIndex, fixedNumber: fixedIndex === null ? null : fixedIndex === 0 ? target + second : second };
}

export function isSubtractTwoAnswer(values, target) {
  return Array.isArray(values) && values.length === 2 && values.every(value => /^[0-9]+$/.test(value))
    && Number(values[0]) - Number(values[1]) === target;
}
