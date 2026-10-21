import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assignedLevels, connectAssignedWagon, createAssignedProblem, createAssignedTrain, getAssignedTrainOutcome, isAssignedAnswer, loseAssignedWagon } from './assignedGameData.js';
import { getMathGamePath, resolveGameRoute } from './gameRoutes.js';

test('every puzzle has exactly one correct sign/number combination among three distinct positive options', () => {
  for (const { maximum } of assignedLevels) {
    let previous;
    for (let i = 0; i < 3000; i++) {
      const problem = createAssignedProblem(maximum, previous);
      assert.ok(problem.first > 0 && problem.first <= maximum);
      assert.ok(problem.result > 0 && problem.result <= maximum);
      assert.equal(new Set(problem.options).size, 3);
      assert.ok(problem.options.every(value => value > 0 && value <= maximum));
      assert.ok(isAssignedAnswer(problem, problem.sign, problem.second));
      const answers = ['+', '-'].flatMap(sign => problem.options.filter(number => isAssignedAnswer(problem, sign, number)));
      assert.equal(answers.length, 1);
      if (previous) assert.notEqual(`${problem.first},${problem.sign},${problem.second}`, `${previous.first},${previous.sign},${previous.second}`);
      previous = problem;
    }
  }
});

test('rejects missing and invalid selections and does not confuse adding with subtracting', () => {
  const problem = { first: 5, result: 8 };
  assert.ok(isAssignedAnswer(problem, '+', 3));
  for (const [sign, number] of [[null, 3], ['+', null], ['-', 3], ['+', 9], ['*', 3], ['+', '3'], ['+', 0]]) {
    assert.equal(isAssignedAnswer(problem, sign, number), false);
  }
});

test('five correct answers connect from the locomotive backwards and start a complete train', () => {
  let train = createAssignedTrain();
  const initial = structuredClone(train);
  for (let count = 1; count <= 5; count++) {
    train = connectAssignedWagon(train);
    assert.deepEqual(train.filter(wagon => wagon.connected).map(wagon => wagon.id), Array.from({ length: count }, (_, i) => 5 - count + i));
    assert.equal(getAssignedTrainOutcome(train), count === 5 ? 'departing' : 'playing');
  }
  assert.deepEqual(createAssignedTrain(), initial);
});

test('expiry loses the leftmost survivor; all five lost is a defeat', () => {
  let train = createAssignedTrain();
  for (let count = 1; count <= 5; count++) {
    train = loseAssignedWagon(train);
    assert.deepEqual(train.filter(wagon => wagon.lost).map(wagon => wagon.id), Array.from({ length: count }, (_, i) => i));
    assert.equal(getAssignedTrainOutcome(train), count === 5 ? 'lost' : 'playing');
  }
});

test('every sequence of five successes/timeouts either departs with survivors or loses all wagons', () => {
  for (let sequence = 0; sequence < 32; sequence++) {
    let train = createAssignedTrain();
    for (let step = 0; step < 5; step++) {
      train = sequence & (1 << step) ? connectAssignedWagon(train) : loseAssignedWagon(train);
      assert.equal(getAssignedTrainOutcome(train), step < 4 ? 'playing' : sequence === 0 ? 'lost' : 'departing');
    }
    assert.ok(train.filter(wagon => !wagon.lost).every(wagon => wagon.connected));
  }
});

test('every level has its own URL and only hard is timed', () => {
  for (const { id, timed } of assignedLevels) {
    const route = resolveGameRoute(getMathGamePath('assigned', id));
    assert.equal(route.game, 'assigned');
    assert.equal(route.level, id);
    assert.equal(Boolean(timed), id === 'hard');
  }
  assert.equal(resolveGameRoute('/puzzles/sumas-y-restas/asignado').game, 'assigned');
});
