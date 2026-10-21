/* Standalone preview: no libraries, network requests, or changes to the games. */
(() => {
  'use strict';
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const status = document.querySelector('#status');
  const pauseButton = document.querySelector('#pause');
  const sheet = new Image();
  const DURATION = 6500;
  const ease = t => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); };
  let elapsed = 0;
  let start = 0;
  let running = false;
  let raf = 0;
  let ready = false;
  let frameRects = null;

  function pose(t) {
    if (t < 1150) return 0;
    if (t < 1350) return 1;
    if (t < 1550) return 2;
    if (t < 3650) {
      const cycle = [2, 3, 4, 3];
      return cycle[Math.floor((t - 1550) / 150) % cycle.length];
    }
    if (t < 3820) return 3;
    if (t < 4020) return 5;
    if (t < 4260) return 6;
    if (t < 4700) return 7;
    if (t < 4840) return 6;
    return 7;
  }

  function draw(t) {
    t = Math.max(0, Math.min(DURATION, t));
    ctx.clearRect(0, 0, 720, 720);
    ctx.fillStyle = '#c9f4ed';
    ctx.fillRect(0, 0, 720, 720);
    if (!ready) return;
    const enter = ease(t / 1050);
    const exit = ease((t - 5350) / 1100);
    const x = 360 - (1 - enter) * 610 + exit * 610;
    const bob = t < 1050 || t > 5350 ? Math.sin(t / 90) * 3 : Math.sin(t / 420) * .8;
    const index = pose(t);
    const cellWidth = sheet.naturalWidth / 4;
    const cellHeight = sheet.naturalHeight / 2;
    const r = frameRects?.[index] || { x: (index % 4) * cellWidth, y: Math.floor(index / 4) * cellHeight, w: cellWidth, h: cellHeight };
    const height = 580;
    const width = height * r.w / r.h;
    ctx.save();
    ctx.fillStyle = '#3c827c22';
    ctx.beginPath();
    ctx.ellipse(x, 660, 94, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(sheet, r.x, r.y, r.w, r.h, x - width / 2, 660 - height * .964 + bob, width, height);
    ctx.restore();
  }

  function tick(now) {
    elapsed = Math.min(DURATION, now - start);
    draw(elapsed);
    if (elapsed < DURATION && running) raf = requestAnimationFrame(tick);
    else {
      running = false;
      pauseButton.disabled = true;
      pauseButton.textContent = 'Pausar';
      status.textContent = 'Okina ha terminado de saludar. Puedes repetir la animación.';
    }
  }

  function play(reset = true) {
    if (!ready) return;
    cancelAnimationFrame(raf);
    if (reset) elapsed = 0;
    start = performance.now() - elapsed;
    running = true;
    pauseButton.disabled = false;
    pauseButton.textContent = 'Pausar';
    status.textContent = 'Okina entra, saluda, sonríe y se va.';
    raf = requestAnimationFrame(tick);
  }

  document.querySelector('#replay').addEventListener('click', () => play());
  pauseButton.addEventListener('click', () => {
    if (!running) return play(false);
    running = false;
    cancelAnimationFrame(raf);
    pauseButton.textContent = 'Continuar';
    status.textContent = 'Animación en pausa.';
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && running) pauseButton.click();
  });

  sheet.onload = () => {
    ready = true;
    window.okinaPreview.ready = true;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(4500);
      status.textContent = 'Vista sin movimiento. Pulsa Repetir para ver el saludo.';
    } else play();
  };
  sheet.onerror = () => { status.classList.remove('sr-only'); status.textContent = 'No se ha podido cargar la imagen. Mantén los archivos de esta carpeta juntos.'; };
  window.okinaPreview = { ready: false, duration: DURATION, draw, play, setFrameRects(rects) { frameRects = rects; }, stop() { running = false; cancelAnimationFrame(raf); pauseButton.disabled = true; } };
  sheet.src = 'Okina-saludo-fotogramas.png';
})();
