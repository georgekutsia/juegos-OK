/* eslint-disable react/prop-types */
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ButtonReturnComponent } from '../../../components';
import {
  additionAnswerTimeLimits,
  additionMaximumOptions,
  additionOpponentSpeeds,
  additionPlayerMoveDurationMs,
  createSubtractionProblem,
  subtractionBalloonCount,
  subtractionCrowCount,
  subtractionCrowLandingMs,
  subtractionRopeFallMs,
  mathDifficultyLevels,
  mathGameModes,
  mathRaceSteps,
  mathVehicles,
} from '../../../data/addSubtractGameData';
import { Context } from '../../../shared/context';
import './addSubtractGame.css';
import SubtractionCraneScene from './SubtractionCraneScene';
import FinishConfetti from './FinishConfetti';

const createAdditionProblem = (maximum) => {
  const firstNumber = Math.floor(Math.random() * (maximum - 1)) + 1;
  const secondNumber = Math.floor(Math.random() * (maximum - firstNumber)) + 1;

  return {
    firstNumber,
    secondNumber,
    answer: firstNumber + secondNumber,
  };
};

function MathCar({ vehicle, className = '', style, isMoving = false, isEngineRunning = false, showConfetti = false }) {
  return (
    <span
      className={`math-car ${className} ${isMoving ? 'math-car--moving' : ''} ${isEngineRunning ? 'math-car--engine-running' : ''}`.trim()}
      style={style}
      aria-hidden="true"
    >
      <img src={mathVehicles[vehicle].image} alt="" />
      {showConfetti && (
        <span className="math-car__confetti" aria-hidden="true">
          <FinishConfetti />
        </span>
      )}
      <span className="math-car__wheel math-car__wheel--rear"><i /></span>
      <span className="math-car__wheel math-car__wheel--front"><i /></span>
    </span>
  );
}

function AddSubtractGameComponent({ returnToScreen }) {
  const { t } = useContext(Context);
  const answerInputRef = useRef(null);
  const feedbackTimerRef = useRef(null);
  const movementTimerRef = useRef(null);
  const ropeTimerRef = useRef(null);
  const crowEndingRef = useRef(false);
  const playerCompletedRef = useRef(false);
  const isAnswerProcessingRef = useRef(false);
  const raceEndsAtRef = useRef(null);
  const raceOutcomeRef = useRef(null);
  const opponentProgressRef = useRef(0);
  const orangePenaltyRef = useRef(0);
  const lilacPenaltyRef = useRef(0);
  const [view, setView] = useState('menu');
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [maximum, setMaximum] = useState(20);
  const [opponentSpeed, setOpponentSpeed] = useState('fast');
  const [answerTimeLimit, setAnswerTimeLimit] = useState('7');
  const [orangeProgress, setOrangeProgress] = useState(0);
  const [lilacProgress, setLilacProgress] = useState(0);
  const [orangePenaltyProgress, setOrangePenaltyProgress] = useState(0);
  const [lilacPenaltyProgress, setLilacPenaltyProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [problem, setProblem] = useState(() => createAdditionProblem(20));
  const [answer, setAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [feedback, setFeedback] = useState('idle');
  const [isPlayerMoving, setIsPlayerMoving] = useState(false);
  const [poppedBalloons, setPoppedBalloons] = useState(0);
  const [craneRun, setCraneRun] = useState(0);
  const [ropeBroken, setRopeBroken] = useState(false);
  const [isCrowEnding, setIsCrowEnding] = useState(false);
  const isSubtraction = selectedMode === 'subtraction';
  const hasNumberPad = selectedMode === 'addition' && selectedLevel === 'easy';
  const isAnswerDisabled = feedback !== 'idle' || correctAnswers === mathRaceSteps || isCrowEnding;
  const generateProblem = useCallback((limit, solved = 0, popped = 0) => isSubtraction
    ? createSubtractionProblem(limit, subtractionBalloonCount - popped, solved)
    : createAdditionProblem(limit), [isSubtraction]);

  const selectedDifficulty = mathDifficultyLevels.find(({ id }) => id === selectedLevel);
  const isMediumRace = selectedLevel === 'medium';
  const isHardRace = selectedLevel === 'hard';
  const isCompetitiveRace = isMediumRace || isHardRace;
  const isCrowChallenge = isSubtraction && isMediumRace;
  const opponentSpeedConfig = additionOpponentSpeeds.find(({ id }) => id === opponentSpeed);
  const answerTimeLimitConfig = additionAnswerTimeLimits.find(({ id }) => id === answerTimeLimit);
  const opponentDuration = opponentSpeedConfig.durationMs;

  useEffect(() => () => {
    clearTimeout(feedbackTimerRef.current);
    clearTimeout(movementTimerRef.current);
    clearTimeout(ropeTimerRef.current);
  }, []);

  useEffect(() => {
    if (view === 'additionRace' && feedback === 'idle') {
      isAnswerProcessingRef.current = false;
      answerInputRef.current?.focus();
      answerInputRef.current?.select();
    }
  }, [feedback, problem, view]);

  const clearFeedbackTimer = () => clearTimeout(feedbackTimerRef.current);

  const finishRace = useCallback((outcome) => {
    if (raceOutcomeRef.current) return;

    raceOutcomeRef.current = outcome;
    clearTimeout(feedbackTimerRef.current);
    clearTimeout(movementTimerRef.current);
    clearTimeout(ropeTimerRef.current);
    isAnswerProcessingRef.current = true;
    setFeedback('idle');
    setTimeRemaining(null);
    setIsPlayerMoving(false);
    setView(outcome === 'won' ? 'additionComplete' : 'additionLost');
  }, []);

  const applyHardPenalty = useCallback(() => {
    if (isAnswerProcessingRef.current || feedback !== 'idle') return;

    isAnswerProcessingRef.current = true;
    const progressStep = 100 / mathRaceSteps;
    const orangeMoves = isSubtraction || Math.random() < 0.5;
    let reachesGoal = false;

    if (orangeMoves) {
      const nextPenalty = Math.min(orangePenaltyRef.current + progressStep, 100);
      orangePenaltyRef.current = nextPenalty;
      setOrangePenaltyProgress(nextPenalty);
      reachesGoal = opponentProgressRef.current + nextPenalty >= 100;
    } else {
      const nextPenalty = Math.min(lilacPenaltyRef.current + progressStep, 100);
      lilacPenaltyRef.current = nextPenalty;
      setLilacPenaltyProgress(nextPenalty);
      reachesGoal = opponentProgressRef.current + nextPenalty >= 100;
    }

    setAnswer('');
    setFeedback('incorrect');
    clearFeedbackTimer();
    feedbackTimerRef.current = setTimeout(() => {
      if (reachesGoal) {
        finishRace('lost');
      } else {
        setProblem(generateProblem(maximum, correctAnswers, poppedBalloons));
        setFeedback('idle');
        isAnswerProcessingRef.current = false;
      }
    }, 1000);
  }, [correctAnswers, feedback, finishRace, generateProblem, isSubtraction, maximum, poppedBalloons]);

  useEffect(() => {
    if (view !== 'additionRace' || !isCompetitiveRace) return undefined;

    const updateOpponentProgress = () => {
      if (isCrowChallenge && playerCompletedRef.current) return;
      const elapsed = Date.now() - (raceEndsAtRef.current - opponentDuration);
      const nextProgress = Math.min((elapsed / opponentDuration) * 100, 100);
      opponentProgressRef.current = nextProgress;
      setOrangeProgress(nextProgress);
      if (isHardRace) setLilacProgress(nextProgress);

      const orangeRaceProgress = nextProgress + orangePenaltyRef.current;
      const lilacRaceProgress = nextProgress + lilacPenaltyRef.current;
      if (isCrowChallenge && nextProgress >= 100) {
        if (!crowEndingRef.current) {
          crowEndingRef.current = true;
          isAnswerProcessingRef.current = true;
          setIsCrowEnding(true);
          clearTimeout(feedbackTimerRef.current);
          ropeTimerRef.current = setTimeout(() => {
            setRopeBroken(true);
            feedbackTimerRef.current = setTimeout(() => finishRace('lost'), subtractionRopeFallMs);
          }, subtractionCrowLandingMs);
        }
        return;
      }
      if (orangeRaceProgress >= 100 || (isHardRace && lilacRaceProgress >= 100)) finishRace('lost');
    };

    updateOpponentProgress();
    const intervalId = window.setInterval(updateOpponentProgress, 100);
    return () => window.clearInterval(intervalId);
  }, [finishRace, isCompetitiveRace, isCrowChallenge, isHardRace, opponentDuration, view]);

  useEffect(() => {
    if (view !== 'additionRace' || !isHardRace) {
      setTimeRemaining(null);
      return undefined;
    }

    if (feedback !== 'idle') return undefined;

    const updateRemainingTime = () => {
      const elapsed = Date.now() - questionStartedAt;
      setTimeRemaining(Math.max(0, Math.ceil((answerTimeLimitConfig.durationMs - elapsed) / 1000)));
    };
    const questionStartedAt = Date.now();
    setTimeRemaining(answerTimeLimitConfig.seconds);
    const intervalId = window.setInterval(updateRemainingTime, 100);
    const timeoutId = window.setTimeout(applyHardPenalty, answerTimeLimitConfig.durationMs);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [answerTimeLimitConfig, applyHardPenalty, feedback, isHardRace, problem, view]);

  const returnToMenu = () => {
    clearFeedbackTimer();
    clearTimeout(movementTimerRef.current);
    clearTimeout(ropeTimerRef.current);
    crowEndingRef.current = false;
    playerCompletedRef.current = false;
    setIsCrowEnding(false);
    setRopeBroken(false);
    setIsPlayerMoving(false);
    isAnswerProcessingRef.current = false;
    raceEndsAtRef.current = null;
    raceOutcomeRef.current = null;
    opponentProgressRef.current = 0;
    orangePenaltyRef.current = 0;
    lilacPenaltyRef.current = 0;
    setFeedback('idle');
    setAnswer('');
    setTimeRemaining(null);
    setView('menu');
  };

  const selectLevel = (mode, level) => {
    setSelectedMode(mode);
    setSelectedLevel(level);
    if (mode === 'addition' || mode === 'subtraction') setView('additionSetup');
  };

  const startAdditionRace = () => {
    clearFeedbackTimer();
    clearTimeout(movementTimerRef.current);
    clearTimeout(ropeTimerRef.current);
    crowEndingRef.current = false;
    playerCompletedRef.current = false;
    setIsCrowEnding(false);
    setRopeBroken(false);
    setIsPlayerMoving(false);
    isAnswerProcessingRef.current = false;
    raceOutcomeRef.current = null;
    raceEndsAtRef.current = isCompetitiveRace ? Date.now() + opponentDuration : null;
    opponentProgressRef.current = 0;
    orangePenaltyRef.current = 0;
    lilacPenaltyRef.current = 0;
    setProblem(generateProblem(maximum));
    setPoppedBalloons(0);
    setCraneRun((previous) => previous + 1);
    setAnswer('');
    setCorrectAnswers(0);
    setOrangeProgress(0);
    setLilacProgress(0);
    setOrangePenaltyProgress(0);
    setLilacPenaltyProgress(0);
    setTimeRemaining(isHardRace ? answerTimeLimitConfig.seconds : null);
    setFeedback('idle');
    setView('additionRace');
  };

  const checkAnswer = (candidateAnswer) => {
    if (!candidateAnswer || feedback !== 'idle' || isAnswerProcessingRef.current || crowEndingRef.current) return;
    if (isCrowChallenge && Date.now() >= raceEndsAtRef.current) return;

    if (isHardRace && Number(candidateAnswer) !== problem.answer) {
      applyHardPenalty();
      return;
    }

    isAnswerProcessingRef.current = true;
    if (Number(candidateAnswer) === problem.answer) {
      const nextCorrectAnswers = correctAnswers + 1;
      const nextPoppedBalloons = isSubtraction ? poppedBalloons + problem.answer : 0;
      setPoppedBalloons(nextPoppedBalloons);
      setAnswer('');
      setCorrectAnswers(nextCorrectAnswers);
      setIsPlayerMoving(true);
      clearTimeout(movementTimerRef.current);
      movementTimerRef.current = setTimeout(() => setIsPlayerMoving(false), additionPlayerMoveDurationMs);
      clearFeedbackTimer();
      if (nextCorrectAnswers === mathRaceSteps) {
        playerCompletedRef.current = true;
        feedbackTimerRef.current = setTimeout(() => {
          if (isCompetitiveRace && !isCrowChallenge && Date.now() >= raceEndsAtRef.current) {
            finishRace('lost');
          } else {
            finishRace('won');
          }
        }, additionPlayerMoveDurationMs + 80);
      } else {
        setProblem(generateProblem(maximum, nextCorrectAnswers, nextPoppedBalloons));
      }
      return;
    }

    setAnswer('');
    setFeedback('incorrect');
    clearFeedbackTimer();
    feedbackTimerRef.current = setTimeout(() => {
      setFeedback('idle');
      isAnswerProcessingRef.current = false;
      answerInputRef.current?.focus();
    }, 1000);
  };

  const submitAnswer = (event) => {
    event.preventDefault();
    checkAnswer(answer);
  };

  const updateAnswer = (value) => {
    const nextAnswer = value.replace(/[^0-9]/g, '');
    setAnswer(nextAnswer);
    if (nextAnswer && Number(nextAnswer) === problem.answer) checkAnswer(nextAnswer);
  };

  const editNumberPadAnswer = (key) => {
    if (isAnswerDisabled || isAnswerProcessingRef.current) return;
    updateAnswer(key === 'erase'
      ? answer.slice(0, -1)
      : (answer + key).slice(0, String(maximum).length));
    answerInputRef.current?.focus({ preventScroll: true });
  };

  const handleNumberPadKeyDown = (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!isAnswerDisabled) checkAnswer(answer);
      return;
    }
    if (/^[0-9]$/.test(event.key) || event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      editNumberPadAnswer(/^[0-9]$/.test(event.key) ? event.key : 'erase');
    }
  };

  const renderRaceTrack = ({ vehicle, progress, isMoving, isEngineRunning, label, modifier = '', showConfetti = false }) => (
    <div className={`addition-race__track ${modifier}`.trim()} aria-label={label}>
      <MathCar
        vehicle={vehicle}
        className="addition-race__car"
        style={{ '--addition-race-progress': `${progress}%` }}
        isMoving={isMoving}
        isEngineRunning={isEngineRunning}
        showConfetti={showConfetti}
      />
      <span className="addition-race__goal" aria-label={t('additionRaceGoal')}>
        <span className="addition-race__flag" aria-hidden="true" />
      </span>
    </div>
  );

  const renderHardRaceTrack = () => {
    const orangeRaceProgress = Math.min(orangeProgress + orangePenaltyProgress, 100) * 0.835;
    const lilacRaceProgress = Math.min(lilacProgress + lilacPenaltyProgress, 100) * 0.835;

    return (
      <div className="addition-race__track addition-race__track--hard" aria-label={t('additionHardRaceTrack')}>
        <MathCar
          vehicle="lilacStandard"
          className="addition-race__car addition-race__car--lilac"
          style={{ '--addition-race-progress': `${lilacRaceProgress}%` }}
          isMoving={view === 'additionRace'}
        />
        <MathCar
          vehicle="orangeStandard"
          className="addition-race__car addition-race__car--orange"
          style={{ '--addition-race-progress': `${orangeRaceProgress}%` }}
          isMoving={view === 'additionRace'}
        />
        <MathCar
          vehicle="blueStandard"
          className="addition-race__car addition-race__car--blue"
          style={{ '--addition-race-progress': `${correctAnswers * 16.7}%` }}
          isMoving={isPlayerMoving}
          isEngineRunning={view === 'additionRace' && !isPlayerMoving}
          showConfetti={view === 'additionComplete'}
        />
        <span className="addition-race__goal" aria-label={t('additionRaceGoal')}>
          <span className="addition-race__flag" aria-hidden="true" />
        </span>
      </div>
    );
  };

  const renderRaceTracks = () => isSubtraction ? (
    <div className="subtraction-stage">
      <SubtractionCraneScene key={craneRun} completed={correctAnswers} popped={poppedBalloons} animatePops={view === 'additionRace'} showCrows={isCrowChallenge} celebrate={view === 'additionComplete'} crowElapsedMs={orangeProgress * opponentDuration / 100} crowDurationMs={opponentDuration} ropeBroken={ropeBroken} label={t('subtractionCraneProgress', { remaining: subtractionBalloonCount - poppedBalloons })} />
      {isCrowChallenge && <p className="addition-race__screen-reader-title" role="status">{ropeBroken ? t('subtractionRopeBroken') : t('subtractionCrowsStatus', { count: Math.min(subtractionCrowCount, Math.floor(orangeProgress / 10)), total: subtractionCrowCount })}</p>}
      {isHardRace && view === 'additionRace' && <div className="subtraction-deadline" role="timer" aria-live="off">
        <span>{t('subtractionChallengeTime', { seconds: Math.max(0, Math.ceil((100 - Math.min(100, orangeProgress + orangePenaltyProgress)) * opponentDuration / 100000)) })}</span>
        <div className="subtraction-deadline__bar" aria-hidden="true"><span style={{ width: `${Math.max(0, 100 - orangeProgress - orangePenaltyProgress)}%` }} /></div>
      </div>}
    </div>
  ) : (
    <div className="addition-race__tracks">
      {isHardRace && renderHardRaceTrack()}
      {isMediumRace && renderRaceTrack({
        vehicle: 'orangeStandard',
        progress: orangeProgress * 0.835,
        isMoving: view === 'additionRace',
        isEngineRunning: false,
        label: t('additionOpponentTrack'),
        modifier: 'addition-race__track--opponent',
      })}
      {!isHardRace && renderRaceTrack({
        vehicle: 'blueStandard',
        progress: correctAnswers * 16.7,
        isMoving: isPlayerMoving,
        isEngineRunning: view === 'additionRace' && !isPlayerMoving,
        label: t('additionRaceTrack'),
        modifier: 'addition-race__track--player',
        showConfetti: view === 'additionComplete',
      })}
    </div>
  );

  if (view === 'additionSetup') {
    return (
      <section className="add-subtract-game" aria-labelledby="addition-setup-title">
        <div className="buttons-position-absolute">
          <ButtonReturnComponent returnToScreen={returnToScreen} />
        </div>
        <div className="addition-setup">
          <button className="add-subtract-game__back" type="button" onClick={returnToMenu}>
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            {t('addSubtractBackToChoices')}
          </button>
          {isSubtraction ? <span className="math-car addition-setup__car"><SubtractionCraneScene preview label={t('subtractionCraneDescription')} /></span> : <MathCar vehicle="blueStandard" className="addition-setup__car" />}
          <h2 id="addition-setup-title">{t(isSubtraction ? 'addSubtractSubtraction' : 'addSubtractAddition')} — {t(selectedDifficulty?.nameKey)}</h2>
          <div className="addition-setup__field">
            <p>{t(isSubtraction ? 'subtractionChooseMaximum' : 'additionChooseMaximum')}</p>
            <select className="addition-setup__compact-select addition-setup__maximum-select" aria-label={t(isSubtraction ? 'subtractionChooseMaximum' : 'additionChooseMaximum')} value={maximum} onChange={(event) => setMaximum(Number(event.target.value))}>
              {additionMaximumOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            <div className="addition-setup__maximums" aria-label={t(isSubtraction ? 'subtractionChooseMaximum' : 'additionChooseMaximum')}>
              {additionMaximumOptions.map((option) => (
                <button
                  key={option}
                  className={maximum === option ? 'addition-setup__maximum addition-setup__maximum--selected' : 'addition-setup__maximum'}
                  type="button"
                  onClick={() => setMaximum(option)}
                  aria-pressed={maximum === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          {isCompetitiveRace && (
            <div className="addition-setup__field">
              <h3 className="addition-setup__opponent-title">{t(isCrowChallenge ? 'subtractionChooseCrowSpeed' : isSubtraction ? 'subtractionChoosePace' : isHardRace ? 'additionChooseCarsSpeed' : 'additionChooseOpponentSpeed')}</h3>
              <select className="addition-setup__compact-select" aria-label={t(isCrowChallenge ? 'subtractionChooseCrowSpeed' : isSubtraction ? 'subtractionChoosePace' : isHardRace ? 'additionChooseCarsSpeed' : 'additionChooseOpponentSpeed')} value={opponentSpeed} onChange={(event) => setOpponentSpeed(event.target.value)}>
                {additionOpponentSpeeds.map(({ id, nameKey }) => <option key={id} value={id}>{t(nameKey)}</option>)}
              </select>
              <div className="addition-setup__opponent-speeds" aria-label={t(isCrowChallenge ? 'subtractionChooseCrowSpeed' : isSubtraction ? 'subtractionChoosePace' : isHardRace ? 'additionChooseCarsSpeed' : 'additionChooseOpponentSpeed')}>
                {additionOpponentSpeeds.map(({ id, nameKey }) => (
                  <button
                    key={id}
                    className={opponentSpeed === id ? 'addition-setup__opponent-speed addition-setup__opponent-speed--selected' : 'addition-setup__opponent-speed'}
                    type="button"
                    onClick={() => setOpponentSpeed(id)}
                    aria-pressed={opponentSpeed === id}
                  >
                    {t(nameKey)}
                  </button>
                ))}
              </div>
            </div>
          )}
          {isHardRace && (
            <>
              <div className="addition-setup__field">
                <h3 className="addition-setup__opponent-title">{t('additionChooseTimeLimit')}</h3>
                <select className="addition-setup__compact-select" aria-label={t('additionChooseTimeLimit')} value={answerTimeLimit} onChange={(event) => setAnswerTimeLimit(event.target.value)}>
                  {additionAnswerTimeLimits.map(({ id, nameKey }) => <option key={id} value={id}>{t(nameKey)}</option>)}
                </select>
                <div className="addition-setup__opponent-speeds" aria-label={t('additionChooseTimeLimit')}>
                  {additionAnswerTimeLimits.map(({ id, nameKey }) => (
                    <button
                      key={id}
                      className={answerTimeLimit === id ? 'addition-setup__opponent-speed addition-setup__opponent-speed--selected' : 'addition-setup__opponent-speed'}
                      type="button"
                      onClick={() => setAnswerTimeLimit(id)}
                      aria-pressed={answerTimeLimit === id}
                    >
                      {t(nameKey)}
                    </button>
                  ))}
                </div>
              </div>
              <p className="addition-setup__hard-rule">{t(isSubtraction ? 'subtractionHardRule' : 'additionHardRule')}</p>
            </>
          )}
          {isSubtraction && !isHardRace && <p className="subtraction-setup__rule">{t(isCrowChallenge ? 'subtractionCrowRule' : 'subtractionRule')}</p>}
          <button className="addition-setup__start" type="button" onClick={startAdditionRace}>
            {t(isSubtraction ? 'subtractionStart' : 'additionStartRace')}
          </button>
        </div>
      </section>
    );
  }

  if (view === 'additionRace') {
    return (
      <section className={`add-subtract-game add-subtract-game--race ${isSubtraction ? 'add-subtract-game--subtraction' : ''}`} style={{ '--addition-player-move-duration': `${additionPlayerMoveDurationMs}ms` }} aria-labelledby="addition-race-title">
        <div className="buttons-position-absolute">
          <ButtonReturnComponent returnToScreen={returnToMenu} />
        </div>
        <div className={`addition-race${hasNumberPad ? ' addition-race--number-pad' : ''}`}>
          <h2 id="addition-race-title" className="addition-race__screen-reader-title">{t(isSubtraction ? 'addSubtractSubtraction' : 'addSubtractAddition')}</h2>
          {renderRaceTracks()}
          <form className="addition-race__question" onSubmit={submitAnswer}>
            {isHardRace && (
              <p className="addition-race__timer" role="timer" aria-live="off">
                {t('additionTimeRemaining', { seconds: timeRemaining ?? answerTimeLimitConfig.seconds })}
              </p>
            )}
            <p className="addition-race__operation" aria-live="polite">{problem.firstNumber} <span aria-hidden="true">{isSubtraction ? '−' : '+'}</span> {problem.secondNumber} <span aria-hidden="true">=</span></p>
            <label htmlFor="addition-answer">{t('additionAnswerLabel')}</label>
            <div className="addition-race__answer-row">
              <input
                ref={answerInputRef}
                id="addition-answer"
                className={feedback === 'incorrect' ? 'addition-race__answer addition-race__answer--incorrect' : isPlayerMoving ? 'addition-race__answer addition-race__answer--correct' : 'addition-race__answer'}
                type="text"
                inputMode={hasNumberPad ? 'none' : 'numeric'}
                readOnly={hasNumberPad}
                onKeyDown={hasNumberPad ? handleNumberPadKeyDown : undefined}
                pattern="[0-9]*"
                value={answer}
                onChange={(event) => updateAnswer(event.target.value)}
                disabled={isAnswerDisabled}
                aria-describedby="addition-answer-feedback"
              />
              {isPlayerMoving && feedback === 'idle' && (
                <span className="addition-race__check" role="img" aria-label={t('additionCorrectAnswer')}>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                </span>
              )}
            </div>
            <p id="addition-answer-feedback" className="addition-race__feedback" role="status">
              {feedback === 'incorrect' ? t(isHardRace ? (isSubtraction ? 'subtractionHardPenalty' : 'additionHardPenalty') : 'additionIncorrectAnswer') : isPlayerMoving ? t('additionCorrectAnswer') : ''}
            </p>
            {hasNumberPad && <div className="addition-number-pad" role="group" aria-label={t('additionNumberPad')}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => <button key={number} type="button" disabled={isAnswerDisabled} onClick={() => editNumberPadAnswer(String(number))}>{number}</button>)}
              <button className="addition-number-pad__erase" type="button" aria-label={t('additionDeleteDigit')} disabled={isAnswerDisabled || !answer} onClick={() => editNumberPadAnswer('erase')}><span aria-hidden="true">⌫</span></button>
              <button className="addition-number-pad__zero" type="button" disabled={isAnswerDisabled} onClick={() => editNumberPadAnswer('0')}>0</button>
              <button className="addition-number-pad__enter" type="submit" aria-label={`${t('additionEnterKey')}: ${t('additionConfirmAnswer')}`} disabled={isAnswerDisabled || !answer}>{t('additionEnterKey')}</button>
            </div>}
          </form>
        </div>
      </section>
    );
  }

  if (view === 'additionComplete') {
    return (
      <section className={`add-subtract-game add-subtract-game--race ${isSubtraction ? 'add-subtract-game--subtraction' : ''}`} style={{ '--addition-player-move-duration': `${additionPlayerMoveDurationMs}ms` }} aria-labelledby="addition-complete-title">
        <div className="buttons-position-absolute">
          <ButtonReturnComponent returnToScreen={returnToMenu} />
        </div>
        <div className="addition-race addition-race--complete">
          {renderRaceTracks()}
          <h2 id="addition-complete-title">{t(isSubtraction ? 'subtractionComplete' : 'additionRaceComplete')}</h2>
          <button className="addition-setup__start" type="button" onClick={startAdditionRace}>{t(isSubtraction ? 'subtractionPlayAgain' : 'additionPlayAgain')}</button>
        </div>
      </section>
    );
  }

  if (view === 'additionLost') {
    return (
      <section className={`add-subtract-game add-subtract-game--race ${isSubtraction ? 'add-subtract-game--subtraction' : ''}`} style={{ '--addition-player-move-duration': `${additionPlayerMoveDurationMs}ms` }} aria-labelledby="addition-lost-title">
        <div className="buttons-position-absolute">
          <ButtonReturnComponent returnToScreen={returnToMenu} />
        </div>
        <div className="addition-race addition-race--lost">
          {renderRaceTracks()}
          <h2 id="addition-lost-title">{t(ropeBroken ? 'subtractionRopeBroken' : isSubtraction ? 'subtractionLost' : isHardRace ? 'additionRaceLostHard' : 'additionRaceLost')}</h2>
          <button className="addition-setup__start" type="button" onClick={startAdditionRace}>{t('additionTryAgain')}</button>
        </div>
      </section>
    );
  }

  return (
    <section className="add-subtract-game" aria-labelledby="add-subtract-game-title">
      <div className="buttons-position-absolute">
        <ButtonReturnComponent returnToScreen={returnToScreen} />
      </div>
      <div className="add-subtract-game__mode-picker">
        <header>
          <h2 id="add-subtract-game-title">{t('interactiveAddSubtract')}</h2>
          <p>{t('addSubtractChooseMode')}</p>
        </header>
        <div className="add-subtract-game__modes">
          {mathGameModes.map(({ id, nameKey, vehicle, illustration }) => (
            <article key={id} className="add-subtract-game__mode">
              <h3>{t(nameKey)}</h3>
              {illustration === 'crane' ? <span className="math-car math-crane-preview"><SubtractionCraneScene preview label={t('subtractionCraneDescription')} /></span> : <MathCar vehicle={vehicle} />}
              <div className="add-subtract-game__levels" aria-label={`${t(nameKey)}: ${t('addSubtractChooseLevel')}`}>
                {mathDifficultyLevels.map(({ id: levelId, nameKey: levelNameKey }) => (
                  <button
                    key={levelId}
                    className={selectedMode === id && selectedLevel === levelId ? 'add-subtract-game__level add-subtract-game__level--selected' : 'add-subtract-game__level'}
                    type="button"
                    onClick={() => selectLevel(id, levelId)}
                    aria-pressed={selectedMode === id && selectedLevel === levelId}
                  >
                    {t(levelNameKey)}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddSubtractGameComponent;
