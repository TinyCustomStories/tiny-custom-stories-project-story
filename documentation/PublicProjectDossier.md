# Public Project Dossier

The downloadable [Public Project Dossier PDF](../public/documents/tiny-custom-stories-project-dossier.pdf) is a generated 16-page public explanation of Tiny Custom Stories and a fixed-layout companion to the responsive website.

The October 1 edition preserves the September 24/25 design language and stable public URL while refreshing the evidence available at that checkpoint. It covers the open Sprint 1 outcome gate, substantially implemented-but-open Sprint 2 temporal Child Map and data-driven Discovery work as of October 1, the decided privacy boundary, early Sprint 3 Story foundation implementation, capability ownership, the dated aggregate GitHub delivery snapshot, CI/browser-evidence practice, and the then-current narrowed open questions.

As of the October 5 website refresh, this PDF is intentionally retained as a **dated October 1 checkpoint**. The responsive website is newer: it records the October 4 synthetic/local Sprint 2 closeout and subsequent Story Studio authoring progress. The PDF is not silently relabeled as current without regenerating and visually inspecting every page.

## Public scope

The dossier may cover product direction, accepted decisions, verified delivery evidence, dated aggregate repository activity, open questions, logical architecture principles, demonstrated Sprint 0 evidence, Sprint 1 family-mode implementation and gate status, Sprint 2 temporal Child Map/Discovery/deletion progress and qualified-review boundary, Sprint 3 foundation implementation and Story capability ownership, outcome-gated delivery, design philosophy, and the reproducible visual recipe.

It preserves the difference between a confirmed decision, verified fact, proposal, assumption, and open question. A logical capability boundary must not be described as a separately deployed service unless deployment evidence supports that claim.

## Exclusions

The dossier must not include credentials, secrets, private URLs, internal board or issue links, private research, personal information, family or child data, exact sensitive data schemas, attack-relevant threat detail, operational configuration, or unpublished code.

## Design continuity

The dossier remains part of the same Public editorial surface as the website. Preserve the accepted paper-and-ink palette, editorial hierarchy, status language, and restrained handcrafted character unless newer accepted design evidence supersedes them.

Prefer additive evolution and targeted refinement over regenerating an unrelated visual identity.

## Maintenance

The founder reviews material public changes. A future revision must:

1. preserve knowledge-status labels;
2. run a public-safety review;
3. regenerate the document through `scripts/generate_project_story_pdf.py`;
4. verify extractable text and page count;
5. render and visually inspect every page for clipping, overlap, blank pages, and diagram readability;
6. keep the stable public PDF path unless there is a compelling reason to change it; and
7. arrive through the public repository's pull-request workflow.

CI and Pages deployment regenerate the dossier from the checked-in generator. When the generator intentionally remains on a dated checkpoint, documentation must say so rather than imply content parity with the newer website. The responsive website remains the primary current version for semantic navigation and text reflow.
