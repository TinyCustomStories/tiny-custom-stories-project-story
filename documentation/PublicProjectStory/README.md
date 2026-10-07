# Public Project Story documentation

This directory explains the public Tiny Custom Stories project-story site in a format that can be read without opening the application.

The public site is a multi-route single-page application. A route is a stable browser address that presents one topic at a time while the application remains loaded. The September routes remain valid; the October 5 refresh updates their evidence and status without replacing the established information architecture. Sprint 1 keeps its stable deep link, while Sprint 1, Sprint 2, and Sprint 3 are presented together beneath Development story instead of giving one sprint a unique header position.

## What is documented here

- [Wireframes](Wireframes.md) describe the information architecture, conceptual architecture, and intended responsive layouts in accessible text diagrams.
- [Screenshot evidence](ScreenshotEvidence.md) records reviewed visual states and the conditions under which they were captured.
- [Architecture explorer](ArchitectureExplorer.md) defines the public-safe Archify derivative, stable asset paths, curation boundary, and refresh contract.
- The **How we build** route contains the dated, public-safe activity snapshot from the main product repository and the current delivery/verification system. It is intentionally static rather than browser-connected to the private repository.
- The **What we learned** route separately holds engineering retrospectives, failed experiments, tool-pilot outcomes, founder learning, and the next unresolved delivery frontier so process mechanics and lessons do not compete on one page.
- **Decisions**, **Roadmap**, and **Open questions** remain stable public routes but are deliberately removed from the main header and linked contextually from Development story.
- The [Public Project Dossier](../../public/documents/tiny-custom-stories-project-dossier.pdf) is a portable companion at a stable path. It supports the website rather than replacing the website's semantic, responsive version.

These documents describe the public-information experience only. They do not expose the private implementation repository, adopt policy from exploratory material, or publish security-sensitive operating detail.

## Design continuity

The October 5 refresh is an additive evolution of the September 24/25 site and the October 1 evidence refresh.

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

When a public-site route, hierarchy, responsive behavior, or knowledge-status claim changes:

1. update the relevant wireframe and public documentation;
2. preserve old fragment routes where practical;
3. review whether visual evidence needs recapture;
4. verify the stable dossier path and public links;
5. check that planned work has not been presented as completed work;
6. review the change for private material and attack-relevant detail;
7. refresh the dated delivery snapshot only from aggregate repository evidence, never by exposing a private token or private issue content in the public browser;
8. when the canonical architecture materially changes, refresh the public Archify source and generated HTML under the curation rules in [ArchitectureExplorer.md](ArchitectureExplorer.md).

Screenshots are explanatory documentation assets, not automated pixel-comparison baselines.
