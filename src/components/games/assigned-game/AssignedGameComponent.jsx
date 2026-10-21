import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../../shared/context';
import ButtonReturnComponent from '../../buttons/button-return/ButtonReturnComponent';
import FinishConfetti from '../add-subtract-game/FinishConfetti';
import AssignedTrainScene from './AssignedTrainScene';
import { additionAnswerTimeLimits } from '../../../data/addSubtractGameData';
import { assignedFeedbackMs, assignedLevels, assignedWagonExitMs, connectAssignedWagon, createAssignedProblem, createAssignedTrain, getAssignedTrainOutcome, isAssignedAnswer, loseAssignedWagon } from '../../../data/assignedGameData';
import '../add-subtract-game/addSubtractGame.css';
import '../combine-two-game/combineTwoGame.css';
import './assignedGame.css';
import { useGameReady } from '../../../shared/gameReadyContext';

function AssignedGameComponent({ returnToScreen, initialLevel = 'easy' }) {
  const { t } = useContext(Context);
  const gameReady = useGameReady();
  const level = assignedLevels.find(item => item.id === initialLevel) ?? assignedLevels[0];
  const [problem, setProblem] = useState(() => createAssignedProblem(level.maximum));
  const [wagons, setWagons] = useState(createAssignedTrain);
  const [phase, setPhase] = useState(level.timed ? 'setup' : 'playing');
  const [selection, setSelection] = useState({ sign: null, number: null });
  const [answerState, setAnswerState] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [limit, setLimit] = useState(7);
  const [remaining, setRemaining] = useState(7);
  const [run, setRun] = useState(0);
  const problemRef = useRef(problem);
  const trainRef = useRef(wagons);
  const selectionRef = useRef(selection);
  const processingRef = useRef(false);
  const deadlineRef = useRef(null);
  const timeoutRef = useRef(null);
  const firstChoiceRef = useRef(null);
  const replayRef = useRef(null);
  const locked = phase !== 'playing' || answerState !== 'idle';
  const surviving = wagons.filter(wagon => !wagon.lost);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);
  useEffect(() => {
    if (!gameReady) return undefined;
    if (phase === 'complete' || phase === 'lost') replayRef.current?.focus({ preventScroll: true });
    if (phase !== 'playing' || answerState !== 'idle') return undefined;
    processingRef.current = false;
    const frame = requestAnimationFrame(() => firstChoiceRef.current?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [answerState, gameReady, phase, problem]);

  const nextQuestion = useCallback(() => {
    const next = createAssignedProblem(level.maximum, problemRef.current);
    problemRef.current = next;
    selectionRef.current = { sign: null, number: null };
    setProblem(next);
    setSelection(selectionRef.current);
    setAnswerState('idle');
    setFeedback('');
  }, [level.maximum]);

  const updateTrain = useCallback(next => {
    trainRef.current = next;
    setWagons(next);
  }, []);

  const continueRound = useCallback(next => {
    const outcome = getAssignedTrainOutcome(next);
    if (outcome === 'playing') nextQuestion();
    else setPhase(outcome);
  }, [nextQuestion]);

  const expireQuestion = useCallback(() => {
    if (processingRef.current) return;
    processingRef.current = true;
    setRemaining(0);
    setAnswerState('timeout');
    setFeedback('assignedTimeout');
    const next = loseAssignedWagon(trainRef.current);
    updateTrain(next);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      continueRound(next);
    }, assignedWagonExitMs);
  }, [continueRound, updateTrain]);

  useEffect(() => {
    if (!gameReady || !level.timed || phase !== 'playing') return undefined;
    deadlineRef.current = Date.now() + limit * 1000;
    setRemaining(limit);
    const interval = setInterval(() => {
      if (processingRef.current) return;
      const seconds = Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000));
      setRemaining(seconds);
      if (!seconds) expireQuestion();
    }, 100);
    return () => { clearInterval(interval); deadlineRef.current = null; };
  }, [expireQuestion, gameReady, level.timed, limit, phase, problem]);

  const choose = (sign, number) => {
    if (locked || processingRef.current) return;
    if (level.timed && deadlineRef.current !== null && Date.now() >= deadlineRef.current) {
      expireQuestion();
      return;
    }
    const next = { sign, number };
    selectionRef.current = next;
    setSelection(next);
    if (!sign || (level.missingNumber && number === null)) {
      setFeedback(sign ? 'assignedChooseNumber' : 'assignedChooseSign');
      return;
    }
    processingRef.current = true;
    const correct = isAssignedAnswer(problem, sign, level.missingNumber ? number : problem.second);
    setAnswerState(correct ? 'correct' : 'incorrect');
    setFeedback(correct ? 'assignedCorrect' : 'assignedIncorrect');
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if (correct) {
        const nextTrain = connectAssignedWagon(trainRef.current);
        updateTrain(nextTrain);
        continueRound(nextTrain);
      } else setAnswerState('idle');
    }, assignedFeedbackMs);
  };

  const startRound = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    updateTrain(createAssignedTrain());
    setRun(previous => previous + 1);
    nextQuestion();
    setPhase('playing');
  };

  const onDeparture = useCallback(() => setPhase('complete'), []);
  const equationLabel = t('assignedEquation', {
    first: problem.first, result: problem.result,
    sign: selection.sign ? t(selection.sign === '+' ? 'assignedPlus' : 'assignedMinus') : t('assignedMissingSign'),
    number: level.missingNumber ? selection.number ?? t('assignedMissingNumber') : problem.second,
  });

  return <section className="combine-two-game assigned-game" aria-labelledby="assigned-title" data-phase={phase}>
    <div className="buttons-position-absolute"><ButtonReturnComponent returnToScreen={returnToScreen} /></div>
    <div className="combine-two-game__panel">
      <header className="combine-two-game__header">
        <h2 id="assigned-title">{t('assigned')}</h2>
        <span className="combine-two-game__level">{t(level.nameKey)}</span>
        {level.timed && phase === 'playing' && <span className="combine-two-game__timer" role="timer" aria-live="off">{t('additionTimeRemaining', { seconds: remaining })}</span>}
      </header>
      <div className="combine-two-game__scene">
        <AssignedTrainScene key={run} wagons={wagons} phase={phase} label={t('assignedScene', { count: surviving.length, connected: surviving.filter(wagon => wagon.connected).length })} onDeparture={onDeparture} />
        {phase === 'complete' && <span className="combine-two-game__confetti" aria-hidden="true"><FinishConfetti /></span>}
      </div>
      {phase === 'setup' ? <div className="combine-two-game__setup">
        <p>{t('assignedHardRule')}</p>
        <fieldset>
          <legend>{t('additionChooseTimeLimit')}</legend>
          <div className="combine-two-game__time-options">{additionAnswerTimeLimits.map(({ seconds, nameKey }) => <button type="button" key={seconds} aria-label={t(nameKey)} aria-pressed={limit === seconds} onClick={() => setLimit(seconds)}>{seconds} s</button>)}</div>
        </fieldset>
        <button type="button" className="addition-setup__start" onClick={startRound}>{t('assignedStart')}</button>
      </div> : phase === 'complete' || phase === 'lost' ? <div className="combine-two-game__complete" role="status">
        <h3>{t(phase === 'lost' ? 'assignedLost' : 'assignedComplete')}</h3>
        <button ref={replayRef} type="button" className="addition-setup__start" onClick={startRound}>{t('assignedPlayAgain')}</button>
      </div> : <div className="assigned-game__controls">
        <p className="assigned-game__instruction">{t(level.missingNumber ? 'assignedMediumInstruction' : 'assignedEasyInstruction')}</p>
        <div className={`assigned-game__equation assigned-game__equation--${answerState}`} role="group" aria-label={equationLabel}>
          <span aria-hidden="true">{problem.first}</span>
          <span className="assigned-game__blank" aria-hidden="true">{selection.sign === '-' ? '−' : selection.sign ?? '?'}</span>
          {level.missingNumber ? <span className="assigned-game__blank" aria-hidden="true">{selection.number ?? '?'}</span> : <span aria-hidden="true">{problem.second}</span>}
          <span aria-hidden="true">=</span><span className="combine-two-game__target" aria-hidden="true">{problem.result}</span>
        </div>
        <div className="assigned-game__choices">
          <div className="assigned-game__signs" role="group" aria-label={t('assignedChooseSign')}>
            {['+', '-'].map((sign, index) => <button ref={index === 0 ? firstChoiceRef : undefined} type="button" key={sign} aria-label={t(sign === '+' ? 'assignedPlus' : 'assignedMinus')} aria-pressed={selection.sign === sign} disabled={locked} onClick={() => choose(sign, selectionRef.current.number)}>{sign === '-' ? '−' : '+'}</button>)}
          </div>
          {level.missingNumber && <div className="assigned-game__numbers" role="group" aria-label={t('assignedChooseNumber')}>
            {problem.options.map(number => <button type="button" key={number} aria-pressed={selection.number === number} disabled={locked} onClick={() => choose(selectionRef.current.sign, number)}>{number}</button>)}
          </div>}
        </div>
        <p className="combine-two-game__feedback" role="status">{t(phase === 'departing' ? 'assignedDeparting' : feedback || (level.missingNumber ? 'assignedChooseBoth' : 'assignedChooseSign'))}</p>
      </div>}
    </div>
  </section>;
}

AssignedGameComponent.propTypes = { returnToScreen: PropTypes.func.isRequired, initialLevel: PropTypes.string };
export default AssignedGameComponent;
