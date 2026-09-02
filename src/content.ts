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
      'Tiny Custom Stories is being built to help parents make playful, meaningful stories for young children.',
    category: 'Product direction',
    date: '2026-08-26',
    status: 'Confirmed decision',
    source: 'DEC-2026-001 - core benefit',
    related: ['Ages two through six', 'Three story purposes'],
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
    title: 'Small first version, clear edges',
    summary:
      'The Alpha is a website for ages two through six, with one family, one child, a cover, and ten illustrated story pages.',
    category: 'Alpha scope',
    date: '2026-09-02',
    status: 'Confirmed decision',
    source: 'DEC-2026-004, DEC-2026-006, DEC-2026-007, DEC-2026-023',
    related: ['No narration yet', 'No public marketplace'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Sprint 0 outcome demonstrated',
    summary:
      'The clean React and .NET foundations, documentation, contracts, local checks, CI, and browser evidence passed one recorded outcome gate.',
    category: 'Delivery progress',
    date: '2026-09-02',
    status: 'Verified fact',
    source: 'Sprint 0 outcome demonstration and gate record',
    related: ['Sprint 1 activated', 'Outcome-gated delivery'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Protected parent mode',
    summary:
      'A signed-in family starts in read-only child mode. Sensitive information and actions require an expiring, server-enforced parent boundary.',
    category: 'Sprint 1',
    date: '2026-09-02',
    status: 'Confirmed decision',
    source: 'DEC-2026-024 and DEC-2026-025',
    related: ['Child-safe default', 'Stronger checks for sensitive actions'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Fine-grained work stays visible',
    summary:
      'The project prefers explicit tasks and visible decision gaps. A larger backlog is useful when it makes ownership, evidence, and safety clearer.',
    category: 'Delivery practice',
    date: '2026-09-02',
    status: 'Confirmed decision',
    source: 'DEC-2026-022 - explicit delivery tasks',
    related: [
      'Task count is not a constraint',
      'Sprint gates still control priority',
    ],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Paper-and-ink design language',
    summary:
      'A shared philosophy and concrete visual recipe now guide colors, typography, themes, controls, states, illustration, motion, and review evidence.',
    category: 'Design',
    date: '2026-09-02',
    status: 'Confirmed decision',
    source: 'DEC-2026-026 and DEC-2026-027',
    related: ['Calm over capture', 'Warmth with clarity'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Focused tools, not one giant black box',
    summary:
      'The planned system separates story planning, generation, checks, storage, and approval so each boundary can be understood and measured.',
    category: 'Architecture',
    date: '2026-08-27',
    status: 'Confirmed decision',
    source: 'DEC-2026-012 - focused capability boundaries',
    related: ['AI usage metering', 'Human approvals'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Replaceable AI providers need evidence',
    summary:
      'Text and image providers will be evaluated separately for data handling, safety, quality, cost, reliability, and a practical exit path before selection.',
    category: 'Architecture',
    date: '2026-09-02',
    status: 'Confirmed decision',
    source: 'DEC-2026-021 - provider evidence gate',
    related: ['No provider selected yet', 'Synthetic-first evaluation'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Durable orchestration for creative work',
    summary:
      'A durable workflow coordinator is being explored for retries, budgets, and parent approval checkpoints.',
    category: 'Architecture',
    date: '2026-08-27',
    status: 'Proposal',
    source: 'ADR-0004 - proposed orchestration',
    related: ['Workflow engine', 'Tool contracts'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Privacy needs more evidence before launch',
    summary:
      'Family data, consent, retention, deletion, and provider handling still need qualified review and concrete controls.',
    category: 'Open question',
    date: '2026-08-28',
    status: 'Open question',
    source: 'OQ-004 - privacy, consent, retention, and child safety',
    related: ['Data minimization', 'Safety review'],
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
    state: 'Active planning boundary',
    status: 'Verified fact',
    note: 'The accepted account, child-mode, and parent-mode boundaries are documented. Individual tasks become ready only when dependencies and evidence are clear.',
  },
  {
    title: 'Sprint 2 - Child Map and data lifecycle',
    state: 'Proposed outcome gate',
    status: 'Proposal',
    note: 'A parent can create, update, and delete approved Child Map information and reference media through an explicit lifecycle.',
  },
  {
    title: 'Sprint 3 - Story creation vertical slice',
    state: 'Proposed outcome gate',
    status: 'Proposal',
    note: 'A parent can generate, review, approve, and save a safe ten-page text story using approved context and extra instructions.',
  },
  {
    title: 'Sprint 4 - Characters and illustrations',
    state: 'Proposed outcome gate',
    status: 'Proposal',
    note: 'A parent can approve reusable character representations and create consistent page illustrations with a no-photo fallback.',
  },
  {
    title: 'Sprint 5 - Child library and reader',
    state: 'Proposed outcome gate',
    status: 'Proposal',
    note: 'Approved stories can be made child-visible and read page by page on a responsive website.',
  },
  {
    title: 'Sprint 6 - Alpha safety and release readiness',
    state: 'Proposed outcome gate',
    status: 'Proposal',
    note: 'Privacy, content safety, security, reliability, deployment, and acceptance evidence support a small private Alpha.',
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
