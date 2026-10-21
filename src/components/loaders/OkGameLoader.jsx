import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Context } from '../../shared/context';
import ButtonReturnComponent from '../buttons/button-return/ButtonReturnComponent';
import './okGameLoader.css';

function OkGameLoader({ failed = false, onRetry, onReturn }) {
  const { t } = useContext(Context);
  const dialogRef = useRef(null);
  const retryRef = useRef(null);
  useEffect(() => {
    (failed ? retryRef.current : dialogRef.current)?.focus({ preventScroll: true });
  }, [failed]);
  const handleKeys = event => {
    if (event.key === 'Escape') { event.preventDefault(); onReturn(); }
    if (event.key !== 'Tab') return;
    const buttons = [...dialogRef.current.querySelectorAll('button:not(:disabled)')];
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  return createPortal(<div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={t('gameLoading')} onKeyDown={handleKeys} className={`ok-game-loader${failed ? ' ok-game-loader--failed' : ''}`}>
    <div className="buttons-position-absolute"><ButtonReturnComponent returnToScreen={onReturn} /></div>
    <div className="ok-game-loader__center">
      <div className="ok-game-loader__breath" aria-hidden="true"><div className="ok-game-loader__orbit">
        <span className="ok-game-loader__letter ok-game-loader__letter--o">O</span>
        <span className="ok-game-loader__letter ok-game-loader__letter--k">K</span>
      </div></div>
      <p role="status">{t(failed ? 'gameLoadingFailed' : 'gameLoading')}</p>
      {failed && <button ref={retryRef} type="button" className="ok-game-loader__retry" onClick={onRetry}>{t('gameLoadingRetry')}</button>}
    </div>
  </div>, document.body);
}

OkGameLoader.propTypes = { failed: PropTypes.bool, onRetry: PropTypes.func.isRequired, onReturn: PropTypes.func.isRequired };
export default OkGameLoader;
