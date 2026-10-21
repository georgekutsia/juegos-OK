import PropTypes from 'prop-types';
import TwoNumberGameComponent from './TwoNumberGameComponent';

function CombineTwoGameComponent({ returnToScreen, initialLevel }) {
  return <TwoNumberGameComponent returnToScreen={returnToScreen} initialLevel={initialLevel} />;
}
CombineTwoGameComponent.propTypes = { returnToScreen: PropTypes.func.isRequired, initialLevel: PropTypes.string };
export default CombineTwoGameComponent;
