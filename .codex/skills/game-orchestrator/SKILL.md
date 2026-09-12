---
name: game-orchestrator
description: Plan, create, integrate, and release a new game in this React/Vite children's games project from a plain-language brief. Use when the user describes a game idea and wants end-to-end delivery, including correct category placement, assets, translations, visual consistency, accessibility, functional checks, and play-testing.
---

# Game Orchestrator

Own the full outcome. Turn a concise game brief into a correctly integrated, usable game while applying the relevant project workflows: creation, visual QA, translations, accessibility, assets, settings, functional quality, and play-testing.

## Intake

Extract: game type, category, core loop, audience, rules, success/finish condition, number of rounds or levels, supplied assets, audio needs, and any special visual direction.

Ask only when a missing decision would materially change the game. Otherwise make a conservative choice based on the closest existing game and state that choice in the handoff.

## Delivery sequence

1. Inspect the closest implemented game in the requested category and identify its screen, component pattern, assets, translations, and interaction/animation conventions.
2. Map the requested game to an existing category. For questions, puzzles, drawings, sports, or sounds, extend its current category screen. Ask before adding a new category, route, or navigation item.
3. Build the game component in the established location and reuse shared controls and proven interaction patterns. Keep the gameplay simple, clear, and appropriate for children.
4. Integrate it completely: component barrel export, category `gameComponents` position, matching `gamesData` image/name entries, translations in Spanish and German, and relevant assets.
5. Apply the visual, responsive, accessibility, and settings/persistence checks relevant to the game.
6. Verify the user journey: catalogue -> card -> game -> primary loop -> next/restart when provided -> return to catalogue. Test the language and viewport paths affected by the change.
7. Run `npm run lint` and `npm run build`. Fix issues introduced by the work, and report existing unrelated failures separately.

## Required release gates

- The category card opens the intended component and not a loader fallback.
- Catalogue images, name keys, and rendered component positions are index-aligned.
- Every visible new string exists in both `esp.jsx` and `ger.jsx`.
- Mouse/touch and keyboard interactions work; controls have clear labels, focus, and adequate mobile targets.
- Assets load, audio starts through user interaction, and timers/listeners/audio clean up when leaving the game.
- Styles follow the existing system and work on narrow and wide screens without clipping or horizontal overflow.
- The game returns safely to the category screen.

## Handoff format

Report: game and category, assumptions made, access path, files changed, assets/translations added, reused interaction or animation, checks run with results, and any remaining limitation. Do not call the work complete while a failure caused by this change remains.
