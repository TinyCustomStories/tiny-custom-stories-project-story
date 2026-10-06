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
    'How the accepted synthetic/local temporal Child Map and deterministic Discovery outcome was demonstrated while real-family release remains separately gated.',
  '/sprint-three':
    'How accepted Story capability boundaries are becoming a protected authoring workspace while generation and approval remain unfinished.',
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
            A public project story · updated October 5, 2026
          </p>
          <h1 id="hero-title">
            Stories built <span className="scribble">with care,</span> not just
            code.
          </h1>
          <p className="hero-lede">
            Tiny Custom Stories has grown from a personalized-story idea into a
            parent-controlled learning product with a demonstrated synthetic and
            local Child Map outcome, data-driven Discovery, and a protected
            Story Studio whose authoring workspace now includes real editing and
            revision flows.
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
          remains evidence-gated. Sprint 2's accepted synthetic/local outcome
          was demonstrated on October 4.
        </p>
        <p>
          Sprint 3 continues under the{' '}
          <strong>synthetic-only sequencing exception</strong>. Story Studio
          home, direct page editing, cover editing, and revision history have
          landed, while full generation and approval remain open. Real-family
          Alpha use still requires qualified release review and later safety,
          security, and deployment gates.
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
          This October 5 checkpoint keeps the September site underneath it and
          updates the evidence around it: the same routes and visual language
          now show Sprint 2's accepted synthetic/local outcome, the separate
          real-family release boundary, and how far the protected Story Studio
          has moved from contracts into an authoring workspace.
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
              The private-Alpha audience is ages two through twelve, with a calm
              parent-approved story library as the later child-facing
              destination.
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
      'Sprint 2 · synthetic/local outcome demonstrated',
      'The temporal Child Map, deterministic Discovery, private-media and deletion lifecycle, accessibility evidence, and assembled local journey now satisfy the accepted synthetic/local outcome. Qualified real-family release review remains a later gate.',
    ],
    [
      'Sprint 3 · protected authoring workspace underway',
      'Story Studio home and exact-story navigation now lead into real direct page editing, deterministic cover editing, and earlier-version preview/restore. Generation, assisted changes, approval, and the final end-to-end outcome remain unfinished.',
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
          between Story truth, context permission, and generation. The October 5
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
            <p className="eyebrow">Synthetic/local outcome demonstrated</p>
            <h3>Sprint 2</h3>
            <p>
              Temporal Child Map, data-driven Discovery, lifecycle/deletion
              evidence, and a separate qualified real-family release boundary.
            </p>
            <b>Read Sprint 2 →</b>
          </Link>
          <Link to="/sprint-three" className="sprint-chapter-card">
            <span>03</span>
            <p className="eyebrow">Authoring workspace underway · gate open</p>
            <h3>Sprint 3</h3>
            <p>
              Protected Story Studio navigation, direct text and cover editing,
              revision history, plus unfinished generation and approval flows.
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

  const buildLessons = [
    [
      'We ran too much browser CI',
      'The broad Playwright and screenshot suite was useful, but running it on nearly every pull request made browser verification disproportionately expensive. GitHub Actions eventually stopped starting jobs when the budget was exhausted. We kept fast deterministic PR gates and moved broad browser coverage to weekly/manual runs, while still using focused browser evidence when a risky UI change needs it.',
    ],
    [
      'Green tests did not prove the assembled product',
      'Our browser tests could pass against mocked APIs while API tests separately replaced infrastructure. That was useful evidence, but not end-to-end proof. Sprint 2 forced us to add a synthetic browser → real HTTP API → Mongo journey and separate real private-object-store evidence before calling the outcome demonstrated.',
    ],
    [
      'Our agents were competing for one API budget',
      'Parallel sessions repeatedly asked GitHub Projects for the same state and shared one GraphQL quota. When that rate limit became a recurring blocker, we changed the workflow: one timestamped project snapshot can be shared across workers, ordinary issue/PR reads prefer cheaper paths, and live project reads are reserved for mutations or meaningful refresh points.',
    ],
    [
      'New tools have to earn a permanent place',
      'We pilot tools with an explicit possibility of saying no. Graphify produced a useful local code graph, but the pilot recommended holding workflow integration rather than adding machinery without enough value. Archify earned a narrower role because a maintained architecture map proved useful enough to keep and publish in a curated public form.',
    ],
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
      'Repository tools CI',
      'Repository helper, dependency, and workflow-support checks protect the project automation used to plan and deliver work.',
    ],
    [
      'Browser evidence',
      'Scheduled or manually triggered Playwright Chromium smoke tests provide browser and screenshot evidence without charging every pull request for the full suite.',
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

        <div className="sprint-chapter-intro">
          <p className="eyebrow">What broke, what we learned, what changed</p>
          <h2>We keep the failed experiments in the project story.</h2>
          <p>
            A process mistake is useful when it changes the system. Some of the
            most important engineering work here came from discovering that a
            practice was too expensive, too isolated, too repetitive, or simply
            not valuable enough to keep.
          </p>
        </div>

        <ol className="boundary-grid">
          {buildLessons.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>

        <div className="reading-panel">
          <h2>The experiment we are still running</h2>
          <Definition term="Specialist-agent delivery">
            We are testing whether a solo founder can coordinate product
            decisions, backlog readiness, implementation, repository state, and
            pull-request review through specialized agents while keeping GitHub
            and the repository as the source of truth. The goal is less
            ambiguity and rework, not more autonomous activity.
          </Definition>
          <Definition term="What we are not claiming">
            We do not claim this workflow is novel, universally better, or a
            proven productivity advantage. It stays an experiment until the
            evidence shows that it improves delivery without weakening review,
            privacy, safety, or maintainability.
          </Definition>
          <Definition term="Operating rule">
            A new tool or process is allowed to fail. If it does not earn its
            complexity, we hold it, remove it, or narrow its role rather than
            keeping it because time was already invested.
          </Definition>
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
            The embedded view is best on a larger screen. On a small screen, use
            the full-view link for more room to pan and inspect.
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
            <p className="eyebrow">
              Sprint 2 pattern · local outcome demonstrated
            </p>
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
            <p className="eyebrow">
              Sprint 3 pattern · authoring workspace underway
            </p>
            <h2>Story capabilities</h2>
            <p>
              Story truth, context permission, and provider-facing generation
              remain separate responsibilities. Protected Story Studio
              navigation, direct page-text editing, cover editing, revision
              history, and lower-level generation foundations now make more of
              that split executable, while Context Selection and Generation
              remain incomplete.
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
          The roadmap remains outcome-gated. Sprint 2 has demonstrated its
          accepted synthetic/local outcome, while qualified real-family release
          review remains a later gate. Sprint 3 authoring work may proceed with
          synthetic inputs while Sprint 1’s gate remains open; that exception
          does not make Sprint 1, Sprint 3, or any release gate complete.
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
      'Individual source deletion, entity deletion, private-media replacement/removal, child-source cleanup, retryable deletion behavior, and family-account deletion coordination are implemented and included in the accepted synthetic/local evidence.',
    ],
    [
      'Synthetic closure and release readiness are different',
      'The conservative private-Alpha data boundary and founder local review support the accepted synthetic/local outcome. Real-family Alpha collection or use still requires attributed qualified privacy, legal, security, and child-safety review.',
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
          remembering.” Sprint 2 now has an accepted synthetic/local outcome
          behind that idea: a temporal source-of-truth model, data-driven
          Discovery, protected lifecycle operations, private-media evidence, and
          deletion behavior exercised together.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 2 outcome status</p>
            <h2>
              Synthetic/local outcome demonstrated. Real-family release gated.
            </h2>
          </div>
          <p>
            All accepted synthetic/local outcomes are evidenced, including the
            assembled web/API/data-store journey, private-media behavior, final
            automated verification, and a founder-completed VoiceOver
            walkthrough. This does not authorize real-family Alpha collection or
            use; qualified review and later release-readiness gates remain.
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
            <p className="eyebrow">What remains before real-family Alpha use</p>
            <h2>The sprint outcome closed locally; the release bar did not.</h2>
          </div>
          <ul>
            <li>
              Attributed qualified privacy, legal, security, and child-safety
              review against the actual release scope.
            </li>
            <li>
              Deployment, region, access, backup, recovery, and telemetry facts
              required by the release-readiness review.
            </li>
            <li>
              Any material blocking findings from that review must be resolved
              and re-reviewed.
            </li>
            <li>
              Later provider, Story, safety, security, reliability, and release
              gates remain independently binding.
            </li>
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
            Sprint 2's accepted synthetic/local outcome is demonstrated.
            Real-family Alpha collection or use is not presented as approved.
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
          Sprint 3 is no longer architecture alone. The protected Story Studio
          home and exact-story workspace now include direct page-text editing,
          deterministic cover editing, and earlier-version preview/restore.
          Generation, assisted changes, approval, and the end-to-end outcome
          remain unfinished.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 3 outcome status</p>
            <h2>
              Protected authoring workspace underway. Outcome gate still open.
            </h2>
          </div>
          <p>
            This work continues under the synthetic-only sequencing exception.
            Real authoring and revision slices have landed, but the full
            generation pipeline, integrated assisted-change and continuity
            flows, approval persistence/integration, and final Sprint 3
            demonstration are not complete.
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
          <h2>The visible studio now has real authoring slices.</h2>
          <p>
            Status words remain part of the diagram so an integrated editor or
            standalone presentation component is not mistaken for the complete
            generation-to-approval outcome.
          </p>
        </div>

        <div
          className="delivery-loop"
          aria-label="Story Studio progress from protected entry to approval"
        >
          <span>Landed · Story Studio home</span>
          <i aria-hidden="true">→</i>
          <span>Underway · setup / Story Plan</span>
          <i aria-hidden="true">→</i>
          <span>Landed · exact-story workspace</span>
          <i aria-hidden="true">→</i>
          <span>Landed · direct page editing</span>
          <i aria-hidden="true">→</i>
          <span>Landed · cover editing</span>
          <i aria-hidden="true">→</i>
          <span>Landed · earlier versions</span>
          <i aria-hidden="true">→</i>
          <span>Underway · generation + assisted change</span>
          <i aria-hidden="true">→</i>
          <span>Later · integrated approval</span>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Concrete Story Studio work now in code</p>
            <h2>
              The parent authoring surface is becoming an integrated product.
            </h2>
          </div>
          <ul>
            <li>Protected Story Studio home and exact-story navigation.</li>
            <li>Direct text editing for a selected Draft page.</li>
            <li>Protected deterministic cover editing inside the workspace.</li>
            <li>
              Earlier Versions preview and explicit restore in the workspace.
            </li>
            <li>
              Protected Story reads, mutations, revision history, and
              concurrency.
            </li>
            <li>
              Provider-neutral blueprint, validation, and operation-state
              foundations.
            </li>
            <li>
              Controlled personalization, assisted-change, continuity, and final
              review components with synthetic responsive/accessibility
              evidence.
            </li>
            <li>
              Current shipped Story routes have a recorded authorization
              evidence matrix.
            </li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>What is still ahead</h2>
          <Definition term="Generation">
            Full blueprint-to-ten-page generation, quality/safety/continuity
            checking, bounded repair/retry, progress integration, and an
            approved live text-provider path remain unfinished.
          </Definition>
          <Definition term="Integrated assisted work">
            Personalization, paragraph-change, continuity, and final-review
            presentation pieces exist, but their remaining APIs, policy gates,
            workspace integration, and acceptance/approval mutations are not
            being presented as complete.
          </Definition>
          <Definition term="Public status">
            Real Story Studio editing and revision behavior exists; an
            end-to-end generated, assisted, approved Story Studio outcome is not
            yet demonstrated.
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
      'What must qualified real-family release review still validate?',
      'Sprint 2 is closed at the accepted synthetic/local boundary. Qualified privacy, legal, security, and child-safety review must still validate or tighten the implemented data boundary against the actual release scope before any real-family Alpha collection or use.',
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
              The PDF remains the October 1 fixed-layout checkpoint at its
              stable public path. This responsive site carries the newer October
              5 Sprint 2 closeout and Story Studio evidence and remains the
              primary current narrative.
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
