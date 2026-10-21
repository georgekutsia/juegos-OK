import test from 'node:test';
import assert from 'node:assert/strict';
import { combineTwoLevels, createCombineTwoTarget, createCombineTwoProblem, getCombineTwoInitialValues, isCombineTwoAnswer } from './combineTwoGameData.js';

test('every level generates bounded integer targets without consecutive repeats', () => {
  for (const { maximum } of combineTwoLevels) {
    let previous;
    for (let round = 0; round < 500; round++) {
      const target = createCombineTwoTarget(maximum, previous);
      assert.ok(Number.isInteger(target) && target >= 2 && target <= maximum);
      assert.notEqual(target, previous);
      previous = target;
    }
  }
});

test('accepts every non-negative integer decomposition, including zero and reversed terms', () => {
  for (let target = 2; target <= 50; target++) {
    for (let first = 0; first <= target; first++) {
      assert.equal(isCombineTwoAnswer([String(first), String(target - first)], target), true);
    }
  }
});

test('both fields must contain valid integers and add up to the target', () => {
  for (const values of [['', '8'], ['8', ''], ['', ''], ['3', '4'], ['-1', '9'], ['2.5', '5.5'], ['a', '8'], ['3', '5', '1'], ['8']]) {
    assert.equal(isCombineTwoAnswer(values, 8), false);
  }
  assert.equal(isCombineTwoAnswer(['3', '5'], 8), true);
});

test('medium and hard always provide one smaller addend and a positive missing answer', () => {
  for (const { maximum, hasGivenNumber } of combineTwoLevels.filter(level => level.hasGivenNumber)) {
    for (let round = 0; round < 1000; round++) {
      const problem = createCombineTwoProblem(maximum, undefined, hasGivenNumber);
      assert.ok(problem.fixedIndex === 0 || problem.fixedIndex === 1);
      assert.ok(problem.fixedNumber >= 1 && problem.fixedNumber < problem.target);
      const values = getCombineTwoInitialValues(problem);
      assert.equal(values.filter(value => value === '').length, 1);
      assert.equal(Number(values[problem.fixedIndex]), problem.fixedNumber);
      values[1 - problem.fixedIndex] = String(problem.target - problem.fixedNumber);
      assert.equal(isCombineTwoAnswer(values, problem.target), true);
    }
  }
});

test('easy keeps two empty fields and only hard has a question timer', () => {
  const problem = createCombineTwoProblem(10);
  assert.deepEqual(getCombineTwoInitialValues(problem), ['', '']);
  assert.deepEqual(combineTwoLevels.filter(level => level.timed).map(level => level.id), ['hard']);
});
