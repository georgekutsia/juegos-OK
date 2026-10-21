import PropTypes from 'prop-types';

function MathPassenger({ disappointed = false }) {
  return <g className={`math-passenger${disappointed ? ' math-passenger--disappointed' : ''}`}>
    <path d="M-5-22V-35Q3-42 10-34L13-21Z" fill="#32a8bc" stroke="#247a91" strokeWidth="1.5" />
    <path d={disappointed ? 'M-3-32L-6-23M10-32L13-23' : 'M-3-34L-10-41M9-34L15-40'} stroke="#e9af7e" strokeWidth="4" strokeLinecap="round" />
    <g className="math-passenger__head" transform={disappointed ? 'translate(0 5) rotate(22 3 -36)' : undefined}>
      <circle cx="3" cy="-46" r="8" fill="#f4c18e" />
      <path d="M-5-46Q-7-59 5-56Q14-55 11-46L7-50L-1-49Z" fill="#67422e" />
      <circle cx="5" cy="-46" r="1" fill="#40372f" />
      <path className="math-passenger__mouth" d={disappointed ? 'M3-41q3-2 5 0' : 'M3-42q3 2 5-1'} fill="none" stroke="#a55d49" strokeWidth="1" />
    </g>
  </g>;
}

MathPassenger.propTypes = { disappointed: PropTypes.bool };
export default MathPassenger;
