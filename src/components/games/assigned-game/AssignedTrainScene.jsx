import { useEffect, useId } from 'react';
import PropTypes from 'prop-types';
import MathPassenger from '../combine-two-game/MathPassenger';
import { assignedCoupleMs, assignedDepartureMs, assignedWagonExitMs, createAssignedTrain } from '../../../data/assignedGameData';
import './assignedTrain.css';

const wagonColors = ['#ef786c', '#e6b94a', '#6bb69a', '#7a9edc', '#b589ce'];
const previewWagons = createAssignedTrain();

function AssignedTrainScene({ wagons = previewWagons, phase = 'playing', preview = false, label, onDeparture }) {
  const id = `assigned-${useId().replace(/:/g, '')}`;
  const connected = wagons.filter(wagon => wagon.connected && !wagon.lost);
  const departing = phase === 'departing' || phase === 'complete';

  useEffect(() => {
    if (preview || phase !== 'departing') return undefined;
    const timer = setTimeout(() => onDeparture?.(), assignedCoupleMs + assignedDepartureMs);
    return () => clearTimeout(timer);
  }, [onDeparture, phase, preview]);

  return <svg className={`assigned-train${departing ? ' assigned-train--departing' : ''}`} viewBox={preview ? '10 105 640 145' : '0 95 660 180'} role="img" aria-label={label}
    style={{ '--assigned-couple': `${assignedCoupleMs}ms`, '--assigned-exit': `${assignedWagonExitMs}ms`, '--assigned-departure': `${assignedDepartureMs}ms` }}>
    <defs>
      <linearGradient id={`${id}-sky`} x2="0" y2="1"><stop stopColor="#dcf5ff" /><stop offset="1" stopColor="#fff5df" /></linearGradient>
      <linearGradient id={`${id}-metal`} x2="0" y2="1"><stop stopColor="#f99565" /><stop offset="1" stopColor="#d95050" /></linearGradient>
    </defs>
    <rect x="4" y="4" width="652" height="272" rx="20" fill={`url(#${id}-sky)`} />
    <circle cx="75" cy="124" r="15" fill="#ffdc7a" />
    <g fill="white" opacity=".9"><path d="M170 126a18 18 0 0 1 32-12 22 22 0 0 1 38 12Z" /><path d="M449 118a17 17 0 0 1 29-12 20 20 0 0 1 36 12Z" /></g>
    <path d="M6 217Q100 160 205 213T425 211T655 211V276H6Z" fill="#d7e9b6" />
    <path d="M12 240H648" stroke="#c5ad8c" strokeWidth="16" />
    <g stroke="#9b795e" strokeWidth="5">{Array.from({ length: 30 }, (_, i) => <path key={i} d={`M${18 + i * 22} 233v15`} />)}</g>
    <path d="M12 229H648M12 242H648" stroke="#596779" strokeWidth="4" />
    <g className="assigned-train__convoy">
      {wagons.map(wagon => {
        const rank = connected.findIndex(item => item.id === wagon.id);
        const x = rank >= 0 ? 550 - 84 * (connected.length - rank) : 30 + wagon.id * 100;
        return <g key={wagon.id} className="assigned-train__wagon-position" style={{ transform: `translateX(${x}px)` }} data-wagon={wagon.id} data-connected={wagon.connected && !wagon.lost} data-lost={wagon.lost}>
          <g className={`assigned-train__wagon${wagon.lost ? ' assigned-train__wagon--lost' : ''}`}>
            <path d={`M-5 203H0M72 203H${wagon.connected ? 84 : 77}`} stroke="#5f6577" strokeWidth="4" strokeLinecap="round" />
            <rect x="0" y="171" width="72" height="38" rx="8" fill={wagonColors[wagon.id]} stroke="#66546b" strokeWidth="2.5" />
            <path d="M4 172H68" stroke="white" strokeWidth="4" opacity=".45" />
            <path d="M7 190H65M7 199H65M17 177V205M55 177V205" stroke="#69526d" strokeWidth="1.5" opacity=".28" />
            {[17, 55].map(x => <g key={x} className="assigned-train__wheel" style={{ transformOrigin: `${x}px 216px` }}><circle cx={x} cy="216" r="10" fill="#35455d" /><circle cx={x} cy="216" r="5" fill="#cde4f0" /><path d={`M${x - 4} 216h8M${x} 212v8`} stroke="#6f86a0" strokeWidth="2" /></g>)}
          </g>
        </g>;
      })}
      <g className="assigned-train__engine" transform="translate(550 0)">
        <path d="M-7 203H4" stroke="#5f6577" strokeWidth="4" strokeLinecap="round" />
        <rect x="3" y="148" width="37" height="58" rx="5" fill="#e1b84b" stroke="#73563c" strokeWidth="2.5" />
        <rect x="9" y="154" width="25" height="32" rx="4" fill="#b7e5f4" />
        <g transform="translate(21 197) scale(.62)"><MathPassenger disappointed={phase === 'lost'} /></g>
        <path d="M0 146H43" stroke="#a04f48" strokeWidth="7" strokeLinecap="round" />
        <rect x="37" y="168" width="44" height="34" rx="10" fill={`url(#${id}-metal)`} stroke="#a84a4b" strokeWidth="2.5" />
        <path d="M63 170V150H75V170" fill="#51627c" stroke="#35455d" strokeWidth="2" /><path d="M60 149H78" stroke="#35455d" strokeWidth="5" strokeLinecap="round" />
        <path d="M1 205H81L89 218H0Z" fill="#52677d" stroke="#35455d" strokeWidth="2" />
        <path d="M42 178H78" stroke="#ffd36f" strokeWidth="5" />
        {[15, 48, 73].map(x => <g key={x} className="assigned-train__wheel" style={{ transformOrigin: `${x}px 216px` }}><circle cx={x} cy="216" r="11" fill="#35455d" /><circle cx={x} cy="216" r="6" fill="#cde4f0" /><path d={`M${x - 5} 216h10M${x} 211v10`} stroke="#6f86a0" strokeWidth="2" /></g>)}
        {departing && <g className="assigned-train__steam" fill="white" opacity=".8"><circle cx="68" cy="128" r="9" /><circle cx="55" cy="109" r="13" /><circle cx="34" cy="91" r="16" /></g>}
      </g>
    </g>
  </svg>;
}

AssignedTrainScene.propTypes = { wagons: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired, connected: PropTypes.bool.isRequired, lost: PropTypes.bool.isRequired })), phase: PropTypes.string, preview: PropTypes.bool, label: PropTypes.string.isRequired, onDeparture: PropTypes.func };
export default AssignedTrainScene;
