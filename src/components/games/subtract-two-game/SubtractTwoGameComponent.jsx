import PropTypes from 'prop-types';
import TwoNumberGameComponent from '../combine-two-game/TwoNumberGameComponent';

function SubtractTwoGameComponent({ returnToScreen, initialLevel }) {
  return <TwoNumberGameComponent variant="subtractTwo" returnToScreen={returnToScreen} initialLevel={initialLevel} />;
}
SubtractTwoGameComponent.propTypes = { returnToScreen: PropTypes.func.isRequired, initialLevel: PropTypes.string };
export default SubtractTwoGameComponent;
