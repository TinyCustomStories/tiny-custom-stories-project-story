import React from 'react';
import { milestones, publicEntries, type KnowledgeStatus } from './content';

type Route =
  | '/'
  | '/product'
  | '/journey'
  | '/decisions'
  | '/roadmap'
  | '/questions'
  | '/library';

const routes: Record<Route, string> = {
  '/': 'Home',
  '/product': 'The product',
  '/journey': 'How it works',
  '/decisions': 'Decisions',
  '/roadmap': 'Roadmap',
  '/questions': 'Open questions',
  '/library': 'Public library',
};
const routeDescriptions: Record<Exclude<Route, '/'>, string> = {
  '/product':
    'The intended benefit, audience, boundaries, and plain-language terms.',
  '/journey':
    'A proposed parent-led path from a story idea to an approved read.',
  '/decisions':
    'A labeled record of confirmed decisions, proposals, facts, and unknowns.',
  '/roadmap': 'Outcome gates that describe progress without promising dates.',
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
      href={`#${to}`}
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
          <span aria-hidden="true">●</span> The project is in its foundation
          phase.
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
        <h2 id="directory-title">One project story, seven places to pause.</h2>
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
              <em>{milestone.state}</em>
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
            blocks already in place.
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
  ];
  return (
    <>
      <PageIntro
        eyebrow="05 · Open questions"
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
        eyebrow="06 · Public library"
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
          <a
            className="button button-dark dossier-download"
            href={`${import.meta.env.BASE_URL}documents/tiny-custom-stories-project-dossier.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Read the detailed public dossier (PDF){' '}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
function Layout({ route }: { route: Route }) {
  const Page =
    route === '/'
      ? Home
      : route === '/product'
        ? Product
        : route === '/journey'
          ? Journey
          : route === '/decisions'
            ? Decisions
            : route === '/roadmap'
              ? Roadmap
              : route === '/questions'
                ? Questions
                : Library;
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
        <Link to="/">Back to the beginning ↑</Link>
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
