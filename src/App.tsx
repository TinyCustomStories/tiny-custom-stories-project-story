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
const architectureExplorerPath = `${import.meta.env.BASE_URL}architecture/system.html`;
const architecturePreviewPath = `${import.meta.env.BASE_URL}architecture/preview.svg`;

const routeDescriptions: Record<Exclude<Route, '/'>, string> = {
  '/product':
    'The intended benefit, audience, parent/child boundaries, and Alpha shape.',
  '/journey':
    'How discovery, context selection, Story Studio, approval, and later reading fit together.',
  '/development':
    'How the project moved from foundations to protected family access, Discovery, and Story Studio.',
  '/architecture':
    'A public-safe interactive map of the implemented, partial, accepted, and still-open capability boundaries.',
  '/delivery':
    'The GitHub activity, review loop, automated quality gates, browser evidence, and outcome-gated workflow behind the product.',
  '/decisions':
    'A labeled record of confirmed decisions, proposals, verified facts, and unknowns.',
  '/roadmap': 'Outcome gates that describe progress without promising dates.',
  '/sprint-one':
    'What has been built around family access, why the outcome gate is still open, and what that means.',
  '/sprint-two':
    'How a substantially implemented temporal Child Map now uses data-driven deterministic Discovery while its outcome gate remains open.',
  '/sprint-three':
    'How accepted Story capability boundaries are gaining real persistence, validation, operation-state, and rendering foundations.',
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
            A public project story · updated October 1, 2026
          </p>
          <h1 id="hero-title">
            Stories built <span className="scribble">with care,</span> not just
            code.
          </h1>
          <p className="hero-lede">
            Tiny Custom Stories has grown from a personalized-story idea into a
            parent-controlled learning product with a substantially implemented
            temporal Child Map, a data-driven Discovery capability, and Story
            foundations that keep generation separate from family authority and
            Story truth.
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
          remains evidence-gated. Sprint 2 is substantially implemented, with
          its final outcome gate still open.
        </p>
        <p>
          Sprint 3 foundation work is landing under the{' '}
          <strong>synthetic-only sequencing exception</strong>. Real-family
          Sprint 2 Alpha use still requires the remaining outcome evidence and
          qualified privacy, legal, security, and child-safety review.
        </p>
        <Link to="/development">
          Read the current development story <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section
        className="section architecture-teaser"
        aria-labelledby="architecture-teaser-title"
      >
        <div className="architecture-teaser-copy">
          <p className="eyebrow">A map you can wander</p>
          <h2 id="architecture-teaser-title">
            See how the pieces fit together.
          </h2>
          <p>
            The public architecture view keeps implementation status visible:
            what exists today, what is only partial, which Story boundaries are
            accepted, and which provider choices remain deliberately open.
          </p>
          <Link className="button button-dark" to="/architecture">
            Explore the architecture <span aria-hidden="true">→</span>
          </Link>
        </div>
        <Link
          className="architecture-preview-link"
          to="/architecture"
          aria-label="Explore the interactive Tiny Custom Stories architecture"
        >
          <img
            src={architecturePreviewPath}
            alt="Simplified preview of the Tiny Custom Stories public architecture"
            loading="lazy"
          />
          <span>
            Open the interactive map <span aria-hidden="true">↗</span>
          </span>
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
          This October checkpoint keeps the September site underneath it and
          updates the evidence around it: the same routes and visual language
          now show how far Child Map and Discovery implementation has moved,
          what still blocks the Sprint 2 gate, and which Sprint 3 foundations
          exist in code.
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
      'The project replaced assumptions with a documented product direction, accepted architecture, clean React/Vite and ASP.NET Core foundations, CI, contracts, and browser evidence.',
    ],
    [
      'Sprint 1 · implemented deeply, gate still open',
      'Accounts, child-safe default mode, protected parent entry, expiry, recovery, isolation, accessibility, and end-to-end evidence were built. A required provider proof remains unresolved, so the outcome gate stays open.',
    ],
    [
      'Sprint 2 · substantially implemented, gate still open',
      'The temporal Child Map now has category/detail flows, lifecycle semantics, current/history views, Right Now and Then & Now, data-driven deterministic Discovery, private-media and deletion foundations. Remaining product slices, cross-cutting evidence, and qualified review still block the outcome gate.',
    ],
    [
      'Sprint 3 · architecture accepted, foundations landing',
      'Pre-generation StoryRequest persistence, protected summary reads, a provider-neutral StoryBlueprint contract, structural validation, generation-operation persistence, architecture tests, and deterministic page/decoration foundations now exist while the visible Story Studio journey remains ahead.',
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
          between Story truth, context permission, and generation. The October
          checkpoint also shows where those boundaries have become real code.
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
            treatment in the main header. Sprint 1, 2, and 3 live together here,
            each with its own public-safe chapter and an explicit distinction
            between implementation progress and outcome-gate status.
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
            <p className="eyebrow">Substantially implemented · gate open</p>
            <h3>Sprint 2</h3>
            <p>
              Temporal Child Map, data-driven Discovery, lifecycle/deletion
              infrastructure, and the remaining evidence and review boundary.
            </p>
            <b>Read Sprint 2 →</b>
          </Link>
          <Link to="/sprint-three" className="sprint-chapter-card">
            <span>03</span>
            <p className="eyebrow">
              Architecture accepted · foundations landing
            </p>
            <h3>Sprint 3</h3>
            <p>
              Story request persistence, generation contracts, validation,
              operation state, deterministic rendering, and a still-future
              end-to-end Story Studio experience.
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
            <li>
              Small issues with explicit dependencies and stop conditions.
            </li>
            <li>Architecture references and visual cues where they help.</li>
            <li>
              Independent tasks can run concurrently in isolated sessions.
            </li>
            <li>Implementation is followed by review, fixes, and re-review.</li>
            <li>
              Automated checks plus targeted boundary and visual evidence.
            </li>
            <li>
              An outcome gate—not issue count—decides whether a sprint passed.
            </li>
          </ul>
        </div>

        <p className="public-boundary-note">
          The project intentionally prefers more precise implementation tasks
          over fewer ambiguous ones. Task count and merged code are supporting
          evidence, not substitutes for a demonstrated sprint outcome.
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
      'Restore/audit, formatting, warnings-as-errors build, generated OpenAPI drift checks, MongoDB startup, API tests, and migration/startup smoke tests.',
    ],
    [
      'Browser evidence',
      'Playwright Chromium smoke tests, intentional screenshot evidence, and uploaded failure artifacts when a browser run breaks.',
    ],
    [
      'Public-story CI',
      'The separate public-story repository generates its dossier, then checks formatting, linting, TypeScript, production build, and tests before publication.',
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
            The separate public-story repository is excluded so these numbers do
            not inflate themselves.
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
              The backlog is intentionally detailed: task count makes
              dependencies, acceptance criteria, evidence, and ownership
              explicit rather than acting as a productivity score.
            </p>
          </article>
          <article>
            <p className="eyebrow">Automation footprint</p>
            <h2>
              {deliverySnapshot.workflowDefinitions} main product CI workflows
            </h2>
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
          <span>Idea / finding</span>
          <i aria-hidden="true">→</i>
          <span>Product decision</span>
          <i aria-hidden="true">→</i>
          <span>Documentation</span>
          <i aria-hidden="true">→</i>
          <span>Issue / task</span>
          <i aria-hidden="true">→</i>
          <span>Implementation</span>
          <i aria-hidden="true">→</i>
          <span>PR + CI evidence</span>
          <i aria-hidden="true">→</i>
          <span>Review / fixes / re-review</span>
          <i aria-hidden="true">→</i>
          <span>Merge + outcome evidence</span>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Agent-assisted, repository-owned</p>
            <h2>
              Structured execution without handing product ownership away.
            </h2>
          </div>
          <ul>
            <li>
              Backlog stewardship turns accepted decisions into small,
              implementation-ready issues with explicit dependency chains.
            </li>
            <li>
              Independent tasks can be executed concurrently in isolated
              branches or sessions; neighboring tasks do not silently share a
              working branch.
            </li>
            <li>
              Behavior-changing work defaults toward test-first reasoning where
              a meaningful failing test can be written.
            </li>
            <li>
              Non-trivial failures are debugged systematically rather than
              patched speculatively.
            </li>
            <li>
              Review is a loop: inspect, comment, fix, verify again, then merge
              only when the evidence supports it.
            </li>
            <li>
              Generic agent methodologies and reusable skills sit underneath
              project-specific product, privacy, architecture, and GitHub rules.
            </li>
          </ul>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Why the checks matter</p>
            <h2>CI is part of the product-development method.</h2>
          </div>
          <ul>
            <li>Formatting and linting keep implementation drift visible.</li>
            <li>
              Type checks and warnings-as-errors catch contract mistakes early.
            </li>
            <li>
              Frontend and API tests protect behavior as tasks land
              independently.
            </li>
            <li>
              Dependency audits and generated-contract checks catch supply-chain
              and API drift.
            </li>
            <li>
              Real MongoDB startup/migration checks exercise infrastructure
              assumptions.
            </li>
            <li>
              Browser smoke tests and captured screenshots prove important flows
              beyond unit tests.
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
          Tiny Custom Stories uses explicit capability boundaries so parts of
          the product can evolve independently without pretending that every
          logical boundary needs its own service on day one. Several of those
          boundaries now have concrete persistence, contracts, validation, and
          rendering artifacts behind them.
        </p>
      </PageIntro>

      <section
        className="section architecture-explorer-section"
        aria-labelledby="architecture-explorer-title"
      >
        <div className="architecture-explorer-heading">
          <div>
            <p className="eyebrow">Interactive public architecture</p>
            <h2 id="architecture-explorer-title">
              One diagram, with uncertainty left visible.
            </h2>
            <p>
              This is a curated public-safe view derived from the project’s
              canonical architecture map. Internal repository provenance,
              environment details, credentials, and attack-relevant
              implementation detail are intentionally excluded.
            </p>
          </div>
          <div
            className="architecture-status-key"
            aria-label="Architecture status key"
          >
            <span>Implemented</span>
            <span>Partial</span>
            <span>Accepted</span>
            <span>Open</span>
          </div>
        </div>

        <div className="architecture-explorer-frame">
          <iframe
            src={`${architectureExplorerPath}?embed=1&theme=light`}
            title="Interactive Tiny Custom Stories architecture"
            loading="lazy"
          />
        </div>

        <div className="architecture-explorer-note">
          <p>
            The embedded view is best on a larger screen. On a small screen,
            use the full-view link for more room to pan and inspect.
          </p>
          <a
            className="button button-light"
            href={architectureExplorerPath}
            target="_blank"
            rel="noreferrer"
          >
            Open the full explorer <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section story-section">
        <div className="mode-preview">
          <article>
            <p className="eyebrow">Sprint 2 pattern · implemented deeply</p>
            <h2>Child Map Discovery</h2>
            <p>
              Discovery now reads versioned structured content packs through an
              immutable catalog snapshot, retrieves indexed candidates, applies
              deterministic metadata/context/history scoring and diversity, and
              records bounded provenance. Parent answers become Child Map source
              information only through the owning Child Map write model.
            </p>
          </article>
          <article>
            <p className="eyebrow">Sprint 3 pattern · foundations landing</p>
            <h2>Story capabilities</h2>
            <p>
              Story truth, context permission, and provider-facing generation
              remain separate responsibilities. StoryRequest persistence,
              summary reads, blueprint/validation contracts, operation state,
              architecture tests, and deterministic rendering foundations now
              make parts of that split executable rather than purely
              documentary.
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
            <small>
              Public Home + child-safe library + protected parent mode
            </small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Application API</b>
            <small>Family authority + capability contracts</small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Documents + private media</b>
            <small>Application-owned persistence boundaries</small>
          </div>
          <p>
            Discovery and Story Generation are extractable logical boundaries.
            Worker extraction, durable workflow technology, message broker,
            deployment platform, and production adapters remain evidence-led
            decisions rather than assumed infrastructure.
          </p>
        </div>

        <div className="reading-panel">
          <h2>Architecture rules that matter</h2>
          <Definition term="Policy before intelligence">
            Optional ranking or model assistance may operate only after
            deterministic privacy and story-use policy has decided which
            candidates are permitted.
          </Definition>
          <Definition term="Logical boundary first">
            A capability gets a clear owner and contract before the project pays
            the operational cost of another network service.
          </Definition>
          <Definition term="Converging codebase">
            Transitional architecture is being removed as the boundaries become
            clearer: the obsolete legacy backend, dead web scaffolding, and a
            duplicate private project-story copy have been retired rather than
            kept indefinitely.
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
          The roadmap remains outcome-gated. Sprint 2 is now substantially
          implemented but still closing its remaining product slices, evidence,
          qualified review, and final demonstration. Sprint 3 foundation work
          may proceed with synthetic inputs while Sprint 1’s gate remains open;
          that exception does not make any open gate complete.
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
      'The temporal Child Map is real product infrastructure',
      'Category exploration, observation detail and lifecycle actions, current/history derivation, Right Now, Then & Now, protected reads/writes, stale-write handling, and core responsive/accessibility/privacy evidence have moved beyond specification.',
    ],
    [
      'Discovery is data-driven, not a compiled questionnaire',
      'Approved definitions live in versioned structured content packs. Runtime loads an immutable catalog snapshot, retrieves indexed candidates, scores deterministically for metadata/context/history fit and diversity, and renders controlled contextual templates.',
    ],
    [
      'Deletion is a lifecycle boundary',
      'Individual source deletion, entity deletion, private-media replacement/removal, child-source cleanup, retryable deletion behavior, and family-account deletion coordination now have real implementation behind them while final failure/evidence work remains.',
    ],
    [
      'Privacy decision and privacy readiness are different',
      'The conservative private-Alpha collection, retention, provider-transfer, training, and reference-media boundary is decided. Real-family Alpha use still requires qualified privacy, legal, security, and child-safety review.',
    ],
  ];

  const discoverySteps = [
    'Compiled seed',
    'Versioned content packs',
    'Immutable snapshot',
    'Indexed candidates',
    'Deterministic scoring',
    'Safe context',
    'Provenance',
  ];

  return (
    <>
      <PageIntro
        eyebrow="Sprint chapter · 02"
        title="A living Child Map needs a capability, not a questionnaire."
      >
        <p>
          “Not a profile to complete. Just small, true things worth
          remembering.” Sprint 2 now has substantial implementation behind that
          idea: a temporal source-of-truth model, a data-driven Discovery
          runtime, protected lifecycle operations, and deletion infrastructure.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 2 outcome status</p>
            <h2>Substantially implemented. Final outcome gate still open.</h2>
          </div>
          <p>
            Implementation progress is not the same as a passed sprint. People &
            Pets and Places & Routines still need their remaining contract/UI
            work, final Discovery and deletion evidence remains, and qualified
            privacy/legal/security/child-safety review is still required before
            real-family Alpha use.
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

        <div className="sprint-chapter-intro">
          <p className="eyebrow">Discovery evolution</p>
          <h2>From “a list of questions” to a real capability.</h2>
          <p>
            Runtime Sprint 2 Discovery remains deterministic. No external model
            is required to choose a question, and family Child Map content is
            not sent to an external AI provider for runtime question selection
            or interpretation.
          </p>
        </div>

        <div
          className="delivery-loop"
          aria-label="Discovery evolved from compiled seed questions to versioned data and bounded provenance"
        >
          {discoverySteps.map((step, index) => (
            <React.Fragment key={step}>
              <span>{step}</span>
              {index < discoverySteps.length - 1 && <i aria-hidden="true">→</i>}
            </React.Fragment>
          ))}
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">What remains before the gate can pass</p>
            <h2>Closing work is now narrower—and still important.</h2>
          </div>
          <ul>
            <li>
              Final Discovery authorization/concurrency/deletion evidence.
            </li>
            <li>
              People & Pets and Places & Routines after the remaining
              server-authoritative revision and relationship-link contracts.
            </li>
            <li>Remaining private reference-media UI and evidence.</li>
            <li>
              Deletion failure-injection, confirmation, and evidence work.
            </li>
            <li>Family-account deletion confirmation UX and evidence.</li>
            <li>
              Qualified privacy, legal, security, and child-safety review.
            </li>
            <li>The final integrated Sprint 2 outcome demonstration.</li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>Temporal truth is deliberately boring</h2>
          <Definition term="Genuine change">
            “Loved dinosaurs” followed later by “not anymore” preserves the
            earlier retained truth as history.
          </Definition>
          <Definition term="Correction">
            “That was entered incorrectly” fixes the source instead of inventing
            a fake life stage.
          </Definition>
          <Definition term="Current public status">
            Substantial synthetic implementation exists. The sprint is not
            presented as passed, and real-family Alpha collection is not
            presented as approved.
          </Definition>
        </div>
      </section>
    </>
  );
}

function SprintThree() {
  const boundaries = [
    [
      'Story Studio remains guided and reversible',
      'The intended parent journey still moves from purpose and selected context through planning, a cover plus ten text pages, direct/scoped revision, restoration, and approval.',
    ],
    [
      'Story Lifecycle owns Story truth',
      'Story identity, persistence, revisions, optimistic concurrency, approval, and stable approved versions stay with the lifecycle capability.',
    ],
    [
      'Context Selection owns permission',
      'Policy determines which Child Map candidates may be considered, then the parent can include or remove a small permitted set before provider-facing generation.',
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
        title="Story creation is becoming a reversible composition workflow."
      >
        <p>
          Sprint 3 is no longer architecture alone. Foundational persistence,
          read contracts, provider-neutral generation artifacts, structural
          validation, operation state, architecture tests, and deterministic
          page/decoration work are landing while the visible end-to-end Story
          Studio experience remains ahead.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 3 outcome status</p>
            <h2>Architecture accepted. Foundation implementation underway.</h2>
          </div>
          <p>
            This work continues under the synthetic-only sequencing exception.
            The full generation pipeline, parent-visible generation progress,
            editing/revision journey, approval, and final Sprint 3 outcome are
            not being presented as complete.
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

        <div className="sprint-chapter-intro">
          <p className="eyebrow">Foundation → product experience</p>
          <h2>The lower-level pieces are landing before the visible studio.</h2>
          <p>
            Status words are deliberately part of the diagram so a contract or
            persistence primitive is not mistaken for a completed parent
            workflow.
          </p>
        </div>

        <div
          className="delivery-loop"
          aria-label="Story foundation flow from parent intent to Story Studio approval"
        >
          <span>Landed · StoryRequest persistence</span>
          <i aria-hidden="true">→</i>
          <span>Underway · setup / Story Plan</span>
          <i aria-hidden="true">→</i>
          <span>Landed · StoryBlueprint contract</span>
          <i aria-hidden="true">→</i>
          <span>Landed · structural validation</span>
          <i aria-hidden="true">→</i>
          <span>Underway · generation workflow</span>
          <i aria-hidden="true">→</i>
          <span>Later · Story Studio review</span>
          <i aria-hidden="true">→</i>
          <span>Later · approval</span>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Concrete foundation now in code</p>
            <h2>Enough exists to make the next work less speculative.</h2>
          </div>
          <ul>
            <li>Pre-generation StoryRequest persistence.</li>
            <li>Protected Story summary reads.</li>
            <li>Provider-neutral ten-page StoryBlueprint contract.</li>
            <li>Pure StoryComposition structural validation.</li>
            <li>Durable generation-operation state persistence.</li>
            <li>Story capability dependency/architecture tests.</li>
            <li>Reusable deterministic story-page renderer.</li>
            <li>Original deterministic cover/page decoration assets.</li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>What is still ahead</h2>
          <Definition term="Generation">
            Full blueprint-to-ten-page generation, quality/safety/continuity
            checking, bounded repair/retry, progress reporting, and the approved
            live text-provider adapter remain unfinished.
          </Definition>
          <Definition term="Story Studio">
            Direct editing, paragraph/page rewrites, continuity decisions,
            earlier-version restore, deterministic cover editing, whole-story
            change, approval, and post-approval editing remain later Sprint 3
            work.
          </Definition>
          <Definition term="Public status">
            Foundation implementation is real; an end-to-end generated,
            editable, approved Story Studio outcome is not yet demonstrated.
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
      'What must qualified Sprint 2 review still validate?',
      'The conservative private-Alpha collection, retention, provider-transfer, training, and reference-media product boundary is decided. Qualified privacy, legal, security, and child-safety review must still validate or tighten the implemented boundary before real-family Alpha use.',
    ],
    [
      'Which permitted Child Map information may be used for a specific story or transferred to a provider?',
      'Sprint 3 has a context-selection boundary, but the detailed sensitivity, purpose, and provider-transfer policy still needs evidence before live family data is permitted.',
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
      'The project still needs real-world learning criteria in addition to technical, privacy, safety, and reliability evidence.',
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
          <Definition term="Qualified review">
            Specialist validation can confirm or tighten a product boundary. It
            is not replaced by agent reasoning or an internal architecture
            review.
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
