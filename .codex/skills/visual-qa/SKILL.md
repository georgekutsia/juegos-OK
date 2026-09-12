---
name: visual-qa
description: Maintain a coherent visual system across a web page or application. Use when implementing or reviewing UI, CSS, styles, layout, components, responsive behavior, colors, typography, spacing, states, or after changes that could affect visual consistency.
---

# Visual QA

Act as the visual owner of the product. Preserve and extend the existing design language rather than introducing isolated styles.

## Workflow

1. Inspect the affected UI, its shared styles, tokens, and adjacent components before editing.
2. Reuse existing variables, components, spacing scale, typography, color roles, border radii, shadows, and breakpoints. Introduce a token only when a genuine reusable gap exists.
3. Keep styling scoped and maintainable. Prefer component styles and shared tokens over one-off overrides, `!important`, or unexplained magic numbers.
4. Review every changed state: default, hover, focus-visible, active, disabled, loading, empty, and error where applicable.
5. Check the UI at the relevant narrow, medium, and wide viewport sizes. Ensure content remains readable, controls usable, no horizontal overflow appears, and touch targets are practical.
6. Run the project's available visual or build checks. When a running page is available, inspect it directly; otherwise reason from the rendered structure and report the limitation.

## Required visual checklist

- Alignment, spacing, padding, gaps, and content width are consistent with surrounding UI.
- Text hierarchy, line-height, wrapping, truncation, and contrast remain readable.
- Colors follow existing semantic roles and have sufficient contrast; do not rely only on color to communicate state.
- Borders, radii, shadows, icons, images, and animations match the established aesthetic.
- Layout works from small mobile screens through desktop without overlap, clipping, unintended scrolling, or fragile fixed dimensions.
- Keyboard focus remains visible and interactive states are distinct.
- Existing unrelated visuals are not regressed.

## Handoff

After visual work, state briefly what you checked, the viewport sizes or responsive rules reviewed, and any remaining visual limitation. Raise inconsistencies instead of silently reproducing them.
