export const OKINA_WELCOME_DURATION = 6500;

// Poses 3 and 7 raise the other arm, so they are intentionally not in the sequence.
// The fourteen remaining poses keep the waving arm on the same side throughout.
export function getOkinaWelcomePose(time) {
  if (time < 1050) return 0;
  if (time < 1170) return 1;
  if (time < 1290) return 2;
  if (time < 1410) return 4;
  if (time < 1530) return 10;
  if (time < 1650) return 6;
  if (time < 3650) return [6, 5, 8, 5, 9, 5, 6, 10][Math.floor((time - 1650) / 110) % 8];
  if (time < 3760) return 6;
  if (time < 3870) return 10;
  if (time < 3980) return 11;
  if (time < 4090) return 12;
  if (time < 4200) return 13;
  if (time < 4350) return 0;
  if (time < 4520) return 14;
  if (time < 4820) return 15;
  if (time < 4940) return 14;
  return 15;
}

export function drawOkinaWelcome(canvas, image, time) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const ease = value => { const t = Math.max(0, Math.min(1, value)); return t * t * (3 - 2 * t); };
  const t = Math.max(0, Math.min(OKINA_WELCOME_DURATION, time));
  const index = getOkinaWelcomePose(t);
  const column = index % 4;
  const row = Math.floor(index / 4);
  const cellWidth = image.naturalWidth / 4;
  const cellHeight = image.naturalHeight / 4;
  const scale = 580 / cellHeight;
  // Align the shirt/torso, rather than the hand-dependent silhouette centre.
  const anchorX = [140, 134, 126, 122][column] / 256 * cellWidth;
  const centre = 360 - (1 - ease(t / 1050)) * 610 + ease((t - 5350) / 1100) * 610;
  const sourceInset = 2;

  // Always replace the full frame. Never dissolve/stack poses or sample a neighbour.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.scale(canvas.width / 720, canvas.height / 720);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(image,
    column * cellWidth + sourceInset, row * cellHeight + sourceInset,
    cellWidth - sourceInset * 2, cellHeight - sourceInset * 2,
    centre - (anchorX - sourceInset) * scale, 660 - (374 / 384 * cellHeight - sourceInset) * scale,
    (cellWidth - sourceInset * 2) * scale, (cellHeight - sourceInset * 2) * scale);
  ctx.restore();
}
