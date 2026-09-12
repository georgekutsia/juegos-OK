---
name: content-assets
description: Manage and verify game catalogue images, audio, and content assets in this React/Vite children's games project. Use when adding, replacing, auditing, or troubleshooting game cards, Cloudinary URLs, local images, audio files, alt text, asset loading, or image/audio data used by games.
---

# Content Assets

Keep every asset intentional, loadable, appropriately presented, and connected to the correct game.

## Project map

- Catalogue card images and name keys: `src/data/gamesData.js`.
- Local public images: `public/img/`.
- Local audio: `src/audio/`.
- Game component asset usage: `src/components/games/`.
- Category screens render cards from the `gamesData` arrays.

## Workflow

1. Identify the asset's consumer, category, and expected state before adding or replacing it.
2. For a catalogue game, add its image URL and translation name key in the category arrays in `gamesData.js`. Keep both arrays index-aligned with the category screen's `gameComponents` array.
3. Prefer existing asset sources and naming patterns. Do not replace an existing public asset or remote URL unless the user asks; add a new uniquely named file instead.
4. Verify local paths use the appropriate Vite/public convention and remote URLs load in the running application. Check image aspect ratio, crop, clarity, and mobile presentation.
5. For sound, verify format, user-initiated playback, replay/stop behavior, safe cleanup on unmount, and a meaningful visible and accessible label.
6. Use translated, descriptive alternative text for meaningful game imagery. Mark decoration appropriately rather than using generic placeholders.

## Required checks

- Check that every new card has an image, a valid translation key in both languages, and an implemented component at the matching index.
- Check no duplicate, unused, unexpectedly large, or broken asset was introduced.
- Verify fallback behavior or report when the design has no suitable fallback for a failed remote asset.
- Check image and audio behavior at desktop and mobile widths.
- State the asset source, consumer path, and verification result.
