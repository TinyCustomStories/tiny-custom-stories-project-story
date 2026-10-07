# Public Project Story wireframes

These text wireframes make the public site structure reviewable in Markdown, including for readers who do not use images. They describe intended hierarchy and public-safe architecture, not a final visual specification.

## Site map

The main header stays focused on the explanatory story rather than acting as a full sitemap. A persistent **Read as: Story / Builder** control changes the presentation of the current route without changing its URL. Story is the default reading mode; Builder preserves the existing technical presentation. Sprint-specific pages are grouped as chapters beneath Development story. Decisions, Roadmap, and Open questions remain stable working-record routes but are reached contextually from Development instead of occupying top-level navigation. The existing Sprint 1 deep link remains valid.

```text
Home (/#/)
├── The product (/#/product)
├── How it works (/#/journey)
├── Development story (/#/development)
│   ├── Sprint 1 (/#/sprint-one)          PRESERVED
│   ├── Sprint 2 (/#/sprint-two)          NEW
│   └── Sprint 3 (/#/sprint-three)        NEW
├── Architecture (/#/architecture)
├── How we build (/#/delivery)
├── What we learned (/#/learnings)        NEW
├── Design (/#/design)
├── Public library (/#/library)
└── Development working record
    ├── Decisions (/#/decisions)           PRESERVED
    ├── Roadmap (/#/roadmap)               PRESERVED
    └── Open questions (/#/questions)      PRESERVED
```

Every route has the same visible header, skip link, and footer. The active top-level page is marked in header navigation. Sprint chapter and working-record links are grouped inside Development story. Existing deep links continue to resolve.

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
  accepted synthetic/local outcome demonstrated
  temporal Child Map + data-driven Discovery
  qualified real-family release review remains later
       |
       v
Sprint 3
  architecture accepted
  protected Story Studio authoring workspace underway
  generation / assisted changes / approval still incomplete
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
| Tiny Custom Stories        Home Product ... Library      [Story | Builder]     |
+--------------------------------------------------------------------------------+
| EYEBROW                                                                        |
| Page title / clear topic statement                                             |
| Intro: what this page says and what it does not claim                         |
+--------------------------------------------------------------------------------+
| Page-specific readable content                                                 |
|                                                                                |
| Story mode: product idea + cause-and-effect narrative + failures + learning     |
| Builder mode: exact status + architecture + evidence + technical vocabulary     |
| Product: three-fact personalization -> Child Map -> Story Studio                |
| Journey: one story followed from parent purpose to child bookshelf              |
| Development: why each new boundary appeared + technical sprint chapters         |
| Architecture: remember / permit / create in Story; exact capabilities in Builder|
| How we build: human workflow in Story; stats + CI + exact delivery in Builder    |
| What we learned: candid failures in both modes, with Builder retaining detail   |
| Decisions: preserved deeper status record                                     |
| Roadmap: preserved deeper outcome-gate record                                 |
| Sprint 1: implemented boundary + open gate + evidence summary                  |
| Sprint 2: demonstrated synthetic/local outcome + later real-family gate       |
| Sprint 3: integrated authoring slices + unfinished generation/approval         |
| Design: existing 70/20/10 language + palette + themes + continuity rule       |
| Questions: preserved deeper unresolved-matters record                         |
| Library: curation flow + public-safety definitions + stable PDF link          |
+--------------------------------------------------------------------------------+
| Tiny Custom Stories                                           Back to beginning |
+--------------------------------------------------------------------------------+
```

## Mobile layout

```text
+--------------------------------------+
| Tiny Custom Stories | wrapped nav    |
|                  [Story | Builder]    |
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

At narrow widths, navigation and the reading-mode switch stay available and wrap rather than disappearing. Existing cards and grid systems should recompose using the site's established responsive rules rather than introducing a parallel mobile design.

## Content hierarchy rules

1. Start each route with a topic name and a plain-language explanation.
2. Use one principal heading per route; use descriptive subheadings for sections.
3. Put definitions next to the concept they explain instead of assuming project vocabulary.
4. State uncertainty visibly. A proposal or open question must not read like a delivery promise.
5. Distinguish accepted logical architecture from physically deployed services.
6. Preserve existing public routes and stable links when information moves.
7. Keep the public safety boundary explicit: no credentials, family data, child-identifying information, private links, or attack-relevant operational detail.

## Reading-mode behavior

```text
same fragment route
       |
       +-----------------------+
       |                       |
       v                       v
Story mode                 Builder mode
why / examples             exact status / evidence
cause-and-effect           capability vocabulary
founder journey            sprint + CI detail
       |                       |
       +-----------+-----------+
                   |
                   v
        same public-safe facts
```

Primary routes have dedicated Story-mode presentations. Sprint chapters and working-record routes remain the deeper evidence layer and do not need a second rewritten copy merely to satisfy the toggle.
