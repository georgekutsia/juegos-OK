---
name: game-art
description: Generate or edit bitmap art for this children's games project from a plain-language brief. Use for game cards, backgrounds, characters, objects, scenes, sprites, and other visual assets; maintain the project's playful visual style and optionally save and connect the final asset to a game when requested.
---

# Game Art

Create polished, child-friendly raster artwork. Use the built-in image generation tool for all new artwork and edits; do not substitute CSS, SVG, or placeholder graphics when a bitmap asset is requested.

## Intake

Extract the asset type, intended game or screen, subject, style, orientation, use of text, background need, colors, and reference images. Ask only when a missing decision materially affects the output. Otherwise use these defaults:

- playful, warm children’s illustration;
- bright but balanced colors;
- no text, logos, or watermarks;
- clear central subject with generous padding;
- square composition for game cards.

## Workflow

1. For a game-card request, inspect the relevant category entries in `src/data/gamesData.js`, the existing card component, and any local project art before generating. Treat them as the project style reference; match the shared child-friendly visual language without copying a specific artist or copyrighted character.
2. Write a production-oriented prompt that states intended use, subject, medium, composition, palette, and explicit avoid-list.
3. Generate with the built-in image tool. For an edit, include the target image through the supported image-edit workflow and state the visual invariants that must remain unchanged.
4. For simple transparent-background requests, generate on a flat chroma-key background, remove the key locally, and validate the alpha result. Ask before using a CLI fallback for true/native transparency.
5. Inspect the result for composition, child-friendly presentation, subject accuracy, readable silhouette, unwanted text, and suitability at the intended card or screen size. Iterate with one focused change when needed.
6. If the asset is project-bound, save the selected final image in `public/img/games/<kebab-case-game-name>/` with a descriptive, non-destructive filename such as `memory-card.png`. Create that folder when needed. Do not overwrite an existing asset unless explicitly asked.
7. Only update `gamesData.js` or a consuming component when the user specifically asks to connect the asset. Then verify its category, translation key, loading, alt text, and responsive crop.

## Prompt template

Use this structure when it helps:

```text
Use case: illustration-story
Asset type: <game card, background, sprite, etc.>
Primary request: <what to draw>
Style/medium: warm, playful children’s illustration
Composition/framing: <square/wide/portrait; subject placement>
Color palette: <requested colours>
Constraints: <must include or preserve>
Avoid: text, logos, watermarks, frightening imagery, busy borders
```

## Handoff

Report the final prompt, whether the asset is preview-only or saved to the project, its final path if saved, and whether it was connected to a game. State any remaining visual limitation.
