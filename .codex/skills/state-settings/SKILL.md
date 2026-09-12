---
name: state-settings
description: Maintain reliable preferences, settings, and browser persistence in this React children's games project. Use when changing character selection, language, colors, background direction, timers, localStorage, Context state, settings UI, or behavior that must survive reloads.
---

# State and Settings

Treat saved preferences as user data. Preserve compatible values, validate untrusted browser data, and keep live UI state synchronized with persisted state.

## Project map

- Shared app state and colour defaults: `src/App.jsx` and `src/shared/context.js`.
- Settings components: `src/components/settings/`.
- Navbar character persistence: `src/components/navbars/main-navbar/`.
- Timer persistence: `src/components/timer/TimerComponent.jsx`.
- Saved browser keys include `primaryColor`, `secondaryColor`, `vertical`, `horizontal`, `selectedCreature`, `selectedCreatureIndex`, and timer-specific saved-time keys.

## Workflow

1. Identify every reader and writer for the affected state or local-storage key before editing.
2. Define a default and validate stored values before using them. Recover from absent, malformed, obsolete, or invalid values without crashing.
3. Update UI state immediately after a user action, then persist only the minimal stable data required for a reload.
4. Keep related values synchronized: selected character with navbar image/name, selected language with game data, and colour values with the rendered gradient and controls.
5. Make reset actions explicit and narrowly scoped. A timer reset must not remove unrelated saved timers or global preferences.
6. Clean up timers/listeners and avoid writes during render.

## Required checks

- Test a first visit, a changed preference, a page reload, and a corrupted/missing storage value for the affected feature.
- Check that changing one setting does not overwrite another.
- Check expected behavior in Spanish and German when language state is involved.
- Verify keyboard/mouse/touch access to settings controls and a clear reset affordance.
- Run lint and build after code changes; report pre-existing failures separately.

## Handoff

State the affected storage keys, defaults, migration or recovery behavior, persistence checks, and any residual compatibility concern.
