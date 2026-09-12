---
name: translations
description: Maintain Spanish and German translations in this React/i18next children's games project. Use when adding or changing visible UI text, game names, rules, instructions, categories, buttons, errors, settings, or language behavior; also use to audit missing, stale, or hardcoded translations.
---

# Translations

Treat Spanish and German as equally supported product languages. Preserve the current playful, child-friendly tone while keeping each translation idiomatic rather than word-for-word.

## Project map

- Translation dictionaries: `src/language/esp.jsx` and `src/language/ger.jsx`.
- i18next configuration: `src/language/i18next.jsx`.
- Components access text through `useTranslation()` and `t(key)` or the `t` value from `Context`.
- Game-card name keys are referenced in `src/data/gamesData.js` and rendered by category screens.

## Workflow

1. Search for every affected visible string, its current key, and consumers before editing.
2. Add or update the same key path in both dictionaries. Preserve nested-object structure where it already exists.
3. Use descriptive, stable camelCase keys. Reuse an existing key when its meaning is identical; do not reuse a key whose wording or intent differs.
4. Replace newly introduced hardcoded UI text with `t("key")`. Keep non-visible identifiers, class names, asset URLs, and data keys untranslated.
5. For new games, add the card name plus every instruction, state, action, error, accessibility label, and alternative text that users see.
6. Check both language views for missing-key output, uncomfortably long labels, wrapping, and interpolation or pluralization needs.

## Required checks

- Compare Spanish and German dictionaries for affected keys in both directions.
- Verify every affected key resolves through i18next.
- Check that game-card name keys in `gamesData.js` exist in both dictionaries.
- Verify punctuation, accents, grammar, and terminology. Use `Puzles`/`Puzzles` consistently within each language's established vocabulary.
- Do not silently correct unrelated copy unless the user requests a broader copy pass; report it instead.

## Handoff

State the keys added or changed, the visible areas verified in both languages, and any pre-existing missing or inconsistent content found.
