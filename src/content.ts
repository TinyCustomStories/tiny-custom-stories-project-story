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

export const publicEntries: PublicEntry[] = [
  {
    title: 'Personalized learning through stories',
    summary:
      'Tiny Custom Stories is being built to help parents make playful, meaningful stories for young children.',
    category: 'Product direction',
    date: '2026-08-26',
    status: 'Confirmed decision',
    source: 'DEC-2026-001 — core benefit',
    related: ['Ages two through six', 'Three story purposes'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Parents create; children explore',
    summary:
      'Parents guide creation and approval. Children get a simple library of stories their family has approved.',
    category: 'Product direction',
    date: '2026-08-27',
    status: 'Confirmed decision',
    source: 'DEC-2026-005 — parent-controlled library',
    related: ['Child-friendly reading', 'Protected parent area'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Small first version, clear edges',
    summary:
      'The first experience is planned as a website for ages two through six, with a cover and ten illustrated pages.',
    category: 'Alpha scope',
    date: '2026-08-27',
    status: 'Confirmed decision',
    source: 'DEC-2026-004, DEC-2026-006, DEC-2026-007',
    related: ['No narration yet', 'No video yet'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
  {
    title: 'Focused tools, not one giant black box',
    summary:
      'The planned system separates story planning, generation, review, and storage so the project can learn responsibly.',
    category: 'Architecture',
    date: '2026-08-27',
    status: 'Confirmed decision',
    source: 'DEC-2026-012 and ADR-0001',
    related: ['AI usage metering', 'Human approvals'],
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
    source: 'ADR-0004 — proposed orchestration',
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
    source: 'OQ-004 — privacy, consent, retention, and child safety',
    related: ['Data minimization', 'Safety review'],
    reviewStatus: 'Founder approved for public sharing',
    safeToPublish: true,
  },
];

export const milestones = [
  {
    title: 'Foundation',
    state: 'Completed building blocks',
    note: 'The project has a documented direction, target stack, and clean foundations.',
  },
  {
    title: 'Parent mode & Child Map',
    state: 'Next product outcome',
    note: 'Parents will need a protected place to manage the information they choose to share.',
  },
  {
    title: 'Create, review, approve',
    state: 'Planned vertical slice',
    note: 'A parent-led workflow will turn a purpose into an approved ten-page story.',
  },
  {
    title: 'Private Alpha readiness',
    state: 'Later outcome gate',
    note: 'Safety, privacy, reliability, and real-world learning must be demonstrated before a small Alpha.',
  },
];
