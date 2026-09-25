# Public Project Story screenshot evidence

This document records intentional visual checks for the public project-story site. Images use project-only, synthetic content; they were inspected before being added. They do not contain credentials, family information, child-identifying information, private links, or live product data.

## Existing reviewed states

The September 2 screenshots remain useful evidence of the design foundation that this update deliberately preserves.

| View      | Viewport             | What it demonstrates                                                                                               | Asset                                             |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| Home      | Desktop, 1440 × 1000 | Established public-editorial navigation, introductory hierarchy, dossier action, and paper-and-ink visual language | [home desktop](assets/home-desktop.png)           |
| Sprint 1  | Desktop, 1440 × 1000 | Established Sprint-page composition and public-safe family-mode explanation                                        | [Sprint 1 desktop](assets/sprint-one-desktop.png) |
| Design    | Mobile, 390 × 844    | Wrapped persistent navigation, editorial hierarchy, typography, and responsive design-language UI                  | [design mobile](assets/design-mobile.png)         |
| Decisions | Mobile, 390 × 844    | Wrapped navigation, readable page title, knowledge-status legend, and one-column presentation                      | [decisions mobile](assets/decisions-mobile.png)   |

## September 24 visual-review requirements

The content update intentionally reuses the established components, palette, typography, cards, status treatments, and responsive rules rather than introducing a redesign.

Before merge or publication, inspect at representative desktop and narrow-mobile widths:

- Home: updated Sprint 1 status and the expanded route directory.
- Development story: four-stage evolution, equal Sprint 1/2/3 chapter cards, and delivery-practice evidence panel.
- Sprint 2: canonical-scope status, living Child Map boundaries, and explanatory definitions.
- Sprint 3: canonical-workflow status, Story capability split, and open extraction wording.
- Architecture: Discovery/Story capability ownership and the public-safe system sketch.
- How we build: large-number activity cards, CI workflow explanations, and the issue → PR → evidence delivery loop.
- Roadmap: long status copy, especially Sprint 1 through Sprint 3.
- Sprint 1: open-gate wording, evidence list, and public-boundary note.
- Design: continuity wording while preserving the existing visual recipe.
- Decisions: larger public-entry set and long source/related text.
- Navigation: project-level routes wrapping without horizontal overflow, with Sprint 1/2/3 grouped under Development rather than appearing asymmetrically in the header.

If new screenshots are committed, use synthetic/public-only content and add them to the table below after inspection.

## Capture method

1. Run the independently buildable Vite application locally.
2. Use the real GitHub Pages base path when checking production behavior.
3. Open the named route at the target viewport.
4. Confirm the browser shows no private material, personal data, secrets, broken asset, or unexpected error state.
5. Check keyboard focus, route navigation, reflow, and horizontal overflow.
6. Capture the visible page and inspect the resulting image.
7. Update this document and the relevant wireframe when a material visual change has been reviewed.

These files are documentation references. They are deliberately not used as automated visual-regression snapshots.
