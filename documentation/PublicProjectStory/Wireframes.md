# Public Project Story wireframes

These text wireframes make the public site structure reviewable in Markdown, including for readers who do not use images. They describe intended hierarchy and public-safe architecture, not a final visual specification.

## Site map

The main header stays focused on project-level subjects. Sprint-specific pages are grouped as chapters beneath Development story so Sprint 1 is not privileged over Sprint 2 and Sprint 3. The existing Sprint 1 deep link remains valid.

```text
Home (/#/)
├── The product (/#/product)
├── How it works (/#/journey)
├── Development story (/#/development)
│   ├── Sprint 1 (/#/sprint-one)          PRESERVED
│   ├── Sprint 2 (/#/sprint-two)          NEW
│   └── Sprint 3 (/#/sprint-three)        NEW
├── Architecture (/#/architecture)
├── How we build (/#/delivery)            NEW
├── Decisions (/#/decisions)
├── Roadmap (/#/roadmap)
├── Design (/#/design)
├── Open questions (/#/questions)
└── Public library (/#/library)
```

Every route has the same visible header, skip link, and footer. The active project-level page is marked in header navigation. Sprint chapter links are grouped inside Development story. Existing deep links continue to resolve.

## Development-story hierarchy

```text
Sprint 0
  outcome demonstrated
       |
       v
Sprint 1
  substantial implementation + evidence
  outcome gate still open
       |
       | temporary sequencing exception
       v
Sprint 2
  Child Map -> temporal living record
  Discovery -> versioned capability
       |
       v
Sprint 3
  guided Story Studio
  Lifecycle / Context Selection / Generation
       |
       v
Sprint 4+
  later outcome gates
```

The exception is part of the story, not hidden: Sprint 2/3 synthetic work may proceed without relabeling Sprint 1 as passed.

## Public-safe capability diagram

```text
+---------------------------+
| Child / parent experience |
+-------------+-------------+
              |
              v
+---------------------------+
| Application API           |
| family authority          |
+------+------+-------------+
       |      |
       |      +--------------------------------+
       v                                       v
+----------------------+          +---------------------------+
| Child Map Discovery  |          | Story capabilities        |
| questions            |          | Lifecycle                 |
| eligibility / pacing |          | Context Selection         |
| bounded follow-ups   |          | Generation                |
+----------+-----------+          +-------------+-------------+
           |                                    |
           +------------------+-----------------+
                              |
                              v
                  +-------------------------+
                  | Family-scoped storage   |
                  | documents + private     |
                  | media                   |
                  +-------------------------+
```

Logical separation does not mean every box is already a separately deployed service. Story Generation is designed so it can be extracted later if real operational needs justify it.

## Desktop layout

```text
+--------------------------------------------------------------------------------+
| Tiny Custom Stories                                  Home Product ... Library    |
+--------------------------------------------------------------------------------+
| EYEBROW                                                                        |
| Page title / clear topic statement                                             |
| Intro: what this page says and what it does not claim                         |
+--------------------------------------------------------------------------------+
| Page-specific readable content                                                 |
|                                                                                |
| Home: illustrated welcome + current gate status + route directory              |
| Product: roles + terms + child/parent mode boundary                            |
| Journey: discovery-to-approval hand-offs + capability sketch                  |
| Development: Sprint 0 -> Sprint 3 evolution + equal Sprint 1/2/3 chapter cards|
| Architecture: Discovery + Story ownership boundaries + extraction vocabulary  |
| How we build: dated GitHub stats + CI workflows + issue->PR->evidence loop     |
| Decisions: status legend + definitions + labeled public entries               |
| Roadmap: seven outcome gates + explicit Sprint 1 exception                    |
| Sprint 1: implemented boundary + open gate + evidence summary                 |
| Sprint 2: living Child Map + versioned Discovery scope                         |
| Sprint 3: Story Studio + Lifecycle / Context / Generation split                |
| Design: existing 70/20/10 language + palette + themes + continuity rule       |
| Questions: narrowed unresolved matters + how-to-read panel                    |
| Library: curation flow + public-safety definitions + stable PDF link          |
+--------------------------------------------------------------------------------+
| Tiny Custom Stories                                           Back to beginning |
+--------------------------------------------------------------------------------+
```

## Mobile layout

```text
+--------------------------------------+
| Tiny Custom Stories | wrapped nav    |
+--------------------------------------+
| Skip link appears on keyboard focus  |
| Eyebrow                              |
| Page title                           |
| Plain-language intro                 |
|                                      |
| One-column content cards             |
| Architecture/development blocks      |
| recompose into reading order         |
|                                      |
| Definitions follow main explanation  |
+--------------------------------------+
| Footer, dossier link, and home link  |
+--------------------------------------+
```

At narrow widths, navigation stays available and wraps rather than disappearing. Existing cards and grid systems should recompose using the site's established responsive rules rather than introducing a parallel mobile design.

## Content hierarchy rules

1. Start each route with a topic name and a plain-language explanation.
2. Use one principal heading per route; use descriptive subheadings for sections.
3. Put definitions next to the concept they explain instead of assuming project vocabulary.
4. State uncertainty visibly. A proposal or open question must not read like a delivery promise.
5. Distinguish accepted logical architecture from physically deployed services.
6. Preserve existing public routes and stable links when information moves.
7. Keep the public safety boundary explicit: no credentials, family data, child-identifying information, private links, or attack-relevant operational detail.
