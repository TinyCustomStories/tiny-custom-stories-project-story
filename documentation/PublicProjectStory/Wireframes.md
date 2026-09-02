# Public Project Story wireframes

These text wireframes make the public site structure reviewable in Markdown, including for readers who do not use images. They describe intended hierarchy, not a product decision or a final visual specification.

## Site map

```text
Home (/)
├── The product (/product)
├── How it works (/journey)
├── Decisions (/decisions)
├── Roadmap (/roadmap)
├── Open questions (/questions)
└── Public library (/library)
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
| Home: illustrated welcome + six route cards                                   |
| Product: three roles + terms panel                                             |
| Journey: four hand-offs + system overview + terms panel                       |
| Decisions: status legend + definitions + labeled public entries               |
| Roadmap: outcome-gate sequence + vocabulary panel                             |
| Questions: unresolved matters + how-to-read panel                             |
| Library: curation flow + public-safety definitions                            |
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
| Footer and home link                 |
+--------------------------------------+
```

At narrow widths, navigation stays available and wraps rather than disappearing. Route cards, journey steps, public entries, and role cards reduce to a single column so their reading order remains unambiguous.

## Content hierarchy rules

1. Start each route with a topic name and a plain-language explanation.
2. Use one principal heading per route; use descriptive subheadings for sections.
3. Put definitions next to the concept they explain instead of assuming project vocabulary.
4. State uncertainty visibly. A proposal or open question must not read like a delivery promise.
5. Keep public safety boundaries explicit: do not include credentials, family data, child-identifying information, private links, or sensitive operational detail.
