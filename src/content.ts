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
    related: ['Ages two through six', 'Three initial story purposes'],
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
    related: ['Synthetic Sprint 2/3 work may proceed', 'Revisit before Sprint 4'],
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
    related: ['Replaceable future intelligence', 'No runtime semantic interpretation in Sprint 2'],
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
    related: ['Text-first composition', 'Illustrations remain Sprint 4'],
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
    related: ['Task count is not a constraint', 'Reviewable implementation slices'],
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
    title: 'Privacy and derived-artifact deletion still need more evidence',
    summary:
      'The project still needs qualified validation of privacy and child-safety boundaries, provider handling, and the effect of deleting Child Map sources on generated drafts, approved stories, and provider-held copies.',
    category: 'Open question',
    date: '2026-09-24',
    status: 'Open question',
    source: 'OQ-004 and OQ-019',
    related: ['Data minimization', 'Derived artifact lifecycle'],
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
    state: 'Canonical scope + synthetic implementation allowed',
    status: 'Verified fact',
    note: 'The Child Map is a temporal living record with a versioned Discovery capability for approved questions, typed answers, deterministic eligibility, pacing, and bounded follow-ups.',
  },
  {
    title: 'Sprint 3 - Story Studio composition',
    state: 'Canonical scope + architecture accepted',
    status: 'Verified fact',
    note: 'A guided text-first composition workflow is defined around parent-visible context selection, planning, generation, scoped revision, restoration, and approval. Story work is split into Lifecycle, Context Selection, and Generation capabilities.',
  },
  {
    title: 'Sprint 4 - Characters and illustrations',
    state: 'Later outcome gate',
    status: 'Proposal',
    note: 'Reusable character representations and consistent page illustrations remain later work. The project must revisit unresolved Sprint 1 evidence before starting this sprint.',
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
