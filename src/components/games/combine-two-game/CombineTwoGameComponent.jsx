import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonReturnComponent from '../../buttons/button-return/ButtonReturnComponent';
import { Context } from '../../../shared/context';
import { combineTwoAnswerFeedbackMs, combineTwoCollapseMs, combineTwoDamageLimit, combineTwoLevels, combineTwoSteps, createCombineTwoProblem, getCombineTwoInitialValues, isCombineTwoAnswer } from '../../../data/combineTwoGameData';
import { additionAnswerTimeLimits } from '../../../data/addSubtractGameData';
import CoasterScene from './CoasterScene';
import FinishConfetti from '../add-subtract-game/FinishConfetti';
import '../add-subtract-game/addSubtractGame.css';
import './combineTwoGame.css';

function CombineTwoGameComponent({ returnToScreen, initialLevel = 'easy' }) {
  const { t } = useContext(Context);
  const levelIndex = Math.max(0, combineTwoLevels.findIndex(level => level.id === initialLevel));
  const level = combineTwoLevels[levelIndex];
  const isTimed = Boolean(level.timed);
  const [problem, setProblem] = useState(() => createCombineTwoProblem(level.maximum, undefined, level.hasGivenNumber));
  const { target } = problem;
  const [values, setValues] = useState(() => getCombineTwoInitialValues(problem));
  const [activeField, setActiveField] = useState(problem.fixedIndex === null ? 0 : 1 - problem.fixedIndex);
  const [correct, setCorrect] = useState(0);
  const [brokenSupports, setBrokenSupports] = useState(0);
  const [phase, setPhase] = useState(isTimed ? 'setup' : 'playing');
  const [answerTimeLimit, setAnswerTimeLimit] = useState(7);
  const [timeRemaining, setTimeRemaining] = useState(7);
  const [run, setRun] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [answerState, setAnswerState] = useState('idle');
  const inputRefs = useRef([]);
  const replayRef = useRef(null);
  const problemRef = useRef(problem);
  const valuesRef = useRef(getCombineTwoInitialValues(problem));
  const activeFieldRef = useRef(activeField);
  const focusFrameRef = useRef(null);
  const processingRef = useRef(false);
  const answerTimerRef = useRef(null);
  const deadlineRef = useRef(null);
  const damageRef = useRef(0);
  const locked = phase !== 'playing' || answerState !== 'idle';

  useEffect(() => () => clearTimeout(answerTimerRef.current), []);

  useEffect(() => {
    if (phase === 'complete' || phase === 'lost') replayRef.current?.focus({ preventScroll: true });
  }, [phase]);

  useEffect(() => {
    if (phase !== 'playing' || answerState !== 'idle') return undefined;
    processingRef.current = false;
    const frame = requestAnimationFrame(() => inputRefs.current[activeFieldRef.current]?.focus({ preventScroll: true }));
    focusFrameRef.current = frame;
    return () => cancelAnimationFrame(frame);
  }, [answerState, phase, problem]);

  const replaceProblem = useCallback(next => {
    problemRef.current = next;
    const initialValues = getCombineTwoInitialValues(next);
    valuesRef.current = initialValues;
    activeFieldRef.current = next.fixedIndex === null ? 0 : 1 - next.fixedIndex;
    setProblem(next);
    setValues(initialValues);
    setActiveField(activeFieldRef.current);
    setAnswerState('idle');
    setFeedback('');
  }, []);

  const nextProblem = useCallback(() => {
    replaceProblem(createCombineTwoProblem(level.maximum, problemRef.current.target, level.hasGivenNumber));
  }, [level.hasGivenNumber, level.maximum, replaceProblem]);

  const expireQuestion = useCallback(() => {
    if (processingRef.current) return;
    processingRef.current = true;
    setTimeRemaining(0);
    setAnswerState('incorrect');
    const damage = Math.min(combineTwoDamageLimit, damageRef.current + 1);
    damageRef.current = damage;
    setBrokenSupports(damage);
    const collapsed = damage === combineTwoDamageLimit;
    setFeedback(collapsed ? 'combineTwoCollapsing' : 'combineTwoTimeout');
    if (collapsed) setPhase('collapsing');
    answerTimerRef.current = setTimeout(() => {
      answerTimerRef.current = null;
      if (collapsed) setPhase('lost');
      else nextProblem();
    }, collapsed ? combineTwoCollapseMs : combineTwoAnswerFeedbackMs);
  }, [nextProblem]);

  useEffect(() => {
    if (!isTimed || phase !== 'playing') return undefined;
    deadlineRef.current = Date.now() + answerTimeLimit * 1000;
    setTimeRemaining(answerTimeLimit);
    const tick = () => {
      if (processingRef.current) return;
      const remaining = Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000));
      setTimeRemaining(remaining);
      if (remaining === 0) expireQuestion();
    };
    const interval = window.setInterval(tick, 100);
    return () => {
      window.clearInterval(interval);
      deadlineRef.current = null;
    };
  }, [answerTimeLimit, expireQuestion, isTimed, phase, problem]);

  const onArrival = useCallback(() => {
    if (phase === 'crest') setPhase('descending');
    if (phase === 'descending') setPhase('complete');
  }, [phase]);

  const startRound = () => {
    clearTimeout(answerTimerRef.current);
    answerTimerRef.current = null;
    setCorrect(0);
    damageRef.current = 0;
    setBrokenSupports(0);
    setRun(previous => previous + 1);
    nextProblem();
    setPhase('playing');
  };

  const validate = (candidate, explicit = false) => {
    if (locked || processingRef.current) return;
    if (isTimed && deadlineRef.current !== null && Date.now() >= deadlineRef.current) {
      expireQuestion();
      return;
    }
    if (isCombineTwoAnswer(candidate, target)) {
      processingRef.current = true;
      const nextCorrect = correct + 1;
      setAnswerState('correct');
      setFeedback('combineTwoCorrect');
      answerTimerRef.current = setTimeout(() => {
        answerTimerRef.current = null;
        setCorrect(nextCorrect);
        if (nextCorrect === combineTwoSteps) {
          replaceProblem(problemRef.current);
          setPhase('crest');
        } else nextProblem();
      }, combineTwoAnswerFeedbackMs);
    } else if (explicit) {
      processingRef.current = true;
      setAnswerState('incorrect');
      setFeedback(candidate.some(value => value === '') ? 'combineTwoFillBoth' : 'combineTwoTryAgain');
      answerTimerRef.current = setTimeout(() => {
        answerTimerRef.current = null;
        setAnswerState('idle');
      }, combineTwoAnswerFeedbackMs);
    }
  };

  const editAnswer = key => {
    if (locked || processingRef.current) return;
    const field = activeFieldRef.current;
    if (field === problemRef.current.fixedIndex) return;
    const next = [...valuesRef.current];
    next[field] = key === 'erase' ? next[field].slice(0, -1)
      : (next[field] + key).slice(0, String(level.maximum).length);
    valuesRef.current = next;
    setValues(next);
    setFeedback('');
    validate(next);
    inputRefs.current[activeFieldRef.current]?.focus({ preventScroll: true });
  };

  const handleKeyDown = event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (/^[0-9]$/.test(event.key) || event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      editAnswer(/^[0-9]$/.test(event.key) ? event.key : 'erase');
    } else if (event.key === 'Enter') {
      event.preventDefault();
      validate(valuesRef.current, true);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const field = event.key === 'ArrowLeft' ? 0 : 1;
      if (field !== problem.fixedIndex) inputRefs.current[field]?.focus();
    }
  };

  const status = phase === 'crest' ? 'combineTwoTop' : phase === 'descending' ? 'combineTwoDown' : feedback;

  return (
    <section className="combine-two-game" aria-labelledby="combine-two-title">
      <div className="buttons-position-absolute"><ButtonReturnComponent returnToScreen={returnToScreen} /></div>
      <div className="combine-two-game__panel">
        <header className="combine-two-game__header">
          <h2 id="combine-two-title">{t('combineTwo')}</h2>
          <span className="combine-two-game__level">{t(level.nameKey)}</span>
          {isTimed && ['playing', 'crest', 'descending'].includes(phase) && <span className="combine-two-game__timer" role="timer" aria-live="off">{t('additionTimeRemaining', { seconds: timeRemaining })}</span>}
        </header>
        <div className="combine-two-game__scene">
          <CoasterScene key={run} progress={correct} phase={phase} brokenSupports={brokenSupports} beams={level.beams} rail={level.rail} label={t(phase === 'collapsing' || phase === 'lost' ? 'combineTwoCollapsedScene' : brokenSupports ? 'combineTwoDamagedScene' : 'combineTwoScene', { count: brokenSupports })} onArrival={onArrival} />
          {phase === 'complete' && <span className="combine-two-game__confetti" aria-hidden="true"><FinishConfetti /></span>}
        </div>
        {phase === 'setup' ? (
          <div className="combine-two-game__setup">
            <p>{t('combineTwoMissingInstruction')}</p>
            <fieldset>
              <legend>{t('additionChooseTimeLimit')}</legend>
              <div className="combine-two-game__time-options">
                {additionAnswerTimeLimits.map(({ seconds, nameKey }) => <button key={seconds} type="button" aria-label={t(nameKey)} aria-pressed={answerTimeLimit === seconds} onClick={() => setAnswerTimeLimit(seconds)}>{seconds} s</button>)}
              </div>
            </fieldset>
            <button type="button" className="addition-setup__start" onClick={startRound}>{t('combineTwoStart')}</button>
          </div>
        ) : phase === 'complete' || phase === 'lost' ? (
          <div className="combine-two-game__complete" role="status">
            <h3>{t(phase === 'lost' ? 'combineTwoLost' : 'combineTwoComplete')}</h3>
            <button ref={replayRef} type="button" className="addition-setup__start" onClick={startRound}>{t('combineTwoPlayAgain')}</button>
          </div>
        ) : (
          <form className="combine-two-game__controls" onSubmit={event => { event.preventDefault(); validate(valuesRef.current, true); }}>
            <p id="combine-two-instruction" className="combine-two-game__instruction">{t(level.hasGivenNumber ? 'combineTwoMissingInstruction' : 'combineTwoInstruction')}</p>
            <div className="combine-two-game__equation" aria-describedby="combine-two-instruction">
              {values.map((value, index) => {
                const given = index === problem.fixedIndex;
                return <div className="combine-two-game__operand" key={index}>
                {index === 1 && <span className="combine-two-game__plus" aria-hidden="true">+</span>}
                <input ref={element => { inputRefs.current[index] = element; }} type="text" inputMode="none" readOnly value={value}
                  aria-label={t(given ? 'combineTwoGivenNumber' : index === 0 ? 'combineTwoFirstNumber' : 'combineTwoSecondNumber')}
                  aria-describedby="combine-two-instruction combine-two-feedback" onFocus={() => {
                    if (given) return;
                    cancelAnimationFrame(focusFrameRef.current);
                    activeFieldRef.current = index;
                    setActiveField(index);
                  }}
                  onKeyDown={handleKeyDown} disabled={locked || given} tabIndex={given ? -1 : undefined} aria-current={!given && activeField === index ? 'true' : undefined}
                  aria-invalid={!given && answerState === 'incorrect' ? 'true' : undefined}
                  className={`combine-two-game__input${given ? ' combine-two-game__input--given' : activeField === index ? ' combine-two-game__input--active' : ''}${!given && answerState !== 'idle' ? ` combine-two-game__input--${answerState}` : ''}`} />
              </div>; })}
              <span aria-hidden="true">=</span>
              <output className="combine-two-game__target" aria-label={t('combineTwoTarget')} aria-live="polite">{target}</output>
            </div>
            <p id="combine-two-feedback" className="combine-two-game__feedback" role="status">{status ? t(status) : t(level.hasGivenNumber ? 'combineTwoSelectMissing' : 'combineTwoSelectBox')}</p>
            <div className="addition-number-pad combine-two-game__keypad" role="group" aria-label={t('additionNumberPad')}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => <button key={number} type="button" disabled={locked} onClick={() => editAnswer(String(number))}>{number}</button>)}
              <button type="button" className="addition-number-pad__erase" aria-label={t('additionDeleteDigit')} disabled={locked || !values[activeField]} onClick={() => editAnswer('erase')}><span aria-hidden="true">⌫</span></button>
              <button type="button" className="addition-number-pad__zero" disabled={locked} onClick={() => editAnswer('0')}>0</button>
              <button type="submit" className="addition-number-pad__enter" aria-label={t('additionConfirmAnswer')} disabled={locked}><span aria-hidden="true">✓</span></button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

CombineTwoGameComponent.propTypes = { returnToScreen: PropTypes.func.isRequired, initialLevel: PropTypes.string };

export default CombineTwoGameComponent;
