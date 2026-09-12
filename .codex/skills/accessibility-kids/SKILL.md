---
name: accessibility-kids
description: Make this children's games web app accessible, understandable, and safe to use for children and their adults. Use when creating or reviewing games, buttons, icons, images, audio, animations, forms, navigation, responsive UI, or interaction patterns; also use to audit keyboard, focus, contrast, motion, and screen-reader behavior.
---

# Accessibility for Kids

Prioritize clear, forgiving interaction: visible actions, large targets, predictable outcomes, and no reliance on a single sense or input method.

## Workflow

1. Inspect the affected flow with mouse/touch, keyboard, and screen-reader semantics in mind.
2. Use native semantic controls. Convert clickable images, `div`s, or icons to buttons/links when they trigger actions; avoid adding keyboard handlers as a substitute for correct elements.
3. Give controls meaningful accessible names. Use descriptive `alt` text for informative images and empty alt text only for decorative images. Do not use placeholders such as `"img-game"`, `"index"`, or a filename as final labels.
4. Ensure focus order matches visual order, focus is visible, dialogs manage focus and can close with Escape, and controls work with Enter/Space where native behavior applies.
5. Check text and control contrast, non-color state cues, readable type, large tap targets, and no accidental horizontal scrolling on small screens.
6. For timers, sound, animation, flashing, or auto-advancing content, provide clear control to start, pause, replay, stop, or extend time when appropriate. Respect `prefers-reduced-motion` for substantial or continuous motion.

## Project-specific checks

- Inspect the catalogue card, game screen, return control, settings, language change, audio button, and modal/popup when a changed game uses them.
- Keep game instructions short and visible before an action with consequences; do not depend only on color, sound, or a hovering gesture to explain a task.
- Keep the Spanish and German accessible labels synchronized through the translation dictionaries.
- Never add tracking, chat, external links, advertisements, or requests for personal data without explicit user authorization.

## Handoff

Report the tested interaction paths, issues fixed or found, and any limitation that needs visual or assistive-technology testing in a real browser.
