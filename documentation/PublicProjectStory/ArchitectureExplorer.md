# Public architecture explorer

Last reviewed: 2026-10-02

The Project Story Architecture route includes a curated Archify explorer. It is a public translation of the canonical architecture knowledge from the private product repository, not a mirror of that repository's generated artifact.

## Stable public assets

- `public/architecture/system.architecture.json` — maintained public-safe Archify source.
- `public/architecture/system.html` — generated standalone explorer embedded by the Architecture route.
- `public/architecture/preview.svg` — lightweight Home-page preview.

The React application should refer to these through `import.meta.env.BASE_URL` so GitHub Pages repository hosting continues to work.

## Curation boundary

A refresh may carry forward high-level product architecture that is already safe for the public project story:

- browser and web experience;
- application API boundary;
- conceptual identity boundary;
- Child Map and Discovery;
- Story Lifecycle, Story Context Selection, and Story Generation;
- conceptual family-data and private-media storage;
- external AI/provider boundaries;
- directional data flow;
- truthful status such as implemented, partial, accepted, or open.

A refresh must not copy private repository provenance into the public artifact. Remove or abstract:

- private repository URLs, paths, filenames, line ranges, commit hashes, and issue links;
- credentials, tokens, account names, hostnames, environment values, or deployment identifiers;
- attack-relevant authorization/security implementation detail;
- private research or family/child information;
- speculative architecture that has not been accepted.

The public source is intentionally conceptual. The private canonical artifact and accepted architecture documents remain authoritative for engineering detail.

## Refresh contract for Project Story Sync

After the Archify workflow integration in TinyCustomStories/tiny-custom-stories#687 is available, `$tiny-stories-project-story-sync` may refresh this explorer only when an architecture-changing merged PR materially affects the public story.

For each refresh:

1. read the current canonical architecture source and accepted architecture decisions;
2. compare them with the current public-safe `system.architecture.json`;
3. update only public-relevant components, flows, labels, and implementation status;
4. strip all private provenance and sensitive implementation detail before generating the public artifact;
5. regenerate `system.html` from the curated public source;
6. update `preview.svg` when topology or status meaningfully changes;
7. run the Project Story verification suite;
8. visually review the embedded and full-view explorer at desktop and narrow widths;
9. verify the generated HTML does not contain private repository paths, private repository URLs, source line references, commit hashes, credentials, or environment-specific values.

A diagram generated from private source is evidence, not authority. If the public view disagrees with an accepted architecture decision, fix the public view.

## Experience rule

The explorer is one chapter of the Project Story. The surrounding page keeps the existing warm editorial design; the embedded Archify canvas may keep its own diagram language. Home loads only the static preview. The full interactive HTML loads lazily on the Architecture route and always has an explicit full-view link for constrained screens.
