import { useEffect, useId } from 'react';
import PropTypes from 'prop-types';
import MathPassenger from '../combine-two-game/MathPassenger';
import { subtractTwoCrowFlightMs, subtractTwoDeflationMs, subtractTwoFlightMs, subtractTwoWeightDropMs } from '../../../data/subtractTwoGameData';
import './balloonScene.css';

const crowPositions = [[275, 61], [299, 35], [330, 25], [361, 35], [385, 61]];

function BalloonScene({ progress = 0, phase = 'playing', crows = 0, color = '#8b42bf', label, preview = false, onArrival }) {
  const id = `balloon-${useId().replace(/:/g, '')}`;
  const deflating = phase === 'collapsing' || phase === 'lost';
  const flying = phase === 'crest' || phase === 'complete';

  useEffect(() => {
    if (phase !== 'crest' || preview) return undefined;
    const timeout = setTimeout(() => onArrival?.(), subtractTwoWeightDropMs + subtractTwoFlightMs);
    return () => clearTimeout(timeout);
  }, [onArrival, phase, preview]);

  return <svg className={`subtract-balloon${deflating ? ' subtract-balloon--deflating' : ''}${flying ? ' subtract-balloon--flying' : ''}`} viewBox={preview ? '230 8 200 260' : '0 0 660 280'} role="img" aria-label={label}
    style={{ '--balloon-color': color, '--balloon-deflation': `${subtractTwoDeflationMs}ms`, '--balloon-crow-flight': `${subtractTwoCrowFlightMs}ms`, '--balloon-weight-drop': `${subtractTwoWeightDropMs}ms`, '--balloon-flight': `${subtractTwoFlightMs}ms` }}>
    <defs>
      <linearGradient id={`${id}-sky`} x2="0" y2="1"><stop stopColor="#d9f4ff" /><stop offset="1" stopColor="#fff5df" /></linearGradient>
      <linearGradient id={`${id}-basket`} x2="0" y2="1"><stop stopColor="#e6b570" /><stop offset="1" stopColor="#bd7a3e" /></linearGradient>
      <clipPath id={`${id}-envelope`}><path d="M330 22C228 22 226 127 300 169H360C434 127 432 22 330 22Z" /></clipPath>
    </defs>
    <rect x="4" y="4" width="652" height="272" rx="20" fill={`url(#${id}-sky)`} />
    <circle cx="555" cy="57" r="22" fill="#ffda71" />
    <g fill="white" opacity=".9"><path d="M75 70a20 20 0 0 1 35-14 23 23 0 0 1 40 14Z" /><path d="M473 131a17 17 0 0 1 29-12 20 20 0 0 1 36 12Z" /></g>
    <path d="M20 269Q125 234 220 269T460 265T640 269" fill="#d7e7b9" stroke="#9bbd7f" strokeWidth="4" />
    <g className="subtract-balloon__aircraft">
      <g className="subtract-balloon__envelope">
        <path d="M330 22C228 22 226 127 300 169H360C434 127 432 22 330 22Z" fill="var(--balloon-color)" stroke="#614262" strokeWidth="3" />
        <g clipPath={`url(#${id}-envelope)`}>
          <path d="M330 20C269 49 276 129 309 170H322C304 111 306 48 330 20Z" fill="#ffd56b" />
          <path d="M330 20C392 49 385 129 352 170H339C357 111 354 48 330 20Z" fill="#ff9b78" />
          <path d="M250 90Q330 114 410 90M270 138Q330 155 390 138" fill="none" stroke="white" strokeWidth="2" opacity=".35" />
          <ellipse cx="285" cy="65" rx="10" ry="20" transform="rotate(25 285 65)" fill="white" opacity=".22" />
        </g>
        {deflating && <path className="subtract-balloon__puncture" d="m326 38 8 9-7 6 8 7-8 6" fill="none" stroke="#492d53" strokeWidth="3" />}
      </g>
      <path d="M302 167L305 210M358 167L355 210M320 170V194M340 170V194" stroke="#78553e" strokeWidth="3" fill="none" />
      <path d="M326 187Q319 179 330 174Q342 183 334 187Z" fill="#ffb835" stroke="#ed7242" strokeWidth="2" />
      <g transform="translate(330 226) scale(1.1)"><MathPassenger disappointed={deflating} /></g>
      <path d="M295 207H365L359 238H301Z" fill={`url(#${id}-basket)`} stroke="#8c592e" strokeWidth="3" />
      <path d="M299 217H362M301 227H360M311 210L315 237M329 210V237M347 210L343 237" stroke="#9d6736" strokeWidth="2" opacity=".7" />
      <path d="M295 207H365" stroke="#f3cf96" strokeWidth="6" strokeLinecap="round" />
      {Array.from({ length: 5 }, (_, index) => <g key={index} transform={`translate(${298 + index * 16} 236)`}>
        <g className={`subtract-balloon__weight${index < progress ? ' subtract-balloon__weight--dropped' : ''}`} data-dropped={index < progress}>
          <path d="M0 0V9" fill="none" stroke="#77533b" strokeWidth="2" />
          <path d="M-3 8H3L7 18Q7 23 0 23Q-7 23-7 18Z" fill={['#756ab6', '#d47e46', '#689576', '#cf6e84', '#597eac'][index]} stroke="#55443e" strokeWidth="1.5" />
          <path d="M-4 10H4" stroke="#f7dca4" strokeWidth="2" />
        </g>
      </g>)}
      {crowPositions.slice(0, crows).map(([x, y], index) => <g key={index} transform={`translate(${x} ${y})`} className="subtract-balloon__crow" data-crow-index={index}>
        <g className="subtract-balloon__crow-flight" style={{ '--crow-start-x': `${680 - x}px`, '--crow-start-y': `${-30 - y}px` }}>
          <g className="subtract-balloon__crow-body">
            <g transform="scale(-1 1)">
            <path d="m-6-3-2 7m10-7 2 7" stroke="#3c3c50" strokeWidth="2" />
            <path d="m-8-13-14 3 13 6Z" fill="#242438" />
            <ellipse cy="-10" rx="10" ry="8" fill="#303047" />
            <path className="subtract-balloon__crow-wing" d="M5-13Q-15-31-15-12Q-5-1 5-13Z" fill="#55556e" stroke="#242438" strokeWidth="1.5" />
            <circle cx="8" cy="-18" r="6" fill="#29293f" />
            <path d="m12-16 8 5-9-1Z" fill="#888796" />
            <circle cx="10" cy="-20" r="1.5" fill="white" />
            <circle cx="10.5" cy="-20" r=".7" fill="#191925" />
            </g>
          </g>
        </g>
      </g>)}
    </g>
  </svg>;
}

BalloonScene.propTypes = { progress: PropTypes.number, phase: PropTypes.string, crows: PropTypes.number, color: PropTypes.string, label: PropTypes.string.isRequired, preview: PropTypes.bool, onArrival: PropTypes.func };
export default BalloonScene;
