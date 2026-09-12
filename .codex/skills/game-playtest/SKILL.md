---
name: game-playtest
description: Play-test this React/Vite children's games app as an end user and report reproducible interaction defects. Use after changes to games, category screens, navigation, settings, language, responsive layouts, assets, audio, timers, or game flow; use when the user asks to test a game or verify the application works in the browser.
---

# Game Playtest

Test behavior, not implementation. Use the in-app browser and a local preview when available. Do not modify code unless the user asks to fix the findings.

## Core journey

1. Open the welcome screen and verify the main navigation is usable.
2. Visit the requested category or all changed categories: questions, sounds, sports, drawings, and puzzles.
3. Select the target game card and verify that it opens the intended game rather than a loading fallback.
4. Play the primary loop: begin, make a valid and an invalid/repeated interaction where relevant, advance, restart or complete, and return to the category.
5. Exercise relevant settings: language, character, colours, and persisted preference reloads.
6. Repeat the changed path in a narrow mobile viewport and a desktop viewport.

## Observe and record

- Broken navigation, blank views, error boundaries, failed images/audio, console errors, stuck states, incorrect randomization, stale timers, duplicate actions, and failure to return.
- Truncated or overlapping content, unusable tap targets, unexpected scrolling, and inaccessible interaction.
- Language changes that leave mixed language text or stale state.

## Reporting

For each issue, provide the shortest reproducible steps, expected behavior, actual behavior, severity, and affected viewport/language. Include screenshots when they materially clarify the issue. Separate confirmed defects from test limitations.
