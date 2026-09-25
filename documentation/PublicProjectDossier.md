# Public Project Dossier

The downloadable [Public Project Dossier PDF](../public/documents/tiny-custom-stories-project-dossier.pdf) is a generated 16-page public explanation of Tiny Custom Stories and a fixed-layout companion to the responsive website.

The September 24 edition extends the original Sprint 0 / early Sprint 1 story without replacing its design language or stable public URL. It now covers the open Sprint 1 outcome gate, Child Map Discovery, the accepted Sprint 3 Story Studio workflow, capability ownership, a dated aggregate GitHub delivery snapshot, CI/browser-evidence practice, and the current narrowed open questions.

## Public scope

The dossier may cover product direction, accepted decisions, verified delivery evidence, dated aggregate repository activity, open questions, logical architecture principles, demonstrated Sprint 0 evidence, Sprint 1 family-mode implementation and gate status, Sprint 2 Discovery, Sprint 3 Story Studio and capability boundaries, outcome-gated delivery, design philosophy, and the reproducible visual recipe.

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

CI and Pages deployment regenerate the dossier from the checked-in generator so the published PDF stays aligned with the public website. The responsive website remains the primary version for semantic navigation and text reflow.
