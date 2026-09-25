# Tiny Custom Stories — public project story

This public repository contains the independently buildable project-story website for Tiny Custom Stories. It explains the project’s direction, demonstrated Sprint 0 foundation, substantial-but-open Sprint 1 family-access boundary, evolving Sprint 2 Child Map Discovery capability, accepted Sprint 3 Story Studio architecture, roadmap, design language, and open questions in plain language.

It is not the Tiny Custom Stories parent/child application. The private product repository, backend, internal research, operational documentation, private issue links, and family data are intentionally outside this repository.

The published site is expected at [tinycustomstories.github.io/tiny-custom-stories-project-story](https://tinycustomstories.github.io/tiny-custom-stories-project-story/). Public pages use static-host-safe fragment routes. Existing routes remain stable, including [Decisions](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/decisions) and the legacy [Sprint 1](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/sprint-one) deep link. The main header no longer privileges one sprint: [Development story](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/development) groups Sprint 1, Sprint 2, and Sprint 3 as equal chapters, while [How we build](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/delivery) shows the repository activity and verification workflow behind them.

The [Public Project Dossier](public/documents/tiny-custom-stories-project-dossier.pdf) remains the fixed-layout companion at the same stable path. The responsive website is the primary source for semantic navigation and text reflow.

## What changed in the September 24 update

The earlier September edition described Sprint 0 and the accepted Sprint 1 boundary. The current edition preserves that chapter and adds later evidence and accepted architecture:

- Sprint 1 now has substantial implementation, accessibility, regression, and end-to-end evidence, while its outcome gate remains explicitly open because a required provider proof is unresolved.
- A temporary sequencing exception allows Sprint 2 and Sprint 3 planning and implementation with synthetic inputs without treating Sprint 1 as passed.
- Sprint 2 now treats the Child Map as a temporal living record and makes Discovery a versioned capability with approved question definitions, typed answers, deterministic eligibility/pacing, bounded follow-ups, and a generic renderer.
- Sprint 3 now uses a canonical guided Story Studio composition workflow and separates Story Lifecycle, Story Context Selection, and Story Generation.
- Logical capability boundaries come before physical service extraction. Discovery and Story work can remain in the Alpha API process until operational evidence justifies worker/service boundaries.
- The existing paper-and-ink public-editorial design is preserved and extended rather than replaced.
- Sprint 1, Sprint 2, and Sprint 3 now appear as equal development-story chapters rather than giving Sprint 1 a unique top-navigation slot.
- A dated main-repository delivery snapshot makes the scale of the work visible: commits, pull requests, issues/tasks, sprint structure, workflow runs, and the CI/browser-evidence system.

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
