---
name: create-game
description: Add a new game to this React/Vite project in its correct category, with the correct screen access, data entry, reusable components, routes, and established visual animations. Use when the user asks to create, add, place, connect, or verify a game, especially after specifying its game type and category.
---

# Create Game

Create games as first-class entries in the existing game catalogue. Before changing files, inspect the closest implemented game in the requested category and follow its current pattern.

## Project map

- Category screens: `src/screens/game-screens/*GameScreen.jsx`.
- Game components: `src/components/games/<game-name>/`.
- Shared component exports: `src/components/index.js`.
- Catalogue images and names: `src/data/gamesData.js`.
- Category routes: `src/Routers.jsx`.
- Category screen exports: `src/screens/index.js`.
- UI text and translations: `src/language/esp.jsx` and `src/language/ger.jsx` when introducing text keys.

Categories currently map to `questionGames`, `puzzleGames`, `drawGames`, `sportGames`, and `soundGames` in `gamesData`. Each category screen maps a card index to the same index in its `gameComponents` array. Keep the image and name arrays aligned with that array; a mismatch opens the wrong game or the loader fallback.

## Workflow

1. Confirm the requested category and gameplay. If the category is named, use its existing screen; do not create a new route. If it is new, ask before adding a new category route and navigation.
2. Inspect one or two existing games of the same category, including their component, CSS, import/export path, state handling, return behavior, data entry, and translation keys.
3. Create the game in `src/components/games/<kebab-case-name>/` with its scoped CSS, following the closest existing component's structure. Reuse shared controls such as return, timer, next, solution, title, or loader components when suitable.
4. Reuse the closest established animation and interaction pattern. Do not copy global keyframe names into a new stylesheet without checking for collisions; use a game-specific name for genuinely new motion. Support reduced motion when adding continuous or substantial animation.
5. Add the component export in `src/components/index.js`.
6. Add the game card image and its name key to the requested category arrays in `src/data/gamesData.js`, at the same position as the rendered component.
7. Add the rendered component at that exact index in the matching category screen's `gameComponents` array, passing `returnToScreen={handleReturn}` when the game needs to return to its catalogue.
8. Add translation keys in both language files if the game name or UI needs new visible text. Use existing naming conventions.
9. Do not change `src/Routers.jsx` or `src/screens/index.js` for a game in an existing category. Update them only for an approved new category.

## Required checks

- Verify component imports and barrel exports resolve.
- Verify the card can be selected in the intended category and opens the intended component, not `LoaderCarComponent`.
- Verify the return action restores the category screen.
- Verify catalogue image/name arrays and `gameComponents` stay intentionally index-aligned.
- Run `npm run lint` and `npm run build` after implementation; fix errors caused by the change.
- Review desktop and mobile layout, interaction, loading/error behavior for used assets, and keyboard access.
- State which category, files, access path, reused component/animation, and checks were completed.
