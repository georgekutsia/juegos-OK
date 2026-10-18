/* eslint-disable react/prop-types */
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ButtonReturnComponent } from '../../../components';
import {
  additionAnswerTimeLimits,
  additionMaximumOptions,
  additionOpponentSpeeds,
  mathDifficultyLevels,
  mathGameModes,
  mathRaceSteps,
  mathVehicles,
} from '../../../data/addSubtractGameData';
import { Context } from '../../../shared/context';
import './addSubtractGame.css';

const createAdditionProblem = (maximum) => {
  const firstNumber = Math.floor(Math.random() * (maximum - 1)) + 1;
  const secondNumber = Math.floor(Math.random() * (maximum - firstNumber)) + 1;

  return {
    firstNumber,
    secondNumber,
    answer: firstNumber + secondNumber,
  };
};

const finishConfetti = [
  { color: '#ff5c87', x: '-46px', y: '-34px', rotation: '210deg', delay: '0ms' },
  { color: '#ffd44d', x: '-22px', y: '-48px', rotation: '160deg', delay: '35ms' },
  { color: '#46cfa0', x: '4px', y: '-40px', rotation: '290deg', delay: '70ms' },
  { color: '#6e7cf7', x: '30px', y: '-46px', rotation: '195deg', delay: '15ms' },
  { color: '#ff9457', x: '54px', y: '-26px', rotation: '350deg', delay: '85ms' },
  { color: '#e36bea', x: '-62px', y: '-10px', rotation: '240deg', delay: '50ms' },
  { color: '#63c8f3', x: '-30px', y: '19px', rotation: '165deg', delay: '95ms' },
  { color: '#ffdc5c', x: '-4px', y: '28px', rotation: '320deg', delay: '25ms' },
  { color: '#8bd450', x: '24px', y: '19px', rotation: '230deg', delay: '115ms' },
  { color: '#ff6e69', x: '48px', y: '12px', rotation: '175deg', delay: '60ms' },
];

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
          {finishConfetti.map(({ color, x, y, rotation, delay }) => (
            <span
              key={`${color}-${x}`}
              className="math-car__confetti-piece"
              style={{
                '--confetti-color': color,
                '--confetti-x': x,
                '--confetti-y': y,
                '--confetti-rotation': rotation,
                '--confetti-delay': delay,
              }}
            />
          ))}
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

  const selectedDifficulty = mathDifficultyLevels.find(({ id }) => id === selectedLevel);
  const isMediumRace = selectedLevel === 'medium';
  const isHardRace = selectedLevel === 'hard';
  const isCompetitiveRace = isMediumRace || isHardRace;
  const opponentSpeedConfig = additionOpponentSpeeds.find(({ id }) => id === opponentSpeed);
  const answerTimeLimitConfig = additionAnswerTimeLimits.find(({ id }) => id === answerTimeLimit);
  const opponentDuration = opponentSpeedConfig.durationMs;

  useEffect(() => () => clearTimeout(feedbackTimerRef.current), []);

  useEffect(() => {
    if (view === 'additionRace' && feedback === 'idle') {
      answerInputRef.current?.focus();
      answerInputRef.current?.select();
    }
  }, [feedback, problem, view]);

  const clearFeedbackTimer = () => clearTimeout(feedbackTimerRef.current);

  const finishRace = useCallback((outcome) => {
    if (raceOutcomeRef.current) return;

    raceOutcomeRef.current = outcome;
    clearTimeout(feedbackTimerRef.current);
    isAnswerProcessingRef.current = true;
    setFeedback('idle');
    setTimeRemaining(null);
    setView(outcome === 'won' ? 'additionComplete' : 'additionLost');
  }, []);

  const applyHardPenalty = useCallback(() => {
    if (isAnswerProcessingRef.current || feedback !== 'idle') return;

    isAnswerProcessingRef.current = true;
    const progressStep = 100 / mathRaceSteps;
    const orangeMoves = Math.random() < 0.5;
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
        setProblem(createAdditionProblem(maximum));
        setFeedback('idle');
        isAnswerProcessingRef.current = false;
      }
    }, 1000);
  }, [feedback, finishRace, maximum]);

  useEffect(() => {
    if (view !== 'additionRace' || !isCompetitiveRace) return undefined;

    const updateOpponentProgress = () => {
      const elapsed = Date.now() - (raceEndsAtRef.current - opponentDuration);
      const nextProgress = Math.min((elapsed / opponentDuration) * 100, 100);
      opponentProgressRef.current = nextProgress;
      setOrangeProgress(nextProgress);
      if (isHardRace) setLilacProgress(nextProgress);

      const orangeRaceProgress = nextProgress + orangePenaltyRef.current;
      const lilacRaceProgress = nextProgress + lilacPenaltyRef.current;
      if (orangeRaceProgress >= 100 || (isHardRace && lilacRaceProgress >= 100)) finishRace('lost');
    };

    updateOpponentProgress();
    const intervalId = window.setInterval(updateOpponentProgress, 100);
    return () => window.clearInterval(intervalId);
  }, [finishRace, isCompetitiveRace, isHardRace, opponentDuration, view]);

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
    if (mode === 'addition') setView('additionSetup');
  };

  const startAdditionRace = () => {
    clearFeedbackTimer();
    isAnswerProcessingRef.current = false;
    raceOutcomeRef.current = null;
    raceEndsAtRef.current = isCompetitiveRace ? Date.now() + opponentDuration : null;
    opponentProgressRef.current = 0;
    orangePenaltyRef.current = 0;
    lilacPenaltyRef.current = 0;
    setProblem(createAdditionProblem(maximum));
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
    if (!candidateAnswer || feedback !== 'idle' || isAnswerProcessingRef.current) return;

    if (isHardRace && Number(candidateAnswer) !== problem.answer) {
      applyHardPenalty();
      return;
    }

    isAnswerProcessingRef.current = true;
    if (Number(candidateAnswer) === problem.answer) {
      const nextCorrectAnswers = correctAnswers + 1;
      setAnswer('');
      setFeedback('correct');
      setCorrectAnswers(nextCorrectAnswers);
      clearFeedbackTimer();
      feedbackTimerRef.current = setTimeout(() => {
        if (nextCorrectAnswers === mathRaceSteps) {
          if (isCompetitiveRace && Date.now() >= raceEndsAtRef.current) {
            finishRace('lost');
          } else {
            finishRace('won');
          }
        } else {
          setProblem(createAdditionProblem(maximum));
          setFeedback('idle');
          isAnswerProcessingRef.current = false;
        }
      }, 1000);
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

  const handleAnswerChange = ({ target }) => {
    const nextAnswer = target.value.replace(/[^0-9]/g, '');
    setAnswer(nextAnswer);
    if (nextAnswer && Number(nextAnswer) === problem.answer) checkAnswer(nextAnswer);
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
          isMoving={feedback === 'correct'}
          isEngineRunning={view === 'additionRace' && feedback === 'idle'}
          showConfetti={view === 'additionComplete'}
        />
        <span className="addition-race__goal" aria-label={t('additionRaceGoal')}>
          <span className="addition-race__flag" aria-hidden="true" />
        </span>
      </div>
    );
  };

  const renderRaceTracks = () => (
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
        isMoving: feedback === 'correct',
        isEngineRunning: view === 'additionRace' && feedback === 'idle',
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
          <MathCar vehicle="blueStandard" className="addition-setup__car" />
          <h2 id="addition-setup-title">{t('addSubtractAddition')} — {t(selectedDifficulty?.nameKey)}</h2>
          <p>{t('additionChooseMaximum')}</p>
          <div className="addition-setup__maximums" aria-label={t('additionChooseMaximum')}>
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
          {isCompetitiveRace && (
            <>
              <h3 className="addition-setup__opponent-title">{t(isHardRace ? 'additionChooseCarsSpeed' : 'additionChooseOpponentSpeed')}</h3>
              <div className="addition-setup__opponent-speeds" aria-label={t(isHardRace ? 'additionChooseCarsSpeed' : 'additionChooseOpponentSpeed')}>
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
            </>
          )}
          {isHardRace && (
            <>
              <h3 className="addition-setup__opponent-title">{t('additionChooseTimeLimit')}</h3>
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
              <p className="addition-setup__hard-rule">{t('additionHardRule')}</p>
            </>
          )}
          <button className="addition-setup__start" type="button" onClick={startAdditionRace}>
            {t('additionStartRace')}
          </button>
        </div>
      </section>
    );
  }

  if (view === 'additionRace') {
    return (
      <section className="add-subtract-game" aria-labelledby="addition-race-title">
        <div className="buttons-position-absolute">
          <ButtonReturnComponent returnToScreen={returnToMenu} />
        </div>
        <div className="addition-race">
          <h2 id="addition-race-title" className="addition-race__screen-reader-title">{t('addSubtractAddition')}</h2>
          {renderRaceTracks()}
          <form className="addition-race__question" onSubmit={submitAnswer}>
            {isHardRace && (
              <p className="addition-race__timer" role="timer" aria-live="off">
                {t('additionTimeRemaining', { seconds: timeRemaining ?? answerTimeLimitConfig.seconds })}
              </p>
            )}
            <p aria-live="polite">{problem.firstNumber} <span aria-hidden="true">+</span> {problem.secondNumber} <span aria-hidden="true">=</span></p>
            <label htmlFor="addition-answer">{t('additionAnswerLabel')}</label>
            <div className="addition-race__answer-row">
              <input
                ref={answerInputRef}
                id="addition-answer"
                className={feedback === 'incorrect' ? 'addition-race__answer addition-race__answer--incorrect' : feedback === 'correct' ? 'addition-race__answer addition-race__answer--correct' : 'addition-race__answer'}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={answer}
                onChange={handleAnswerChange}
                disabled={feedback !== 'idle'}
                aria-describedby="addition-answer-feedback"
              />
              {feedback === 'correct' && (
                <span className="addition-race__check" role="img" aria-label={t('additionCorrectAnswer')}>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                </span>
              )}
            </div>
            <p id="addition-answer-feedback" className="addition-race__feedback" role="status">
              {feedback === 'correct' ? t('additionCorrectAnswer') : feedback === 'incorrect' ? t(isHardRace ? 'additionHardPenalty' : 'additionIncorrectAnswer') : ''}
            </p>
          </form>
        </div>
      </section>
    );
  }

  if (view === 'additionComplete') {
    return (
      <section className="add-subtract-game" aria-labelledby="addition-complete-title">
        <div className="buttons-position-absolute">
          <ButtonReturnComponent returnToScreen={returnToMenu} />
        </div>
        <div className="addition-race addition-race--complete">
          {renderRaceTracks()}
          <h2 id="addition-complete-title">{t('additionRaceComplete')}</h2>
          <button className="addition-setup__start" type="button" onClick={startAdditionRace}>{t('additionPlayAgain')}</button>
        </div>
      </section>
    );
  }

  if (view === 'additionLost') {
    return (
      <section className="add-subtract-game" aria-labelledby="addition-lost-title">
        <div className="buttons-position-absolute">
          <ButtonReturnComponent returnToScreen={returnToMenu} />
        </div>
        <div className="addition-race addition-race--lost">
          {renderRaceTracks()}
          <h2 id="addition-lost-title">{t(isHardRace ? 'additionRaceLostHard' : 'additionRaceLost')}</h2>
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
          {mathGameModes.map(({ id, nameKey, vehicle }) => (
            <article key={id} className="add-subtract-game__mode">
              <h3>{t(nameKey)}</h3>
              <MathCar vehicle={vehicle} />
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
