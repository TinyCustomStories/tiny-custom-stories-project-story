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

## October 7 visual-review requirements

The content update intentionally reuses the established components, palette, typography, cards, status treatments, and responsive rules rather than introducing a redesign.

Before merge or publication, inspect at representative desktop and narrow-mobile widths:

- Home: October 7 checkpoint wording, the demonstrated Sprint 2 local outcome, current Story Studio progress, and the accepted-but-not-started Visual Theme System direction.
- Development story: the five-step evolution through the accepted Sprint 4 direction, equal active Sprint 1/2/3 chapter cards, and clear separation between accepted future scope and implementation progress.
- Sprint 2: demonstrated synthetic/local outcome, deterministic Discovery evolution, temporal examples, and explicit qualified-release boundary.
- Sprint 3: integrated authoring slices, landed/underway/later flow, and explicit generation/assisted-change/approval non-completion wording.
- Architecture: data-driven Discovery, partial Story Lifecycle implementation, accepted-but-incomplete Context Selection/Generation boundaries, and Visual Theme System shown as accepted but not implemented.
- How we build: the explicitly dated October 7 repository snapshot, 4-main-workflow count, separately dated October 5 workflow-run history, expanded idea → decision → issue → review loop, and agent-assisted/repository-owned methodology.
- What we learned: candid “what broke / what changed” experiment cards, the ongoing specialist-agent experiment boundary, the founder's “AI laboratory” learning reflection, and the “real users / real AI / first staging deployment” frontier.
- Roadmap: preserved deeper route with Sprint 1 through Sprint 3 status, Sprint 4 renamed to Visual Theme System with "Accepted direction - not started", and Sprint 2 synthetic/local closure not mistaken for real-family Alpha readiness.
- Sprint 1: open-gate wording, evidence list, and public-boundary note.
- Design: continuity wording while preserving the existing visual recipe.
- Decisions: larger public-entry set and long source/related text.
- Navigation: desktop keeps the full top-level route set; at 1250px and below only the page links collapse behind an accessible hamburger button. The Tiny Custom Stories brand must remain visibly present and must not be squeezed away by the persistent Story/Builder control. Story/Builder stays visible outside the hamburger; at very narrow widths the brand gets its own row and the reading-mode switch plus menu recompose below it. The opened menu uses large tap targets, Escape closes it, and there is no horizontal overflow. Sprint 1/2/3 plus Decisions/Roadmap/Open questions remain reached through Development rather than crowding the header.

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

## October 16 reading redesign evidence

The founder expanded the selected Direction A from the Lessons pilot to all 15 routes in both modes. These screenshots are public-only opening excerpts of the actual production build served under `/tiny-custom-stories-project-story/`. They were visually inspected; screenshot pixel dimensions can differ from the measured CSS viewport because of browser scaling. Cropping removes only later page content, not controls or sensitive material.

| View                  | Measured CSS viewport | Inspected evidence                                                                                                          |
| --------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Home, Story           | 1440 × 1000           | [Original doodle, quieter opening and chapter rail](reading-review/implemented/home-story-desktop.jpg)                      |
| Home, Story           | 390 × 844             | [Stacked opening with the original doodle](reading-review/implemented/home-story-mobile.jpg)                                |
| Lessons, Story        | 1440 × 1000           | [Takeaway, qualification, chapter index and visible status](reading-review/implemented/lessons-story-desktop.jpg)           |
| Lessons, Story        | 390 × 844             | [Mobile section menu, complete-record control and status](reading-review/implemented/lessons-story-mobile.jpg)              |
| How we build, Builder | 1440 × 1000           | [Reference navigation and dated activity snapshot](reading-review/implemented/delivery-builder-desktop.jpg)                 |
| How we build, Builder | 390 × 844             | [Recomposed statistics and section menu](reading-review/implemented/delivery-builder-mobile.jpg)                            |
| Decisions, Builder    | 1440 × 1000           | [Status definitions, entry lookup and public provenance](reading-review/implemented/decisions-builder-desktop.jpg)          |
| Architecture, Builder | 768 × 1024            | [Tablet navigation, current limitations and preserved explorer](reading-review/implemented/architecture-builder-tablet.jpg) |

During iteration, full-page screenshots of all 30 route/mode combinations were captured at 1440px and 390px and inspected in contact sheets, with individual images inspected for the representative states above. DOM checks across all routes at 320, 390, 768, 1024 and 1440 CSS pixels found no horizontal document overflow; one page title and local section access were present. This is not a claim that every hover, menu, embedded explorer or screen-reader state was visually tested.

A rendered text-contrast sweep, excluding the unchanged decorative home artwork, identified inherited low-contrast numeric labels and one knowledge-status pairing. They now use approved ink/plum text pairings. A repeat sweep found no flagged visible text pairs in the reading surface. This lightweight computed-color check is not a full WCAG audit and does not test image contrast or every interactive state.

### Reader-task walkthrough

- **Identify the main message:** inspected the opening takeaway, supporting explanation and visible knowledge/status limitations in both modes. This is designer judgment, not a measured comprehension result.
- **Jump to a named lesson:** chapter links and the native topic selector reach real headings, update the location treatment, and focus the destination. Topic selection itself does not navigate until Go.
- **Inspect supporting detail:** native notes expand inline; more than one can remain open. The complete-record control expands all 13 supplementary notes without unmounting content.
- **Return without losing orientation:** chapter/overview returns, including a same-address return, were tested. Natural scrolling changes only the indicator; switching mode captures the current topic. Copied links retain their addressed mode instead of depending on a saved preference. Truly view-specific topics explicitly return to overview.
- **History:** route-only Back, same-route section history, cross-mode exclusive-topic history, and cross-route Back were checked. Full page navigation still resets to the top. The skip-link exception remains.
- **Keyboard:** automated Escape/focus regression covers local-menu trigger restoration; the global menu's existing Escape behavior remains covered. Native links, selector/Go and disclosure are used; visible focus is preserved. This does not constitute an assistive-technology session.
- **Find and print:** all content is mounted. Expand all makes supporting text visibly available for Find across browsers; print events expand all notes and restore prior choices, covered by an automated regression. Actual native browser Find UI and print-dialog/pagination were not verified in this shared desktop session. No dossier generation or PDF QA was needed because neither content nor generator changed.
- **Motion:** no scrollytelling/animation library or new motion was added. Functional jumps are immediate and the existing reduced-motion CSS remains.

Independent code review found and verified fixes for route-only Back, mode-dependent section addresses, cross-mode hash listener ordering, and same-address chapter returns. It also checked content consolidation and found all seven field notes, six technical build notes, and substantive release/safety/evidence/measurement qualifications retained.

Repository verification uses pinned Node 24.20.0/npm 11.19.0. `npm ci`, repository `verify`, and a production build with the GitHub Pages base path were run. Exact final check totals and PR state are recorded in the PR. Existing dependency advisories reported by npm were not changed by this dependency-free reading redesign.

No user participants were recruited. No task-success rate, time saving, safety certification, accessibility certification, or comparative productivity result is claimed.

## Laptop density and Story evidence follow-up

The founder-approved density pass was checked across all 15 routes in both modes at 1440, 1024 and 390 CSS pixels (90 route/size/mode combinations). No horizontal document overflow was found. Lazy illustrations below the fold are not classified as broken before they load. The screenshot contact sheets were inspected for column balance and responsive composition; representative images were inspected individually. The home doodle remains. This is designer review and a walkthrough, not user research.

Story and Builder now share the complete existing dated build snapshot and design specification components. A native browser control check confirmed that selecting Build activity, switching mode, and returning to Overview preserves the expected section address and focus. The shared-topic regression also covers that sequence. Native Find UI, print pagination, assistive technology and other browsers retain the limits stated above.

| View                | Size        | Reviewed evidence                                                                                               |
| ------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| How we build, Story | 1440 × 1000 | [Dated statistics, qualifications and wider composition](reading-review/implemented/delivery-story-desktop.jpg) |
| How we build, Story | 390 × 844   | [Same evidence in the phone sequence](reading-review/implemented/delivery-story-mobile.jpg)                     |
| Design, Story       | 1440 × 1000 | [Shared design values and paired editorial composition](reading-review/implemented/design-story-desktop.jpg)    |
| Design, Story       | 390 × 844   | [Design proportions in the phone sequence](reading-review/implemented/design-story-mobile.jpg)                  |
| Decisions, Builder  | 390 × 844   | [Preserved reference reading on phones](reading-review/implemented/decisions-builder-mobile.jpg)                |

Home Story desktop/mobile, Lessons Story desktop/mobile, and Decisions Builder desktop opening excerpts in the implementation table were refreshed after the density pass. Screenshots are opening excerpts; complete-page captures were used during review. No new animation, disclosure behavior, library, private browser API or live telemetry was introduced.
