import { useId } from 'react';
import PropTypes from 'prop-types';
import { getSubtractionCrowPhase, mathRaceSteps, subtractionBalloonCount, subtractionCrowCount } from '../../../data/addSubtractGameData';
import './subtractionCrane.css';
import FinishConfetti from './FinishConfetti';

function CraneCrow({ index, phase, celebrate }) {
  if (phase <= 0) return null;
  const x = 314 + index * 34.5;
  const flightX = (1 - phase) * (790 - x);
  const flightY = -(1 - phase) * 75 - Math.sin(phase * Math.PI) * 35;

  return (
    <g className={`subtraction-crow${celebrate ? ' subtraction-crow--celebrating' : ''}`} data-crow-index={index} data-landed={phase === 1} transform={`translate(${x} 233)`}>
      <g className="subtraction-crow__flight" style={{ transform: `translate(${flightX}px, ${flightY}px)` }}>
        <g className="subtraction-crow__body">
          <g transform="scale(-1 1)">
            <path d="m-6-7-2 7m9-7 2 7m-13 0h5m5 0h5" stroke="#424252" strokeWidth="2" strokeLinecap="round" />
            <path d="m-7-18-15 4 13 5z" fill="#242438" />
            <ellipse cy="-14" rx="11" ry="9" fill="#303047" />
            <path className="subtraction-crow__wing" d="M5-18C-9-30-19-23-11-12c4 6 12 5 16-6" fill="#50506b" stroke="#242438" strokeWidth="1.5" />
            <circle cx="9" cy="-23" r="6.5" fill="#29293f" />
            <path d="m14-24 10 5-10 1z" fill="#77768a" />
            <circle cx="11" cy="-25" r="1.7" fill="#fff" />
            <circle cx="11.5" cy="-25" r="0.8" fill="#191925" />
          </g>
        </g>
        {celebrate && <g transform="translate(0 -14)" aria-hidden="true"><FinishConfetti svg /></g>}
      </g>
    </g>
  );
}

CraneCrow.propTypes = { index: PropTypes.number.isRequired, phase: PropTypes.number.isRequired, celebrate: PropTypes.bool.isRequired };

function SubtractionCraneScene({ completed = 0, popped = 0, preview = false, animatePops = true, showCrows = false, celebrate = false, crowElapsedMs = 0, crowDurationMs = 60000, ropeBroken = false, label }) {
  const id = useId().replace(/:/g, '');
  const rise = (completed / mathRaceSteps) * 165;
  const cableScale = Math.max(0, (161 - rise) / 161);
  const upperCut = 49 + 65 * cableScale;
  const lowerCut = 49 + 89 * cableScale + rise;

  return (
    <svg className={`subtraction-crane ${preview ? 'subtraction-crane--preview' : ''}`} viewBox="0 0 720 320" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${id}-sky`} x2="0" y2="1">
          <stop stopColor="#e5f8ff" /><stop offset="1" stopColor="#fff5dd" />
        </linearGradient>
        <linearGradient id={`${id}-wood`} x2="0" y2="1">
          <stop stopColor="#ffe1a0" /><stop offset="1" stopColor="#dba059" />
        </linearGradient>
        <radialGradient id={`${id}-red`} cx="0.3" cy="0.25">
          <stop stopColor="#ffafb1" /><stop offset="0.45" stopColor="#ff435c" /><stop offset="1" stopColor="#c91e3d" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="716" height="316" rx="22" fill={`url(#${id}-sky)`} stroke="#c4dce8" strokeWidth="3" />
      <g fill="#fff" opacity="0.85">
        <path d="M252 64c-16-27 24-49 38-25 22-15 43 6 37 23z" />
        <path d="M590 98c-16-25 22-42 34-22 20-13 42 6 36 22z" />
      </g>
      <circle cx="660" cy="41" r="19" fill="#ffda69" />
      <path d="M20 306H700" stroke="#adc7b0" strokeWidth="9" strokeLinecap="round" />
      <g stroke="#865c22" strokeWidth="4" strokeLinejoin="round">
        <path d="M104 58H154V287H104z" fill="#ffd34e" />
        {[63, 105, 147, 189, 231].map((y) => <path key={y} d={`M108 ${y}l42 38m0-38-42 38`} fill="none" />)}
        <path d="M31 30H607V57H31z" fill="#ffcf42" />
        {[44, 104, 164, 224, 284, 344, 404, 464, 524].map((x) => <path key={x} d={`M${x} 53l28-20 28 20`} fill="none" />)}
        <path d="M129 7 44 30m85-23 470 23M129 7v24" fill="none" strokeWidth="5" />
        <rect x="24" y="40" width="59" height="40" rx="7" fill="#8499af" stroke="#405772" />
        <rect x="144" y="77" width="74" height="61" rx="11" fill="#ffc54a" />
        <path d="M159 87h44v29h-44z" fill="#a7e5ff" stroke="#405772" />
        <path d="M184 88v27" stroke="#fff" strokeWidth="5" />
        <path d="M87 284h87l23 20H65z" fill="#405772" stroke="#405772" />
      </g>
      <circle cx="470" cy="49" r="12" fill="#405772" stroke="#a3c2d5" strokeWidth="4" />
      <g className={preview ? undefined : 'subtraction-crane__sway'} data-rope-broken={ropeBroken}>
        {ropeBroken
          ? <path className="subtraction-crane__cable--broken" d={`M470 49V${upperCut}l-4 4 4 4`} fill="none" stroke="#405772" strokeWidth="5" strokeLinecap="round" />
          : <line className="subtraction-crane__cable" x1="470" y1="49" x2="470" y2="210" stroke="#405772" strokeWidth="5" style={{ transform: `scaleY(${cableScale})` }} />}
        <g className={`subtraction-crane__load ${ropeBroken ? 'subtraction-crane__load--fallen' : ''}`} style={{ transform: ropeBroken ? 'translateY(0px) rotate(2deg)' : `translateY(${-rise}px)` }}>
          {ropeBroken && <path d={`M470 ${lowerCut - 8}l4 4-4 4V210`} fill="none" stroke="#405772" strokeWidth="5" strokeLinecap="round" />}
          <path d="M470 206v8c0 10 13 10 13 0" fill="none" stroke="#405772" strokeWidth="6" strokeLinecap="round" />
          <path d="m470 214-155 20m155-20 155 20" fill="none" stroke="#6f8194" strokeWidth="4" />
          <rect x="294" y="234" width="352" height="70" rx="8" fill={`url(#${id}-wood)`} stroke="#a06c35" strokeWidth="4" />
          <path d="M305 255h328m-328 22h328" stroke="#bc8345" strokeWidth="1.5" opacity="0.55" />
          <g className="subtraction-crane__balloons">
            {Array.from({ length: subtractionBalloonCount }, (_, index) => {
              const x = 314 + (index % 10) * 34.5;
              const y = 249 + Math.floor(index / 10) * 21;
              const isPopped = index < popped;
              return (
                <g key={index} transform={`translate(${x} ${y})`} data-balloon={index} data-popped={isPopped}>
                  <g className={`subtraction-crane__balloon${isPopped ? animatePops ? ' subtraction-crane__balloon--popped' : ' subtraction-crane__balloon--gone' : ''}`} style={{ animationDelay: `${(index % 10) * 24}ms` }}>
                    <circle r="7.5" fill={`url(#${id}-red)`} stroke="#a8102d" strokeWidth="1" />
                    <path d="m0 7-2 3h4z" fill="#bf1736" />
                  </g>
                  {isPopped && animatePops && <g className="subtraction-crane__burst" style={{ animationDelay: `${(index % 10) * 24}ms` }} stroke="#ee3651" strokeWidth="2" strokeLinecap="round">
                    {[0, 60, 120, 180, 240, 300].map((angle) => <path key={angle} d="M10 0h6" transform={`rotate(${angle})`} />)}
                  </g>}
                </g>
              );
            })}
          </g>
          {showCrows && Array.from({ length: subtractionCrowCount }, (_, index) => <CraneCrow key={index} index={index} phase={getSubtractionCrowPhase(index, crowElapsedMs, crowDurationMs)} celebrate={celebrate} />)}
        </g>
      </g>
      {completed === mathRaceSteps && <g fill="#ffbd35" stroke="#d68b15" strokeWidth="2">
        {[320, 470, 620].map((x) => <path key={x} d="m0-12 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" transform={`translate(${x} 160)`} />)}
      </g>}
    </svg>
  );
}

SubtractionCraneScene.propTypes = {
  completed: PropTypes.number,
  popped: PropTypes.number,
  preview: PropTypes.bool,
  animatePops: PropTypes.bool,
  showCrows: PropTypes.bool,
  celebrate: PropTypes.bool,
  crowElapsedMs: PropTypes.number,
  crowDurationMs: PropTypes.number,
  ropeBroken: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default SubtractionCraneScene;
