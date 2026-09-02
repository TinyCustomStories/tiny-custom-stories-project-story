# Tiny Custom Stories — public project story

This public repository contains the independently buildable project-story website for Tiny Custom Stories. It explains the project’s direction, demonstrated Sprint 0 foundation, active Sprint 1 boundary, decisions, roadmap, design language, and open questions in plain language.

It is not the Tiny Custom Stories parent/child application. The private product repository, future application, backend, internal research, and operational documentation are intentionally outside this repository.

The published site is expected at [tinycustomstories.github.io/tiny-custom-stories-project-story](https://tinycustomstories.github.io/tiny-custom-stories-project-story/). Public pages use static-host-safe fragment routes, for example [Decisions](https://tinycustomstories.github.io/tiny-custom-stories-project-story/#/decisions).

The [Public Project Dossier](public/documents/tiny-custom-stories-project-dossier.pdf) is a visually reviewed 15-page companion to the responsive website. It explains the product direction, Sprint 0 evidence, Sprint 1 account and family-mode boundary, seven-sprint roadmap, architecture principles, design philosophy, visual recipe, and open questions while preserving the public-safety boundary below.

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

The generator writes `public/documents/tiny-custom-stories-project-dossier.pdf`. Render and visually inspect all pages after changing the generator or its content; successful generation alone does not prove that the fixed layout is correct. The responsive website remains the primary version for semantic navigation and text reflow.

## GitHub Pages deployment

The deployment workflow runs after changes to the default branch that affect the site or the workflow. It builds with the repository base path and deploys only the disposable `dist/` artifact to GitHub Pages. The site has no product APIs, secrets, or environment configuration.

## Public-content curation

This repository is a deliberate public summary, not an automatic export from private project materials. Before publishing a change:

1. Preserve the source statement’s knowledge status: confirmed decision, verified fact, proposal, assumption, or open question.
2. Rewrite it for a general audience without upgrading uncertainty into a promise.
3. Exclude private links, credentials, tokens, environment values, family or child information, personal data, private research, and sensitive implementation detail.
4. Review every new public text and visual asset for those boundaries.
5. Obtain founder approval before publishing a material content or visual change.

The public information architecture, wireframes, and screenshot-evidence guidance live in [documentation/PublicProjectStory](documentation/PublicProjectStory/README.md).
