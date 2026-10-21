import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { drawOkinaWelcome, OKINA_WELCOME_DURATION } from '../../shared/okinaWelcomeAnimation';
import './startupIntro.css';

function StartupIntro({ children }) {
  const { t } = useTranslation();
  const [finished, setFinished] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const canvasRef = useRef(null);
  const finish = useCallback(() => setFinished(true), []);

  useEffect(() => {
    if (finished) return;
    const canvas = canvasRef.current;
    const image = new Image();
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let cancelled = false;
    let animationFrame = 0;
    let startedAt;
    const handleMotion = event => { if (event.matches) finish(); };
    // Bound asset loading, then start the full greeting only after decoding.
    let timeout = window.setTimeout(finish, 10000);
    motionPreference.addEventListener('change', handleMotion);
    const tick = now => {
      if (cancelled) return;
      startedAt ??= now;
      const elapsed = now - startedAt;
      drawOkinaWelcome(canvas, image, elapsed);
      if (elapsed >= OKINA_WELCOME_DURATION) finish();
      else animationFrame = window.requestAnimationFrame(tick);
    };
    image.onload = async () => {
      try { await image.decode(); } catch { if (!cancelled) finish(); return; }
      if (cancelled) return;
      window.clearTimeout(timeout);
      timeout = window.setTimeout(finish, OKINA_WELCOME_DURATION + 3000);
      animationFrame = window.requestAnimationFrame(tick);
    };
    image.onerror = () => { if (!cancelled) finish(); };
    image.src = `${import.meta.env.BASE_URL}img/okina/okina-welcome-v2.webp`;
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(animationFrame);
      motionPreference.removeEventListener('change', handleMotion);
      image.onload = null;
      image.onerror = null;
    };
  }, [finished, finish]);

  if (finished) return children;

  return (
    <div className="startup-intro" role="dialog" aria-modal="true" aria-label={t('okinaWelcome')}
      onKeyDown={event => {
        if (event.key === 'Escape') { event.preventDefault(); finish(); }
        // The skip button is the only interactive element while the app starts.
        if (event.key === 'Tab') { event.preventDefault(); event.currentTarget.querySelector('button').focus(); }
      }}>
      <canvas className="startup-intro__canvas" ref={canvasRef} width={720} height={720} aria-hidden="true" />
      <button className="startup-intro__skip" type="button" autoFocus onClick={finish}>
        {t('okinaWelcomeSkip')}
      </button>
    </div>
  );
}

StartupIntro.propTypes = { children: PropTypes.node.isRequired };
export default StartupIntro;
