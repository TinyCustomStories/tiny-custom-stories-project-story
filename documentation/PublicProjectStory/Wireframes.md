# Public Project Story wireframes

These text wireframes make the public site structure reviewable in Markdown, including for readers who do not use images. They describe intended hierarchy, not a product decision or a final visual specification.

## Site map

```text
Home (/#/)
├── The product (/#/product)
├── How it works (/#/journey)
├── Decisions (/#/decisions)
├── Roadmap (/#/roadmap)
├── Sprint 1 (/#/sprint-one)
├── Design (/#/design)
├── Open questions (/#/questions)
└── Public library (/#/library)
```

Every route has the same visible header, page navigation, skip link, and footer. The active page is marked in navigation. This is important for orientation because the application changes content without a full browser reload.

## Desktop layout

```text
+--------------------------------------------------------------------------------+
| Tiny Custom Stories                                     Home Product ... Library |
+--------------------------------------------------------------------------------+
| EYEBROW                                                                        |
| Page title / clear topic statement                                             |
| Introductory explanation: what this page says and what it does not claim      |
+--------------------------------------------------------------------------------+
| Page-specific readable content                                                 |
|                                                                                |
| Home: illustrated welcome + PDF link + eight route cards                       |
| Product: three roles + terms panel + child/parent mode preview                 |
| Journey: four hand-offs + system overview + terms panel                       |
| Decisions: status legend + definitions + labeled public entries               |
| Roadmap: seven outcome gates + honest status labels + vocabulary panel         |
| Sprint 1: outcome gate + four account/mode boundaries + evidence requirements |
| Design: 70/20/10 formula + principles + palette + themes + control examples   |
| Questions: unresolved matters + how-to-read panel                             |
| Library: curation flow + public-safety definitions + dossier link             |
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
| Definitions in a bordered reading    |
| panel after the main explanation     |
+--------------------------------------+
| Footer, dossier link, and home link   |
+--------------------------------------+
```

At narrow widths, navigation stays available and wraps rather than disappearing. Route cards, journey steps, public entries, role cards, Sprint 1 boundaries, design principles, palette entries, themes, and control examples reduce to one or two deliberate columns so their reading order remains unambiguous. The 70/20/10 formula recomposes vertically instead of shrinking its labels past readability.

## Content hierarchy rules

1. Start each route with a topic name and a plain-language explanation.
2. Use one principal heading per route; use descriptive subheadings for sections.
3. Put definitions next to the concept they explain instead of assuming project vocabulary.
4. State uncertainty visibly. A proposal or open question must not read like a delivery promise.
5. Keep public safety boundaries explicit: do not include credentials, family data, child-identifying information, private links, or sensitive operational detail.
