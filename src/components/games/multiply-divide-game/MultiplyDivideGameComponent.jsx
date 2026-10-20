import PropTypes from 'prop-types';
import AddSubtractGameComponent from '../add-subtract-game/AddSubtractGameComponent';

function MultiplyDivideGameComponent({ returnToScreen }) {
  return <AddSubtractGameComponent gameGroup="multiplyDivide" returnToScreen={returnToScreen} />;
}

MultiplyDivideGameComponent.propTypes = { returnToScreen: PropTypes.func.isRequired };

export default MultiplyDivideGameComponent;
