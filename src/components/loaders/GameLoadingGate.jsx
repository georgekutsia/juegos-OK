import PropTypes from 'prop-types';
import { GameReadyContext } from '../../shared/gameReadyContext';
import useGameLoading from '../../shared/useGameLoading';
import OkGameLoader from './OkGameLoader';

function GameLoadingGate({ screenRef, onReturn, children }) {
  const { status, retry } = useGameLoading(screenRef);
  return <GameReadyContext.Provider value={status === 'ready'}>
    {children}
    {status !== 'ready' && <OkGameLoader failed={status === 'failed'} onRetry={retry} onReturn={onReturn} />}
  </GameReadyContext.Provider>;
}

GameLoadingGate.propTypes = { screenRef: PropTypes.shape({ current: PropTypes.object }), onReturn: PropTypes.func.isRequired, children: PropTypes.node.isRequired };
export default GameLoadingGate;
