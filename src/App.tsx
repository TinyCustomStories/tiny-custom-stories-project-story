import React from 'react';
import deliverySnapshot from './delivery-snapshot.json';
import {
  designPrinciples,
  milestones,
  publicEntries,
  surfaceThemes,
  type KnowledgeStatus,
} from './content';

type ReadingMode = 'story' | 'builder';

type Route =
  | '/'
  | '/product'
  | '/journey'
  | '/development'
  | '/architecture'
  | '/delivery'
  | '/learnings'
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
  '/learnings': 'What we learned',
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
  { path: '/learnings', label: 'What we learned' },
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
            A public project story · updated October 9, 2026
          </p>
          <h1 id="hero-title">
            Stories built <span className="scribble">with care,</span> not just
            code.
          </h1>
          <p className="hero-lede">
            Tiny Custom Stories has grown from a personalized-story idea into a
            parent-controlled learning product with a demonstrated synthetic and
            local Child Map outcome, data-driven Discovery, a protected Story
            Studio with real editing and revision flows, and an accepted Visual
            Theme System direction for the future visual layer.
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
          home, direct page and cover editing, earlier revisions, and early
          saved-profile setup have landed. Full generation, integrated approval,
          and the end-to-end outcome remain open. Sprint 4 now has an accepted
          Visual Theme System direction, but it has not started and no external
          image provider or likeness flow is approved by that decision.
          Real-family Alpha use still requires qualified release review and
          later safety, security, and deployment gates.
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
        <h2 id="directory-title">
          Start with the story. Dig deeper when you want.
        </h2>
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
    </>
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
    <>
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
            child feel like themselves — without trying to know everything?
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
          Story Studio has editing, revision history, and early profile-based
          setup. Full generation, integrated approval, real-family release
          review, and deployment are still ahead.
        </p>
        <Link to="/development">
          Where we really are <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="section story-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">The three-fact problem</p>
          <h2>
            Personalized can be technically true and still feel completely
            generic.
          </h2>
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
        <h2 id="story-directory-title">The story gets deeper from here.</h2>
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
    </>
  );
}

function StoryProduct() {
  return (
    <>
      <PageIntro
        eyebrow="01 · The product · Story mode"
        title="Three facts can look personalized. That does not make them personal."
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
          <h2>The details that matter are usually small.</h2>
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
          <h2>Children are moving targets</h2>
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
            <h2>Parent mode is the workshop.</h2>
            <p>
              Context, drafts, edits, choices, approvals, settings, and private
              family information can live here. It is allowed to be more
              complicated because the parent is making decisions.
            </p>
          </article>
          <article>
            <p className="eyebrow">On the kid side</p>
            <h2>Child mode is the bookshelf.</h2>
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
            <h2>Some product boundaries are really refusals.</h2>
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
    </>
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
      'A plan becomes a cover and pages. Generation is useful here, but the result is still a draft — not family truth and not child-visible merely because a model returned it.',
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
    <>
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
    </>
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
      'The next frontier is less theoretical',
      'The project is now approaching the things that feel more real: live AI, staging, real users, operational cost, provider boundaries, safety review, and discovering which assumptions survive contact with people.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="03 · Development story · Story mode"
        title="The project got complicated for mostly reasonable reasons."
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

        <div className="sprint-chapter-intro">
          <p className="eyebrow">The engineering chapters underneath</p>
          <h2>If you want the receipts, the sprint record is still here.</h2>
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
              Story Studio is turning generation into a reversible parent
              workflow with editing, versions, context boundaries, and eventual
              approval.
            </p>
            <b>Read the technical chapter →</b>
          </Link>
        </div>

        <div className="reading-panel">
          <h2>The messy working record did not disappear.</h2>
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
    </>
  );
}

function StoryArchitecture() {
  return (
    <>
      <PageIntro
        eyebrow="04 · Architecture · Story mode"
        title="We tried very hard not to solve this with “more microservices.”"
      >
        <p>
          The architecture question was not “how many services should we have?”
          It was “which decisions must not quietly collapse into the same
          function?” Responsibility came first. Machines can come later if the
          evidence earns them.
        </p>
      </PageIntro>

      <section className="section story-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">The useful split</p>
          <h2>
            Remembering, permission, generation, and visual continuity are
            different jobs.
          </h2>
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
    </>
  );
}

function StoryHowWeBuild() {
  return (
    <>
      <PageIntro
        eyebrow="05 · How we build · Story mode"
        title="The other experiment is how I am building the experiment."
      >
        <p>
          Tiny Custom Stories is also where I am learning how far one developer
          can push modern AI-assisted development without turning the repository
          into a pile of confident-looking chaos.
        </p>
      </PageIntro>

      <section className="section delivery-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">The operating experiment</p>
          <h2>
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
              uses small issues with explicit acceptance criteria, dependencies,
              and stop conditions so implementation is easier to review and
              easier to throw away when the premise is wrong.
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

        <div className="reading-panel">
          <h2>Builder mode has the numbers.</h2>
          <p>
            The exact dated commit, pull-request, issue, workflow, and CI
            snapshot is preserved in Builder mode. Story mode keeps the reason
            the machinery exists.
          </p>
        </div>
      </section>
    </>
  );
}

function StoryLearnings() {
  const lessons = [
    [
      'We spent too much money proving the same browser thing repeatedly',
      'The browser suite was valuable, so we ran it constantly. That eventually became expensive enough for GitHub Actions to stop starting jobs. The fix was not “testing is bad”; it was moving hosted checks to deliberate epic checkpoints, keeping task-PR checks local, and making browser runs optional.',
    ],
    [
      'A green frontend test and a green API test can still avoid meeting each other',
      'Mocked browser tests and isolated API tests each told the truth about their own layer. They did not prove the assembled product. That distinction forced us to add a synthetic journey through the real HTTP API and MongoDB before calling the Child Map outcome demonstrated.',
    ],
    [
      'Parallel agents can parallelize the rate limit too',
      'Several sessions repeatedly asked GitHub Projects for the same state until the shared GraphQL budget became the bottleneck. The workflow changed to reuse project snapshots and reserve expensive live reads for moments that actually need them.',
    ],
    [
      'Not every shiny tool deserves to become infrastructure',
      'We try tools because this is still the cheap stage for experimentation. Some get a narrow role. Some are held. The important rule is that sunk time is not a reason to keep complexity.',
    ],
    [
      'The more AI I used, the more important boring boundaries became',
      'Models are very good at producing plausible next steps. That makes authorization, ownership, tests, revisions, explicit policy, and source-of-truth records more important — not less.',
    ],
    [
      'I am still nervous about the part that looks most like a “real startup”',
      'Live AI for actual users and the first staging deployment are more intimidating than another local feature. They introduce cost, observability, provider behavior, reliability, privacy, and operational mistakes that a local demo cannot teach.',
    ],
    [
      'A passing task PR is not the same thing as a completed feature',
      'Task branches can move fast while their combined behavior is still unproven. Epic integration and reviewed checkpoints give us somewhere to test the assembled result before calling the main development branch stable.',
    ],
    [
      'Caching helps; treating a cache as permission is dangerous',
      'Sharing one Project snapshot reduces repeated GitHub calls. But ownership, branch ancestry, status changes, and merge checks still need fresh evidence at the exact moment they matter.',
    ],
    [
      'Choosing a model is not the same as proving a story is safe',
      'Instead of building an AI model-comparison product inside the product, the founder can choose synthetic-test models through configuration. Story quality, privacy, and real-family provider clearance remain separate gates.',
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="06 · What we learned · Story mode"
        title="The failures are more useful when we leave them in the story."
      >
        <p>
          This page is intentionally not a victory lap. The project has produced
          expensive tests, wrong assumptions, rate-limit problems, tools that
          did not earn their complexity, and a growing list of things I did not
          know I needed to learn.
        </p>
      </PageIntro>

      <section className="section delivery-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">The useful scars</p>
          <h2>
            These are the mistakes and surprises that actually changed how we
            build.
          </h2>
          <p>
            A lesson earns a place here when it changes a workflow, an evidence
            standard, a cost decision, or what I am willing to trust next time.
          </p>
        </div>

        <div className="story-beat-grid">
          {lessons.map(([title, detail], index) => (
            <article className="story-beat" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <p className="story-pullquote">
          Failure is only interesting if the next version of the system is
          different because of it.
        </p>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Why this became my AI laboratory</p>
            <h2>A real product gives every new AI idea somewhere to fail.</h2>
          </div>
          <ul>
            <li>
              The idea for Tiny Custom Stories existed long before this version
              of the product. Building it turned AI from something I followed
              into something I test against real constraints almost every day.
            </li>
            <li>
              New models, agent patterns, coding tools, architecture helpers,
              and evaluation ideas keep appearing. A pre-launch product gives me
              a concrete place to find out which ones are actually useful.
            </li>
            <li>
              This is also the cheapest moment to be wrong. A workflow can be
              replaced before users depend on it.
            </li>
            <li>
              That freedom shrinks as staging and real families get closer.
              Production paths should become progressively more boring,
              observable, reversible, and deliberate.
            </li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>The next learning will come from reality.</h2>
          <p>
            Synthetic/local evidence can tell us whether the system behaves as
            designed. It cannot tell us whether parents understand it, whether
            stories actually feel meaningful, whether AI cost behaves the way we
            expect, or which assumptions collapse the first week real people use
            it.
          </p>
        </div>
      </section>
    </>
  );
}

function StoryDesign() {
  return (
    <>
      <PageIntro
        eyebrow="07 · Design · Story mode"
        title="The product should not look like an AI control panel."
      >
        <p>
          Tiny Custom Stories deals with family memories, children’s stories,
          private parent work, and a very technical build process. One visual
          language cannot make every surface identical — but it can make them
          feel related.
        </p>
      </PageIntro>

      <section className="section design-section">
        <div className="mode-preview">
          <article>
            <p className="eyebrow">For the child</p>
            <h2>Quiet, warm, and story-first.</h2>
            <p>
              The child should see finished stories, not the machinery. Fewer
              controls, calmer choices, and a reading experience that does not
              advertise how clever the software thinks it is.
            </p>
          </article>
          <article>
            <p className="eyebrow">For the parent</p>
            <h2>Warm, but serious enough for real decisions.</h2>
            <p>
              Parent mode can be richer because it handles context, drafts,
              edits, privacy-sensitive information, and approval. Friendly does
              not have to mean toy-like.
            </p>
          </article>
        </div>

        <div className="recipe-panel">
          <div>
            <p className="eyebrow">The public story</p>
            <h2>Part storybook, part lab notebook.</h2>
            <p>
              Fraunces gives the project a printed-story character. Mono labels
              make evidence and status feel explicit. Flat color, borders,
              doodle-like shapes, and generous whitespace keep the site human
              without hiding that this is still a technical build record.
            </p>
          </div>
          <div>
            <p className="story-pullquote">
              The visual goal is not “make AI look magical.” It is “make a
              complicated project feel understandable enough that someone keeps
              reading.”
            </p>
          </div>
        </div>

        <p className="public-boundary-note">
          Builder mode preserves the exact design recipe, palette, surface
          themes, and component examples.
        </p>
      </section>
    </>
  );
}

function StoryLibrary() {
  return (
    <>
      <PageIntro
        eyebrow="08 · Public library · Story mode"
        title="Building in public does not mean dumping the private repository onto the internet."
      >
        <p>
          This site is meant to show the thinking, progress, uncertainty, and
          mistakes behind Tiny Custom Stories without turning private project
          material — or future family information — into public content.
        </p>
      </PageIntro>

      <section className="section library-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">Translation, not replication</p>
          <h2>The public story is edited on purpose.</h2>
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
            <h2>The PDF is a snapshot. The website is the living version.</h2>
            <p>
              The fixed-layout dossier remains useful as a dated checkpoint.
              This website changes more often as the product, build system, and
              lessons evolve.
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

function Product() {
  return (
    <>
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
          <h2>So what does the product actually do?</h2>
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
            <h2>Parent mode</h2>
            <p>
              This is where the messy creative work happens: context, drafts,
              edits, choices, approvals, settings, and other things a child
              should not have to think about.
            </p>
          </article>
          <article>
            <p className="eyebrow">On the kid side</p>
            <h2>Child mode</h2>
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
      'Story Studio now has protected profile-based entry and early saved setup/purpose slices alongside direct page and cover editing and version restore. The full Story Plan, generation, assisted changes, approval, and final outcome are not complete.',
    ],
    [
      'Sprint 4 · Visual Theme System direction accepted, not started',
      'The next visual layer is now defined around a versioned visual theme, recurring cast, structured scene plans, and replaceable renderers. The first renderer is intended to be controlled and no-photo; richer AI-image, likeness, and print paths remain separately gated.',
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
          between Story truth, context permission, generation, and visual
          continuity. The October 9 checkpoint also records the next protected
          Studio setup slices and a new epic-based delivery workflow, without
          presenting Sprint 4 as started.
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
            <p className="eyebrow">Authoring workspace underway · gate open</p>
            <h3>Sprint 3</h3>
            <p>
              Protected Story Studio entry and saved setup slices, direct text
              and cover editing, revision history, plus unfinished generation
              and approval flows.
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

        <div className="reading-panel">
          <h2>The working record lives one layer deeper.</h2>
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
    [
      deliverySnapshot.workflowDefinitions,
      'CI workflows',
      'main product definitions',
    ],
  ] as const;

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
    <>
      <PageIntro
        eyebrow="05 · How we build"
        title="Small tasks, hard gates, and a lot of receipts."
      >
        <p>
          This page is about the machinery: how an idea becomes a change small
          enough to review, how independent work stays isolated, and what
          evidence has to exist before “done” means anything. The mistakes and
          lessons have their own page now.
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
              Repository-wide workflow-run history was last fully verified on{' '}
              {deliverySnapshot.workflowRunsSnapshotDate}:{' '}
              {deliverySnapshot.successfulWorkflowRuns.toLocaleString()} of{' '}
              {deliverySnapshot.workflowRuns.toLocaleString()} recorded runs
              completed successfully. Those run totals stay attached to that
              older checkpoint instead of being silently relabeled as October 9
              telemetry.
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
              Independent tasks use isolated branches or sessions. Each normal
              feature task is integrated into its owning epic branch before an
              intentionally reviewed checkpoint reaches development.
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
            <p className="eyebrow">The new integration rhythm</p>
            <h2>
              Tasks live inside epics. The stable branch receives reviewed
              slices.
            </h2>
          </div>
          <ul>
            <li>
              Each normal feature issue has one owning epic; issue ownership,
              sprint planning, and the branch where changes integrate are
              distinct concepts. Legacy work is being reconciled rather than
              quietly assigned by guesswork.
            </li>
            <li>
              Task PRs target their verified epic branch. Reviewed, coherent
              epic checkpoints then integrate into development; an individual
              task merge does not by itself demonstrate a complete feature.
            </li>
            <li>
              A local Superset coordinator can dispatch bounded, isolated
              workers. Specialist agents handle product decisions, backlog,
              status truth, implementation, reviews, and public storytelling.
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
            <h2>Checks should protect the right integration boundary.</h2>
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
          <h2>Process here. Lessons next door.</h2>
          <p>
            This page explains the system we use now. The things that broke it,
            embarrassed us, cost too much, or changed our minds belong in the
            learning record. <Link to="/learnings">Read what we learned →</Link>
          </p>
        </div>

        <p className="public-boundary-note">
          Repository counts are intentionally dated rather than presented as
          live telemetry. The October 9 repository totals and the separately
          dated October 5 workflow-run history make their evidence windows
          explicit. The public site does not call the private repository or
          require a GitHub token in the browser.
        </p>
      </section>
    </>
  );
}

function Learnings() {
  const buildLessons = [
    [
      'We ran too much browser CI',
      'The Playwright and screenshot suite was useful, but running it on nearly every task PR made verification too expensive. We tried lighter cadences and then adopted a clearer rule: proportionate local checks and review for tasks, manually dispatched affected CI suites on final epic heads, and optional browser evidence at epic checkpoints. Actual GitHub protection still applies.',
    ],
    [
      'Green tests did not prove the assembled product',
      'Our browser tests could pass against mocked APIs while API tests separately replaced infrastructure. That was useful evidence, but not end-to-end proof. Sprint 2 forced us to add a synthetic browser → real HTTP API → Mongo journey and separate real private-object-store evidence before calling the outcome demonstrated.',
    ],
    [
      'Our agents were competing for one API budget',
      'Parallel sessions repeatedly asked GitHub Projects for the same state and shared one GraphQL quota. When that rate limit became a recurring blocker, we wrote a shared-request policy: one coordinator-owned snapshot, targeted REST for narrow reads, bounded GraphQL where it pays off, serialized writes, and backoff. Live reads still guard consequential writes and merges; we have not measured a resulting rate-limit reduction yet.',
    ],
    [
      'New tools have to earn a permanent place',
      'We pilot tools with an explicit possibility of saying no. Graphify produced a useful local code graph, but the pilot recommended holding workflow integration rather than adding machinery without enough value. Archify earned a narrower role because a maintained architecture map proved useful enough to keep and publish in a curated public form.',
    ],
    [
      'Task success was not epic success',
      'Independent task PRs can each pass review while the combined feature is still incomplete. The new epic integration lanes give a cohesive feature slice an explicit review, exact-head verification, and checkpoint before it enters the stable development branch.',
    ],
    [
      'We almost made model selection another feature',
      'A configurable synthetic-only text provider now makes more sense than an in-product AI comparison dashboard. The founder can choose a model manually; age-fit, output safety, family-data boundaries, provider clearance, and real-user release remain separate work.',
    ],
  ] as const;

  return (
    <>
      <PageIntro
        eyebrow="06 · What we learned"
        title="The expensive mistakes are part of the story."
      >
        <p>
          This is the diary, not the machinery. It is where we keep the things
          that broke, experiments that changed the workflow, tools that did not
          earn a permanent place, and the next bits of the project that still
          make us nervous.
        </p>
      </PageIntro>

      <section className="section delivery-section">
        <div className="sprint-chapter-intro">
          <p className="eyebrow">What broke, what changed</p>
          <h2>Failure is only useful if the system remembers it.</h2>
          <p>
            The point is not to collect war stories. A mistake belongs here when
            it changed a workflow, a test boundary, a cost decision, or the way
            we think about what “evidence” means.
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

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">Why this project became my AI laboratory</p>
            <h2>Building the product changed how I learn.</h2>
          </div>
          <ul>
            <li>
              Tiny Custom Stories existed as an idea long before this version of
              the product existed. Actually building it turned AI from something
              the founder followed from a distance into something they read,
              test, and reason about almost every day.
            </li>
            <li>
              The field changes quickly enough that there is constantly a new
              model, agent pattern, developer tool, evaluation method, or
              architectural idea worth understanding. Having a real project
              gives those ideas somewhere concrete to succeed or fail.
            </li>
            <li>
              Because the product is still pre-launch, this is the cheapest time
              to experiment. A tool can be piloted, an architecture assumption
              challenged, or a workflow replaced before real families depend on
              it.
            </li>
            <li>
              That freedom has a boundary: novelty is not a reason to ship
              complexity. Experiments must still earn their place through useful
              evidence, and failed pilots are allowed to disappear.
            </li>
            <li>
              As staging and real users get closer, the balance changes. The
              project can keep learning quickly, but production paths should
              become progressively more boring, observable, reversible, and
              deliberate.
            </li>
          </ul>
        </div>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">The next thing that scares me</p>
            <h2>Real users, real AI, and the first staging deployment.</h2>
          </div>
          <ul>
            <li>
              The founder is most excited about — and most nervous about — the
              first time a real user asks Tiny Custom Stories to generate a
              story, and the first time the product is deployed into a staging
              environment.
            </li>
            <li>
              That uncertainty is real. The current synthetic/local evidence
              does not authorize real-family staging, Alpha use, production
              deployment, or transfer of family data to an AI provider.
            </li>
            <li>
              Before live generation can become a trustworthy user feature, the
              project still has to settle the provider boundary, exactly which
              family context may leave the application, quality and safety
              evidence, failure and recovery behavior, cost controls, and
              release-readiness gates.
            </li>
            <li>
              Before staging can feel routine, deployment itself has to become
              evidence: repeatable configuration, environment isolation, secrets
              handling, migrations, health checks, observability, recovery, and
              a rollback path that has actually been exercised.
            </li>
            <li>
              The goal is not to hide that fear with automation. It is to turn
              each unknown into a bounded experiment whose failure teaches us
              something before real families depend on it.
            </li>
          </ul>
        </div>

        <p className="public-boundary-note">
          Want the current operating system instead of the retrospective?{' '}
          <Link to="/delivery">See how we build →</Link>
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
    [
      'Visual Theme System',
      'Accepted for Sprint 4: owns versioned visual theme, cast, scene-plan, renderer, continuity, and parent-review contracts. The controlled foundation does not require an external image provider and is not implemented yet.',
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
    </>
  );
}

function Decisions() {
  return (
    <>
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
        eyebrow="Working record · Roadmap"
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
          Protected profile-based start, saved purpose, and early reading setup
          slices have also landed. Generation, assisted changes, approval, and
          the end-to-end outcome remain unfinished.
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
          <span>Landed · early saved setup</span>
          <i aria-hidden="true">→</i>
          <span>Underway · complete Story Plan</span>
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
            <li>Protected purpose and early feel/reading setup slices.</li>
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
            checking, bounded repair/retry, progress integration, and a
            functioning text-provider path remain unfinished. The accepted
            synthetic development direction is founder-configured OpenRouter
            behind a provider-neutral boundary, not an in-app model lab; this is
            not approval for real-family provider transfer.
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
        eyebrow="07 · Design philosophy and language"
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
        eyebrow="Working record · Open questions"
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
    '/learnings': Learnings,
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
    '/learnings': StoryLearnings,
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
              onClick={() => onReadingModeChange('story')}
            >
              Story
            </button>
            <button
              type="button"
              className={readingMode === 'builder' ? 'active' : undefined}
              aria-pressed={readingMode === 'builder'}
              onClick={() => onReadingModeChange('builder')}
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
  const [readingMode, setReadingMode] = React.useState<ReadingMode>(() => {
    const savedMode = window.localStorage.getItem(
      'tcs-project-story-reading-mode',
    );
    return savedMode === 'builder' ? 'builder' : 'story';
  });

  React.useEffect(() => {
    const update = () => setRoute(internalPath(window.location.hash.slice(1)));
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
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
