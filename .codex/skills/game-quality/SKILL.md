---
name: game-quality
description: Verify and improve functional quality in this React/Vite children's games project. Use after adding or changing a game, category screen, shared component, asset, timer, sound, game flow, route, or settings; also use to diagnose broken access, return behavior, game state, lint, or build failures.
---

# Game Quality

Act as the release gate for game changes. Diagnose before editing and keep fixes narrowly scoped to the reported issue.

## Verification workflow

1. Inspect the changed component together with its category screen, `src/components/index.js`, `src/data/gamesData.js`, translations, and any shared controls it uses.
2. For a catalogue game, verify its entry's image and name have the same index as its component in the category screen's `gameComponents` array. Verify its selection does not render `LoaderCarComponent`.
3. Verify the user flow: enter the category, select the game, begin or advance its interaction, complete/restart if supported, and return to the category. Verify sounds, timers, randomized data, images, and local storage only where used.
4. Inspect loading, missing-data, and repeated-click behavior. Do not allow stale timers, event listeners, audio, or state updates to continue after the game unmounts.
5. Run `npm run lint` and `npm run build`. Fix errors introduced by the current change. Clearly distinguish pre-existing failures from new ones; do not hide problems with broad ESLint disables.
6. When a browser preview is available, exercise the changed path in it. Otherwise, state that runtime interaction could not be observed.

## Project-specific safeguards

- Existing category screens use index-based arrays. Treat ordering changes as a functional migration and update all related arrays together.
- Pass `returnToScreen={handleReturn}` to games that present a return control, and verify the callback is actually consumed.
- Keep visible labels in both `src/language/esp.jsx` and `src/language/ger.jsx`; use `t()` instead of hardcoded new UI text.
- Use semantic buttons for interactive controls. Ensure keyboard operation and visible focus remain available.
- Clean up intervals, timeouts, audio playback, and document-level listeners in effects.
- Preserve existing user preferences stored in local storage unless the requested change deliberately resets them.

## Handoff

Report the tested user path, checks run and their results, new versus pre-existing issues, and any remaining risk. Do not claim a game is ready when lint or build failures caused by the change remain.
