# Reading and navigation: audit, direction, and implementation

Status: Direction A selected under founder-delegated design judgment. The founder then expanded implementation to every route in both modes, explicitly preserving the home-screen doodle. This supersedes the initial pilot-only delivery boundary below; the initial audit and mockup comparison remain as design provenance.

## Brief and evidence boundary

Help general readers understand the project's conclusions and help technical readers locate and compare the supporting record. Preserve substantive information, knowledge status, stable fragment routes, the October 1 dossier, static GitHub Pages hosting, and the accepted Public editorial visual language. The initial request used Lessons as a pilot; the subsequent explicit instruction authorizes the same reading improvements throughout all 15 routes in both modes.

The public repository was freshly cloned from `main` at `e5daab4` on October 16, 2026 UTC. GitHub's bounded open-PR inventory returned no open PRs. The latest main merge preserves top-of-page route navigation and skip-link handling; these are explicit regression constraints.

This is Tier 1 design judgment because information architecture, hierarchy, and audience-specific presentation need decisions. No model switch or delegation is claimed. The settled implementation is Tier 2 work; Tier 1 independent review checks navigation and content boundaries. The active runtime performed implementation; no implementation-model switch is claimed.

Binding guidance read: Tiny Custom Stories DesignPhilosophy and DesignLanguage, the Project Story Sync skill, public README, wireframes, screenshot guidance, and the published Sprint 3 field notes. Applicable principles: calm pacing; warmth with clarity; progressive guidance and return orientation; honest status; structural accessibility; mobile recomposition; evidence over taste. Palette, Fraunces/Nunito Sans/DM Mono families, flat original diagrams, quiet borders, and selective offset accents remain. No visual-language exception is proposed.

Public claims are taken from current public material. This task does not refresh private project state, activity statistics, release claims, or product decisions. Prototype copy is proposed wording, not new factual evidence. Complete qualification and content preservation require a source-to-pilot mapping at implementation.

## Audit method

Inspected the route table, shared layout, both reading presentations, CSS, tests, public documentation, and current public site. Visited all 15 routes in both modes at desktop and 390px mobile width, inspecting rendered headings, page dimensions, section navigation, and overflow. Inspected representative desktop/mobile screenshots of What we learned. Heights below are observed layout diagnostics, not reading-time or usability measurements; they depend on viewport, loaded fonts, and browser settings. No interviews, usability participants, task-success research, or comparative productivity measurement occurred.

All 30 route/mode combinations lacked an in-page navigation landmark. No horizontal document overflow appeared at 390px; this does not prove every interactive or zoom state is accessible. Six deeper routes intentionally share their presentation across modes.

| Route                          | Story readability issue                                                                             | Builder readability issue                                                                      | Candidate extension after pilot                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Home `/#/`                     | Long opening journey and several equally emphatic explanations                                      | Route directory and architecture invitation compete with the core message                      | One opening takeaway, then a short reading-path chooser                                 |
| Product `/#/product`           | Generic-personalization example, evolving child context, modes and refusals need a clearer sequence | Definition and role cards lack an at-a-glance relationship                                     | Example → implication → boundary; preserve parent/child distinction                     |
| Journey `/#/journey`           | Eight narrative steps need a compact route map and current step                                     | Five hand-offs and definitions provide no persistent orientation                               | Numbered journey map; nearby definitions; visible intended-versus-delivered distinction |
| Development `/#/development`   | Evolution, privacy checkpoint, sprints and working record share emphasis                            | Sprint status, privacy planning, evidence and working-record links are intermixed              | Separate chronology, current status, and supporting records                             |
| Architecture `/#/architecture` | Conceptual explanation competes with a detailed embedded explorer                                   | Large diagram and capability/status prose require repeated context recovery                    | Concise responsibility overview; labeled explorer and status/evidence sections          |
| Delivery `/#/delivery`         | Workflow explanation has repeated process framing                                                   | Statistics, CI and integration rules lack section access; ~9,074px mobile                      | Overview, dated activity, workflow, verification and limits with local navigation       |
| Learnings `/#/learnings`       | ~11,903px mobile; 7 field notes plus 10 lessons repeat integration, scope and coordination themes   | ~12,629px mobile; shared field notes plus 6 build lessons and long reflections; no local index | Pilot: thematic chapters in Story; grouped reference in Builder                         |
| Decisions `/#/decisions`       | Shared working-record presentation is appropriate, but ~17,713px mobile is difficult to browse      | Entry cards have status labels but no section index or comparison aid                          | Index by subject and knowledge state; preserve all entries and provenance               |
| Roadmap `/#/roadmap`           | Shared deeper record mixes progression with privacy planning                                        | Outcome gates, exceptions and vocabulary lack orientation                                      | Outcome overview with explicit gates and linked supporting plans                        |
| Sprint 1 `/#/sprint-one`       | Shared evidence chapter needs current state before narrative                                        | Large intro competes with open-gate conclusion                                                 | Compact status summary, implementation, evidence and remaining gate                     |
| Sprint 2 `/#/sprint-two`       | Synthetic/local success must remain distinct from real-family release                               | Capability detail, demonstration and temporal definitions lack section access                  | Separate demonstrated outcome, mechanism, evidence and later release review             |
| Sprint 3 `/#/sprint-three`     | Scope reset, reusable earlier work and remaining integration are hard to compare                    | Several status layers and a long intro need explicit hierarchy                                 | Current checkpoint versus earlier work; implementation/evidence/open gate               |
| Design `/#/design`             | Three expressive principles read well individually but lack a compact overview                      | Formula, palette, themes and continuity need a reference index                                 | Preserve examples; group tokens, component rules and design rationale                   |
| Questions `/#/questions`       | Shared deeper record needs an overview of unresolved subjects                                       | Question/meaning rows need stable entry access                                                 | Subject index; explicit unresolved labels and supporting context                        |
| Library `/#/library`           | Public boundary and PDF explanation compete with curation narrative                                 | Short route still spends much space introducing the topic                                      | Concise curation summary; visible omissions and dated PDF boundary                      |

On desktop, the Learnings Builder title measured 123.2px, field-note lesson headings 39.2px, and the page approximately 7,096px tall at the inspected wide viewport. The Story presentation was approximately 7,318px. The issue is hierarchy and orientation, not a target page-height reduction.

## Two directions

### A: Chapters and margin notes — recommended

[Desktop and mobile mockups, both modes](reading-review/direction-a.jpg).

Story has five takeaway-led chapters: finish one journey; test the assembled product; coordinate shared resources; make tools earn their place; prepare for real families. A calm introduction states the main message and qualification. A chapter rail provides local navigation and a current-location treatment. One diagram, timeline, or comparison clarifies the main relationship in each chapter. Optional field notes sit directly beneath the conclusion they support.

Builder has a concise overview and visible reference navigation separating implementation status, architecture boundaries, evidence/lessons, confirmed decisions and unresolved questions. Lessons are organized by theme. Main text states what broke and what changed; nearby notes identify evidence and limits. Readers can open more than one supporting note for comparison. On phones, reference notes follow their associated lesson and the rail becomes a labeled local navigation control with current-location text.

Benefit: fits both requested reading purposes, keeps an essay's continuity, and avoids giving every fact a card. Risk to test: five chapter labels must still help readers locate individual lessons. Provide direct lesson links inside the chapter index and preserve the same lesson identifiers across modes.

### B: Field guide and lesson ledger

[Desktop and mobile mockups, both modes](reading-review/direction-b.jpg).

Story begins with a six-lesson directory, then uses dated field notes and paired conclusions. Builder begins with a comparison ledger of lesson, change and evidence/limits; records open below the relevant index. Mobile rows recompose into labeled records. An index-return affordance retains the selected lesson.

Benefit: efficient targeted lookup and explicit comparison. Cost: more navigation before the narrative and more work to preserve comparison context on a phone. Current mockups illustrate the selected record rather than implementing a complete directory. All lessons must remain in the document in an eventual implementation; selection cannot unmount or filter away the rest.

Both boards are illustrative excerpts. Global menu actions, complete directories, scroll tracking and cross-mode lesson restoration are implementation work, not proven functionality. Fixed-size preview frames are review-board viewports, not proposed fixed-height product panels.

## Content conservation plan

Consolidate repetition by meaning, preserving each substantive detail and qualification:

- Journey/scope: original Ready-outcome friction, October 7 dependency-versus-parent-journey problem, scope reset, task/epic/development/outcome distinction, smaller checkpoint and deferred capability boundaries.
- Verification: browser-CI expense, task-local versus manual epic checks, mocked-versus-real integration proof, optional browser evidence and actual protection caveat.
- Coordination: shared GitHub budget and snapshot limitations, shared-host contention, branch ownership, stopped sessions, handoffs and current-source verification.
- Tools and models: Graphify hold, Archify's narrow role, sunk-cost rule, capability routing, synthetic model configuration, proposed extra planning stage and unmeasured benefits.
- Reality frontier: AI laboratory and pre-launch learning rationale, specialist-agent experiment and non-novelty/non-superiority caveats, parent comprehension/story value unknowns, live-provider/release/data-transfer limits, staging/cost/observability/recovery/rollback work.

Keep consequential limits visible alongside the conclusion; disclosure is only for supplementary history and supporting detail. Do not imply that a retrospective is user research or that workflow changes produced measured savings.

## Native-first implementation proposal

No dependency is proposed for the pilot. Use semantic sections, real links, CSS layout, native disclosure where useful, and a small current-section observer. All content remains mounted. Provide Expand all supporting notes for predictable Find across browsers, and expand detail for direct lesson links and printing. Verify actual browser Find; merely keeping text in the DOM does not establish discoverability. Multiple notes can stay open. No nested accordion, autoplay, slide stepping, fixed-height reading panels, or scroll interception.

| Option                                                                           | Concrete benefit                                                        | Integration cost                                                         | Accessibility / pilot judgment                                                                                            |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Native HTML/CSS                                                                  | Readable document, keyboard links and disclosure; no runtime dependency | Small route-aware anchor, print and current-location logic               | Recommended. Check naming, focus, Find, reflow, print and return behavior explicitly                                      |
| [Radix Accordion](https://www.radix-ui.com/primitives/docs/components/accordion) | Controlled disclosure behavior and documented keyboard support          | New dependency and controlled state; ensure closed content stays mounted | Native disclosure suffices. An accordion still needs content, print and Find verification                                 |
| [Scrollama](https://github.com/russellsamora/scrollama)                          | Scroll-triggered step observation                                       | New dependency and step lifecycle wiring                                 | No animated storytelling requirement justifies it here. Observer must indicate location without moving focus or scrolling |
| [MiniSearch](https://lucaong.github.io/minisearch/)                              | Client-side full-text indexing and ranked search                        | Content indexing, result UI, excerpts, update policy and test scope      | Consider separately if a proven navigation gap remains; search results need keyboard and screen-reader design             |
| [Reveal.js](https://revealjs.com/)                                               | Presentation mechanics and slide navigation                             | Would reshape document navigation and reading layout                     | Slide mechanics conflict with natural scrolling for this pilot; not selected                                              |

Reference for native disclosure: [HTML details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details). Library capabilities were checked against their primary documentation. No package was added.

The existing fragment router needs deliberate support for section addresses without treating them as unknown routes. Preserve all route-only addresses and the `#main-content` skip-link exception. Preserve page navigation starting at the top; section navigation must remain within the page. Modified-link behavior and history/back/forward must be checked where affected. Existing site-wide CSS should remain unchanged except for narrowly scoped pilot accommodation where necessary for local sticky navigation.

## Pilot verification and rollout

After direction selection, implement Learnings only. First map every original paragraph/lesson to its destination and distinguish consolidation from omission. Use stable lesson identifiers and one source of factual content where practical; mode changes alter presentation without changing knowledge status.

Walkthrough tasks, performed by the designer/engineer rather than research participants:

1. On entry, identify the main message and status limitation from both modes.
2. Jump directly to a named lesson from local navigation and from a copied URL; verify current-location indication and focus.
3. Inspect supporting detail, open another note for comparison, then return to the lesson/index without losing context.
4. Switch mode at that lesson; verify its semantic location is preserved.
5. Verify keyboard operation, visible focus, mobile menu/Escape, same-page links, route navigation, skip link, Back/Forward, Find with closed detail, expand-all, print, reduced motion, zoom and reflow.

Run repository verify on the final source; inspect desktop, tablet and narrow phone screenshots in both modes, including detail-open and long-navigation states. Screenshots are appearance evidence only; label screen-reader and cross-browser coverage limits honestly. Review the complete final diff, check current main/open PRs again, and open one focused public-repository PR. No merge or deployment is requested.

Extend proven patterns in small follow-ups: (1) Delivery and Development to test status-heavy material; (2) sprint chapters and Architecture to test gates and diagrams; (3) Decisions/Roadmap/Questions to test reference density; (4) remaining product/journey/design/library/home pages. Promote only patterns that survive the pilot; verify route compatibility and content conservation for each page.

## Checks at design-review stage

- Pinned Node 24.20.0 and npm 11.19.0 verified.
- `npm ci` completed. npm reported two existing high-severity dependency advisories; no dependencies were changed during design exploration.
- Baseline `npm run verify` passed: formatting, lint, TypeScript, production build, two test files and 25 tests.
- Both direction boards rendered and screenshots visually inspected with desktop and 390px mobile frames, in Story and Builder.
- This section records the initial design-review stage. Implementation and current evidence are recorded below.

## Selected direction and sitewide delivery

The founder delegated the choice of visual direction, then explicitly requested implementation across every page instead of stopping at Lessons. Direction A supplies the shared reading structure. “What we learned” is grammatical; “Lessons” is a clearer, shorter navigation label. The established `/#/learnings` route stays valid.

Every page now separates its opening takeaway from its browsable body. The shared reading shell indexes real headings, shows chapter links and a current-location treatment, and offers a labeled native topic selector for individual entries. Selecting an option does not navigate until Go is activated. Narrow layouts use an expandable local menu; its overlay does not move the content when a selection closes it. The existing global menu, Escape behavior, mode control, skip link and page-top navigation remain.

Titles are shorter and topic-led where the existing wording was indirect. Body copy remains at comfortable reading widths. Repeated informational cards become quieter rows or panels, while linked cards, status labels and diagrams retain their distinct meaning. Builder pages keep dates, implementation vocabulary, architecture, evidence, decision status, and unresolved questions. Decisions gain semantic headings and entry lookup; Roadmap gets an explicit sprint-gate section; Questions uses real headings for each unresolved matter. Both home doodles remain in their original component markup and original illustration CSS.

Lessons groups the complete seven Sprint 3 field notes and six technical build notes into five chapters. The ten former Story summaries are consolidated into those themes: browser cost and stopped jobs; real integration evidence; API limits; tool pilots; authorization/source boundaries; live-AI/staging concerns; task versus feature success; cache versus authority; outcome-first reconciliation; synthetic model configuration versus safety. Founder learning, experiment qualifications, live-provider/release limits, source-lifecycle deferral, and staging/recovery/rollback requirements remain. A source-to-theme map appears above. Supplementary field history is disclosed next to the lesson; consequential status and limitations remain visible. All notes remain mounted and multiple notes may be open.

### Section-address contract

- Route-only addresses are unchanged and still open at the top.
- Section addresses use the existing fragment route, for example `/#/learnings?section=finish-one-journey&mode=story`.
- Mode is included in newly shared section addresses so another reader's saved preference cannot silently change the destination. Plain page links retain the chosen preference.
- Shared topics use explicit semantic keys when headings differ between views. Before switching modes, the current visible topic is captured rather than replaying the last clicked address.
- Truly mode-specific topics fall back to the other view's overview with a visible explanation and an accurate replacement address.
- Same-page section links, same-address return links, Back/Forward and copied addresses are handled separately from full page navigation. Scrolling only updates the position indicator; it does not move focus or rewrite history.
- Existing explicit heading identifiers are retained where present. New text-derived identifiers are stable until their heading changes; future editorial changes must retain a published identifier or provide an alias.

### Verification boundary

The documented walkthrough is performed by the designer/engineer. It is not user research, participant task-success data, proof of comprehension, or measured delivery improvement.

Current responsive evidence and exact checks are recorded in ScreenshotEvidence.md. The static dossier and its generator were not changed. No private project data, statistics refresh, policy adoption, deployment, or release claim is part of this change.

The remaining improvement work is evaluation after review: observe whether real readers identify the takeaway and find a named topic, especially in Decisions and the longer reference pages. Promote additional abstractions or search only if that evidence identifies a concrete unmet need. There are no unconverted website routes in this delivery.

## Approved desktop density and Story evidence follow-up

The founder authorized a further sitewide laptop composition pass and asked Story to include the build statistics and design values already available in Builder. This is a presentation change using the existing dated public snapshot, not a project-state refresh.

Above 950px, the shared shell uses a narrower section rail and gutters, a takeaway beside its introduction, paired independent directory/decision/sprint records, and supporting evidence beside its conclusion. Workflow rows pair their title and explanation. Above 1200px, lesson takeaways sit beside summaries, figures span the document, and supporting notes can be compared in two columns. Text retains its reading measure; the page retains the accepted maximum width. Below 951px, the established phone composition remains.

`BuildActivity` shares all snapshot counts, dates, scope and historical/epic-integration limitations across Story and Builder. Story presents it before the human-directed workflow. `DesignFoundations` shares the eight principles, approximate 70/20/10 restraint guide, three type families, seven named palette values, surface themes and component examples. These are accepted design values; the proportions are not measured research results. No dependency or visual-language exception was added. Home retains its original doodle.

New content parity and shared-topic continuity regressions accompany screenshot review. An independent review caught palette cell overlap and a missing workflow heading after the moved snapshot; both were corrected. The exact final checks and visual coverage are recorded in ScreenshotEvidence and the PR.

## Explicitly approved fluid desktop frame

After the density follow-up, the founder identified that the outer laptop margins were still too large. The proposed correction was to widen the desktop frame while constraining individual paragraphs; “Then fix it” explicitly approved that change. This supersedes the prior maximum-page-width statement for screen viewports of 1200px and above. It is a focused, founder-approved exception to DesignLanguage's 80rem page cap, not a new palette, typography, illustration or component system.

Root cause: the 80rem frame remained 1280px wide at a measured 1728px viewport, leaving roughly 224px on each side before 32px internal padding. The frame now uses available screen width with 24–48px responsive gutters (approximately 35px at 1728px). Header/footer align to those gutters. Ordinary prose remains constrained to 65ch; navigation, evidence columns and figures use the wider frame. The rule is screen-only, so print sizing is unaffected, and begins at 1200px so the praised phone/tablet composition remains unchanged.

This is Tier 2 implementation of an explicitly settled layout correction. Applicable principles are warmth with clarity, comfortable reading measures, responsive recomposition and orientation. No content, routes, snapshot values, component interactions, dependency or doodle changes were necessary. Because this is declarative CSS, rendered geometry and screenshot comparison provide proportionate verification rather than an artificial CSS unit test.
