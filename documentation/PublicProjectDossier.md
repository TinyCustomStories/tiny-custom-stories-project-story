# Public Project Dossier

The [Public Project Dossier PDF](https://tinycustomstories.github.io/tiny-custom-stories-project-story/documents/tiny-custom-stories-project-dossier.pdf) is a **generated 17-page edition dated October 21, 2026**. It is the portable, fixed-layout companion to the responsive Tiny Custom Stories project website at the existing stable URL.

## What this edition covers

This edition replaces the October 1 historical content rather than simply updating its cover date. It includes:

- The demonstrated Sprint 0 foundation and the still-open Sprint 1 provider-evidence gate.
- The accepted **October 4 synthetic/local Sprint 2 outcome** for temporal Child Map and data-driven Discovery, with qualified privacy, legal, security, and child-safety review still required before real-family Alpha.
- The accepted smaller profile-only, offline Sprint 3 checkpoint and its still-open end-to-end outcome.
- The separately bounded October 20 Development-only fictional candidate preview, curated story-idea/feel choices, and October 21 local fixed-story approval/reopen exercise. A transient candidate is not an approved story, and a narrow synthetic demonstration is not proof of live-provider safety or real-family readiness.
- The Visual Theme System direction; original synthetic doodles are groundwork rather than a finished Sprint 4 outcome.
- The verified October 21 GitHub activity snapshot, labeled as historical activity rather than productivity or sprint completion. Reachable development commits include historical ancestry, making growth in that count particularly unsuitable as a measure of recent velocity.
- The design philosophy, visual design language, and the founder's lesson that these two living documents improved consistency during agent-assisted development. This is qualitative founder experience, not a controlled usability study or measured productivity result.
- Capability boundaries, lessons, release constraints, and open questions.

The latest responsive site may contain changes after this dated PDF edition and remains the primary accessible, navigable narrative.

## Public scope and safety

The PDF contains curated product direction, accepted decisions, accurately labeled evidence and outcomes, open questions, and visual-system principles. It does **not** export private repository content verbatim.

Exclude credentials, secrets, internal GitHub links, private research, family or child data, personal information, sensitive schemas, exploit-relevant operational detail, unapproved providers, or imagined release permissions.

Distinguish **confirmed decisions**, **verified facts**, **proposals**, **assumptions**, and **open questions**. Do not present epic-branch work as delivered on development, fixed fictional results as live-model validation, or logical capability boundaries as independently deployed services.

## Design continuity

The document retains the established warm paper-and-ink identity, editorial hierarchy, restrained handcrafted visual language, and fixed-layout presentation. It adds one focused design-learning page, rather than replacing the format or visual style.

## Generation and verification

Generate the public PDF using:

```sh
python3 -m pip install -r requirements-pdf.txt
python3 scripts/generate_project_story_pdf.py
python3 scripts/verify_project_story_pdf.py
```

The generator writes `public/documents/tiny-custom-stories-project-dossier.pdf`. The verification script checks the published edition date, page count, key evidence phrases, extractable text, page boundaries, and rasterization of every page. Inspect representative rendered pages and the complete contact sheet when preparing a material visual or content change.

The GitHub Pages build regenerates the PDF from the checked-in generator before deploying the site. The checked-in PDF may act as a baseline artifact; the generator plus verification controls the served edition. Keep the stable public PDF URL.

Future editions must update the entire dated content, not only the cover, and retain the public-safe provenance and founder-review process.
