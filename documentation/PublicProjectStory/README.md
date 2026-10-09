# Public Project Story documentation

This directory explains the public Tiny Custom Stories project-story site in a format that can be read without opening the application.

The public site is a multi-route single-page application with two reading modes over the same stable routes. **Story mode** is the default and explains the product, evolution, build experiment, failures, and lessons as a narrative for a general reader. **Builder mode** preserves the existing technical pages with implementation status, capability boundaries, delivery evidence, and working-record detail. Switching mode does not change the current route. Sprint 1 keeps its stable deep link, while Sprint 1, Sprint 2, and Sprint 3 remain grouped beneath Development story; the accepted-but-not-started Sprint 4 plan is carried in the public Decision and Roadmap records until implementation work begins.

## October 9 evidence checkpoint

The public story now reflects the newest protected Studio start/setup slices, accepted epic-scoped task-to-checkpoint integration, the switch to manual epic-only hosted product CI, bounded coordinator/agent GitHub reads, and founder-operated synthetic text-model configuration. These are presented with separate labels for delivered work, accepted directions, and release gates.

The Builder-mode delivery snapshot is dated **October 9, 2026**: 1,515 commits reachable from the main product `development` branch; 614 PRs created and 578 merged; 454 issues (385 task-labeled; 371 closed and 83 open); four product workflow definitions. Commit totals were validated by GitHub's development-branch commit listing, and issue/PR totals by GitHub issue-search counts. The workflow-run count remains the **October 5** historical checkpoint, not an October 9 measurement.

Product task PRs no longer imply automatic hosted CI. On the accepted workflow, reviewable task changes use local checks; when an epic is ready for a reviewed checkpoint, affected non-browser suites must pass through manual dispatch on its exact final head. Browser testing is optional epic-level evidence. The separate public-story PR CI continues unchanged. These pages are not an audit of actual repository protection settings.

New provider wording describes **intent**, not delivery: OpenRouter is the first planned synthetic text adapter behind a founder-controlled server configuration. Story quality and real-family transfer still have distinct gates.

The site preserves both reading modes, all existing routes, responsive editorial presentation, the public-safe architecture explorer, and the unchanged October 1 fixed-layout PDF companion.

## What is documented here

- [Wireframes](Wireframes.md) describe the information architecture, conceptual architecture, and intended responsive layouts in accessible text diagrams.
- [Screenshot evidence](ScreenshotEvidence.md) records reviewed visual states and the conditions under which they were captured.
- [Architecture explorer](ArchitectureExplorer.md) defines the public-safe Archify derivative, stable asset paths, curation boundary, and refresh contract.
- The shared **Story / Builder** toggle is persistent across routes. Story mode supplies narrative versions of the primary public pages; Builder mode retains the detailed technical material, now refreshed through October 7.
- In Story mode, **How we build** explains the human workflow behind small tasks, specialist agents, repository-owned memory, review loops, testing, and documentation. In Builder mode it contains the dated, public-safe activity snapshot and the exact current delivery/verification system.
- The **What we learned** route separately holds engineering retrospectives, failed experiments, tool-pilot outcomes, founder learning, and the next unresolved delivery frontier so process mechanics and lessons do not compete on one page.
- **Decisions**, **Roadmap**, and **Open questions** remain stable public routes but are deliberately removed from the main header and linked contextually from Development story.
- The [Public Project Dossier](../../public/documents/tiny-custom-stories-project-dossier.pdf) is a portable companion at a stable path. It supports the website rather than replacing the website's semantic, responsive version.

These documents describe the public-information experience only. They do not expose the private implementation repository, adopt policy from exploratory material, or publish security-sensitive operating detail.

## Reading-mode rule

The two modes are not separate sites and must not drift into different factual realities. They share routes, project status, public-safety boundaries, and the same underlying evidence.

- **Story mode** may simplify terminology, use examples, explain motives, and spend more words on cause-and-effect.
- **Builder mode** may use exact capability names, status vocabulary, dated evidence, and working-record links.
- A Story-mode simplification must never upgrade incomplete work into a completed claim.
- A Builder-mode detail should not be copied into Story mode merely because it exists; the narrative should include it only when it helps the reader understand why the product or process changed.
- Working-record routes can remain Builder-like even when reached from Story mode. They are the receipts underneath the narrative.

## Design continuity

The October 6 reading-mode refresh is an additive evolution of the September 24/25 site and the October 1 evidence refresh.

The public story remains the **Public editorial** surface from the accepted Tiny Custom Stories design language: warm paper-like surfaces, deep ink, restrained playful accents, large editorial type, visible knowledge status, strong hierarchy, accessibility, and responsive recomposition.

The rule is:

**same Tiny Custom Stories design DNA → surface appropriate to its purpose**

The public story should not mechanically copy the child library or protected parent experience. New development, architecture, roadmap, and status content should feel like the same public site becoming richer.

Before replacing an established route, component, pattern, or artifact, determine whether newer accepted evidence actually supersedes it. Otherwise prefer reuse and targeted extension.

## Vocabulary

- **Public project story**: A founder-reviewed explanation of the project for a general audience.
- **Knowledge status**: A label that states whether a public entry is a confirmed decision, verified fact, proposal, assumption, or open question.
- **Outcome gate**: Evidence that a sprint's accepted family/product outcome meets its transition criteria. Closed issues are supporting evidence, not proof by themselves.
- **Capability boundary**: A named owner and application contract. It does not automatically imply a separate network service.
- **Temporary sequencing exception**: A documented decision permitting bounded later-sprint work while an earlier gate remains explicitly open.
- **Fragment route**: A page address such as `/#/decisions`. The browser keeps the static GitHub Pages document path while the application presents the requested page.
- **Delivery snapshot**: A dated aggregate of main-repository activity such as commits, pull requests, issues/tasks, sprint count, and GitHub Actions runs. It is not live telemetry or a productivity score.
- **Portable companion**: The generated fixed-layout PDF at the stable public path.

## Current public-safe architecture story

The public site describes the following accepted responsibility boundaries without exposing internal operational secrets:

```text
Child / parent browser
        |
        v
Web experience
  - child-safe read-only surface
  - protected parent surface
        |
        v
Application API
  - family authority
  - application contracts
        |
        +--------------------+
        |                    |
        v                    v
Child Map Discovery      Story capabilities
- versioned data packs   - Story Lifecycle
- indexed candidates     - Context Selection
- deterministic scoring  - Story Generation
- safe context/provenance
        |                    |
        +---------+----------+
                  |
                  v
      Family-scoped documents + private media
```

Sprint 2’s accepted synthetic/local outcome is now demonstrated, while qualified real-family release review remains a separate later gate. Story Lifecycle also has integrated protected authoring slices: Story Studio home/exact-story navigation, direct page-text editing, deterministic cover editing, and Earlier Versions preview/restore. Context Selection and Generation still have incomplete policy, API, provider, and integration work. Story Generation remains deliberately extractable later, but the Alpha default stays physically simple until operational evidence justifies worker/service extraction.

## Maintenance rule

When a public-site route, reading mode, hierarchy, responsive behavior, or knowledge-status claim changes:

1. update the relevant wireframe and public documentation;
2. preserve old fragment routes where practical;
3. review whether visual evidence needs recapture;
4. verify the stable dossier path and public links;
5. check that planned work has not been presented as completed work;
6. review the change for private material and attack-relevant detail;
7. refresh the dated delivery snapshot only from aggregate repository evidence, never by exposing a private token or private issue content in the public browser;
8. when the canonical architecture materially changes, refresh the public Archify source and generated HTML under the curation rules in [ArchitectureExplorer.md](ArchitectureExplorer.md).

Screenshots are explanatory documentation assets, not automated pixel-comparison baselines.
