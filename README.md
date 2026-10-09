# Tiny Custom Stories — public project story

This public repository contains the independently buildable project-story website for Tiny Custom Stories. The website now supports two ways to read the same project: **Story mode** leads with the product idea, evolution, experiments, failures, and founder learning in conversational language; **Builder mode** preserves the detailed implementation status, architecture boundaries, sprint evidence, delivery process, roadmap, decisions, and open questions.

It is not the Tiny Custom Stories parent/child application. The private product repository, backend, internal research, operational documentation, private issue links, and family data are intentionally outside this repository.

The published site is expected at [tinycustomstories.github.io/tiny-custom-stories-project-story](https://tinycustomstories.github.io/tiny-custom-stories-project-story/). Public pages use static-host-safe fragment routes. Existing routes remain stable, including [Decisions](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/decisions), [Roadmap](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/roadmap), [Open questions](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/questions), and the legacy [Sprint 1](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/sprint-one) deep link. The main header now stays focused on the explanatory story: [Development story](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/development) groups Sprint 1, Sprint 2, and Sprint 3 and links deeper to the working record; [How we build](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/delivery) explains the delivery system; and [What we learned](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/learnings) separately holds failures, experiments, and founder learning.

Story mode is the default. The Story / Builder toggle stays available in the shared header and preserves the current route, so a reader can move from a narrative explanation to the technical version of the same subject without starting over. Working-record routes such as Decisions, Roadmap, Open questions, and the Sprint chapters remain available beneath the primary narrative rather than being duplicated into a second site.

The [Public Project Dossier](public/documents/tiny-custom-stories-project-dossier.pdf) remains the fixed-layout companion at the same stable path. The current PDF is the **October 1 checkpoint**; the responsive website carries the newer October 7 evidence and remains the primary source for the current public narrative, semantic navigation, and text reflow.

## What changed in the October 9 delivery and Story Studio refresh

This update uses the Project Story Sync workflow and current October 8–9 repository evidence. It adds the next chapter rather than replacing the site's Story/Builder reading modes or editorial design.

- **Story Studio:** The site now describes merged protected profile-based entry, saved setup/purpose, and early feel/reading slices alongside direct page/cover editing and version restore. Complete Story Plan, generation, assisted revisions, approval, and the end-to-end Sprint 3 outcome remain open.
- **Delivery workflow:** Normal feature issues now have one intended owning epic, task PRs integrate into an epic branch, and coherent reviewed checkpoints integrate into `development`. The native hierarchy migration and broader rollout are not presented as universally finished.
- **CI cost:** The October 9 accepted product policy supersedes the earlier daily/monthly and task-hosted cadence: tasks receive local verification and substantive review; affected hosted suites are manual, epic-branch-only, and exact-head for checkpoints; hosted browser tests are optional. Actual required GitHub checks still apply. The separate public-story repository retains its own existing PR CI.
- **Coordination and learning:** The narrative now explains bounded Superset coordination, shared Projects snapshots, narrow request choices, live verification for important writes/merges, rate-limit pacing, and the lessons behind these tradeoffs. No measured API savings or always-on automation are claimed.
- **Text models:** The October 9 accepted direction is a founder-configured, provider-neutral synthetic text path with OpenRouter as the first intended adapter. This is not a shipped AI Lab, model leaderboard, default paid fallback, real-family transfer approval, or proof that live generation is complete.
- **Verified repository activity:** As of October 9, `development` has **1,515 reachable commits** (GitHub REST commit-list pagination), and repository issue search reports **614 PRs created / 578 merged**, **454 issues tracked** (**385 labeled task issues**, **371 closed / 83 open**), with **4 main product CI workflow definitions**. These are repository totals, not a productivity score. The previously verified **1,344 workflow runs / 941 successful** remain explicitly dated October 5 rather than being recomputed without evidence.
- **Compatibility:** Stable fragment routes, mobile brand and reading-mode placement, Sprint 1–3 hierarchy, private/public separation, public architecture explorer and its curated source, and the October 1 PDF dossier path/checkpoint remain unchanged. This refresh does not regenerate the dossier or export private issue content.

## What changed in the October 7 Visual Theme and statistics refresh

This refresh follows the repository's Project Story Sync workflow after the private product repository accepted the Sprint 4 **Visual Theme System** direction.

- Sprint 4 is no longer described simply as "Characters and illustrations." The accepted direction now centers on one versioned visual theme, a recurring visual cast, structured scene plans for the cover and pages, and replaceable renderers.
- The first Sprint 4 renderer is intentionally described as controlled, inexpensive, recoverable, and usable without reference photos or an external image provider. Richer AI-image generation, likeness, and print/premium renderers remain later paths behind their own privacy, safety, provider, and review gates.
- Sprint 4 is **not started**. Story Studio remains text-first, the unresolved Sprint 1 evidence still must be revisited before Sprint 4 execution, and no external image provider or likeness flow is presented as approved by this direction.
- The planned Sprint 4 demonstration should show one coherent theme across the cover and ten pages, stable recurring visual elements, one structured scene plan per page, page-scoped retry, versioned recovery, and a complete no-photo path.
- The intended parent flow is deliberately simple: start from the current story, choose or accept a theme, review the recurring cast, review page visuals, retry one page when needed, and approve a visual version.
- Visual outputs stay candidates until current Story/Theme/Cast/Scene versions and parent review accept them. Retrying one page must not silently redesign unrelated pages.
- The renderer roadmap is intentionally layered: controlled rendering first; richer model-assisted illustration, optional resemblance-based characters, and print-quality rendering later behind the same Visual Theme contracts.
- Pricing, tier names, entitlements, release sequencing, physical service extraction, and provider choices remain open. The architecture does not require another deployed service merely because visual rendering may become more sophisticated.
- The public architecture narrative now names the Visual Theme System as an accepted logical capability while preserving Story Lifecycle as the owner of Story text/revision truth and preserving the rule that logical boundaries do not automatically mean more network services.
- The October 7 repository snapshot is now 1,305 commits on `development`, 541 pull requests created / 507 merged, 422 issues tracked, 363 task issues, 334 closed / 88 open issues, and 4 main product workflow definitions.
- Pull-request, issue, and task totals were recomputed in bounded date partitions so GitHub search result caps could not silently truncate the totals. The commit count carries forward the previously verified October 5 baseline plus 43 later development commits.
- Repository-wide workflow-run totals cannot be fully recomputed from the available repository interface, so the site deliberately keeps **1,344 workflow runs / 941 successful** labeled as the older October 5 checkpoint instead of presenting them as fresh October 7 telemetry.
- The Story / Builder reading model, stable fragment routes, paper-and-ink editorial design, public-safety boundary, and October 1 dossier URL/checkpoint are preserved.

## What changed in the October 6 reading-mode refresh

- Added a persistent **Story / Builder** reading-mode switch without changing the established fragment routes.
- Story mode is now the default for the primary narrative routes: Home, The product, How it works, Development story, Architecture, How we build, What we learned, Design, and Public library.
- Builder mode preserves the pre-existing October 5 technical pages and working-record depth instead of replacing the material already in the site.
- Story mode expands the human narrative: the limits of three-fact personalization, why the Child Map became temporal, why context permission is separate from generation, how the project evolved, how AI-assisted delivery is being tested, what failed, and why staging/real users remain the next uncomfortable frontier.
- Sprint chapters, Decisions, Roadmap, and Open questions remain the detailed record underneath both modes.

## What changed in the October 5 evidence refresh

This refresh follows the repository’s Project Story Sync workflow and preserves the existing routes, paper-and-ink editorial design, public-safety boundary, and dated delivery snapshot.

- Sprint 2’s accepted **synthetic/local outcome is demonstrated** as of October 4. The closeout combines the 23-point evidence record, assembled web/API/data-store proof, real private-media-store evidence, final automated verification, founder local review, and a founder-completed VoiceOver walkthrough.
- Sprint 2 closure is deliberately narrower than real-family Alpha readiness. Qualified privacy/legal/security/child-safety review remains a later release-readiness gate before any real-family Alpha collection or use.
- Sprint 3 now has visible integrated authoring work rather than only lower-level foundations: protected Story Studio home and exact-story navigation, direct Draft page-text editing, deterministic cover editing, and Earlier Versions preview/restore are in the product.
- Controlled personalization selection/summary, paragraph-change input, continuity-decision, and final-review components also exist with synthetic responsive/accessibility evidence. Their remaining APIs, policy gates, workspace integration, generation behavior, and approval mutations are still described as unfinished.
- The accepted child-profile direction now requires one protected saved name and completed-years age from 2–12 before Child Map or Story Studio. Additional Child Map enrichment remains optional, with no birth-information requirement or per-story name/age override.
- Current shipped Story routes have an authorization evidence matrix, but the public story does not use that evidence to claim unfinished Sprint 3 endpoint families are complete.
- The aggregate GitHub delivery snapshot was recomputed from live repository evidence on **October 5, 2026**: 1,262 commits on `development`, 497 pull requests created / 464 merged, 401 issues tracked, 347 task issues, 305 closed / 96 open issues, 4 workflow definitions, 1,344 workflow runs, and 941 successful runs.
- **How we build** is now intentionally about the delivery system itself: the dated repository snapshot, small reviewable tasks, CI gates, browser evidence, agent-assisted execution, review/fix/re-review, and outcome evidence.
- **What we learned** is a separate route for the retrospective material: browser CI that became too expensive at PR cadence, green isolated tests that did not prove the assembled system, parallel agents competing for one GitHub API budget, and tooling pilots where adoption was allowed to stop when the value did not justify the complexity.
- The learning route also explains why TCS has become a practical AI-learning laboratory for its founder. The idea predates the current build, but active development created a reason to read, test, and evaluate new AI models, agent patterns, tools, and engineering methods almost every day. Pre-launch flexibility makes experimentation comparatively cheap, while the public narrative keeps an explicit boundary: novelty must earn its complexity, and production paths should become more conservative as real users approach.
- It also names the next uncomfortable milestone: the founder has never deployed this product into a staging environment or run its generative-AI path for real users. The public story treats that as an exciting unresolved engineering frontier, with provider transfer, safety/quality, cost, deployment, recovery, observability, and release evidence still required before confidence is earned.
- The generated dossier remains the October 1 fixed-layout checkpoint in this refresh; its stable URL is preserved rather than publishing an uninspected PDF revision.

## Historical: what changed in the October 1 refresh

The September 24/25 edition already introduced Sprint chapters, Architecture, How we build, and the dated delivery snapshot. This refresh preserves that structure and updates what the repository now proves:

- Sprint 1 still has substantial implementation and evidence while its outcome gate remains explicitly open.
- Sprint 2 is now substantially implemented rather than merely accepted scope: core temporal Child Map flows, current/history views, Right Now and Then & Now, protected lifecycle work, data-driven deterministic Discovery, private-media work, and deletion infrastructure have landed.
- Discovery moved from compiled seed questions to versioned structured content packs, immutable catalog snapshots, indexed candidate retrieval, deterministic metadata/context/history scoring and diversity, safe contextual templates, and bounded catalog provenance.
- Sprint 2 still has an open outcome gate. Remaining product slices, final cross-cutting evidence, qualified privacy/legal/security/child-safety review, and the final integrated demonstration are not presented as complete.
- The conservative Sprint 2 private-Alpha privacy/consent/retention boundary is now a confirmed product decision, while qualified review remains a separate readiness requirement before real-family use.
- Authenticated Home remains an intentional child-safe destination. Sign-in may still land in the Story Library, while Home ↔ Library navigation is an accepted direction with implementation/regression work still underway.
- Sprint 3 now has concrete foundation implementation: pre-generation StoryRequest persistence, protected summary reads, provider-neutral blueprint/validation contracts, generation-operation state, architecture tests, deterministic page rendering, and original decoration assets. Full generation, Story Studio editing, approval, and the outcome gate remain ahead.
- The main repository delivery snapshot was recomputed from current evidence: 981 commits, 354 pull requests created, 329 merged, 289 issues tracked, 263 task issues, 188 closed / 101 open issues, 3 main product CI workflows, 754 workflow runs, and 602 successful runs as of October 1, 2026.
- The engineering-process story now also reflects explicit dependency chains, parallel isolated task execution, backlog stewardship, systematic debugging, verification-before-completion, and review/fix/re-review loops without turning the site into an AI-tool advertisement.

## Public architecture explorer

The existing Architecture route now includes a curated interactive Archify view at the stable static path `public/architecture/system.html`. Its maintained public-safe source is `public/architecture/system.architecture.json`, and the Home route uses `public/architecture/preview.svg` as a lightweight teaser instead of loading the full explorer immediately.

The public artifact is derived from the canonical architecture knowledge in the private product repository, but private Archify output is **not published verbatim**. Source paths, commit provenance, environment details, credentials, and attack-relevant implementation detail are removed before publication. Implementation status remains explicit so accepted or open boundaries are not presented as shipped product.

Maintenance and Project Story Sync rules are documented in [ArchitectureExplorer.md](documentation/PublicProjectStory/ArchitectureExplorer.md).

## Run locally

Requires Node 24.20.0 and npm 11.19.0.

```shell
npm ci
npm run dev
```

## Verify

```shell
npm run verify
```

This checks formatting, linting, TypeScript, the production build, and tests.

## Regenerate the dossier PDF

Install the PDF-specific dependency, then generate the stable public document:

```shell
python3 -m pip install -r requirements-pdf.txt
npm run generate:pdf
```

The generator writes `public/documents/tiny-custom-stories-project-dossier.pdf`. Render and visually inspect all pages after changing the generator or its content; successful generation alone does not prove that the fixed layout is correct.

## GitHub Pages deployment

The deployment workflow runs after relevant changes to the default branch. It builds with the repository base path and deploys only the disposable `dist/` artifact to GitHub Pages. The site has no product APIs, secrets, or environment configuration.

The stable dossier path is preserved. When the generator changes, deployment regenerates the PDF before the site build so the published companion reflects the same public story as the website.

## Design and compatibility rule

This repository evolves the existing public project story; it does not redesign it from scratch.

Prefer:

**existing foundation → additive evolution → targeted refinement**

over:

**delete → regenerate → redesign**

Preserve established typography, color, spacing, cards, status labels, fragment routes, accessibility behavior, responsive composition, public-editorial character, dossier URL, CI, and deployment behavior unless accepted project evidence explicitly supersedes them.

The public story shares Tiny Custom Stories design DNA with the product while remaining its own editorial surface. It should not look identical to either the child or protected-parent application.

## Public-content curation

This repository is a deliberate public summary, not an automatic export from private project materials. Before publishing a change:

1. Preserve the source statement’s knowledge status: confirmed decision, verified fact, proposal, assumption, or open question.
2. Rewrite it for a general audience without upgrading uncertainty into a promise.
3. Exclude private links, credentials, tokens, environment values, family or child information, personal data, private research, and attack-relevant implementation detail.
4. Review every new public text and visual asset for those boundaries.
5. Obtain founder approval before publishing a material content or visual change.

The public information architecture, wireframes, screenshot-evidence guidance, design-continuity rule, and architecture diagrams live in [documentation/PublicProjectStory](documentation/PublicProjectStory/README.md).
