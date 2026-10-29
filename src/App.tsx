import React from 'react';
import { ReadingPage, ReadingContext, type ReadingMode } from './ReadingPage';
import { Lessons } from './Lessons';
import { MovingMapArticle } from './MovingMapArticle';
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
  | '/learnings'
  | '/articles/moving-map'
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
  '/learnings': 'Lessons',
  '/articles/moving-map': 'Moving Map Development article',
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
  { path: '/learnings', label: 'Lessons' },
  { path: '/design', label: 'Design' },
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
  '/learnings':
    'The mistakes, experiments, surprises, and unresolved nerves that changed how the project is being built.',
  '/articles/moving-map':
    'An honest experiment with Moving Map Development, compared with TDD, BDD, spec-driven work, OpenAI and Anthropic agent practices, plus a portable starter guide.',
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
  const routePath = path.split('?')[0];
  return routePath in routes ? (routePath as Route) : '/';
}

function focusPageStart() {
  document.getElementById('main-content')?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function go(path: Route) {
  window.history.pushState({}, '', `#${path}`);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
  // Same-page links do not trigger a route render.
  focusPageStart();
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
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
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
    <ReadingPage>
      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            A public project story · updated October 28, 2026
          </p>
          <h1 id="hero-title">
            Stories built <span className="scribble">with care,</span> not just
            code.
          </h1>
          <p className="hero-lede">
            Tiny Custom Stories has grown from a personalized-story idea into a
            parent-controlled learning product with a demonstrated synthetic and
            local Child Map outcome, data-driven Discovery, a protected Story
            Studio with editing and revision flows, a gated fictional-story
            preview experiment, and an accepted Visual Theme System direction
            for the future visual layer.
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
          Sprint 3 still uses a{' '}
          <strong>synthetic-only sequencing exception</strong>. An opt-in,
          fictional-only candidate preview with independently selected story
          idea and feel reached development on October 20. A separate narrow
          local exercise approved and reopened a fixed synthetic story through
          real application storage. Neither proves the complete accepted parent
          journey or a safe live-model story. Epic integration, family release
          gates, and the separate Visual Theme System outcome remain open.
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
            what exists today, what is only partial, which Story and Visual
            Theme boundaries are accepted, and which provider choices remain
            deliberately open.
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
        <h2 id="directory-title">Choose where to read next.</h2>
        <p className="section-intro">
          The main route follows the questions a curious reader is most likely
          to ask: what are we making, how does it work, how did it evolve, how
          is it built, and what did we learn? Detailed decisions, unresolved
          questions, and outcome gates remain public one layer deeper inside the
          development story instead of crowding the first read.
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
    </ReadingPage>
  );
}

function StoryHome() {
  const storyDescriptions: Partial<Record<Route, string>> = {
    '/product':
      'Why a name, age, and favourite animal are not enough to make a story feel personal.',
    '/journey':
      'Follow one story from a parent’s idea to the child’s bookshelf.',
    '/development':
      'How a small personalized-book idea slowly turned into the system being built today.',
    '/architecture':
      'Why the product needed boundaries before it needed more infrastructure.',
    '/delivery':
      'What it feels like to build this with small tasks, AI agents, pull requests, and a lot of checking.',
    '/learnings':
      'The expensive tests, rate limits, failed experiments, useful surprises, and changed minds.',
    '/design':
      'Why the project uses paper, ink, warmth, and different moods for parents, children, and builders.',
    '/library':
      'Why the public project story is curated instead of being a raw dump of the private repository.',
  };

  return (
    <ReadingPage>
      <section className="hero section" aria-labelledby="story-hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            Story mode · a public project story · October 2026
          </p>
          <h1 id="story-hero-title">
            Stories that know more than your kid’s name.
          </h1>
          <p className="hero-lede">
            Most personalized stories know a name, an age, and maybe that a
            child likes dinosaurs. Tiny Custom Stories started with a question:
            what if a story could remember the small things that actually make a
            child feel like themselves, without trying to know everything?
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/product">
              Start with the idea <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-light" to="/development">
              See how it got complicated <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div
          className="hero-doodle"
          role="img"
          aria-label="A hand-drawn parent, child, and storybook representing small family memories becoming a story."
        >
          <div className="sun">tiny things matter</div>
          <div className="doodle-person person-parent">
            <span>remembers</span>
          </div>
          <div className="doodle-book">
            <i>
              not just a name
              <br />
              in a template
            </i>
          </div>
          <div className="doodle-person person-child">
            <span>changes</span>
          </div>
          <p className="doodle-note">
            A pet.
            <br />
            A fear.
            <br />
            A phase.
            <br />A ridiculous family joke.
          </p>
        </div>
      </section>

      <section
        className="status-strip section"
        aria-label="Current project status"
      >
        <p>
          <span aria-hidden="true">●</span> The Child Map and Discovery have a
          demonstrated synthetic/local outcome.
        </p>
        <p>
          Story Studio can save a parent's choices, edit pages, and restore
          earlier versions. A protected fictional preview with curated
          story-idea and reading-feel choices is now in development. A fixed
          synthetic local approval/reopen exercise has also been observed, but
          the accepted profile-only offline journey and real-family release
          remain unverified.
        </p>
        <Link to="/development">
          Where we really are <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="section story-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">The three-fact problem</p>
          <h2>Personalized can still feel generic.</h2>
          <p>
            Give an AI a child’s name, age, and favourite animal and it can
            produce something personalized in seconds. But changing “Maya” to
            “Sam” often leaves almost the same story underneath. The interesting
            problem is not inserting facts. It is deciding which small truths
            matter for this particular story.
          </p>
        </div>

        <div className="role-grid">
          <article>
            <span className="role-icon" aria-hidden="true">
              ✎
            </span>
            <h3>Remember slowly</h3>
            <p>
              A parent can keep little notes about people, pets, interests,
              preferences, moments, and changes. The Child Map grows because
              life happens, not because onboarding demanded a giant profile.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ◌
            </span>
            <h3>Use very little</h3>
            <p>
              A story about bravery might need a current fear and a beloved toy.
              A pirate story may need nothing personal at all. More context is
              not automatically better context.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ☼
            </span>
            <h3>Give the parent the last word</h3>
            <p>
              AI can help plan and compose. The parent chooses the purpose,
              context, edits, revisions, and eventually what is actually ready
              for the child.
            </p>
          </article>
        </div>

        <p className="story-pullquote">
          The goal is not “AI knows everything about this child.” The goal is
          “this story feels surprisingly right, and the parent still understands
          why.”
        </p>
      </section>

      <section className="section how-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">Then the simple idea grew teeth</p>
          <h2>
            One innocent storybook question turned into a lot of product
            questions.
          </h2>
        </div>
        <div className="story-beat-grid">
          <article className="story-beat">
            <span>01</span>
            <h3>What does “personal” actually mean?</h3>
            <p>
              A name in a template was not enough. That pushed the project
              toward memories, relationships, interests, preferences, and
              moments that can actually affect a story.
            </p>
          </article>
          <article className="story-beat">
            <span>02</span>
            <h3>Children change. What should memory do?</h3>
            <p>
              “Loves dinosaurs” can be true in January and outdated in March.
              The Child Map needed history instead of pretending every field has
              one eternal correct value.
            </p>
          </article>
          <article className="story-beat">
            <span>03</span>
            <h3>Who decides what the AI may see?</h3>
            <p>
              The generator should not rummage through family context because it
              can. Permission and context selection became their own
              responsibility.
            </p>
          </article>
          <article className="story-beat">
            <span>04</span>
            <h3>What happens when the AI is wrong?</h3>
            <p>
              Drafts need editing, history, restoration, approval, and a clear
              distinction between “the model returned text” and “the family
              accepted this story.”
            </p>
          </article>
        </div>
      </section>

      <section className="section story-section">
        <div className="mode-preview">
          <article>
            <p className="eyebrow">The product story</p>
            <h2>Can software remember a child gently?</h2>
            <p>
              Child Map, Discovery, Story Studio, and the child library are one
              attempt to make personalization useful without turning childhood
              into a database-completion exercise.
            </p>
            <Link className="text-link" to="/product">
              Read the product story →
            </Link>
          </article>
          <article>
            <p className="eyebrow">The build story</p>
            <h2>Can one developer keep control while using a lot of AI?</h2>
            <p>
              The project also became a laboratory for agents, task
              decomposition, architecture tools, CI, browser evidence, public
              documentation, and learning where automation creates more work
              instead of less.
            </p>
            <Link className="text-link" to="/delivery">
              Read how it is built →
            </Link>
          </article>
        </div>
      </section>

      <section
        className="section home-directory"
        aria-labelledby="story-directory-title"
      >
        <div className="section-kicker">Pick the rabbit hole</div>
        <h2 id="story-directory-title">Choose where to read next.</h2>
        <p className="section-intro">
          Story mode explains why the project changed. Builder mode keeps the
          exact implementation status, evidence, architecture boundaries, and
          working records when you want the receipts.
        </p>
        <div className="route-grid">
          {primaryNavigation
            .filter(({ path }) => path !== '/')
            .map(({ path, label }, index) => (
              <Link to={path} className="route-card" key={path}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{label}</h3>
                <p>{storyDescriptions[path]}</p>
                <b>Keep reading →</b>
              </Link>
            ))}
        </div>
      </section>
    </ReadingPage>
  );
}

function StoryProduct() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="01 · The product · Story mode"
        title="Personalization needs more than a name."
      >
        <p>
          Imagine Maya is six and likes space. An AI can instantly write “Maya
          climbed into her rocket and flew to Mars.” Technically, that is a
          personalized story. But swap Maya for Sam and space for dinosaurs and
          almost nothing important has changed.
        </p>
      </PageIntro>

      <section className="section story-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">Now give the story a little life</p>
          <h2 data-reading-key="personal-context">
            The details that matter are usually small.
          </h2>
          <p>
            Maybe Maya calls her grandfather Dadu. She has a stuffed rabbit
            named Bunbun. She recently became scared of thunderstorms. She says
            she will be an astronaut. Last summer she planted tomatoes with Dadu
            and is still absurdly proud that one survived.
          </p>
        </div>

        <p className="story-pullquote">
          A good personalized story does not dump all of that onto the page. It
          notices that tonight’s story about bravery might need only:
          thunderstorm + Bunbun + astronaut phase.
        </p>

        <div className="story-beat-grid">
          <article className="story-beat">
            <span>01</span>
            <h3>The Child Map remembers</h3>
            <p>
              It is a small, evolving collection of things a parent thinks may
              matter: people, pets, interests, preferences, moments, and
              changes. It is not meant to be a surveillance file or a profile to
              finish.
            </p>
          </article>
          <article className="story-beat">
            <span>02</span>
            <h3>Discovery asks gently</h3>
            <p>
              Instead of 73 onboarding questions, the product can surface a
              useful question or let a parent add a note when something happens.
              The map grows over time.
            </p>
          </article>
          <article className="story-beat">
            <span>03</span>
            <h3>Context Selection says “not all of it”</h3>
            <p>
              The system needs a deliberate boundary between what the family has
              remembered and what this one story is allowed to use.
            </p>
          </article>
          <article className="story-beat">
            <span>04</span>
            <h3>Story Studio turns context into craft</h3>
            <p>
              The parent chooses a purpose, reviews context, creates or writes,
              edits, restores earlier versions, and eventually approves a story.
            </p>
          </article>
        </div>

        <div className="reading-panel">
          <h2>Children change. Their context should too.</h2>
          <p>
            One of the surprisingly important design problems is that children
            change constantly. “Loves dinosaurs” and later “dinosaurs are for
            babies” can both be honest observations from different moments.
          </p>
          <Definition term="Change">
            Keep the earlier truth as history when the child genuinely changed.
          </Definition>
          <Definition term="Correction">
            Fix the source when the earlier information was simply wrong.
          </Definition>
          <Definition term="Why this matters">
            A future story should not treat a two-year-old obsession as a
            permanent personality trait.
          </Definition>
        </div>

        <div className="mode-preview">
          <article>
            <p className="eyebrow">Behind the grown-up door</p>
            <h2 data-reading-key="parent-mode">Parent mode is the workshop.</h2>
            <p>
              Context, drafts, edits, choices, approvals, settings, and private
              family information can live here. It is allowed to be more
              complicated because the parent is making decisions.
            </p>
          </article>
          <article>
            <p className="eyebrow">On the kid side</p>
            <h2 data-reading-key="child-mode">Child mode is the bookshelf.</h2>
            <p>
              Finished stories. Calm navigation. No secret profile controls, no
              generation settings, no infinite content feed. The machinery
              should mostly disappear.
            </p>
          </article>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Things we do not want to build</p>
            <h2>The boundaries protect family judgment.</h2>
          </div>
          <ul>
            <li>
              A giant child dossier where more data is always treated as better.
            </li>
            <li>
              An AI that quietly decides what family information it deserves.
            </li>
            <li>An “AI parent” that replaces family judgment.</li>
            <li>
              An infinite children’s engagement feed optimized for time spent.
            </li>
            <li>
              A demo that calls itself finished because one happy path worked.
            </li>
          </ul>
        </div>

        <p className="public-boundary-note">
          The current Alpha work demonstrates important pieces of this model,
          but complete live generation, approval, qualified real-family release,
          and deployment are not being presented as finished.{' '}
          <Link to="/journey">Follow one story through the system →</Link>
        </p>
      </section>
    </ReadingPage>
  );
}

function StoryJourney() {
  const steps = [
    [
      '1. Something happens in real life',
      'Maya is starting school tomorrow and is nervous. Her parent wants a story that makes the feeling less enormous.',
    ],
    [
      '2. The parent chooses the purpose',
      'This is not “generate anything.” The parent is making a bravery-and-reassurance story for a specific moment.',
    ],
    [
      '3. The system suggests a little context',
      'Maybe Bunbun, the astronaut phase, and the current school worry are relevant. The whole Child Map is not.',
    ],
    [
      '4. The parent chooses what may be used',
      'Suggested context is still a suggestion. The parent can remove it, add something permitted, or make the story completely fictional.',
    ],
    [
      '5. Story Studio creates a candidate',
      'A plan becomes a cover and pages. Generation is useful here, but the result is still a draft. It is not family truth or child-visible just because a model returned it.',
    ],
    [
      '6. The parent changes the bad bits',
      'A line can be edited directly. A bounded rewrite can be requested. Earlier versions should remain recoverable if the “improvement” is worse.',
    ],
    [
      '7. Approval makes the story stable',
      'Only after the parent is satisfied does a version become something the family can intentionally make available to the child.',
    ],
    [
      '8. The child gets the simple part',
      'Maya opens the library and reads a story. She does not need to know about context bundles, revision history, provider boundaries, or any of the machinery behind it.',
    ],
  ];

  return (
    <ReadingPage>
      <PageIntro
        eyebrow="02 · How it works · Story mode"
        title="Follow one bedtime story all the way through."
      >
        <p>
          The easiest way to understand Tiny Custom Stories is not through an
          architecture diagram. It is to follow one parent trying to make one
          useful story for one kid.
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

        <p className="story-pullquote">
          The model is somewhere in the middle of the journey. It is not the
          beginning, the authority, or the final approval.
        </p>

        <div className="reading-panel">
          <h2>And sometimes the right amount of personalization is zero.</h2>
          <p>
            A parent might want a completely fictional pirate story tonight.
            That path matters because “we have information” should never become
            “therefore we must use information.”
          </p>
          <Definition term="Personal context">
            Optional material that may make this story feel more recognizably
            theirs.
          </Definition>
          <Definition term="Completely fictional">
            A legitimate story path that deliberately uses no Child Map source
            context.
          </Definition>
        </div>

        <div className="architecture-sketch">
          <div>
            <b>Remember</b>
            <small>Child Map keeps small parent-approved truths</small>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <b>Choose</b>
            <small>Only a permitted, useful subset reaches this story</small>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <b>Create + approve</b>
            <small>
              Story Studio turns candidates into a parent-approved version
            </small>
          </div>
          <p>
            Builder mode contains the exact capability contracts and current
            implementation status behind these hand-offs.
          </p>
        </div>
      </section>
    </ReadingPage>
  );
}

function PrivacyTrustCheckpoint() {
  return (
    <div className="reading-panel">
      <p className="eyebrow">Sprint Infinity · October 12-13, 2026</p>
      <h2>A disclaimer was only the starting point.</h2>
      <p>Children's information deserves more than a reassuring paragraph.</p>
      <p>We are documenting actual data uses before promising safeguards.</p>
      <p>US, EU/EEA, UK, and India are research, not launch markets.</p>
      <p>Notices, consent, rights, and retention work is still planned.</p>
      <p>Qualified privacy, security, and child-safety review is required.</p>
      <p>Real-family Alpha use has not been approved.</p>
      <p>
        <Link to="/roadmap">See the Privacy &amp; Trust plan →</Link>
      </p>
    </div>
  );
}

function StoryDevelopment() {
  const beats = [
    [
      'The first idea was much smaller',
      'Tiny Custom Stories began as a personalized-story idea. The obvious version was straightforward: collect a few details, ask AI for a story, add pictures, make something delightful.',
    ],
    [
      'Then “personalized” became the real problem',
      'A name inside a generic adventure did not feel interesting enough. The project started asking what a system would need to remember for stories to become meaningfully different over time.',
    ],
    [
      'Memory created a privacy problem',
      'The moment the product remembers things about a child, family authority, child-safe defaults, protected parent access, deletion, and information boundaries stop being optional engineering polish.',
    ],
    [
      'The Child Map stopped being a profile',
      'Children change. Notes need history. Questions should be data-driven and paced. Deletion has to remove the right things. What looked like “a few profile fields” became a real capability.',
    ],
    [
      'Story creation stopped being one prompt',
      'Once family context exists, generation needs a permission boundary. Once generation can be wrong, stories need drafts, editing, revision history, restore, and approval. Story Studio became a workflow instead of a button.',
    ],
    [
      'A story plan is becoming something a parent can review',
      'The first protected review and recovery steps are now in the Story Creation epic branch. A parent can inspect the saved plan and explicitly accept it. That is a useful step, but it is not a finished, generated story.',
    ],
    [
      'We tried drawing whole stories with simple code',
      'Two fictional books let us test geometric doodles across a cover and ten pages each. It is cheaper and easier to control than one image prompt per page, but long passages and unusual scenes still need better layouts.',
    ],
    [
      'The next frontier is less theoretical',
      'The project is now approaching the things that feel more real: live AI, staging, real users, operational cost, provider boundaries, safety review, and discovering which assumptions survive contact with people.',
    ],
  ];

  return (
    <ReadingPage>
      <PageIntro
        eyebrow="03 · Development story · Story mode"
        title="Each new boundary answered a real problem."
      >
        <p>
          There was no grand master plan that began with temporal child context,
          capability boundaries, agent workflows, and release gates. Each layer
          appeared because the previous, simpler version exposed a question we
          could no longer ignore.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">How the idea accumulated responsibilities</p>
          <h2>Every new layer started as a simpler question.</h2>
          <p>
            The interesting part is not that the architecture became larger. It
            is that each new boundary exists because an earlier shortcut stopped
            being good enough.
          </p>
        </div>

        <div className="story-beat-grid">
          {beats.map(([title, detail], index) => (
            <article className="story-beat" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <p className="story-pullquote">
          The architecture did not get bigger because “enterprise” sounded
          impressive. It got bigger because “just generate a story” kept hiding
          decisions somebody still had to own.
        </p>

        <PrivacyTrustCheckpoint />

        <div className="sprint-chapter-intro">
          <p className="eyebrow">The engineering chapters underneath</p>
          <h2 data-reading-key="sprint-record">
            If you want the receipts, the sprint record is still here.
          </h2>
          <p>
            Story mode explains why the product changed. These chapters preserve
            the more exact implementation and outcome-gate history.
          </p>
        </div>

        <div className="sprint-chapter-grid" aria-label="Sprint chapters">
          <Link to="/sprint-one" className="sprint-chapter-card">
            <span>01</span>
            <p className="eyebrow">Family authority</p>
            <h3>Sprint 1</h3>
            <p>
              The point where “this is for children” forced us to get serious
              about child mode, protected parent work, expiry, recovery, and
              server-side authority.
            </p>
            <b>Read the technical chapter →</b>
          </Link>
          <Link to="/sprint-two" className="sprint-chapter-card">
            <span>02</span>
            <p className="eyebrow">Memory that changes</p>
            <h3>Sprint 2</h3>
            <p>
              The Child Map became temporal, Discovery became data-driven, and
              deletion/private-media behavior had to work together rather than
              in isolation.
            </p>
            <b>Read the technical chapter →</b>
          </Link>
          <Link to="/sprint-three" className="sprint-chapter-card">
            <span>03</span>
            <p className="eyebrow">Creation without magic</p>
            <h3>Sprint 3</h3>
            <p>
              A growing backlog led to a scope reset: finish one fictional
              plan-to-approved-story journey before reopening optional context
              and advanced revision capabilities.
            </p>
            <b>Read the technical chapter →</b>
          </Link>
        </div>

        <div className="reading-panel">
          <h2>Inspect the working record.</h2>
          <p>
            Decisions, roadmap, and open questions still exist one layer deeper.
            They are intentionally not the first thing a new reader has to
            understand.
          </p>
          <p>
            <Link to="/roadmap">Outcome roadmap →</Link>
          </p>
          <p>
            <Link to="/decisions">Decision record →</Link>
          </p>
          <p>
            <Link to="/questions">Open questions →</Link>
          </p>
        </div>
      </section>
    </ReadingPage>
  );
}

function StoryArchitecture() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="04 · Architecture · Story mode"
        title="Clear responsibilities come before more services."
      >
        <p>
          The architecture question was not “how many services should we have?”
          It was “which decisions must not quietly collapse into the same
          function?” Responsibility came first. Machines can come later if the
          evidence earns them.
        </p>
      </PageIntro>
      <section
        className="section delivery-section"
        aria-label="Current synthetic architecture checkpoint"
      >
        <div className="reading-panel">
          <p className="eyebrow">October 21 status · partial implementation</p>
          <h2>The current checkpoint is narrow and incomplete.</h2>
          <p>
            The accepted target uses a saved fictional profile and an explicitly
            accepted plan. Generation and checking supply a candidate; Story
            Lifecycle owns application, revisions, and approval. Protected
            readers reopen an immutable approved version. Reviewed epic slices
            and a bounded fixed-story local persistence exercise exist, but the
            normal complete parent journey remains unverified and not every epic
            slice is in development.
          </p>
          <p>
            Optional Child Map context and source cleanup stay outside this
            checkpoint. Their exclusion must be enforced by both the server and
            interface. The deterministic offline path is separate from the
            default-off, Development-only fictional provider preview now on
            development. That preview returns an unassessed, unsaved candidate
            and cannot approve, publish, or authorize real-family transfer.
          </p>
        </div>
      </section>

      <section className="section story-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">The useful split</p>
          <h2>Memory, permission, and creation have different owners.</h2>
        </div>

        <div className="role-grid">
          <article>
            <span className="role-icon" aria-hidden="true">
              ◌
            </span>
            <h3>Remember</h3>
            <p>
              The Child Map owns family context. It can keep change over time
              without giving the story generator permission to browse
              everything.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ☞
            </span>
            <h3>Permit</h3>
            <p>
              Context Selection decides what this story is allowed to consider
              and what a provider may receive. This is policy, not creativity.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ✦
            </span>
            <h3>Create</h3>
            <p>
              Story Generation consumes a minimized input and returns
              candidates. It does not own family authority, Story persistence,
              or child visibility.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ◇
            </span>
            <h3>Visualize</h3>
            <p>
              The accepted Visual Theme System keeps one versioned theme,
              recurring cast, and structured scene intent coherent across a
              story. A renderer is replaceable; it does not become the visual
              domain authority.
            </p>
          </article>
        </div>

        <p className="story-pullquote">
          A model being clever is not a substitute for the application knowing
          who owns the data, who grants permission, and what counts as an
          approved story.
        </p>

        <div className="reading-panel">
          <h2>Logical walls before network walls</h2>
          <p>
            These responsibilities can be explicit inside one deployable
            application. We do not need to pay the operational price of separate
            services merely to prove that the boundaries are real.
          </p>
          <Definition term="Today">
            Keep the physical deployment simple enough for an Alpha while the
            contracts and ownership stay explicit.
          </Definition>
          <Definition term="Later">
            Extract a worker or service only when durability, scaling, queues,
            credentials, backpressure, or operational evidence creates a real
            reason.
          </Definition>
        </div>
      </section>

      <section className="section architecture-teaser">
        <div className="architecture-teaser-copy">
          <p className="eyebrow">For the diagram people</p>
          <h2>The full architecture map still exists.</h2>
          <p>
            Builder mode carries status such as implemented, partial, accepted,
            and open. The public explorer is intentionally curated so it can
            explain the system without exposing private operational detail.
          </p>
          <a
            className="button button-dark"
            href={architectureExplorerPath}
            target="_blank"
            rel="noreferrer"
          >
            Open the architecture explorer <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a
          className="architecture-preview-link"
          href={architectureExplorerPath}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={architecturePreviewPath}
            alt="Simplified preview of the Tiny Custom Stories public architecture"
            loading="lazy"
          />
          <span>
            Wander through the technical version{' '}
            <span aria-hidden="true">↗</span>
          </span>
        </a>
      </section>
    </ReadingPage>
  );
}

function StoryHowWeBuild() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="05 · How we build · Story mode"
        title="Automation still needs a human owner."
      >
        <p>
          Tiny Custom Stories is also where I am learning how far one developer
          can push modern AI-assisted development without turning the repository
          into a pile of confident-looking chaos.
        </p>
      </PageIntro>

      <section className="section delivery-section">
        <BuildActivity />

        <div className="sprint-chapter-intro">
          <p className="eyebrow">The operating experiment</p>
          <h2
            data-reading-key="human-directed-workflow"
            data-nav-label="Human-directed workflow"
          >
            Keep the human decisions visible while automation does more of the
            typing.
          </h2>
          <p>
            The workflow keeps changing around one question: how do I get real
            leverage from agents without letting speed erase product intent,
            review, or repository memory?
          </p>
        </div>

        <div className="story-beat-grid">
          <article className="story-beat">
            <span>01</span>
            <h3>I stopped giving agents giant jobs</h3>
            <p>
              “Build the Child Map” is a terrible task. The project increasingly
              uses small issues with clear acceptance criteria and dependencies.
              But a short task is only useful if it helps finish an existing
              sprint outcome. We check what is already done before creating more
              work.
            </p>
          </article>
          <article className="story-beat">
            <span>02</span>
            <h3>Different agents got different jobs</h3>
            <p>
              Planning, backlog stewardship, implementation, repository hygiene,
              and PR review are deliberately separated. The point is not to
              create an AI company org chart. It is to stop one context window
              from pretending it should make every kind of decision.
            </p>
          </article>
          <article className="story-beat">
            <span>03</span>
            <h3>GitHub remains the memory</h3>
            <p>
              Agents can disappear. Sessions can hit limits. Models can change.
              Issues, commits, pull requests, tests, ADRs, and project records
              are meant to survive all of that.
            </p>
          </article>
          <article className="story-beat">
            <span>04</span>
            <h3>Review is a loop, not a ceremony</h3>
            <p>
              Implement, inspect, comment, fix, verify again, then merge. A
              generated diff does not get a free pass because an agent sounds
              certain about it.
            </p>
          </article>
          <article className="story-beat">
            <span>05</span>
            <h3>Tests are evidence, not religious artifacts</h3>
            <p>
              Task pull requests now use substantive review and proportionate
              local checks. Affected hosted suites run by manual dispatch on
              epic branches at integration checkpoints; browser runs are
              optional, not a tax on every change.
            </p>
          </article>
          <article className="story-beat">
            <span>06</span>
            <h3>Documentation became part of the build</h3>
            <p>
              Architecture maps, decisions, public explanations, sprint gates,
              and lessons are not cleanup after coding. They are part of keeping
              many small AI-assisted changes pointed at the same product.
            </p>
          </article>
          <article className="story-beat">
            <span>07</span>
            <h3>Big features got their own integration lanes</h3>
            <p>
              Several small task PRs may be individually sound without adding up
              to a usable feature. We now assemble them in an epic branch,
              review the integrated slice, and only then bring a checkpoint to
              the stable development branch.
            </p>
          </article>
          <article className="story-beat">
            <span>08</span>
            <h3>One shared snapshot, not eight conflicting memories</h3>
            <p>
              The coordinator shares a dated project view rather than letting
              every agent re-fetch the board. Important decisions still verify
              live GitHub state: a cache can save time, but it cannot approve a
              merge or prove that a dependency landed.
            </p>
          </article>
        </div>

        <div className="reading-panel">
          <p className="eyebrow">October 28 · Working pilot</p>
          <h2 data-reading-key="moving-map-pilot">
            The plan can change without losing the destination.
          </h2>
          <p>
            We've begun experimenting with Moving Map Development (MMD)
            after finding that agents could keep building from assumptions
            other agents had already revised. We are comparing the idea
            with existing techniques, not proposing it as a replacement
            for TDD, BDD, specs, or good agent harnesses. Reversible
            architectural changes need impact checks and independent
            review; consequential product and safety choices remain
            human-led. Faster delivery is a question, not a claim.
          </p>
          <p>
            <Link to="/articles/moving-map">
              Read Moving Map and its adoption guide →
            </Link>
          </p>
        </div>

        <p className="story-pullquote">
          The goal is not “let the agents build everything.” The goal is to make
          my intent precise enough that automation can help without quietly
          becoming the product manager, architect, reviewer, and historian too.
        </p>

        <div
          className="delivery-loop"
          aria-label="Human-directed delivery loop"
        >
          <span>Idea</span>
          <i aria-hidden="true">→</i>
          <span>Decision</span>
          <i aria-hidden="true">→</i>
          <span>Small task</span>
          <i aria-hidden="true">→</i>
          <span>Agent implementation</span>
          <i aria-hidden="true">→</i>
          <span>Task PR + local evidence</span>
          <i aria-hidden="true">→</i>
          <span>Review + fixes</span>
          <i aria-hidden="true">→</i>
          <span>Epic checkpoint + outcome</span>
        </div>
      </section>
    </ReadingPage>
  );
}

function StoryDesign() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="07 · Design · Story mode"
        title="The product should not look like an AI control panel."
      >
        <p>
          Tiny Custom Stories deals with family memories, children’s stories,
          private parent work, and a very technical build process. One visual
          language cannot make every surface identical, but it can make them
          feel related.
        </p>
      </PageIntro>

      <section className="section design-section">
        <div className="mode-preview">
          <article>
            <p className="eyebrow">For the child</p>
            <h2 data-reading-key="child-theme">
              Quiet, warm, and story-first.
            </h2>
            <p>
              The child should see finished stories, not the machinery. Fewer
              controls, calmer choices, and a reading experience that does not
              advertise how clever the software thinks it is.
            </p>
          </article>
          <article>
            <p className="eyebrow">For the parent</p>
            <h2 data-reading-key="parent-theme">
              Warm, but serious enough for real decisions.
            </h2>
            <p>
              Parent mode can be richer because it handles context, drafts,
              edits, privacy-sensitive information, and approval. Friendly does
              not have to mean toy-like.
            </p>
          </article>
        </div>

        <DesignFoundations />
        <p className="reading-qualification">
          <Link to="/learnings">Read the design-as-development lesson →</Link>
        </p>
      </section>
    </ReadingPage>
  );
}

function StoryLibrary() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="08 · Public library · Story mode"
        title="Share the story. Protect the private work."
      >
        <p>
          This site is meant to show the thinking, progress, uncertainty, and
          mistakes behind Tiny Custom Stories without turning private project
          material or future family information into public content.
        </p>
      </PageIntro>

      <section className="section library-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">Translation, not replication</p>
          <h2 data-reading-key="public-curation">
            The public story is edited on purpose.
          </h2>
          <p>
            Internal material is optimized for building. Public material is
            optimized for understanding. The job is to preserve the truth while
            changing the level of detail.
          </p>
        </div>

        <div className="story-beat-grid">
          <article className="story-beat">
            <span>01</span>
            <h3>The private project is messy on purpose</h3>
            <p>
              Issues, implementation notes, tests, architecture records, failed
              ideas, and operational detail need enough precision to build the
              product. That is not automatically good public writing.
            </p>
          </article>
          <article className="story-beat">
            <span>02</span>
            <h3>The public story translates</h3>
            <p>
              We keep the status and reasoning, remove private or
              attack-relevant detail, and rewrite the material so a reader does
              not need the repository open beside them.
            </p>
          </article>
          <article className="story-beat">
            <span>03</span>
            <h3>Uncertainty stays visible</h3>
            <p>
              Confirmed decisions, verified facts, proposals, assumptions, and
              open questions are different things. Public writing should not
              flatten them into one confident voice.
            </p>
          </article>
          <article className="story-beat">
            <span>04</span>
            <h3>The story is allowed to admit embarrassment</h3>
            <p>
              An expensive CI mistake or a tool experiment that went nowhere can
              be more useful than another polished progress update if it
              explains why the process changed.
            </p>
          </article>
        </div>

        <p className="story-pullquote">
          This is closer to a curated lab notebook than a marketing site: enough
          mess to be honest, enough editing to remain understandable.
        </p>

        <div className="reading-panel">
          <h2>What stays out</h2>
          <p>
            Credentials, private links, private research, attack-relevant
            implementation details, and family information do not become public
            merely because they helped inform a decision.
          </p>
        </div>

        <div className="pdf-callout">
          <div>
            <p className="eyebrow">Portable checkpoint</p>
            <h2 data-reading-key="pdf-companion">
              The PDF is a snapshot. The website is the living version.
            </h2>
            <p>
              The portable 17-page dossier now reflects the October 21 public
              checkpoint. The responsive site remains the best place for the
              evolving story and accessible navigation. This website changes
              more often as the product, build system, and lessons evolve.
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
    </ReadingPage>
  );
}

function Product() {
  return (
    <ReadingPage>
      <PageIntro eyebrow="01 · The product" title="A child is not a prompt.">
        <p>
          There are two easy versions of an “AI story for your kid.” One is
          basically mail merge: type a name, pick a dinosaur, receive a generic
          story wearing a tiny personalized hat. The other is much worse:
          collect everything about the child and hope the model does something
          magical with it. Tiny Custom Stories is trying to live in the useful
          middle.
        </p>
      </PageIntro>

      <section className="section story-section">
        <div
          className="architecture-sketch"
          role="img"
          aria-label="Parent intent plus approved context becomes a reviewable story."
        >
          <div>
            <b>Parent's intent</b>
            <small>Why are we making this story?</small>
          </div>
          <i aria-hidden="true">+</i>
          <div>
            <b>Small approved context</b>
            <small>Only what is useful for this story.</small>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <b>A story that feels like theirs</b>
            <small>Editable, reviewable, never auto-published.</small>
          </div>
          <p>
            The goal is not “AI knows everything.” The goal is “this story feels
            surprisingly right, and the parent can see why.”
          </p>
        </div>

        <div className="role-grid">
          <article>
            <span className="role-icon" aria-hidden="true">
              ✎
            </span>
            <h3>A kid is not a prompt</h3>
            <p>
              A name, age, and favourite animal can make a story look
              personalized without making it meaningful. We want context that
              can change the story in a way a parent actually recognizes.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ◌
            </span>
            <h3>Memory should be earned</h3>
            <p>
              The Child Map grows slowly through parent-approved notes and
              questions. The system should know enough to help, not collect
              enough to feel creepy.
            </p>
          </article>
          <article>
            <span className="role-icon" aria-hidden="true">
              ☼
            </span>
            <h3>The parent gets the last word</h3>
            <p>
              Parents choose the purpose, choose which context may be used, edit
              the draft, and approve the result. AI helps compose; it does not
              become the family authority.
            </p>
          </article>
        </div>

        <div className="reading-panel">
          <h2 data-reading-key="personal-context">
            So what does the product actually do?
          </h2>
          <Definition term="Child Map">
            A small, evolving record of things a parent thinks may matter:
            people, pets, interests, moments, preferences, and other useful
            context. It is not a surveillance file.
          </Definition>
          <Definition term="Discovery">
            The gentle question-and-note flow that helps the parent add useful
            context over time instead of filling out one giant profile form.
          </Definition>
          <Definition term="Story Studio">
            The grown-up workspace where a parent starts with a purpose, picks
            context, generates or writes, edits, revises, and eventually
            approves a story.
          </Definition>
          <Definition term="Child library">
            The quiet side of the product: only stories a parent has made
            child-visible, without drafts, private notes, or adult controls.
          </Definition>
        </div>

        <div
          className="mode-preview"
          aria-label="Parent and child experience boundaries"
        >
          <article>
            <p className="eyebrow">Behind the grown-up door</p>
            <h2 data-reading-key="parent-mode">Parent mode</h2>
            <p>
              This is where the messy creative work happens: context, drafts,
              edits, choices, approvals, settings, and other things a child
              should not have to think about.
            </p>
          </article>
          <article>
            <p className="eyebrow">On the kid side</p>
            <h2 data-reading-key="child-mode">Child mode</h2>
            <p>
              Ideally boring in the best way: a calm shelf of finished stories
              the family chose to make visible. No infinite feed. No secret
              profile controls. Just the stories.
            </p>
          </article>
        </div>

        <p className="public-boundary-note">
          The private Alpha is still being built. The current work proves the
          family boundary, Child Map/Discovery behavior, and parts of Story
          Studio before claiming the complete AI story experience.{' '}
          <Link to="/journey">See how the hand-offs work →</Link>
        </p>
      </section>
    </ReadingPage>
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
    <ReadingPage>
      <PageIntro
        eyebrow="02 · How it works"
        title="Every hand-off needs an owner."
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
    </ReadingPage>
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
      'Sprint 3 · a smaller checkpoint after a difficult scope reset',
      'The accepted intermediate target remains profile-only Fun & Fantasy with deterministic offline text, exact-revision approval, and protected reopen. Epic-branch slices exist. October 20 development checkpoints added a separate default-off fictional preview with idea/feel choices; an October 21 local fixed-story exercise reached persisted approval/reopen. Neither is full accepted end-to-end proof. Optional context and advanced editing remain deferred from that intermediate checkpoint.',
    ],
    [
      'Sprint 4 · visual direction accepted, early doodle tests underway',
      'We have tested reusable code-built doodles in two fictional books and measured local SVG output in a visual-foundation epic branch. That groundwork does not complete the planned versioned theme, cast, scene plans, page review, or Sprint 4 outcome. Richer image, likeness, and print paths remain separate decisions.',
    ],
  ];

  return (
    <ReadingPage>
      <PageIntro
        eyebrow="03 · Development story"
        title="Better questions shaped the architecture."
      >
        <p>
          The project did not move in a straight line from “idea” to “features.”
          Each sprint exposed a boundary that needed to become clearer: first
          family authority, then evolving child context, then the difference
          between Story truth, context permission, generation, and visual
          continuity. The October 14 scope reset narrowed the next demonstration
          to one fictional, parent-operated story journey. Subsequent epic
          merges add accepted-plan input, offline generation/checking, initial
          story application, and approved-version reading. A separate
          Development-only fictional preview with idea/feel choices and a narrow
          fixed-story local approval/reopen exercise now add evidence, but the
          full accepted outcome still needs proof.
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
          <h2 data-reading-key="sprint-record">
            Three sprints, three different evidence boundaries.
          </h2>
          <p>
            Sprint 1 keeps its original deep link, but it no longer gets special
            treatment in the main header. Sprint 1, 2, and 3 live together here
            as the current implementation chapters. Sprint 4's newly accepted
            Visual Theme System direction is recorded above and in the roadmap,
            but it is not presented as an active implementation chapter.
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
            <p className="eyebrow">Reduced checkpoint underway · gate open</p>
            <h3>Sprint 3</h3>
            <p>
              Profile-only plan acceptance, offline
              generation/checking/application, and approved-version reading have
              epic implementations. The reduced end-to-end demonstration remains
              unverified.
            </p>
            <b>Read Sprint 3 →</b>
          </Link>
        </div>

        <PrivacyTrustCheckpoint />

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">How work is delivered now</p>
            <h2>Clear contracts make work reviewable.</h2>
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
              A sprint counts as done when its outcome passes, not when the
              issue list looks busy.
            </li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>Inspect the working record.</h2>
          <p>
            The first read stays focused on the story. When you want the
            project-management detail, the underlying records are still public:
          </p>
          <p>
            <Link to="/roadmap">Outcome roadmap →</Link>
          </p>
          <p>
            <Link to="/decisions">Decision record →</Link>
          </p>
          <p>
            <Link to="/questions">Open questions →</Link>
          </p>
        </div>

        <p className="public-boundary-note">
          The project intentionally prefers more precise implementation tasks
          over fewer ambiguous ones. Task count and merged code are supporting
          evidence, not substitutes for a demonstrated sprint outcome.
        </p>
      </section>
    </ReadingPage>
  );
}

function BuildActivity() {
  const stats = [
    [deliverySnapshot.commits, 'commits', 'on the development branch'],
    [deliverySnapshot.pullRequestsCreated, 'pull requests', 'created'],
    [deliverySnapshot.pullRequestsMerged, 'pull requests', 'merged'],
    [deliverySnapshot.issuesTracked, 'issues', 'tracked'],
    [deliverySnapshot.taskIssues, 'task issues', 'implementation / validation'],
    [
      deliverySnapshot.workflowDefinitions,
      'CI workflows',
      'main product definitions',
    ],
  ] as const;

  return (
    <section className="build-activity" aria-label="Dated build activity">
      <div className="snapshot-heading">
        <div>
          <p className="eyebrow">GitHub delivery snapshot</p>
          <h2
            data-reading-key="activity-snapshot"
            data-nav-label="Build activity"
          >
            Build activity · {deliverySnapshot.snapshotDate}
          </h2>
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
            <h3>{label === 'pull requests' ? `${label} ${detail}` : label}</h3>
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
            and {deliverySnapshot.openIssues.toLocaleString()} remain open. The
            backlog is intentionally detailed: task count makes dependencies,
            acceptance criteria, evidence, and ownership explicit rather than
            acting as a productivity score.
          </p>
        </article>
        <article>
          <p className="eyebrow">Automation footprint</p>
          <h2>
            {deliverySnapshot.workflowDefinitions} main product CI workflows
          </h2>
          <p>
            Repository-wide workflow-run history was last fully verified on{' '}
            {deliverySnapshot.workflowRunsSnapshotDate}:{' '}
            {deliverySnapshot.successfulWorkflowRuns.toLocaleString()} of{' '}
            {deliverySnapshot.workflowRuns.toLocaleString()} recorded runs
            completed successfully. These are repository-wide historical
            outcomes, including superseded runs, not a pass rate for the current
            code or a measure of product readiness.
          </p>
        </article>
      </div>

      <p className="public-boundary-note">
        Repository counts are intentionally dated rather than presented as live
        telemetry. Repository totals and workflow history were read on October
        21, 2026 (Eastern time; October 22 UTC). Commits are all reachable
        development history, including historical ancestry introduced by merges.
        Changes in that history are not comparable to recent delivery velocity.
        Epic-branch work is included in PR totals but may not have reached
        development. The public site does not call the private repository or
        require a GitHub token in the browser.
      </p>
    </section>
  );
}

function HowWeBuild() {
  const workflowChecks = [
    [
      'Frontend CI',
      'Formatting, linting, types, build, dependency audit, and frontend tests. Hosted execution is manually dispatched on an epic branch for an affected integration checkpoint.',
    ],
    [
      'Backend CI',
      'Restore/audit, formatting, build, API/OpenAPI and MongoDB startup/migration checks. Hosted execution is manual on the exact final epic head when this suite is affected.',
    ],
    [
      'Repository tools CI',
      'Repository helper, dependency, and workflow-support checks protect planning and delivery. Affected hosted checks run at epic checkpoints, not on every task PR.',
    ],
    [
      'Browser evidence',
      'Browser tests are optional, manually dispatched epic-level evidence. Task PRs use local and reviewed UI/accessibility evidence instead of requiring expensive hosted browser runs.',
    ],
    [
      'Public-story CI',
      'The separate public-story repository has its own PR verification and deployment workflow; it checks its dossier, formatting, linting, TypeScript, build, and component tests independently of product epic CI.',
    ],
  ] as const;

  return (
    <ReadingPage>
      <PageIntro
        eyebrow="05 · How we build"
        title="Small tasks need evidence at the joins."
      >
        <p>
          This page is about the machinery: how an idea becomes a change small
          enough to review, how independent work stays isolated, and what
          evidence has to exist before “done” means anything. The mistakes and
          lessons have their own page now.
        </p>
      </PageIntro>

      <section className="section delivery-section">
        <BuildActivity />

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
          <span>Task PR + local evidence</span>
          <i aria-hidden="true">→</i>
          <span>Review / fixes / re-review</span>
          <i aria-hidden="true">→</i>
          <span>Epic checkpoint + manual CI</span>
          <i aria-hidden="true">→</i>
          <span>Outcome evidence</span>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Agent-assisted, repository-owned</p>
            <h2
              data-reading-key="human-directed-workflow"
              data-nav-label="Human-directed workflow"
            >
              Structured execution without handing product ownership away.
            </h2>
          </div>
          <ul>
            <li>
              Backlog stewardship keeps outcome-level issues executable without
              turning every shared discovery into a new ticket or status
              category.
            </li>
            <li>
              Independent tasks use isolated branches or sessions. Each normal
              feature task is integrated into its owning epic branch before an
              intentionally reviewed checkpoint reaches development.
            </li>
            <li>
              Moving Map Development (MMD) treats TDD as a selective technique,
              not a mandatory starting ritual. Checks are chosen for regression,
              contract, security, accessibility, and integration risk.
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
              Moving Map coordinates shared decisions; optional agent skills sit
              underneath product, privacy, architecture, and GitHub safeguards.
            </li>
          </ul>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">The new integration rhythm</p>
            <h2>
              Tasks live inside epics. The stable branch receives reviewed
              slices.
            </h2>
          </div>
          <ul>
            <li>
              Each normal feature issue has one owning epic; sprint placement
              and integration branch are separate choices. We reconcile existing
              issues and unfinished outcomes before adding to the Ready queue.
              Large work can still be split into reviewable tasks when needed.
            </li>
            <li>
              Task PRs target their verified epic branch. Reviewed, coherent
              epic checkpoints then integrate into development; an individual
              task merge does not by itself demonstrate a complete feature.
            </li>
            <li>
              A local Superset coordinator can dispatch bounded, isolated
              workers. A rejected Ready preflight no longer needs to strand the
              next run. Specialist agents still own separate planning,
              implementation, review, and documentation jobs.
            </li>
            <li>
              Coordinated sessions share a dated GitHub Project snapshot and use
              focused reads. Status mutations, dependency ancestry, and
              final-head merge gates still require fresh verification.
            </li>
            <li>
              Product task PRs use local verification and substantive review.
              Required affected hosted suites are manually run on the exact
              final epic head before its checkpoint merges into development;
              browser execution is optional.
            </li>
          </ul>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Why the checks matter</p>
            <h2>Test where the pieces meet.</h2>
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
              Optional browser smoke tests and captured screenshots add evidence
              for meaningful integrated UI flows when warranted.
            </li>
          </ul>
        </div>

        <div className="reading-panel">
          <p className="eyebrow">October 28 · Accepted working pilot</p>
          <h2 data-reading-key="moving-map-pilot">
            Can Moving Map keep shared assumptions current?
          </h2>
          <p>
            The accepted product outcome remains human-led. Affected agents
            compare new evidence, record a revised shared contract, and
            revalidate only impacted work before integration. Reversible
            cross-component architecture needs impact checks and independent
            final-diff review; consequential product, privacy, security,
            child-safety, or irreversible decisions are escalated.
          </p>
          <p>
            We adopted the pilot instructions on October 28, but are
            still testing the waters. We haven't shown fewer conflicts,
            lower token costs, or better outcomes yet.{' '}
            <Link to="/articles/moving-map">
              Read the Moving Map article and portable starter guide →
            </Link>
          </p>
        </div>

        <div className="reading-panel">
          <h2>Process here. Lessons next.</h2>
          <p>
            This page explains the system we use now. The things that broke it,
            embarrassed us, cost too much, or changed our minds belong in the
            learning record. <Link to="/learnings">Read what we learned →</Link>
          </p>
        </div>
      </section>
    </ReadingPage>
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
    [
      'Visual Theme System',
      'Accepted for Sprint 4: owns versioned visual theme, cast, scene-plan, renderer, continuity, and parent-review contracts. The controlled foundation does not require an external image provider and is not implemented yet.',
    ],
  ];

  return (
    <ReadingPage>
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
        className="section delivery-section"
        aria-label="Current synthetic architecture checkpoint"
      >
        <div className="reading-panel">
          <p className="eyebrow">October 21 status · partial implementation</p>
          <h2>The current checkpoint is narrow and incomplete.</h2>
          <p>
            The accepted target uses a saved fictional profile and an explicitly
            accepted plan. Generation and checking supply a candidate; Story
            Lifecycle owns application, revisions, and approval. Protected
            readers reopen an immutable approved version. Reviewed epic slices
            and a bounded fixed-story local persistence exercise exist, but the
            normal complete parent journey remains unverified and not every epic
            slice is in development.
          </p>
          <p>
            Optional Child Map context and source cleanup stay outside this
            checkpoint. Their exclusion must be enforced by both the server and
            interface. The deterministic offline path is separate from the
            default-off, Development-only fictional provider preview now on
            development. That preview returns an unassessed, unsaved candidate
            and cannot approve, publish, or authorize real-family transfer.
          </p>
        </div>
      </section>

      <section
        className="section architecture-explorer-section"
        aria-labelledby="architecture-explorer-title"
      >
        <div className="architecture-explorer-heading">
          <div>
            <p className="eyebrow">Interactive public architecture</p>
            <h2 id="architecture-explorer-title">
              The map distinguishes progress from plans.
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
              remain incomplete. Sprint 4 now adds an accepted Visual Theme
              System boundary for coherent visuals, but that capability has not
              started implementation.
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
            Discovery, Story Generation, and the future Visual Theme System are
            logical capability boundaries. Worker extraction, durable workflow
            technology, message broker, deployment platform, image-provider
            adapters, and production adapters remain evidence-led decisions
            rather than assumed infrastructure.
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
          <Definition term="Visual contract before image provider">
            Sprint 4 can prove theme, cast, scene-plan, continuity, retry, and
            parent-review behavior with a controlled no-photo renderer. An
            external image provider becomes relevant only when a later renderer
            actually needs one.
          </Definition>
          <Definition term="Converging codebase">
            Transitional architecture is being removed as the boundaries become
            clearer: the obsolete legacy backend, dead web scaffolding, and a
            duplicate private project-story copy have been retired rather than
            kept indefinitely.
          </Definition>
        </div>
      </section>
    </ReadingPage>
  );
}

function Decisions() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="Working record · Decisions"
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

        <h2>What the labels mean</h2>
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

        <h2>Decisions and supporting records</h2>
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
    </ReadingPage>
  );
}

function Roadmap() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="Working record · Roadmap"
        title="Measure progress by demonstrated outcomes."
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
        <div className="reading-panel">
          <p className="eyebrow">Privacy &amp; Trust · Sprint Infinity</p>
          <h2>Privacy is a release gate, not a footer.</h2>
          <p>The privacy plan began on October 12, 2026.</p>
          <p>India was added to the regional research on October 13.</p>
          <p>US, EU/EEA, UK, and India are assessment scopes only.</p>
          <p>These regions are not approved launch markets.</p>
          <Definition term="Document">
            Map data collected, purposes, providers, and known gaps.
          </Definition>
          <Definition term="Plan and implement">
            Review notice, consent, rights, and retention contracts first.
          </Definition>
          <Definition term="Verify">
            Test refusal, failures, withdrawal, and deletion with fiction.
          </Definition>
          <p>A Privacy Notice does not replace consent or safeguards.</p>
          <p>Parent Mode is not verified parental consent.</p>
          <p>Saving data does not authorize sharing it with an AI provider.</p>
          <p>These safeguards are planned, not shipped.</p>
          <p>Qualified privacy, security and child-safety review is due.</p>
          <p>Real-family Alpha use remains restricted.</p>
          <p>The private working Privacy Notice is not published.</p>
          <p>
            <a
              href="https://github.com/TinyCustomStories/tiny-custom-stories-project-story/blob/main/documentation/PublicProjectStory/PrivacyAndTrustRoadmap.md"
              target="_blank"
              rel="noreferrer"
            >
              Read the full public Privacy &amp; Trust roadmap{' '}
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>

        <h2>Outcome gates by sprint</h2>
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
    </ReadingPage>
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
    <ReadingPage>
      <PageIntro
        eyebrow="Sprint chapter · 01"
        title="Implementation is not a passed outcome gate."
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
    </ReadingPage>
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
    <ReadingPage>
      <PageIntro
        eyebrow="Sprint chapter · 02"
        title="The Child Map records change over time."
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
    </ReadingPage>
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
    <ReadingPage>
      <PageIntro
        eyebrow="Sprint chapter · 03"
        title="Story Studio is growing around reversible work."
      >
        <p>
          Sprint 3 became a lesson in how much code can accumulate before a
          complete experience exists. Earlier editing and revision foundations
          remain, but the October 14 reset authorizes a smaller intermediate
          checkpoint: one fictional profile, Fun & Fantasy, a freshly accepted
          plan, an offline cover and ten pages, exact-revision approval, and
          protected reopen. It is not usable Alpha or proof the sprint is done.
        </p>
      </PageIntro>

      <section className="section sprint-section">
        <div className="outcome-banner">
          <div>
            <p className="eyebrow">Sprint 3 outcome status</p>
            <h2>
              Reduced synthetic checkpoint underway. Outcome gate still open.
            </h2>
          </div>
          <p>
            Reviewed epic merges include Ready-plan input, offline candidate
            generation/checking, initial application through Story Lifecycle,
            and immutable approved-version reading. October 20 development
            checkpoints introduced a separate fictional preview with curated
            idea/feel choices. An October 21 local fixed-story exercise reached
            persisted approval and reopen, but the accepted normal parent
            journey is still not proved. Optional sources, free-form
            instructions, alternative protagonists, editing, and rewrites are
            outside the reduced checkpoint. Safety, isolation, recovery,
            currentness, and approval checks remain required.
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
          <h2>Earlier authoring work remains reusable.</h2>
          <p>
            The historical authoring slices below describe the broader product,
            including capabilities unavailable in the reduced checkpoint. They
            are not evidence that the current generation-to-approval journey is
            complete.
          </p>
        </div>

        <div
          className="delivery-loop"
          aria-label="Story Studio progress from protected entry to approval"
        >
          <span>Landed · Story Studio home</span>
          <i aria-hidden="true">→</i>
          <span>Landed · early saved setup</span>
          <i aria-hidden="true">→</i>
          <span>Epic branch · Story Plan review and recovery</span>
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
            <li>Profile-based entry and canonical saved-child setup.</li>
            <li>Protected purpose and saved feel/reading choices.</li>
            <li>
              First Story Plan review, explicit acceptance, and current-plan
              recovery in the Story Creation epic branch.
            </li>
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
            A default-off OpenRouter adapter can handle fixed synthetic tests,
            but it cannot send family content. Full ten-page generation,
            checking, bounded repairs, progress integration, and final approval
            still need to work together. Model choice is founder-controlled, not
            an in-app lab or permission for real-family data transfer.
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
    </ReadingPage>
  );
}

function DesignFoundations() {
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
    <section
      className="design-foundations"
      aria-label="Shared design foundations"
    >
      <h2 data-reading-key="design-balance">
        Calm first, character in measured doses.
      </h2>
      <p className="reading-qualification">
        The 70 / 20 / 10 balance is an approximate restraint guide for
        composition, not a measured usability result.
      </p>
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
          <h2 data-reading-key="visual-language">
            Paper, ink, and a few purposeful sparks.
          </h2>
          <p>
            Fraunces carries expressive titles. Nunito Sans keeps bodies and
            controls plain. DM Mono labels metadata and status. Crisp borders,
            small offset shadows, flat color, and generous spacing keep the
            family resemblance without forcing every surface into one layout.
          </p>
        </div>
        <div className="palette" aria-label="Accepted interface color palette">
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
          <h2>New material, the same visual language.</h2>
          <p>
            Existing typography, palette, cards, status treatments, navigation,
            fragment routes, responsive behavior, and public editorial character
            remain the foundation for these new pages.
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
  );
}

function Design() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="07 · Design philosophy and language"
        title="One design language, different responsibilities."
      >
        <p>
          The project has not replaced its visual identity. The accepted
          paper-and-ink language still provides the shared foundations, while
          child, parent, serious, and public-editorial surfaces remain
          intentionally different in density, authority, and tone. The design
          philosophy explains why; the visual language makes the choices
          repeatable across new features and different AI coding agents. The
          founder reports that both have been useful in everyday development,
          without claiming a formal user-study result.
        </p>
      </PageIntro>

      <section className="section design-section">
        <DesignFoundations />
        <p className="reading-qualification">
          <Link to="/learnings">Read the design-as-development lesson →</Link>
        </p>
      </section>
    </ReadingPage>
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
      'The source-versus-built-story distinction is accepted, while complete cleanup and provider-copy evidence remain unfinished. The reduced checkpoint excludes optional sources; it must prove that exclusion rather than treating generalized source cleanup as delivered or a blanket blocker.',
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
    <ReadingPage>
      <PageIntro
        eyebrow="Working record · Open questions"
        title="Open questions need explicit answers."
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
              <h2>{question}</h2>
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
            evidence, or a documented decision. Not a quiet guess.
          </Definition>
        </div>
      </section>
    </ReadingPage>
  );
}

function Library() {
  return (
    <ReadingPage>
      <PageIntro
        eyebrow="08 · Public library"
        title="Public information is curated."
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
            <h2 data-reading-key="pdf-companion">
              Take the evolving project story with you.
            </h2>
            <p>
              The refreshed 17-page PDF includes the October 21 checkpoint,
              updated Sprint 2 and 3 status, and our design-as-development
              lesson. The website remains the living, responsive narrative.
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
    </ReadingPage>
  );
}

function Layout({
  route,
  readingMode,
  onReadingModeChange,
}: {
  route: Route;
  readingMode: ReadingMode;
  onReadingModeChange: (mode: ReadingMode) => void;
}) {
  const builderPages: Record<Route, React.ComponentType> = {
    '/': Home,
    '/product': Product,
    '/journey': Journey,
    '/development': Development,
    '/architecture': Architecture,
    '/delivery': HowWeBuild,
    '/learnings': Lessons,
    '/articles/moving-map': MovingMapArticle,
    '/decisions': Decisions,
    '/roadmap': Roadmap,
    '/sprint-one': SprintOne,
    '/sprint-two': SprintTwo,
    '/sprint-three': SprintThree,
    '/design': Design,
    '/questions': Questions,
    '/library': Library,
  };

  const storyPages: Record<Route, React.ComponentType> = {
    '/': StoryHome,
    '/product': StoryProduct,
    '/journey': StoryJourney,
    '/development': StoryDevelopment,
    '/architecture': StoryArchitecture,
    '/delivery': StoryHowWeBuild,
    '/learnings': Lessons,
    '/articles/moving-map': MovingMapArticle,
    '/decisions': Decisions,
    '/roadmap': Roadmap,
    '/sprint-one': SprintOne,
    '/sprint-two': SprintTwo,
    '/sprint-three': SprintThree,
    '/design': StoryDesign,
    '/questions': Questions,
    '/library': StoryLibrary,
  };

  const Page =
    readingMode === 'story' ? storyPages[route] : builderPages[route];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useLayoutEffect(() => {
    // Reset after the destination renders, including direct and history visits.
    if (!new URLSearchParams(window.location.hash.split('?')[1]).has('section'))
      focusPageStart();
  }, [route]);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  React.useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

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
        <div
          id="project-story-navigation"
          className={`header-navigation${menuOpen ? ' mobile-open' : ''}`}
        >
          <nav aria-label="Project story pages">
            {primaryNavigation.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={route === path ? 'active' : undefined}
                aria-current={route === path ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="header-controls">
          <div
            className="reading-mode-switch"
            role="group"
            aria-label="Project story reading mode"
          >
            <span>Read as</span>
            <button
              type="button"
              className={readingMode === 'story' ? 'active' : undefined}
              aria-pressed={readingMode === 'story'}
              onClick={() => {
                if (readingMode !== 'story') {
                  window.dispatchEvent(
                    new CustomEvent('reading-mode-change', { detail: 'story' }),
                  );
                  onReadingModeChange('story');
                }
              }}
            >
              Story
            </button>
            <button
              type="button"
              className={readingMode === 'builder' ? 'active' : undefined}
              aria-pressed={readingMode === 'builder'}
              onClick={() => {
                if (readingMode !== 'builder') {
                  window.dispatchEvent(
                    new CustomEvent('reading-mode-change', {
                      detail: 'builder',
                    }),
                  );
                  onReadingModeChange('builder');
                }
              }}
            >
              Builder
            </button>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="project-story-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <ReadingContext.Provider value={{ route, mode: readingMode }}>
          <Page />
        </ReadingContext.Provider>
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
  const [readingMode, setReadingMode] = React.useState<ReadingMode>(() => {
    const addressedMode = new URLSearchParams(
      window.location.hash.split('?')[1],
    ).get('mode');
    const savedMode =
      addressedMode === 'story' || addressedMode === 'builder'
        ? addressedMode
        : window.localStorage.getItem('tcs-project-story-reading-mode');
    return savedMode === 'builder' ? 'builder' : 'story';
  });

  React.useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const update = () => {
      if (window.location.hash === '#main-content') return;
      setRoute(internalPath(window.location.hash.slice(1)));
      const addressedMode = new URLSearchParams(
        window.location.hash.split('?')[1],
      ).get('mode');
      if (addressedMode === 'story' || addressedMode === 'builder')
        setReadingMode(addressedMode);
    };
    window.addEventListener('hashchange', update);
    return () => {
      window.removeEventListener('hashchange', update);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('tcs-project-story-reading-mode', readingMode);
  }, [readingMode]);

  return (
    <Layout
      route={route}
      readingMode={readingMode}
      onReadingModeChange={setReadingMode}
    />
  );
}
