# Public Project Story documentation

This directory explains the public Tiny Custom Stories project-story site in a format that can be read without opening the application.

The public site is a multi-route single-page application. A route is a stable browser address that presents one topic at a time while the application remains loaded. Existing September routes remain valid; newer development and architecture routes extend the story without replacing its earlier chapter.

## What is documented here

- [Wireframes](Wireframes.md) describe the information architecture, conceptual architecture, and intended responsive layouts in accessible text diagrams.
- [Screenshot evidence](ScreenshotEvidence.md) records reviewed visual states and the conditions under which they were captured.
- The [Public Project Dossier](../../public/documents/tiny-custom-stories-project-dossier.pdf) is a portable companion at a stable path. It supports the website rather than replacing the website's semantic, responsive version.

These documents describe the public-information experience only. They do not expose the private implementation repository, adopt policy from exploratory material, or publish security-sensitive operating detail.

## Design continuity

The September 24 update is an additive evolution of the existing site.

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
- question definitions   - Story Lifecycle
- eligibility/pacing     - Context Selection
- bounded follow-ups     - Story Generation
        |                    |
        +---------+----------+
                  |
                  v
      Family-scoped documents + private media
```

Story Generation is deliberately extractable later, but the Alpha default remains the existing web/API deployables until operational evidence justifies worker/service extraction. MCP remains an optional adapter rather than the business or authorization boundary.

## Maintenance rule

When a public-site route, hierarchy, responsive behavior, or knowledge-status claim changes:

1. update the relevant wireframe and public documentation;
2. preserve old fragment routes where practical;
3. review whether visual evidence needs recapture;
4. verify the stable dossier path and public links;
5. check that planned work has not been presented as completed work;
6. review the change for private material and attack-relevant detail.

Screenshots are explanatory documentation assets, not automated pixel-comparison baselines.
