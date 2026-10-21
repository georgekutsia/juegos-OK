import { useEffect, useState } from 'react';

export const okLoaderIntroMs = 1000;

// Inspect the actual rendered game, including SVG artwork and puzzle backgrounds.
const getGameImageSources = root => {
  const sources = new Set();
  const add = source => {
    if (source && !source.startsWith('#')) sources.add(new URL(source, document.baseURI).href);
  };
  for (const element of [root, ...root.querySelectorAll('*')]) {
    if (element.closest('.ok-game-loader')) continue;
    if (element instanceof HTMLImageElement) {
      element.loading = 'eager';
      add(element.currentSrc || element.getAttribute('src'));
    } else if (element.localName === 'image') {
      add(element.getAttribute('href') || element.getAttribute('xlink:href'));
    }
    const background = getComputedStyle(element).backgroundImage;
    for (const match of background.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g)) add((match[1] ?? match[2] ?? match[3]).trim());
  }
  return sources;
};

export default function useGameLoading(screenRef) {
  const [status, setStatus] = useState('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const root = screenRef.current;
    if (!root) return undefined;
    let disposed = false;
    let finished = false;
    let frame;
    let introDone = false;
    let fontsDone = !document.fonts;
    const assets = new Map();
    const hiddenChildren = new Map();
    setStatus('loading');
    root.setAttribute('aria-busy', 'true');
    root.classList.add('game-screen--loading');

    const restoreChildren = () => {
      for (const [element, original] of hiddenChildren) {
        element.inert = original.inert;
        if (original.hidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', original.hidden);
      }
    };
    const hideChildren = () => {
      for (const element of root.children) {
        if (element.classList.contains('ok-game-loader') || hiddenChildren.has(element)) continue;
        hiddenChildren.set(element, { inert: element.inert, hidden: element.getAttribute('aria-hidden') });
        element.inert = true;
        element.setAttribute('aria-hidden', 'true');
      }
    };
    const scheduleScan = () => {
      if (disposed || finished) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    };
    const track = source => {
      if (assets.has(source)) return;
      const image = new Image();
      const asset = { image, status: 'pending' };
      assets.set(source, asset);
      const settle = state => {
        if (disposed) return;
        asset.status = state;
        scheduleScan();
      };
      image.onload = async () => {
        try {
          if (typeof image.decode === 'function') await image.decode();
          settle('ready');
        } catch { settle('failed'); }
      };
      image.onerror = () => settle('failed');
      image.src = source;
    };
    const scan = () => {
      if (disposed || finished) return;
      hideChildren();
      const sources = getGameImageSources(root);
      sources.forEach(track);
      if (!introDone || !fontsDone || [...sources].some(source => assets.get(source).status === 'pending')) return;
      const failed = [...sources].some(source => assets.get(source).status === 'failed');
      root.setAttribute('aria-busy', 'false');
      if (failed) { setStatus('failed'); return; }
      finished = true;
      restoreChildren();
      root.classList.remove('game-screen--loading');
      root.focus({ preventScroll: true });
      setStatus('ready');
    };

    const observer = new MutationObserver(scheduleScan);
    observer.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ['src', 'srcset', 'href', 'xlink:href', 'style', 'class'] });
    root.addEventListener('load', scheduleScan, true);
    root.addEventListener('error', scheduleScan, true);
    if (attempt) {
      for (const image of root.querySelectorAll('img')) {
        if (image.getAttribute('src')) image.src = image.currentSrc || image.src;
      }
      for (const image of root.querySelectorAll('image')) {
        const source = image.getAttribute('href') || image.getAttribute('xlink:href');
        if (source) { image.removeAttribute('href'); image.setAttribute('href', source); }
      }
      for (const element of root.querySelectorAll('*')) {
        if (!getComputedStyle(element).backgroundImage.includes('url(')) continue;
        const previous = element.style.getPropertyValue('background-image');
        const priority = element.style.getPropertyPriority('background-image');
        element.style.setProperty('background-image', 'none');
        element.getBoundingClientRect();
        if (previous) element.style.setProperty('background-image', previous, priority);
        else element.style.removeProperty('background-image');
      }
    }
    const introTimer = setTimeout(() => { introDone = true; scheduleScan(); }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : okLoaderIntroMs);
    document.fonts?.ready.then(() => { fontsDone = true; scheduleScan(); });
    hideChildren();
    scheduleScan();

    return () => {
      disposed = true;
      clearTimeout(introTimer);
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.removeEventListener('load', scheduleScan, true);
      root.removeEventListener('error', scheduleScan, true);
      for (const { image } of assets.values()) { image.onload = null; image.onerror = null; }
      restoreChildren();
      root.removeAttribute('aria-busy');
      root.classList.remove('game-screen--loading');
    };
  }, [attempt, screenRef]);

  return { status, retry: () => setAttempt(previous => previous + 1) };
}
