import { useEffect, useId, useRef } from 'react';
import PropTypes from 'prop-types';
import { combineTwoClimbMs, combineTwoCollapseMs, combineTwoDescentMs, combineTwoSteps } from '../../../data/combineTwoGameData';
import './coasterScene.css';
import MathPassenger from './MathPassenger';

const track = 'M42 222 L352 72 C390 50 408 90 435 151 C465 219 512 239 558 208 Q590 188 606 222 H622';
const climbLength = Math.hypot(310, 150);
// Leave enough rail behind the wagon to support its rear wheel and body.
const startDistance = 48;
const startX = 42 + startDistance * 310 / climbLength;
const startY = 222 - startDistance * 150 / climbLength;
const supports = [[65, 211], [122, 183], [179, 156], [236, 128], [293, 101], [350, 73], [410, 107], [466, 202], [522, 222], [580, 201]];
const breakOrder = [5, 3, 6, 1, 7];

function CoasterScene({ progress = 0, phase = 'playing', brokenSupports = 0, beams = '#e58b2c', rail = '#8b42bf', label, preview = false, onArrival }) {
  const pathRef = useRef(null);
  const cartRef = useRef(null);
  const distanceRef = useRef(startDistance);
  const skyId = `coaster-sky-${useId().replace(/:/g, '')}`;

  useEffect(() => {
    const path = pathRef.current;
    const cart = cartRef.current;
    const fullLength = path.getTotalLength();
    if (phase === 'lost') return undefined;
    const collapsing = phase === 'collapsing';
    const target = phase === 'descending' || phase === 'complete'
      ? fullLength : startDistance + (climbLength - startDistance) * progress / combineTwoSteps;
    const start = distanceRef.current;
    const placeCart = distance => {
      const point = path.getPointAtLength(distance);
      const ahead = path.getPointAtLength(Math.min(fullLength, distance + 1));
      const behind = path.getPointAtLength(Math.max(0, distance - 1));
      const angle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180 / Math.PI;
      cart.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle}) scale(1.2)`);
      distanceRef.current = distance;
    };
    placeCart(start);
    if (preview || (!collapsing && Math.abs(target - start) < 0.1)) return undefined;

    let frame;
    let startedAt;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reducedMotion ? 250 : collapsing ? combineTwoCollapseMs : phase === 'descending' ? combineTwoDescentMs : combineTwoClimbMs;
    const fallStart = path.getPointAtLength(start);
    const fallAngle = Math.atan2(path.getPointAtLength(start + 1).y - fallStart.y, path.getPointAtLength(start + 1).x - fallStart.x) * 180 / Math.PI;
    const animate = now => {
      startedAt ??= now;
      const elapsed = Math.min(1, (now - startedAt) / duration);
      const eased = phase === 'descending' ? elapsed * elapsed : 1 - (1 - elapsed) ** 2;
      if (!reducedMotion || elapsed === 1) {
        if (collapsing) {
          const fall = 1 - (1 - elapsed) ** 3;
          cart.setAttribute('transform', `translate(${fallStart.x} ${fallStart.y + (244 - fallStart.y) * fall}) rotate(${fallAngle * (1 - fall)}) scale(1.2)`);
        } else placeCart(start + (target - start) * eased);
      }
      if (elapsed < 1) frame = requestAnimationFrame(animate);
      else if (!collapsing) onArrival?.();
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [onArrival, phase, preview, progress]);

  return (
    <svg className={`combine-coaster${phase === 'collapsing' || phase === 'lost' ? ' combine-coaster--collapsed' : ''}`} viewBox="0 0 660 280" role="img" aria-label={label} style={{ '--coaster-beams': beams, '--coaster-rail': rail, '--coaster-collapse-duration': `${combineTwoCollapseMs}ms` }}>
      <defs><linearGradient id={skyId} x2="0" y2="1"><stop stopColor="#dbf7ff" /><stop offset="1" stopColor="#fff8e8" /></linearGradient></defs>
      <rect x="4" y="4" width="652" height="272" rx="20" fill={`url(#${skyId})`} />
      <g fill="white" opacity="0.85"><path d="M70 57a17 17 0 0 1 29-12 19 19 0 0 1 34 13Z" /><path d="M484 52a16 16 0 0 1 28-12 21 21 0 0 1 38 12Z" /></g>
      <path d="M22 250H638" stroke="#9cbd81" strokeWidth="8" strokeLinecap="round" />
      <g className="combine-coaster__structure">
      <g className="combine-coaster__supports" fill="none" strokeWidth="5" strokeLinejoin="round">
        {supports.map(([x, y], index) => {
          const broken = breakOrder.slice(0, brokenSupports).includes(index);
          const cut = (y + 10 + 246) / 2;
          return broken ? <g key={x} className="combine-coaster__support--broken">
            <g className="combine-coaster__broken-top" style={{ transformOrigin: `${x}px ${cut}px` }}>
              <path d={`M${x - 7} ${cut - 8}V${y + 10}H${x + 7}V${cut - 12}M${x - 7} ${y + 15}L${x + 7} ${cut - 8}`} />
            </g>
            <path d={`M${x - 7} ${cut + 10}V246M${x + 7} ${cut + 6}V246M${x - 7} ${cut + 12}L${x + 7} 244`} />
            <path className="combine-coaster__splinters" d={`M${x - 15} ${cut - 2}l-7-5M${x + 14} ${cut + 2}l7-3M${x} ${cut + 2}l-3 5`} />
          </g> : <path key={x} d={`M${x - 7} 246V${y + 10}H${x + 7}V246M${x - 7} ${y + 15}L${x + 7} 244M${x + 7} ${y + 15}L${x - 7} 244`} />;
        })}
      </g>
      <path d={track} transform="translate(0 10)" className="combine-coaster__rail" fill="none" strokeWidth="5" />
      <g className="combine-coaster__rail" strokeWidth="4">{Array.from({ length: 15 }, (_, i) => { const x = 42 + i * 22; const y = 222 - i * 22 * 150 / 310; return <path key={i} d={`M${x} ${y}v10`} />; })}</g>
      <path ref={pathRef} d={track} fill="none" stroke="#33445b" strokeWidth="10" strokeLinecap="round" />
      <path d={track} className="combine-coaster__rail" fill="none" strokeWidth="5" strokeLinecap="round" />
      </g>
      <g ref={cartRef} className="combine-coaster__cart" transform={`translate(${startX} ${startY}) rotate(-25.8) scale(1.2)`}>
        <path d="M-17-19V-38H-10V-18" fill="#494b85" stroke="#333a60" strokeWidth="2" />
        <MathPassenger disappointed={phase === 'collapsing' || phase === 'lost'} />
        <rect x="-24" y="-26" width="48" height="18" rx="6" fill="#f16b55" stroke="#ac3e45" strokeWidth="2" />
        <path d="M-20-17H20" stroke="#ffd56b" strokeWidth="4" />
        {[-15, 15].map(x => <g key={x}><circle cx={x} cy="-5" r="6" fill="#34435c" /><circle cx={x} cy="-5" r="2.5" fill="#d7eff9" /></g>)}
      </g>
    </svg>
  );
}

CoasterScene.propTypes = {
  progress: PropTypes.number, phase: PropTypes.string, brokenSupports: PropTypes.number, beams: PropTypes.string,
  rail: PropTypes.string, label: PropTypes.string.isRequired, preview: PropTypes.bool, onArrival: PropTypes.func,
};

export default CoasterScene;
