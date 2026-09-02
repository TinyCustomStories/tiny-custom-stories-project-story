import React from 'react';
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
  | '/decisions'
  | '/roadmap'
  | '/sprint-one'
  | '/design'
  | '/questions'
  | '/library';

const routes: Record<Route, string> = {
  '/': 'Home',
  '/product': 'The product',
  '/journey': 'How it works',
  '/decisions': 'Decisions',
  '/roadmap': 'Roadmap',
  '/sprint-one': 'Sprint 1',
  '/design': 'Design',
  '/questions': 'Open questions',
  '/library': 'Public library',
};
const pdfPath = `${import.meta.env.BASE_URL}documents/tiny-custom-stories-project-dossier.pdf`;
const routeDescriptions: Record<Exclude<Route, '/'>, string> = {
  '/product':
    'The intended benefit, audience, boundaries, and plain-language terms.',
  '/journey':
    'A proposed parent-led path from a story idea to an approved read.',
  '/decisions':
    'A labeled record of confirmed decisions, proposals, facts, and unknowns.',
  '/roadmap': 'Outcome gates that describe progress without promising dates.',
  '/sprint-one':
    'The accepted account, child-mode, parent-mode, and evidence boundary now shaping the work.',
  '/design':
    'The philosophy and visual recipe that keep many agents working in one recognizable voice.',
  '/questions':
    'Important matters that still need research, testing, or specialist review.',
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
            A public project story · updated September 2026
          </p>
          <h1 id="hero-title">
            Stories built <span className="scribble">with care,</span> not just
            code.
          </h1>
          <p className="hero-lede">
            Tiny Custom Stories is an evolving idea: give parents thoughtful
            tools to create personalized stories for young children—without
            making the process feel mysterious.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/product">
              Start with the idea <span aria-hidden="true">→</span>
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
            A parent’s spark.
            <br />A child’s next favourite story.
          </p>
        </div>
      </section>
      <section
        className="status-strip section"
        aria-label="Current project status"
      >
        <p>
          <span aria-hidden="true">●</span> Sprint 0 is complete. Sprint 1 is
          the active planning boundary.
        </p>
        <p>
          What’s public here is <strong>curated on purpose</strong>—not a live
          feed of internal work.
        </p>
        <Link to="/library">
          How we share the work <span aria-hidden="true">→</span>
        </Link>
      </section>
      <section
        className="section home-directory"
        aria-labelledby="directory-title"
      >
        <div className="section-kicker">
          A readable route through the project
        </div>
        <h2 id="directory-title">One project story, nine places to pause.</h2>
        <p className="section-intro">
          This is a small public library rather than a single, endlessly
          scrolling page. Every page says what it is describing, how certain it
          is, and where to go next.
        </p>
        <div className="route-grid">
          {Object.entries(routes)
            .filter(([path]) => path !== '/')
            .map(([path, label], index) => (
              <Link to={path as Route} className="route-card" key={path}>
                <span>0{index + 1}</span>
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
          conversation, and stories children return to? The intended answer is a
          parent-led creative tool—not a content firehose and not a replacement
          for a grown-up.
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
              They choose why a story is being made, guide its shape, and
              approve what a child can read.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ☼
            </span>
            <h3>Children get the wonder</h3>
            <p>
              The first direction is for ages two through six, with a simple,
              parent-approved story library.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ⌁
            </span>
            <h3>AI stays a helper</h3>
            <p>
              It can help assemble a story, while people remain responsible for
              meaningful choices and review.
            </p>
          </article>
        </div>
        <div className="reading-panel">
          <h2>Terms on this page</h2>
          <Definition term="Personalized story">
            A story shaped around a parent’s chosen purpose and inputs. It does
            not mean a system should collect every detail about a family.
          </Definition>
          <Definition term="Parent-led">
            A parent initiates, guides, reviews, and approves child-visible
            material.
          </Definition>
          <Definition term="First version">
            The deliberately limited initial experience: a website, a cover, and
            ten illustrated pages. Narration, video, a public marketplace, and a
            native app are not included.
          </Definition>
        </div>
        <div className="mode-preview" aria-label="Alpha experience boundaries">
          <article>
            <p className="eyebrow">Default after sign-in</p>
            <h2>Child mode</h2>
            <p>
              A calm, read-only library containing only stories a parent has
              made child-visible. No drafts, family context, account controls,
              or hidden adult actions.
            </p>
          </article>
          <article>
            <p className="eyebrow">Deliberate adult entry</p>
            <h2>Parent mode</h2>
            <p>
              A protected place for creation, review, Child Map work, story
              visibility, and account actions. The server—not a hidden
              button—enforces the boundary.
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
      '1. A parent starts',
      'A purpose, a few choices, and—where suitable—a fictional route.',
    ],
    ['2. The story takes shape', 'Focused tools help plan words and pictures.'],
    [
      '3. A parent reviews',
      'Nothing becomes child-visible merely because it was generated.',
    ],
    ['4. A child reads', 'An approved story reaches a simple family library.'],
  ];
  return (
    <>
      <PageIntro
        eyebrow="02 · Proposed journey"
        title="A story has a few important hand-offs."
      >
        <p>
          This page is a friendly map of an intended journey, not a claim that
          every part is already built. The hand-offs make responsibility
          visible: a parent starts and approves; a child sees only material the
          family has approved.
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
            <b>Website</b>
            <small>A clear place for parents and readers</small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Story workflow</b>
            <small>Planning, generation, checks, approvals</small>
          </div>
          <i aria-hidden="true">↔</i>
          <div>
            <b>Private storage</b>
            <small>Designed for careful, scoped handling</small>
          </div>
          <p>
            Big picture only: specific infrastructure choices have their own
            decisions and unresolved questions.
          </p>
        </div>
        <div className="reading-panel">
          <h2>What these words mean</h2>
          <Definition term="Workflow">
            The ordered path work follows, including pauses for checks or
            approval.
          </Definition>
          <Definition term="Review">
            A parent’s opportunity to inspect, change, or decline a draft before
            it is available to a child.
          </Definition>
          <Definition term="Approved library">
            The child-facing collection of stories a parent has permitted. It is
            not a public marketplace.
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
        eyebrow="03 · Decision record"
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
            A statement supported by source material and safe to share publicly.
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
        eyebrow="04 · Roadmap"
        title="Progress is measured by outcomes, not busywork."
      >
        <p>
          The project works through connected outcome gates: demonstrate one
          meaningful capability, learn from it, then move on. This is a
          directional roadmap, not a dated delivery promise.
        </p>
      </PageIntro>
      <section className="section roadmap-section">
        <ol className="roadmap-list">
          {milestones.map((milestone, index) => (
            <li key={milestone.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
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
            Evidence that a meaningful capability is ready to learn from before
            expanding scope.
          </Definition>
          <Definition term="Foundation">
            The documented direction, target stack, and clean technical building
            blocks demonstrated at the Sprint 0 outcome gate.
          </Definition>
          <Definition term="Active planning boundary">
            Sprint 1 is the current outcome being prepared and delivered. That
            does not mean every Sprint 1 task is already ready or complete.
          </Definition>
          <Definition term="Private Alpha readiness">
            A later threshold that requires demonstrated safety, privacy,
            reliability, and real-world learning.
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
      'One verified parent identity, one internal family account, and one child. Registration begins with only the parent email.',
    ],
    [
      'Child mode comes first',
      'A signed-in family arrives in the read-only story library. Only parent-approved, child-visible stories and reading navigation belong there.',
    ],
    [
      'Parent work is protected',
      'Child Map information, drafts, creation, approvals, settings, exports, deletion, and sign-out require a server-enforced parent boundary.',
    ],
    [
      'Access expires safely',
      'Parent access is scoped to the current tab, expires, conceals private work, and requires stronger email verification for recovery and destructive account actions.',
    ],
  ];
  return (
    <>
      <PageIntro
        eyebrow="05 · Sprint 1"
        title="A shared device needs two honest modes."
      >
        <p>
          Sprint 0 proved the foundations. Sprint 1 is now the active planning
          boundary: make family access work while keeping a young child’s
          reading surface separate from adult information and authority.
        </p>
      </PageIntro>
      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 1 outcome gate</p>
            <h2>Register. Arrive safely. Enter deliberately. Return safely.</h2>
          </div>
          <p>
            Sprint 1 is complete only when a parent can create or resume the
            Alpha family, land in a child-safe library, enter protected parent
            mode, and return to child mode after exit or expiry.
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
            <p className="eyebrow">Evidence, not a screenshot alone</p>
            <h2>What Sprint 1 must prove</h2>
          </div>
          <ul>
            <li>
              Repeat sign-in resumes the same family and cannot cross families.
            </li>
            <li>
              Child mode cannot read parent information or call protected APIs.
            </li>
            <li>
              Entry, failure, recovery, expiry, refresh, and tab isolation
              behave safely.
            </li>
            <li>
              Keyboard, focus, announcements, responsive layout, and error
              recovery work.
            </li>
            <li>
              Synthetic browser evidence covers the full return to child mode.
            </li>
          </ul>
        </div>
        <p className="public-boundary-note">
          This public summary explains the accepted experience without exposing
          private project links, live identity data, or operational security
          parameters that do not help a general reader.
        </p>
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
        eyebrow="06 · Design philosophy and language"
        title="One philosophy. One recipe. Room to feel human."
      >
        <p>
          The philosophy says why the experience should feel calm, clear, warm,
          and trustworthy. The paper-and-ink visual language tells every agent
          how to reproduce that character without inventing a new brand on every
          screen.
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
              controls plain. DM Mono labels metadata and status. A four-pixel
              spacing scale, crisp ink borders, small offset shadows, and flat
              color create the shared rhythm.
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
            <p className="eyebrow">Controls stay dependable</p>
            <h2>Character never replaces usability.</h2>
            <p>
              Buttons name their consequence. Inputs keep visible labels. Focus
              is unmistakable. Loading, disabled, error, expiry, and recovery
              states are designed alongside the happy path.
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
          The founder’s creative references are translated into candid
          communication, simple explanatory drawings, warmth, and visible human
          imperfection. The project does not copy a creator’s recognizable
          lettering, characters, compositions, or signature style.
        </p>
      </section>
    </>
  );
}
function Questions() {
  const questions = [
    [
      'What information should families ever be asked to share?',
      'Minimize collection, then validate privacy and safety boundaries before asking for more.',
    ],
    [
      'How should a parent review or change an AI-generated draft?',
      'That experience needs testing—not an assumption tucked into an interface.',
    ],
    [
      'What makes a story genuinely helpful for different children?',
      'Age range is only a starting point; language, ability, context, and feedback matter.',
    ],
    [
      'Which Child Map details are necessary for a particular story?',
      'Personalization should not become permission to share every available family detail.',
    ],
    [
      'Which text and image providers meet the evidence bar?',
      'No provider is selected merely because it is convenient; data handling, safety, quality, cost, reliability, and exit all matter.',
    ],
    [
      'What visual system should guide the story illustrations themselves?',
      'The interface language is accepted. Story art still needs a separate consistency, safety, representation, and accessibility specification.',
    ],
  ];
  return (
    <>
      <PageIntro
        eyebrow="07 · Open questions"
        title="Useful unknowns are part of responsible work."
      >
        <p>
          The project has not settled every important detail. Keeping unresolved
          matters visible helps protect families from accidental promises and
          gives research, testing, and qualified review a clear place to shape
          the work.
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
            Review by people with appropriate specialist knowledge when a
            question involves privacy, safety, accessibility, or similar
            expertise.
          </Definition>
          <Definition term="Next step">
            Research, prototype testing, evidence gathering, or a documented
            decision—not a quiet guess.
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
        eyebrow="08 · Public library"
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
          aria-label="A three-step content-review flow: internal notes are summarized, checked for public safety, and founder-approved before publication."
        >
          <div>
            <span>01</span>
            <b>Internal memory</b>
            <p>Detailed working documents stay inside the project.</p>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <span>02</span>
            <b>Public-safe summary</b>
            <p>A curated record names its source and knowledge status.</p>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <span>03</span>
            <b>Founder approval</b>
            <p>Nothing is published merely because it exists internally.</p>
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
            private research, and sensitive implementation detail.
          </Definition>
          <Definition term="Founder approval">
            An explicit review that authorizes a summary for public sharing.
          </Definition>
          <Definition term="Source reference">
            A readable pointer to the project decision or question that informed
            the summary, without publishing private materials.
          </Definition>
        </div>
        <div className="pdf-callout">
          <div>
            <p className="eyebrow">A portable companion</p>
            <h2>Take the public story with you.</h2>
            <p>
              The expanded PDF collects the project’s purpose, Alpha boundary,
              Sprint 0 evidence, Sprint 1 direction, roadmap, design philosophy,
              visual recipe, architecture boundaries, and open questions. This
              responsive website remains the primary version for semantic
              navigation and text reflow; the PDF is a fixed-layout companion.
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
    '/decisions': Decisions,
    '/roadmap': Roadmap,
    '/sprint-one': SprintOne,
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
          {Object.entries(routes).map(([path, label]) => (
            <Link
              key={path}
              to={path as Route}
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
