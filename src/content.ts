export type KnowledgeStatus =
  | 'Confirmed decision'
  | 'Proposal'
  | 'Assumption'
  | 'Open question'
  | 'Verified fact';

export type PublicEntry = {
  title: string;
  summary: string;
  category: string;
  date: string;
  status: KnowledgeStatus;
  source: string;
  related: string[];
  reviewStatus: 'Founder approved for public sharing';
  safeToPublish: true;
};

export type Milestone = {
  title: string;
  state: string;
  status: KnowledgeStatus;
  note: string;
};

export const publicEntries: PublicEntry[] = [
  {
    title: 'Personalized learning through stories',
    summary:
      'Tiny Custom Stories is being built to help parents make playful, meaningful stories for young children while keeping the parent in control of purpose, context, review, and approval.',
    category: 'Product direction',
    date: '2026-08-26',
    status: 'Confirmed decision',
    source: 'DEC-2026-001 - core benefit',
    related: ['Ages two through twelve', 'Three initial story purposes'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Parents create; children explore',
    summary:
      'Parents guide creation and approval. Children get a calm library containing only stories their family has made child-visible.',
    category: 'Product direction',
    date: '2026-09-02',
    status: 'Confirmed decision',
    source: 'DEC-2026-005 and DEC-2026-024',
    related: ['Child mode by default', 'Protected parent mode'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Sprint 0 outcome demonstrated',
    summary:
      'The clean React and .NET foundations, documentation, contracts, local checks, CI, dependency checks, and browser evidence passed the recorded Sprint 0 outcome gate.',
    category: 'Delivery progress',
    date: '2026-09-02',
    status: 'Verified fact',
    source: 'Sprint 0 outcome demonstration and gate record',
    related: ['Outcome-gated delivery', 'Clean application foundations'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Protected parent mode is implemented, but its gate remains open',
    summary:
      'The project has substantial Sprint 1 account, child-mode, parent-mode, expiry, recovery, accessibility, and boundary evidence. The Sprint 1 outcome gate is nevertheless explicitly not passed while a required provider proof remains unresolved.',
    category: 'Delivery progress',
    date: '2026-09-23',
    status: 'Verified fact',
    source: 'DEC-2026-041 and Sprint 1 evidence records',
    related: [
      'Synthetic Sprint 2/3 work may proceed',
      'Revisit before Sprint 4',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Child Map is a living record, not a one-time profile form',
    summary:
      'Sprint 2 treats the Child Map as parent-guided information that can change over time, with explicit correction, change, deletion, and discovery history rather than a completion score.',
    category: 'Sprint 2',
    date: '2026-09-24',
    status: 'Confirmed decision',
    source: 'DEC-2026-039 and Sprint 2 specification',
    related: ['Temporal information', 'Parent-guided lifecycle'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Discovery is now a versioned capability',
    summary:
      'Child Map Discovery owns approved question definitions, typed answer shapes, deterministic age/context eligibility, pacing, bounded follow-ups, and a generic renderer. Future intelligence can be added behind that boundary without hard-coding one questionnaire into the main app.',
    category: 'Architecture',
    date: '2026-09-24',
    status: 'Confirmed decision',
    source: 'DEC-2026-042 and ADR-0016',
    related: [
      'Replaceable future intelligence',
      'No runtime semantic interpretation in Sprint 2',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Story Studio is a composition workflow',
    summary:
      'Sprint 3 is defined as one guided Story Studio where a parent reviews a small personalization set, creates a cover plus ten text pages, edits directly or through scoped assisted revisions, restores earlier revisions, and approves a stable story version.',
    category: 'Sprint 3',
    date: '2026-09-22',
    status: 'Confirmed decision',
    source: 'DEC-2026-040 and canonical Sprint 3 specification',
    related: ['Text-first composition', 'Visual Theme System remains Sprint 4'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Sprint 4 is a Visual Theme System, not ten unrelated image prompts',
    summary:
      'The accepted Sprint 4 direction uses one versioned visual theme, a recurring visual cast, one structured scene plan per cover or page, and replaceable renderers. The planned outcome includes consistent visuals across the cover and ten pages, page-scoped retry, versioned recovery, and a controlled first renderer. Later richer rendering paths remain separately gated, and Sprint 4 has not started.',
    category: 'Sprint 4',
    date: '2026-10-07',
    status: 'Confirmed decision',
    source: 'DEC-2026-072 and the accepted Visual Theme System direction',
    related: [
      'Story Studio remains text-first',
      'Controlled no-photo renderer first',
      'Likeness and external image providers remain separately gated',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Sprint 4 has four visual layers',
    summary:
      'The accepted plan separates visual responsibility into Visual Theme, Visual Cast, one Visual Scene Plan per cover or page, and a replaceable Renderer. Those versioned application contracts keep continuity stable even if the rendering technique changes later.',
    category: 'Sprint 4',
    date: '2026-10-07',
    status: 'Confirmed decision',
    source: 'Sprint 4 Visual Theme System specification and ADR-0020',
    related: ['Theme', 'Cast', 'Scene plans', 'Replaceable renderer'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Story work has three ownership boundaries',
    summary:
      'Story Lifecycle owns story truth and approval, Story Context Selection decides what permitted context may be used, and Story Generation receives only minimized versioned artifacts and returns candidates or findings.',
    category: 'Architecture',
    date: '2026-09-24',
    status: 'Confirmed decision',
    source: 'DEC-2026-043 and ADR-0017',
    related: ['Generation is extractable later', 'MCP is an optional adapter'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Logical boundaries come before physical services',
    summary:
      'Discovery and story capabilities are designed as explicit application boundaries first. The Alpha can keep them inside the existing API process until operational evidence justifies worker or service extraction.',
    category: 'Architecture',
    date: '2026-09-24',
    status: 'Confirmed decision',
    source: 'Application boundaries, ADR-0016, and ADR-0017',
    related: ['Independent evolution', 'Evidence-led extraction'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Fine-grained work stays visible',
    summary:
      'The project prefers explicit tasks, dependencies, acceptance criteria, visual references, tests, and evidence. A larger backlog is useful when it reduces ambiguity for human and AI-assisted implementation.',
    category: 'Delivery practice',
    date: '2026-09-24',
    status: 'Confirmed decision',
    source: 'DEC-2026-022 and agentic delivery guidance',
    related: [
      'Task count is not a constraint',
      'Reviewable implementation slices',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Sprint 2 synthetic/local outcome is demonstrated',
    summary:
      'The accepted temporal Child Map and deterministic Discovery outcome is now evidenced across the assembled web/API/data-store journey, private-media behavior, deletion lifecycle, automated verification, local privacy review, and a founder-completed VoiceOver walkthrough. This does not authorize real-family Alpha use.',
    category: 'Delivery progress',
    date: '2026-10-04',
    status: 'Verified fact',
    source: 'October 4 Sprint 2 closeout evidence and DEC-2026-061',
    related: [
      'Accepted synthetic/local outcome demonstrated',
      'Qualified real-family release review remains open',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title:
      'Discovery moved from compiled seed questions to a data-driven runtime',
    summary:
      'Approved question content now lives in versioned structured packs loaded through immutable catalog snapshots with indexed retrieval, deterministic metadata/context/history scoring, diversity, safe contextual templates, and bounded provenance.',
    category: 'Sprint 2',
    date: '2026-10-01',
    status: 'Verified fact',
    source: 'Sprint 2 Discovery implementation evidence',
    related: [
      'Runtime remains deterministic',
      'No external model required for question selection',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'A conservative Sprint 2 private-Alpha privacy boundary is decided',
    summary:
      'Parent-controlled Child Map data remains protected, raw Child Map content stays out of child mode, Sprint 2 sends no family Child Map content to an external AI provider, private reference media is not child-visible, and raw family source data or photos are excluded from model-training or offline-improvement corpora during private Alpha. Qualified review is still required before real-family use.',
    category: 'Privacy and safety',
    date: '2026-10-01',
    status: 'Confirmed decision',
    source: 'DEC-2026-051',
    related: [
      'Qualified specialist review still required',
      'Deletion and retention remain explicit product behavior',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Authenticated families can intentionally return Home',
    summary:
      'Home remains a real destination before and after authentication. Sign-in may still land in the child-safe Story Library, while authenticated Home remains child-safe and does not expose Parent Mode-only information or actions.',
    category: 'Product direction',
    date: '2026-10-01',
    status: 'Confirmed decision',
    source: 'DEC-2026-050',
    related: [
      'Home ↔ My Story Library navigation',
      'Implementation and regression coverage still underway',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'One saved child profile anchors Story Studio and Child Map',
    summary:
      'The accepted private-Alpha direction requires one protected child profile with name and completed-years age from two through twelve before Child Map or Story Studio. Additional Child Map enrichment stays optional; birth information and per-story name or age overrides are not introduced.',
    category: 'Product direction',
    date: '2026-10-04',
    status: 'Confirmed decision',
    source: 'DEC-2026-063 and the initial child-profile specification',
    related: [
      'Name + completed-years age 2–12',
      'Additional Child Map enrichment stays optional',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Story Studio now has integrated authoring slices',
    summary:
      'Protected Story Studio home and exact-story navigation now lead into direct Draft page-text editing, deterministic cover editing, and Earlier Versions preview/restore. Controlled personalization, assisted-change, continuity, and final-review components also exist, while their complete APIs/integration and the generation-to-approval outcome remain unfinished.',
    category: 'Sprint 3',
    date: '2026-10-05',
    status: 'Verified fact',
    source: 'October 5 Story Studio implementation evidence',
    related: [
      'Direct page and cover editing plus Earlier Versions',
      'Generation, assisted changes, approval, and outcome proof remain',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Protected Story Studio setup is connecting to the real profile',
    summary:
      'Merged early setup slices connect protected Story Studio entry to the canonical saved child profile, purpose, and feel/reading choices. This is progress toward a guided authoring flow, not proof that generation, full planning, assisted change, or approval is finished.',
    category: 'Sprint 3',
    date: '2026-10-09',
    status: 'Verified fact',
    source: 'October 8–9 Story Studio setup and integration checkpoints',
    related: [
      'Canonical child profile',
      'Saved story setup',
      'Final outcome still open',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Feature tasks now integrate through owned epic checkpoints',
    summary:
      'The accepted delivery workflow gives each normal feature task one owning epic and a focused PR into its integration branch. A coherent, reviewed epic checkpoint is integrated into development only after the affected exact-head verification; the hierarchy migration and rollout remain work in progress.',
    category: 'Delivery practice',
    date: '2026-10-08',
    status: 'Confirmed decision',
    source: 'October 8 epic-scoped integration workflow',
    related: [
      'Native epic ownership',
      'Stable development branch',
      'Pilot and migration still being reconciled',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Hosted product CI now runs at epic checkpoints, not task PRs',
    summary:
      'Under the October 9 policy, task changes use substantive review and proportionate local tests. Hosted product suites are manually dispatched on epic branches; affected non-browser suites must succeed on the final epic head for a checkpoint. Browser runs are optional, and actual repository protection remains binding.',
    category: 'Delivery practice',
    date: '2026-10-09',
    status: 'Confirmed decision',
    source: 'DEC-2026-075',
    related: [
      'Local task verification',
      'Exact-head epic checkpoint evidence',
      'Optional browser tests',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'One GitHub snapshot, many focused agent handoffs',
    summary:
      'The agent workflow now documents shared Project snapshots and bounded reads, live checks before meaningful writes or merges, serialized mutations, and respectful rate-limit backoff. It does not promise that GitHub limits have already been reduced or use credential rotation to evade quotas.',
    category: 'Delivery practice',
    date: '2026-10-09',
    status: 'Verified fact',
    source: 'October 9 merged agent request-budget guidance',
    related: [
      'Coordinator-owned snapshot',
      'Verified live gates',
      'No measured performance claim',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Founder-operated text-model choice stays outside the family product',
    summary:
      'The accepted plan is a provider-neutral Story Generation port with OpenRouter as the first intended server-configured adapter. The founder chooses synthetic-test models and judges output and cost manually; no model lab or automatic paid fallback is a Sprint 3 prerequisite. Real-family transfer still requires independent safety, privacy, and route-specific clearance.',
    category: 'Architecture',
    date: '2026-10-09',
    status: 'Confirmed decision',
    source: 'DEC-2026-076',
    related: [
      'Synthetic development only',
      'No app-hosted model competition',
      'Release clearance not granted',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Paper-and-ink design language remains the shared visual foundation',
    summary:
      'The accepted philosophy and visual recipe continue to guide child, parent, public, and serious surfaces while allowing each surface to serve a different audience and responsibility.',
    category: 'Design',
    date: '2026-09-24',
    status: 'Confirmed decision',
    source: 'Design philosophy and visual design language',
    related: ['Same design DNA', 'Different surface responsibilities'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Replaceable AI providers need evidence',
    summary:
      'Text and image providers are evaluated separately for data handling, safety, quality, cost, reliability, regional controls, deletion, and a practical exit path before production family data is permitted.',
    category: 'Architecture',
    date: '2026-09-02',
    status: 'Confirmed decision',
    source: 'DEC-2026-021 - provider evidence gate',
    related: ['Synthetic-first evaluation', 'Application-owned adapters'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Durable workflow and physical extraction remain open',
    summary:
      'The project has accepted capability boundaries, but the exact extraction point for Story Generation, durable workflow technology, broker, usage store, deployment platform, and any production MCP adapters remain unresolved.',
    category: 'Architecture',
    date: '2026-09-24',
    status: 'Open question',
    source: 'OQ-015 - deployment and orchestration',
    related: ['Worker/service extraction', 'Operational evidence'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title:
      'Qualified real-family release validation and derived-artifact deletion still need evidence',
    summary:
      'Sprint 2 is closed at the accepted synthetic/local boundary, but qualified privacy/legal/security/child-safety review is still required before real-family collection or use. Sprint 3 must also settle what source deletion means for generated drafts, approved stories, generation artifacts, and provider-held copies.',
    category: 'Open question',
    date: '2026-10-04',
    status: 'Open question',
    source: 'OQ-004, OQ-019, DEC-2026-051, and DEC-2026-061',
    related: ['Qualified release review', 'Derived artifact lifecycle'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
];

export const milestones: Milestone[] = [
  {
    title: 'Sprint 0 - Product and technical foundation',
    state: 'Outcome demonstrated',
    status: 'Verified fact',
    note: 'Accepted constraints, documented architecture, and clean React and .NET foundations passed local, CI, contract, dependency, and browser checks.',
  },
  {
    title: 'Sprint 1 - Accounts and protected parent mode',
    state: 'Outcome gate open - explicitly not passed',
    status: 'Verified fact',
    note: 'A large implementation and evidence base exists, but a required provider proof remains unresolved. A temporary sequencing exception permits synthetic Sprint 2 and Sprint 3 work without treating Sprint 1 as complete.',
  },
  {
    title: 'Sprint 2 - Child Map and discovery lifecycle',
    state: 'Synthetic/local outcome demonstrated',
    status: 'Verified fact',
    note: 'The accepted synthetic/local Child Map and Discovery outcome is demonstrated, including assembled data-store/media evidence, automated verification, local review, and a founder VoiceOver walkthrough. Qualified real-family release review remains a later gate.',
  },
  {
    title: 'Sprint 3 - Story Studio composition',
    state: 'Authoring workspace underway - outcome gate open',
    status: 'Verified fact',
    note: 'Protected Studio entry, canonical child-profile setup, purpose/reading setup slices, page/cover editing, and Earlier Versions are present under the synthetic-only exception. Full planning, generation, assisted flows, approval, and final outcome proof remain ahead.',
  },
  {
    title: 'Sprint 4 - Visual Theme System',
    state: 'Accepted direction - not started',
    status: 'Confirmed decision',
    note: 'Sprint 4 now centers on a versioned visual theme, recurring cast, structured scene plans, controlled recoverable rendering, parent review, page-scoped retry, and a no-photo path. Richer renderer families remain separately gated. The project must still revisit unresolved Sprint 1 evidence before Sprint 4 execution begins.',
  },
  {
    title: 'Sprint 5 - Child library and reader',
    state: 'Later outcome gate',
    status: 'Proposal',
    note: 'Approved stories can be made child-visible and read page by page on a responsive website.',
  },
  {
    title: 'Sprint 6 - Alpha safety and release readiness',
    state: 'Later outcome gate',
    status: 'Proposal',
    note: 'Privacy, content safety, security, reliability, deployment, acceptance evidence, and real-world learning support a small private Alpha.',
  },
];

export const designPrinciples = [
  [
    'Human intention leads',
    'Parents choose the purpose; AI assists inside clear review and approval boundaries.',
  ],
  [
    'Two modes, two needs',
    'Child mode is calm and read-only. Parent mode is capable, guided, and protected.',
  ],
  [
    'Calm over capture',
    'No infinite feeds, streak pressure, autoplay, artificial urgency, or attention traps.',
  ],
  [
    'Warmth with clarity',
    'Expressive storybook moments sit on top of plain language and strong hierarchy.',
  ],
  [
    'Trust made visible',
    'Privacy, progress, uncertainty, drafts, approvals, and failures are explained where they matter.',
  ],
  [
    'Every state is designed',
    'Loading, empty, interruption, expiry, error, recovery, and return are part of the experience.',
  ],
  [
    'Accessibility is structural',
    'Semantics, focus, keyboard, touch, contrast, reflow, alternatives, and reduced motion begin with the design.',
  ],
  [
    'Evidence outranks taste',
    'Synthetic, inspected evidence determines whether an idea works; confidence alone does not.',
  ],
] as const;

export const surfaceThemes = [
  {
    name: 'Storybook light',
    audience: 'Child library and reader',
    detail:
      'Paper pages, cover-led color, large concrete controls, stable navigation, and no adult-data leakage.',
  },
  {
    name: 'Guided studio light',
    audience: 'Protected parent experience',
    detail:
      'Quiet forms, clear privacy context, moderate density, recoverable work, and explicit approvals.',
  },
  {
    name: 'Public editorial',
    audience: 'This project story',
    detail:
      'Large editorial type, generous space, visible knowledge labels, flat color, and simple original diagrams.',
  },
  {
    name: 'Serious',
    audience: 'Consent, security, deletion, and failure',
    detail:
      'Plain language, stable geometry, restrained color, and no playful decoration around consequential choices.',
  },
] as const;
