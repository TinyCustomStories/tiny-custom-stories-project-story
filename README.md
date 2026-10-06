# Tiny Custom Stories — public project story

This public repository contains the independently buildable project-story website for Tiny Custom Stories. It explains the project’s direction, demonstrated Sprint 0 foundation, substantial-but-open Sprint 1 family-access boundary, demonstrated synthetic/local Sprint 2 Child Map and Discovery outcome, active Sprint 3 Story Studio authoring work, roadmap, design language, delivery process, and open questions in plain language.

It is not the Tiny Custom Stories parent/child application. The private product repository, backend, internal research, operational documentation, private issue links, and family data are intentionally outside this repository.

The published site is expected at [tinycustomstories.github.io/tiny-custom-stories-project-story](https://tinycustomstories.github.io/tiny-custom-stories-project-story/). Public pages use static-host-safe fragment routes. Existing routes remain stable, including [Decisions](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/decisions) and the legacy [Sprint 1](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/sprint-one) deep link. The main header no longer privileges one sprint: [Development story](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/development) groups Sprint 1, Sprint 2, and Sprint 3 as equal chapters, while [How we build](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/delivery) shows the repository activity and verification workflow behind them.

The [Public Project Dossier](public/documents/tiny-custom-stories-project-dossier.pdf) remains the fixed-layout companion at the same stable path. The current PDF is the **October 1 checkpoint**; the responsive website carries the newer October 5 evidence and remains the primary source for the current public narrative, semantic navigation, and text reflow.

## What changed in the October 5 refresh

This refresh follows the repository’s Project Story Sync workflow and preserves the existing routes, paper-and-ink editorial design, public-safety boundary, and dated delivery snapshot.

- Sprint 2’s accepted **synthetic/local outcome is demonstrated** as of October 4. The closeout combines the 23-point evidence record, assembled web/API/data-store proof, real private-media-store evidence, final automated verification, founder local review, and a founder-completed VoiceOver walkthrough.
- Sprint 2 closure is deliberately narrower than real-family Alpha readiness. Qualified privacy/legal/security/child-safety review remains a later release-readiness gate before any real-family Alpha collection or use.
- Sprint 3 now has visible integrated authoring work rather than only lower-level foundations: protected Story Studio home and exact-story navigation, direct Draft page-text editing, deterministic cover editing, and Earlier Versions preview/restore are in the product.
- Controlled personalization selection/summary, paragraph-change input, continuity-decision, and final-review components also exist with synthetic responsive/accessibility evidence. Their remaining APIs, policy gates, workspace integration, generation behavior, and approval mutations are still described as unfinished.
- The accepted child-profile direction now requires one protected saved name and completed-years age from 2–12 before Child Map or Story Studio. Additional Child Map enrichment remains optional, with no birth-information requirement or per-story name/age override.
- Current shipped Story routes have an authorization evidence matrix, but the public story does not use that evidence to claim unfinished Sprint 3 endpoint families are complete.
- The aggregate GitHub delivery snapshot was recomputed from live repository evidence on **October 5, 2026**: 1,262 commits on `development`, 497 pull requests created / 464 merged, 401 issues tracked, 347 task issues, 305 closed / 96 open issues, 4 workflow definitions, 1,344 workflow runs, and 941 successful runs.
- **How we build** now keeps selected failures and experiments in the public narrative: browser CI that became too expensive at PR cadence, green isolated tests that did not prove the assembled system, parallel agents competing for one GitHub API budget, and tooling pilots where adoption was allowed to stop when the value did not justify the complexity.
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
