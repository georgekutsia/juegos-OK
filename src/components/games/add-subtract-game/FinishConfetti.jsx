import PropTypes from 'prop-types';
import './finishConfetti.css';

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

function FinishConfetti({ svg = false }) {
  return finishConfetti.map(({ color, x, y, rotation, delay }) => {
    const props = {
      className: `finish-confetti-piece ${svg ? 'subtraction-crow__confetti-piece' : 'math-car__confetti-piece'}`,
      style: {
        '--confetti-color': color,
        '--confetti-x': x,
        '--confetti-y': y,
        '--confetti-rotation': rotation,
        '--confetti-delay': delay,
      },
    };
    return svg
      ? <rect key={color} x="-2" y="0" width="4" height="7" rx="1" {...props} />
      : <span key={color} {...props} />;
  });
}

FinishConfetti.propTypes = { svg: PropTypes.bool };

export default FinishConfetti;
