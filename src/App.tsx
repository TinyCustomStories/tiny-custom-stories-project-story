import React from 'react';
import deliverySnapshot from './delivery-snapshot.json';
import {
  designPrinciples,
  milestones,
  publicEntries,
  surfaceThemes,
  type KnowledgeStatus,
} from './content';

type Route =
  | '/'
  | '/product'
  | '/journey'
  | '/development'
  | '/architecture'
  | '/delivery'
  | '/decisions'
  | '/roadmap'
  | '/sprint-one'
  | '/sprint-two'
  | '/sprint-three'
  | '/design'
  | '/questions'
  | '/library';

const routes: Record<Route, string> = {
  '/': 'Home',
  '/product': 'The product',
  '/journey': 'How it works',
  '/development': 'Development story',
  '/architecture': 'Architecture',
  '/delivery': 'How we build',
  '/decisions': 'Decisions',
  '/roadmap': 'Roadmap',
  '/sprint-one': 'Sprint 1',
  '/sprint-two': 'Sprint 2',
  '/sprint-three': 'Sprint 3',
  '/design': 'Design',
  '/questions': 'Open questions',
  '/library': 'Public library',
};

const primaryNavigation: Array<{ path: Route; label: string }> = [
  { path: '/', label: 'Home' },
  { path: '/product', label: 'The product' },
  { path: '/journey', label: 'How it works' },
  { path: '/development', label: 'Development story' },
  { path: '/architecture', label: 'Architecture' },
  { path: '/delivery', label: 'How we build' },
  { path: '/decisions', label: 'Decisions' },
  { path: '/roadmap', label: 'Roadmap' },
  { path: '/design', label: 'Design' },
  { path: '/questions', label: 'Open questions' },
  { path: '/library', label: 'Public library' },
];

const pdfPath = `${import.meta.env.BASE_URL}documents/tiny-custom-stories-project-dossier.pdf`;

const routeDescriptions: Record<Exclude<Route, '/'>, string> = {
  '/product':
    'The intended benefit, audience, parent/child boundaries, and Alpha shape.',
  '/journey':
    'How discovery, context selection, Story Studio, approval, and later reading fit together.',
  '/development':
    'How the project moved from foundations to protected family access, Discovery, and Story Studio.',
  '/architecture':
    'Capability boundaries that can evolve independently without pretending every boundary is already a separate service.',
  '/delivery':
    'The GitHub activity, review loop, automated quality gates, browser evidence, and outcome-gated workflow behind the product.',
  '/decisions':
    'A labeled record of confirmed decisions, proposals, verified facts, and unknowns.',
  '/roadmap': 'Outcome gates that describe progress without promising dates.',
  '/sprint-one':
    'What has been built around family access, why the outcome gate is still open, and what that means.',
  '/sprint-two':
    'How the Child Map became a temporal living record with a versioned Discovery capability.',
  '/sprint-three':
    'How Story Studio became a reversible composition workflow with explicit capability ownership.',
  '/design':
    'The shared philosophy and paper-and-ink language that keep different surfaces recognizably related.',
  '/questions':
    'Important matters that still need research, testing, specialist review, or an explicit decision.',
  '/library':
    'How public summaries are selected, reviewed, defined, and maintained.',
};

const statusClass: Record<KnowledgeStatus, string> = {
  'Confirmed decision': 'status-confirmed',
  Proposal: 'status-proposal',
  Assumption: 'status-assumption',
  'Open question': 'status-open',
  'Verified fact': 'status-fact',
};

function internalPath(path: string): Route {
  return path in routes ? (path as Route) : '/';
}

function go(path: Route) {
  window.history.pushState({}, '', `#${path}`);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

function Link({
  children,
  to,
  className,
  ...props
}: {
  children: React.ReactNode;
  to: Route;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      {...props}
      className={className}
      href={to}
      onClick={(event) => {
        event.preventDefault();
        go(to);
      }}
    >
      {children}
    </a>
  );
}

function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro section">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-lede">{children}</div>
    </section>
  );
}

function Definition({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <p>
      <strong>{term}:</strong> {children}
    </p>
  );
}

function Home() {
  return (
    <>
      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            A public project story · updated September 24, 2026
          </p>
          <h1 id="hero-title">
            Stories built <span className="scribble">with care,</span> not just
            code.
          </h1>
          <p className="hero-lede">
            Tiny Custom Stories has grown from a personalized-story idea into a
            parent-controlled learning product with protected family boundaries,
            a flexible Child Map Discovery capability, and a deliberately
            separated Story Studio architecture.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/development">
              See how it evolved <span aria-hidden="true">→</span>
            </Link>
            <a
              className="button button-light"
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
            >
              Read the PDF <span aria-hidden="true">↓</span>
            </a>
            <Link className="text-link" to="/decisions">
              See what we know so far
            </Link>
          </div>
        </div>
        <div
          className="hero-doodle"
          role="img"
          aria-label="An abstract hand-drawn scene of a parent, child, and an open storybook connected by a winding line."
        >
          <div className="sun">a little brighter</div>
          <div className="doodle-person person-parent">
            <span>parent</span>
          </div>
          <div className="doodle-book">
            <i>
              once upon a<br />
              thoughtful idea
            </i>
          </div>
          <div className="doodle-person person-child">
            <span>reader</span>
          </div>
          <p className="doodle-note">
            A parent’s intent.
            <br />A child’s next favourite story.
          </p>
        </div>
      </section>

      <section
        className="status-strip section"
        aria-label="Current project status"
      >
        <p>
          <span aria-hidden="true">●</span> Sprint 0 is demonstrated. Sprint 1
          has substantial implementation evidence, but its outcome gate remains
          explicitly open.
        </p>
        <p>
          Sprint 2 and Sprint 3 work may proceed with{' '}
          <strong>
            synthetic inputs under a temporary sequencing exception
          </strong>
          .
        </p>
        <Link to="/development">
          Read the current development story <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section
        className="section home-directory"
        aria-labelledby="directory-title"
      >
        <div className="section-kicker">
          A readable route through the project
        </div>
        <h2 id="directory-title">One project story, ten places to pause.</h2>
        <p className="section-intro">
          The September version is still here underneath this one. The site has
          grown around it: existing routes remain, while newer pages explain the
          development history and capability architecture without turning plans
          into accomplishments.
        </p>
        <div className="route-grid">
          {primaryNavigation
            .filter(({ path }) => path !== '/')
            .map(({ path, label }, index) => (
              <Link to={path} className="route-card" key={path}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{label}</h3>
                <p>{routeDescriptions[path as Exclude<Route, '/'>]}</p>
                <b>Read this page →</b>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

function Product() {
  return (
    <>
      <PageIntro
        eyebrow="01 · The product"
        title="A small, human answer to a modern question."
      >
        <p>
          How can technology help families make more room for imagination,
          conversation, and learning without turning childhood into an attention
          feed or turning AI into an unexplained authority? Tiny Custom Stories
          keeps the parent responsible for intention, context, review, and
          approval.
        </p>
      </PageIntro>

      <section className="section story-section">
        <div className="role-grid">
          <article>
            <span className="role-icon" aria-hidden="true">
              ✎
            </span>
            <h3>Parents set the intention</h3>
            <p>
              They choose why a story is being made, decide which information
              may help, review the draft, and approve the result.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ☼
            </span>
            <h3>Children get the wonder</h3>
            <p>
              The first audience is ages two through six, with a calm
              parent-approved story library as the child-facing destination.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ⌁
            </span>
            <h3>AI stays bounded</h3>
            <p>
              Generation can help plan and write, but it does not decide what
              private family information it may access or silently publish a
              result to a child.
            </p>
          </article>
        </div>

        <div className="reading-panel">
          <h2>Terms on this page</h2>
          <Definition term="Child Map">
            A parent-guided living record of information that may support
            personalization. It is not a request to collect everything about a
            child.
          </Definition>
          <Definition term="Story Studio">
            The guided parent experience that moves from story intention and
            selected context through planning, text creation, revision, and
            approval.
          </Definition>
          <Definition term="Alpha target">
            The eventual private Alpha remains a website-first experience for
            one family and one child. Sprint 3 deliberately proves text
            composition before Sprint 4 adds character and illustration work.
          </Definition>
        </div>

        <div className="mode-preview" aria-label="Alpha experience boundaries">
          <article>
            <p className="eyebrow">Default after sign-in</p>
            <h2>Child mode</h2>
            <p>
              A calm, read-only library containing only stories a parent has
              made child-visible. Drafts, Child Map information, account
              controls, and parent-only work stay out.
            </p>
          </article>
          <article>
            <p className="eyebrow">Deliberate adult entry</p>
            <h2>Parent mode</h2>
            <p>
              A protected place for Discovery, Story Studio work, approvals,
              settings, and sensitive account actions. The server—not a hidden
              button—enforces the authority boundary.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function Journey() {
  const steps = [
    [
      '1. A parent starts with purpose',
      'Choose what the story is for and whether it should use Child Map context or be completely fictional.',
    ],
    [
      '2. Discovery can grow the Child Map',
      'Approved questions appear through versioned definitions, typed answer shapes, deterministic eligibility, pacing, and bounded follow-ups.',
    ],
    [
      '3. Context is selected for this story',
      'Story Context Selection applies policy before optional intelligence, then shows a small permitted set the parent can include or remove.',
    ],
    [
      '4. Story Studio composes and revises',
      'A plan becomes a cover plus ten text pages, with direct editing, scoped assisted revisions, restoration, and explicit continuity choices.',
    ],
    [
      '5. Approval creates a stable version',
      'Story Lifecycle owns the approved Story version. Child-visible publication and the illustrated reading experience remain later outcome gates.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="02 · How it works"
        title="Personalization is a chain of explicit hand-offs."
      >
        <p>
          The important change since the first public story is architectural:
          Discovery does not own Story truth, Story Generation does not decide
          what family context it is allowed to see, and an AI response does not
          become child-visible merely because it exists.
        </p>
      </PageIntro>

      <section className="section how-section">
        <ol className="journey-list">
          {steps.map(([title, detail]) => (
            <li key={title}>
              <h2>{title}</h2>
              <p>{detail}</p>
            </li>
          ))}
        </ol>

        <div className="architecture-sketch">
          <div>
            <b>Parent experience</b>
            <small>Purpose, review, choices, approval</small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Discovery + Story capabilities</b>
            <small>Separate ownership, versioned contracts</small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Private family data</b>
            <small>Application-authorized documents and media</small>
          </div>
          <p>
            The capability boundaries are accepted. They do not imply that each
            box is already a separately deployed network service.
          </p>
        </div>

        <div className="reading-panel">
          <h2>What these words mean</h2>
          <Definition term="Capability boundary">
            A clear owner and contract inside the application. A capability may
            later become a separate worker or service if operational evidence
            justifies that cost.
          </Definition>
          <Definition term="Candidate">
            Generated or selected material that still needs application checks
            and/or parent choice before it becomes Story truth.
          </Definition>
          <Definition term="Completely fictional">
            A story path that uses no Child Map source context.
          </Definition>
        </div>
      </section>
    </>
  );
}

function Development() {
  const moments = [
    [
      'Sprint 0 · demonstrated',
      'The project replaced assumptions with a documented product direction, accepted architecture, a clean React/Vite web foundation, a clean ASP.NET Core API foundation, CI, contracts, and browser evidence.',
    ],
    [
      'Sprint 1 · implemented deeply, gate still open',
      'Accounts, child-safe default mode, protected parent entry, expiry, recovery, tab isolation, temporary protected work, accessibility, and end-to-end evidence were built. A required same-browser provider proof did not pass, so the outcome gate remains open.',
    ],
    [
      'Sprint 2 · Child Map became Discovery',
      'The Child Map evolved from a profile-like form into a temporal living record. Discovery now has approved versioned questions, typed answers, deterministic eligibility and pacing, bounded follow-ups, and a generic renderer.',
    ],
    [
      'Sprint 3 · Story creation became Story Studio',
      'The story slice now has a canonical composition workflow and three explicit ownership boundaries: Story Lifecycle, Story Context Selection, and Story Generation.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="03 · Development story"
        title="The architecture changed because the questions got better."
      >
        <p>
          The project did not move in a straight line from “idea” to “features.”
          Each sprint exposed a boundary that needed to become clearer: first
          family authority, then evolving child context, then the difference
          between Story truth, context permission, and generation.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <ol className="boundary-grid">
          {moments.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>

        <div className="sprint-chapter-intro">
          <p className="eyebrow">Sprint chapters</p>
          <h2>One development story, three equally visible chapters.</h2>
          <p>
            Sprint 1 keeps its original deep link, but it no longer gets special
            treatment in the main header. Sprint 1, 2, and 3 now live together
            here, each with its own public-safe chapter and explicit outcome
            status.
          </p>
        </div>

        <div className="sprint-chapter-grid" aria-label="Sprint chapters">
          <Link to="/sprint-one" className="sprint-chapter-card">
            <span>01</span>
            <p className="eyebrow">Implemented deeply · gate open</p>
            <h3>Sprint 1</h3>
            <p>
              Accounts, child-safe default mode, protected parent access,
              expiry, recovery, accessibility, and boundary evidence.
            </p>
            <b>Read Sprint 1 →</b>
          </Link>
          <Link to="/sprint-two" className="sprint-chapter-card">
            <span>02</span>
            <p className="eyebrow">Canonical scope accepted</p>
            <h3>Sprint 2</h3>
            <p>
              A temporal Child Map plus versioned Discovery questions, typed
              answers, eligibility, pacing, and bounded follow-ups.
            </p>
            <b>Read Sprint 2 →</b>
          </Link>
          <Link to="/sprint-three" className="sprint-chapter-card">
            <span>03</span>
            <p className="eyebrow">Architecture accepted</p>
            <h3>Sprint 3</h3>
            <p>
              Story Studio, context selection, reversible revisions, stable
              approval, and an extractable generation boundary.
            </p>
            <b>Read Sprint 3 →</b>
          </Link>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">How work is delivered now</p>
            <h2>Detailed input makes implementation more reviewable.</h2>
          </div>
          <ul>
            <li>Human-directed product and architecture decisions.</li>
            <li>Explicit issues with dependencies and acceptance criteria.</li>
            <li>Architecture references and visual cues where they help.</li>
            <li>AI-assisted implementation inside documented boundaries.</li>
            <li>
              Automated checks plus targeted boundary and visual evidence.
            </li>
            <li>
              PR review and an outcome gate before a sprint is called passed.
            </li>
          </ul>
        </div>

        <p className="public-boundary-note">
          The project intentionally prefers more precise implementation tasks
          over fewer ambiguous ones. Task count is not treated as a measure of
          progress.
        </p>
      </section>
    </>
  );
}

function HowWeBuild() {
  const stats = [
    [deliverySnapshot.commits, 'commits', 'on the development branch'],
    [deliverySnapshot.pullRequestsCreated, 'pull requests', 'created'],
    [deliverySnapshot.pullRequestsMerged, 'pull requests', 'merged'],
    [deliverySnapshot.issuesTracked, 'issues', 'tracked'],
    [deliverySnapshot.taskIssues, 'task issues', 'implementation / validation'],
    [deliverySnapshot.workflowRuns, 'workflow runs', 'GitHub Actions'],
  ] as const;

  const workflowChecks = [
    [
      'Frontend CI',
      'Bootstrap tests, high-severity dependency audit, formatting, linting, type checks, production build, and frontend tests.',
    ],
    [
      'Backend CI',
      'Restore/audit, formatting, warnings-as-errors build, generated OpenAPI drift check, MongoDB replica-set startup, API tests, and migration/startup smoke tests.',
    ],
    [
      'Browser evidence',
      'Playwright Chromium smoke tests, intentional screenshot evidence, and uploaded failure artifacts when a browser run breaks.',
    ],
    [
      'Project story CI',
      'Formatting, linting, type checks, production build, and tests for the project-story surface alongside the product work.',
    ],
  ] as const;

  return (
    <>
      <PageIntro
        eyebrow="05 · How we build"
        title="The amount of work is visible because the process is visible."
      >
        <p>
          Tiny Custom Stories is intentionally developed through many small,
          reviewable pieces rather than a few giant changes. The numbers below
          are a dated snapshot of the main product repository, and the workflow
          underneath them matters more than any single count.
        </p>
      </PageIntro>

      <section className="section delivery-section">
        <div className="snapshot-heading">
          <div>
            <p className="eyebrow">GitHub delivery snapshot</p>
            <h2>{deliverySnapshot.snapshotDate}</h2>
          </div>
          <p>
            Scope: the main <code>tiny-custom-stories</code> product repository.
            The separate public-story repository is excluded so these numbers
            do not inflate themselves.
          </p>
        </div>

        <div className="stat-grid" aria-label="Repository activity snapshot">
          {stats.map(([value, label, detail]) => (
            <article className="stat-card" key={label + detail}>
              <strong>{value.toLocaleString()}</strong>
              <h3>{label}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="delivery-detail-grid">
          <article>
            <p className="eyebrow">Work decomposition</p>
            <h2>{deliverySnapshot.plannedSprints} outcome-gated sprints</h2>
            <p>
              {deliverySnapshot.closedIssues.toLocaleString()} issues are closed
              and {deliverySnapshot.openIssues.toLocaleString()} remain open.
              The backlog is intentionally detailed: task count is used to make
              dependencies, acceptance criteria, evidence, and ownership
              explicit—not as a vanity metric.
            </p>
          </article>
          <article>
            <p className="eyebrow">Automation footprint</p>
            <h2>{deliverySnapshot.workflowDefinitions} CI workflows</h2>
            <p>
              {deliverySnapshot.successfulWorkflowRuns.toLocaleString()} of the{' '}
              {deliverySnapshot.workflowRuns.toLocaleString()} recorded workflow
              runs completed successfully in this snapshot. Runs include PR,
              push, scheduled, and manually triggered verification, so this is
              an activity count rather than a pass-rate score.
            </p>
          </article>
        </div>

        <div className="workflow-grid">
          {workflowChecks.map(([title, detail], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="delivery-loop" aria-label="Delivery workflow">
          <span>Issue / task</span>
          <i aria-hidden="true">→</i>
          <span>Focused branch</span>
          <i aria-hidden="true">→</i>
          <span>Pull request</span>
          <i aria-hidden="true">→</i>
          <span>CI + browser evidence</span>
          <i aria-hidden="true">→</i>
          <span>Review</span>
          <i aria-hidden="true">→</i>
          <span>Merge + outcome evidence</span>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Why the checks matter</p>
            <h2>CI is part of the product-development method.</h2>
          </div>
          <ul>
            <li>Formatting and linting keep implementation drift visible.</li>
            <li>Type checks and warnings-as-errors catch contract mistakes early.</li>
            <li>Frontend and API tests protect behavior as tasks land independently.</li>
            <li>Dependency audits and generated-contract checks catch supply-chain and API drift.</li>
            <li>Real MongoDB startup/migration checks exercise infrastructure assumptions.</li>
            <li>Browser smoke tests and captured screenshots prove important flows beyond unit tests.</li>
            <li>
              This public-story repository also has a verify/build → GitHub
              Pages deployment path; product hosting and production CD remain
              separate evidence-led decisions.
            </li>
          </ul>
        </div>

        <p className="public-boundary-note">
          Snapshot counts are intentionally dated rather than presented as live
          telemetry. The public site does not call the private repository or
          require a GitHub token in the browser.
        </p>
      </section>
    </>
  );
}

function Architecture() {
  const storyCapabilities = [
    [
      'Story Lifecycle',
      'Owns Story domain truth, persistence, revisions, approval, and participation in deletion rules.',
    ],
    [
      'Story Context Selection',
      'Owns story-use and provider-transfer policy, permitted candidates, parent selection, and the minimized context bundle.',
    ],
    [
      'Story Generation',
      'Consumes minimized versioned artifacts and returns candidate plans, pages, rewrites, and findings. It does not own Story persistence or family authorization.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="04 · Architecture"
        title="Separate responsibility before separating machines."
      >
        <p>
          Tiny Custom Stories now uses explicit capability boundaries so parts
          of the product can evolve independently without pretending that every
          logical boundary needs its own service on day one.
        </p>
      </PageIntro>

      <section className="section story-section">
        <div className="mode-preview">
          <article>
            <p className="eyebrow">Sprint 2 pattern</p>
            <h2>Child Map Discovery</h2>
            <p>
              Owns question definitions and discovery operating state:
              eligibility, pacing, question history, cooldowns, and bounded
              follow-ups. Parent answers become Child Map information only
              through the owning Child Map write model.
            </p>
          </article>
          <article>
            <p className="eyebrow">Sprint 3 pattern</p>
            <h2>Story capabilities</h2>
            <p>
              Story truth, context permission, and provider-facing generation
              are separate responsibilities even when they run inside the same
              Alpha API process.
            </p>
          </article>
        </div>

        <div className="role-grid">
          {storyCapabilities.map(([title, detail]) => (
            <article key={title}>
              <span className="role-icon" aria-hidden="true">
                ✦
              </span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="architecture-sketch">
          <div>
            <b>Web experience</b>
            <small>Child mode + protected parent mode</small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Application API</b>
            <small>Family authority + capability contracts</small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Documents + private media</b>
            <small>MongoDB + S3-compatible storage</small>
          </div>
          <p>
            Discovery and Story Generation are extractable boundaries. Worker
            extraction, durable workflow technology, message broker, deployment
            platform, and production MCP adapters remain evidence-led decisions,
            not assumed infrastructure.
          </p>
        </div>

        <div className="reading-panel">
          <h2>Architecture rules that matter</h2>
          <Definition term="Policy before intelligence">
            Optional ranking or model assistance may operate only after
            deterministic privacy and story-use policy has decided which
            candidates are permitted.
          </Definition>
          <Definition term="MCP">
            An optional adapter over application-owned contracts. It is not the
            capability definition, authorization boundary, or business logic.
          </Definition>
          <Definition term="Extractable">
            Designed so provider-facing Story Generation can later move to a
            worker or service for durability, scaling, credential isolation,
            rate-limit isolation, or backpressure if real operations justify it.
          </Definition>
        </div>
      </section>
    </>
  );
}

function Decisions() {
  return (
    <>
      <PageIntro
        eyebrow="06 · Decision record"
        title="Certainty deserves a label."
      >
        <p>
          The project uses plain labels because pretending to know more than we
          do would be misleading. An entry’s status describes the strength of
          the statement, not its importance.
        </p>
      </PageIntro>

      <section className="section decisions-section">
        <div className="legend" aria-label="Knowledge-status legend">
          {Object.keys(statusClass).map((status) => (
            <span
              className={statusClass[status as KnowledgeStatus]}
              key={status}
            >
              {status}
            </span>
          ))}
        </div>

        <div className="status-definitions">
          <Definition term="Confirmed decision">
            A choice the project has deliberately adopted.
          </Definition>
          <Definition term="Verified fact">
            A statement supported by repository evidence and safe to share
            publicly.
          </Definition>
          <Definition term="Proposal">
            A possible direction; it is not a promise or settled design.
          </Definition>
          <Definition term="Assumption">
            A working belief that needs evidence before it can guide a lasting
            decision.
          </Definition>
          <Definition term="Open question">
            An important unresolved matter that should remain visible.
          </Definition>
        </div>

        <div className="entry-grid">
          {publicEntries.map((entry) => (
            <article className="entry-card" key={entry.title}>
              <div>
                <span className={`status-pill ${statusClass[entry.status]}`}>
                  {entry.status}
                </span>
                <span className="entry-date">{entry.date}</span>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              <dl>
                <div>
                  <dt>Public source</dt>
                  <dd>{entry.source}</dd>
                </div>
                <div>
                  <dt>Connects to</dt>
                  <dd>{entry.related.join(' · ')}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Roadmap() {
  return (
    <>
      <PageIntro
        eyebrow="07 · Roadmap"
        title="Progress is measured by outcomes, with exceptions made visible."
      >
        <p>
          The roadmap remains outcome-gated, but the current sequence includes
          one explicit exception: Sprint 2 and Sprint 3 work may proceed with
          synthetic inputs while Sprint 1’s gate remains open. That exception
          does not make Sprint 1 complete.
        </p>
      </PageIntro>

      <section className="section roadmap-section">
        <ol className="roadmap-list">
          {milestones.map((milestone, index) => (
            <li key={milestone.title}>
              <span>{String(index).padStart(2, '0')}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.note}</p>
              </div>
              <div className="milestone-state">
                <span
                  className={`status-pill ${statusClass[milestone.status]}`}
                >
                  {milestone.status}
                </span>
                <em>{milestone.state}</em>
              </div>
            </li>
          ))}
        </ol>

        <div className="reading-panel">
          <h2>Roadmap vocabulary</h2>
          <Definition term="Outcome gate">
            Evidence that a meaningful capability meets its accepted transition
            criteria. Closing issues is supporting evidence, not proof by
            itself.
          </Definition>
          <Definition term="Temporary sequencing exception">
            A documented decision allowing later synthetic work to proceed while
            an earlier gate remains explicitly open.
          </Definition>
          <Definition term="Canonical scope">
            The accepted product specification and architecture for a sprint. It
            does not mean the sprint outcome has already been demonstrated.
          </Definition>
          <Definition term="Private Alpha readiness">
            A later threshold requiring demonstrated privacy, safety, security,
            reliability, deployment, and real-world learning.
          </Definition>
        </div>
      </section>
    </>
  );
}

function SprintOne() {
  const boundaries = [
    [
      'One intentionally narrow Alpha family',
      'One verified parent identity maps to one internal family and one child. Registration begins with only the parent email.',
    ],
    [
      'Child mode comes first',
      'A signed-in family arrives in the read-only story library. Parent information and protected actions remain unavailable there.',
    ],
    [
      'Parent work is server-protected',
      'Child Map information, drafts, creation, approvals, sensitive settings, export, deletion, and sign-out require parent authority enforced at the API boundary.',
    ],
    [
      'Access expires and private work stays concealed',
      'Parent access is bounded, tab-aware, recoverable, and designed so refresh, expiry, or another tab does not silently leak protected work into child mode.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="Sprint chapter · 01"
        title="A strong implementation can still have an open outcome gate."
      >
        <p>
          Sprint 1 has moved far beyond planning. The family-access boundary has
          substantial implementation, regression, accessibility, and end-to-end
          evidence. The project still records the outcome gate as not passed
          because one required provider proof remains unresolved.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 1 outcome status</p>
            <h2>
              Implemented deeply. Gate open. Later work temporarily bounded.
            </h2>
          </div>
          <p>
            A temporary founder-approved sequencing exception permits Sprint 2
            and Sprint 3 planning and implementation with synthetic inputs. The
            unresolved Sprint 1 provider evidence must be revisited before
            Sprint 4 begins.
          </p>
        </div>

        <ol className="boundary-grid">
          {boundaries.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Evidence accumulated</p>
            <h2>The awkward states were treated as product behavior.</h2>
          </div>
          <ul>
            <li>First and repeat sign-in preserve one family boundary.</li>
            <li>Child mode rejects parent-only data and actions.</li>
            <li>
              Entry, expiry, refresh, lock contention, and recovery are tested.
            </li>
            <li>
              Protected placeholder work restores only inside the authorized
              boundary.
            </li>
            <li>
              Keyboard, focus, announcements, reflow, and error recovery have
              dedicated evidence.
            </li>
            <li>
              A full synthetic browser journey exercises the family-mode return
              path.
            </li>
          </ul>
        </div>

        <p className="public-boundary-note">
          This page intentionally explains the user and architecture boundary
          without publishing attack-relevant security parameters, provider
          credentials, private project links, or live identity data.
        </p>
      </section>
    </>
  );
}

function SprintTwo() {
  const boundaries = [
    [
      'The Child Map is temporal',
      'Information can be corrected, changed over time, or deleted. The model is a living parent-guided record, not a profile-completion score.',
    ],
    [
      'Discovery questions are versioned',
      'Approved question definitions and typed answer shapes can evolve without hard-coding one questionnaire into the web application.',
    ],
    [
      'Eligibility and pacing are deterministic',
      'Sprint 2 uses explicit age/context eligibility, shown/dismissed history, cooldowns, and bounded follow-ups rather than runtime semantic interpretation of family free text.',
    ],
    [
      'Discovery does not own story context',
      'Answers can become canonical Child Map source information, but Story Context Selection in Sprint 3 decides what is permitted for a particular story or provider transfer.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="Sprint chapter · 02"
        title="A living Child Map needs a capability, not a questionnaire."
      >
        <p>
          Sprint 2 changed shape as the project learned more. The accepted
          direction is now a temporal Child Map plus a versioned Discovery
          capability that can grow without coupling the entire product to one
          fixed set of questions.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 2 outcome status</p>
            <h2>Canonical scope accepted. Synthetic implementation allowed.</h2>
          </div>
          <p>
            This is not a claim that the Sprint 2 outcome gate has passed.
            Under the temporary sequencing exception, work may proceed with
            synthetic inputs while Sprint 1 remains explicitly open.
          </p>
        </div>

        <ol className="boundary-grid">
          {boundaries.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>

        <div className="reading-panel">
          <h2>What this architecture buys us</h2>
          <Definition term="Different question shapes">
            Short text, longer text, choices, true/false, structured selections,
            and bounded follow-ups can share one renderer contract.
          </Definition>
          <Definition term="Future intelligence">
            Later question authoring, ranking, or phrasing can sit behind the
            capability boundary without silently changing Sprint 2 privacy
            rules.
          </Definition>
          <Definition term="Public status">
            Accepted product and architecture direction; not a demonstrated
            sprint outcome.
          </Definition>
        </div>
      </section>
    </>
  );
}

function SprintThree() {
  const boundaries = [
    [
      'Story Studio is guided and reversible',
      'A parent moves from purpose and selected context through planning, a cover plus ten text pages, direct/scoped revision, restoration, and approval.',
    ],
    [
      'Story Lifecycle owns Story truth',
      'Story identity, persistence, revisions, optimistic concurrency, approval, and stable approved versions stay with the lifecycle capability.',
    ],
    [
      'Context Selection owns permission',
      'Policy determines which Child Map candidates may be considered, then the parent can include or remove a small permitted set before generation.',
    ],
    [
      'Generation returns candidates',
      'Story Generation plans, drafts, evaluates, repairs, and rewrites minimized versioned artifacts. It does not own family authorization, persistence, or child visibility.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="Sprint chapter · 03"
        title="Story creation is a reversible composition workflow."
      >
        <p>
          Sprint 3 moved away from the idea of one giant Story service. The
          accepted architecture separates Story Lifecycle, Story Context
          Selection, and Story Generation while keeping the Alpha deployment
          physically simple until operational evidence justifies extraction.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 3 outcome status</p>
            <h2>Canonical workflow and capability architecture accepted.</h2>
          </div>
          <p>
            The architecture is implementation-ready, but the outcome gate is
            not being presented as passed. Text composition comes first;
            reusable characters and generated illustrations remain Sprint 4.
          </p>
        </div>

        <ol className="boundary-grid">
          {boundaries.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>

        <div className="reading-panel">
          <h2>Why the split matters</h2>
          <Definition term="Logical boundary first">
            Lifecycle, context permission, and generation can evolve
            independently even while they run inside the same Alpha API process.
          </Definition>
          <Definition term="Extractable generation">
            Generation can later move to a worker or service if durability,
            backpressure, rate limits, credential isolation, or independent
            scaling make that worthwhile.
          </Definition>
          <Definition term="Still open">
            Provider selection, exact durable-workflow technology, provider-copy
            deletion behavior, and the physical extraction point remain
            evidence-led decisions.
          </Definition>
        </div>
      </section>
    </>
  );
}

function Design() {
  const palette = [
    ['Ink', '#27213B', 'ink'],
    ['Paper', '#FBF8EF', 'paper'],
    ['Plum', '#6F549F', 'plum'],
    ['Coral', '#E76042', 'coral'],
    ['Sun', '#F7B84B', 'sunny'],
    ['Mint', '#9DD3C6', 'mint'],
    ['Lavender', '#E7D8F5', 'lavender'],
  ];

  return (
    <>
      <PageIntro
        eyebrow="08 · Design philosophy and language"
        title="The same design DNA, expressed for different responsibilities."
      >
        <p>
          The project has not replaced its visual identity. The accepted
          paper-and-ink language still provides the shared foundations, while
          child, parent, serious, and public-editorial surfaces remain
          intentionally different in density, authority, and tone.
        </p>
      </PageIntro>

      <section className="section design-section">
        <div className="design-formula">
          <p>
            <strong>70%</strong>
            <span>calm editorial foundation</span>
          </p>
          <p>
            <strong>20%</strong>
            <span>handcrafted character</span>
          </p>
          <p>
            <strong>10%</strong>
            <span>emphasis and delight</span>
          </p>
        </div>

        <div className="principle-grid">
          {designPrinciples.map(([title, detail], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="recipe-panel">
          <div>
            <p className="eyebrow">The reusable visual recipe</p>
            <h2>Paper, ink, and a few purposeful sparks.</h2>
            <p>
              Fraunces carries expressive titles. Nunito Sans keeps bodies and
              controls plain. DM Mono labels metadata and status. Crisp borders,
              small offset shadows, flat color, and generous spacing keep the
              family resemblance without forcing every surface into one layout.
            </p>
          </div>
          <div
            className="palette"
            aria-label="Accepted interface color palette"
          >
            {palette.map(([name, value, className]) => (
              <div key={name}>
                <span
                  className={`swatch swatch-${className}`}
                  aria-hidden="true"
                />
                <b>{name}</b>
                <code>{value}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="theme-grid">
          {surfaceThemes.map((theme) => (
            <article key={theme.name}>
              <p className="eyebrow">{theme.audience}</p>
              <h3>{theme.name}</h3>
              <p>{theme.detail}</p>
            </article>
          ))}
        </div>

        <div className="component-sample">
          <div>
            <p className="eyebrow">Continuity over redesign</p>
            <h2>The public story grew without changing who it is.</h2>
            <p>
              Existing typography, palette, cards, status treatments,
              navigation, fragment routes, responsive behavior, and public
              editorial character remain the foundation for these new pages.
            </p>
          </div>
          <div
            className="sample-actions"
            aria-label="Non-interactive button examples"
          >
            <span className="button button-dark">Create story plan</span>
            <span className="button button-light">Review the draft</span>
            <span className="sample-link">Return to child mode</span>
          </div>
        </div>

        <p className="influence-note">
          Coherence comes from shared values and foundations, not identical page
          composition. The public story should not look like the private family
          application, and the parent experience should not look like a toy.
        </p>
      </section>
    </>
  );
}

function Questions() {
  const questions = [
    [
      'What family information is necessary, optional, or prohibited?',
      'The Child Map is now a living record, but the exact minimum, optional, and prohibited fields still require product, privacy, and safety evidence.',
    ],
    [
      'Which Child Map information may be used for a specific story or transferred to a provider?',
      'Sprint 3 has a context-selection boundary, but the detailed sensitivity and purpose policy remains unresolved.',
    ],
    [
      'What happens to stories derived from Child Map information that is later deleted?',
      'The lifecycle of drafts, revisions, approved versions, generation artifacts, and provider-held copies must be decided before the Sprint 3 gate passes.',
    ],
    [
      'When should Story Generation become a separate worker or service?',
      'The extraction path is designed, but the trigger should come from real durability, queueing, scaling, credential, rate-limit, or backpressure needs.',
    ],
    [
      'Which provider and deployment choices meet the evidence bar?',
      'Provider integrations remain replaceable and synthetic-first; deployment and durable-workflow products are not selected merely for convenience.',
    ],
    [
      'What proves the private Alpha is valuable and safe enough to continue?',
      'The project still needs real-world learning criteria in addition to technical and safety evidence.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="09 · Open questions"
        title="Useful unknowns stay visible even as the architecture gets clearer."
      >
        <p>
          Better boundaries have narrowed some questions instead of eliminating
          uncertainty. The remaining unknowns are kept explicit so later
          implementation does not quietly make policy, privacy, or
          infrastructure decisions by accident.
        </p>
      </PageIntro>

      <section className="section questions-section">
        <ul className="question-list">
          {questions.map(([question, answer]) => (
            <li key={question}>
              <b>{question}</b>
              <span>{answer}</span>
            </li>
          ))}
        </ul>

        <div className="reading-panel">
          <h2>How to read an open question</h2>
          <Definition term="Open question">
            A matter that has not been decided. It is not a hidden commitment.
          </Definition>
          <Definition term="Narrowed question">
            A broad uncertainty whose ownership or policy boundary is now
            clearer even though the final operational choice is not settled.
          </Definition>
          <Definition term="Next step">
            Research, prototype evidence, specialist review, operational
            evidence, or a documented decision—not a quiet guess.
          </Definition>
        </div>
      </section>
    </>
  );
}

function Library() {
  return (
    <>
      <PageIntro
        eyebrow="10 · Public library"
        title="This site is a translation, not an automatic export."
      >
        <p>
          Public information should be understandable without exposing private
          working materials. Each entry is summarized for a general reader,
          given a knowledge-status label, tied to a safe source reference, and
          approved before publication.
        </p>
      </PageIntro>

      <section className="section library-section">
        <div
          className="curation-flow"
          role="img"
          aria-label="A three-step content-review flow: internal evidence is summarized, checked for public safety, and founder-approved before publication."
        >
          <div>
            <span>01</span>
            <b>Internal evidence</b>
            <p>
              Detailed specifications, ADRs, issues, tests, and working notes
              stay inside the project.
            </p>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <span>02</span>
            <b>Public-safe summary</b>
            <p>
              A curated record preserves status without exporting private
              implementation detail.
            </p>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <span>03</span>
            <b>Founder approval</b>
            <p>Material public changes are reviewed before publication.</p>
          </div>
        </div>

        <div className="reading-panel">
          <h2>Public-library definitions</h2>
          <Definition term="Curated">
            Chosen and summarized intentionally; this site is not a raw project
            feed.
          </Definition>
          <Definition term="Public-safe">
            Checked to exclude credentials, family information, private links,
            private research, and attack-relevant implementation detail.
          </Definition>
          <Definition term="Source reference">
            A public-readable description of the decision, ADR, specification,
            or evidence category that informed the summary without exposing
            private working material.
          </Definition>
        </div>

        <div className="pdf-callout">
          <div>
            <p className="eyebrow">A portable companion</p>
            <h2>Take the evolving project story with you.</h2>
            <p>
              The PDF follows the same public-safe narrative: product purpose,
              development history, Sprint 1’s open gate, Child Map Discovery,
              Story Studio and its capability boundaries, roadmap, design
              language, architecture, and open questions. The responsive website
              remains the primary version.
            </p>
          </div>
          <a
            className="button button-dark"
            href={pdfPath}
            target="_blank"
            rel="noreferrer"
          >
            Open the project PDF <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}

function Layout({ route }: { route: Route }) {
  const pages: Record<Route, React.ComponentType> = {
    '/': Home,
    '/product': Product,
    '/journey': Journey,
    '/development': Development,
    '/architecture': Architecture,
    '/delivery': HowWeBuild,
    '/decisions': Decisions,
    '/roadmap': Roadmap,
    '/sprint-one': SprintOne,
    '/sprint-two': SprintTwo,
    '/sprint-three': SprintThree,
    '/design': Design,
    '/questions': Questions,
    '/library': Library,
  };

  const Page = pages[route];

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to page content
      </a>
      <header className="site-header">
        <Link
          className="brand"
          to="/"
          aria-label="Tiny Custom Stories project story home"
        >
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          Tiny Custom Stories
        </Link>
        <nav aria-label="Project story pages">
          {primaryNavigation.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={route === path ? 'active' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main id="main-content">
        <Page />
      </main>
      <footer>
        <p>
          <strong>Tiny Custom Stories</strong> · a project being built in the
          open, with boundaries.
        </p>
        <div className="footer-links">
          <a href={pdfPath} target="_blank" rel="noreferrer">
            Project PDF ↓
          </a>
          <Link to="/">Back to the beginning ↑</Link>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = React.useState<Route>(() =>
    internalPath(window.location.hash.slice(1)),
  );

  React.useEffect(() => {
    const update = () => setRoute(internalPath(window.location.hash.slice(1)));
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return <Layout route={route} />;
}
