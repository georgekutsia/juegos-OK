import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSubtractTwoProblem, isSubtractTwoAnswer, subtractTwoDeflationMs } from './subtractTwoGameData.js';
import { getCombineTwoInitialValues } from './combineTwoGameData.js';
import { getMathGamePath, resolveGameRoute } from './gameRoutes.js';

test('guided subtraction questions always have one positive, bounded solution', () => {
  for (const maximum of [10, 20, 50]) {
    let previous;
    for (let i = 0; i < 2000; i++) {
      const problem = createSubtractTwoProblem(maximum, previous, true);
      const { target, fixedIndex, fixedNumber } = problem;
      assert.ok(target >= 1 && target < maximum && target !== previous);
      assert.ok(fixedIndex === 0 || fixedIndex === 1);
      const missing = fixedIndex === 0 ? fixedNumber - target : target + fixedNumber;
      assert.ok(missing > 0 && missing <= maximum);
      assert.ok(fixedNumber > 0 && fixedNumber <= maximum);
      const values = getCombineTwoInitialValues(problem);
      assert.equal(values.filter(value => value === '').length, 1);
      values[1 - fixedIndex] = String(missing);
      assert.ok(isSubtractTwoAnswer(values, target));
      previous = target;
    }
  }
});

test('easy leaves both inputs empty and accepts every non-negative subtraction decomposition', () => {
  assert.deepEqual(getCombineTwoInitialValues(createSubtractTwoProblem(10)), ['', '']);
  for (let first = 1; first <= 50; first++) {
    for (let second = 0; second < first; second++) {
      assert.ok(isSubtractTwoAnswer([String(first), String(second)], first - second));
      assert.equal(isSubtractTwoAnswer([String(second), String(first)], first - second), false);
    }
  }
});

test('rejects blanks, signed numbers, decimals and addition answers', () => {
  for (const values of [['', '1'], ['5', ''], ['-2', '1'], ['4.5', '1.5'], ['1', '2'], [' 4', '1'], ['3']]) {
    assert.equal(isSubtractTwoAnswer(values, 3), false);
  }
  assert.equal(isSubtractTwoAnswer(['4', '1'], 3), true);
});

test('all subtraction URLs resolve independently and deflation lasts four seconds', () => {
  for (const level of ['easy', 'medium', 'hard']) {
    const route = resolveGameRoute(getMathGamePath('subtractTwo', level));
    assert.equal(route.game, 'subtractTwo');
    assert.equal(route.level, level);
    assert.equal(route.parent, '/puzzles/sumas-y-restas');
  }
  assert.equal(resolveGameRoute('/puzzles/sumas-y-restas/resta-dos').game, 'subtractTwo');
  assert.equal(subtractTwoDeflationMs, 4000);
});
