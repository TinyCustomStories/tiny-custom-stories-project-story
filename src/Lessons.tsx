import React from 'react';
import { ReadingContext, ReadingPage, sectionId } from './ReadingPage';
import { fieldNotes, buildNotes } from './lesson-notes';

const chapters = [
  {
    id: 'finish-one-journey',
    nav: 'Finish one journey',
    title: 'A finished task is a step. A working journey is the outcome.',
    summary:
      'Small tasks helped review. They only move the finish line closer when each one connects back to the original parent journey.',
    fields: [0, 1, 2],
    builds: [4],
  },
  {
    id: 'test-the-assembled-product',
    nav: 'Test the assembled product',
    title: 'Green tests can still miss the join.',
    summary:
      'Evidence needs to cross the same boundaries as the product. A frontend test and an API test can each pass without proving they work together.',
    fields: [],
    builds: [0, 1],
  },
  {
    id: 'coordinate-shared-resources',
    nav: 'Coordinate shared resources',
    title: 'Parallel work still shares limits.',
    summary:
      'Separate branches do not create separate machines, API budgets, or ownership. Coordination is part of delivery.',
    fields: [3, 4, 5],
    builds: [2],
  },
  {
    id: 'make-tools-earn-their-place',
    nav: 'Make tools earn their place',
    title: 'Keep the tools that earn their complexity.',
    summary:
      'Pre-launch is a useful time to experiment. Sunk time does not make a tool worth keeping, and a stronger model cannot repair an unclear workflow.',
    fields: [6],
    builds: [3, 5],
  },
  {
    id: 'design-as-a-development-tool',
    nav: 'Design as a development tool',
    title: 'A design philosophy became a development tool.',
    summary:
      'A shared set of reasons and recipes helped different agents build features that felt like one product, while leaving room for child, parent, and public experiences to be different.',
    fields: [7],
    builds: [6],
  },
  {
    id: 'moving-map',
    nav: 'Moving Map Development',
    title: 'The plan can be wrong even when every ticket is right.',
    summary:
      'Moving Map Development (MMD) is a technique for human and AI teams: keep the user outcome clear, share discoveries that change shared assumptions, and recheck the work those discoveries affect.',
    fields: [],
    builds: [],
  },
  {
    id: 'prepare-for-real-families',
    nav: 'Prepare for real families',
    title: 'Local evidence cannot answer every real-world question.',
    summary:
      'Parent comprehension, meaningful stories, live-provider behavior, costs, and deployment still need evidence. The next step must earn trust before families depend on it.',
    fields: [],
    builds: [],
  },
];

function SupportingNote({
  title,
  detail,
  change,
}: {
  title: string;
  detail: string;
  change?: string;
}) {
  return (
    <article className="lesson-record">
      <h3 id={sectionId(title)}>{title}</h3>
      {change && (
        <p className="lesson-change">
          <strong>What changes:</strong> {change}
        </p>
      )}
      <details data-supporting-note="">
        <summary>
          {change ? 'Read the field note' : 'Read what broke and what changed'}:{' '}
          {title}
        </summary>
        <p>{detail}</p>
      </details>
    </article>
  );
}

function LessonFigure({ chapter }: { chapter: number }) {
  if (chapter === 0)
    return (
      <figure className="lesson-figure">
        <ol className="lesson-path">
          <li>
            <strong>Reviewed task</strong>
            <span>A component works.</span>
          </li>
          <li>
            <strong>Epic checkpoint</strong>
            <span>The pieces meet.</span>
          </li>
          <li>
            <strong>Demonstrated journey</strong>
            <span>The accepted outcome is proven.</span>
          </li>
        </ol>
        <figcaption>
          Different milestones. Epic-branch work alone does not establish a
          completed sprint.
        </figcaption>
      </figure>
    );
  if (chapter === 1)
    return (
      <figure className="lesson-figure">
        <div className="lesson-compare">
          <div>
            <strong>Layer checks</strong>
            <p>Browser with mocked API. API with substituted infrastructure.</p>
          </div>
          <div>
            <strong>Assembled evidence</strong>
            <p>
              Synthetic browser → real HTTP API → Mongo, plus separate
              private-object-store evidence.
            </p>
          </div>
        </div>
        <figcaption>
          Sprint 2 demonstrated its accepted synthetic/local outcome.
          Real-family release remains separately gated.
        </figcaption>
      </figure>
    );
  if (chapter === 2)
    return (
      <figure className="lesson-figure">
        <dl className="lesson-resources">
          <div>
            <dt>GitHub budget</dt>
            <dd>Reuse one snapshot; verify consequential writes live.</dd>
          </div>
          <div>
            <dt>Shared machine</dt>
            <dd>Coordinate expensive checks and retain actual results.</dd>
          </div>
          <div>
            <dt>Ownership</dt>
            <dd>Name the branch owner and the next handoff.</dd>
          </div>
        </dl>
        <figcaption>
          No measured rate-limit reduction or net time saving is claimed.
        </figcaption>
      </figure>
    );
  if (chapter === 3)
    return (
      <figure className="lesson-figure">
        <div className="lesson-compare">
          <div>
            <strong>Graphify: held</strong>
            <p>
              The local graph was useful; broader workflow integration did not
              yet earn its place.
            </p>
          </div>
          <div>
            <strong>Archify: a narrow role</strong>
            <p>A maintained map earned a curated public architecture view.</p>
          </div>
        </div>
        <figcaption>
          Tool-pilot outcomes, not a general ranking of the tools.
        </figcaption>
      </figure>
    );
  if (chapter === 4)
    return (
      <figure className="lesson-figure">
        <div className="lesson-compare">
          <div>
            <strong>Design philosophy</strong>
            <p>
              The why: calm, clarity, trust, accessible journeys, and what
              matters when design choices compete.
            </p>
          </div>
          <div>
            <strong>Visual design language</strong>
            <p>
              The how: shared tokens, typography, spacing, components,
              responsive layouts, and meaningful interaction states.
            </p>
          </div>
        </div>
        <figcaption>
          Same product values, different surface needs. Written guidance
          supports review but does not replace it.
        </figcaption>
      </figure>
    );
  if (chapter === 5)
    return (
      <figure className="lesson-figure">
        <ol className="lesson-path">
          <li>
            <strong>Keep the destination</strong>
            <span>The user outcome and safeguards we have agreed to.</span>
          </li>
          <li>
            <strong>Share the discovery</strong>
            <span>Evidence, affected owners, and an accepted revision.</span>
          </li>
          <li>
            <strong>Recheck the join</strong>
            <span>Review impacted work and demonstrate real behavior.</span>
          </li>
        </ol>
        <figcaption>
          MMD is an adoptable development technique. Its first pilot does not
          yet establish measurable results.
        </figcaption>
      </figure>
    );
  return (
    <figure className="lesson-figure">
      <ol className="lesson-path">
        <li>
          <strong>Synthetic/local</strong>
          <span>Test the system as designed.</span>
        </li>
        <li>
          <strong>Qualified review</strong>
          <span>Validate privacy, safety and release boundaries.</span>
        </li>
        <li>
          <strong>Real-world learning</strong>
          <span>Establish whether families find value.</span>
        </li>
      </ol>
      <figcaption>
        A sequence of evidence needs, not approval for real-family use or a
        release promise.
      </figcaption>
    </figure>
  );
}

export function Lessons() {
  const { mode } = React.useContext(ReadingContext);
  const builder = mode === 'builder';
  const [expanded, setExpanded] = React.useState(false);
  const body = React.useRef<HTMLDivElement>(null);
  const setNotes = (open: boolean) => {
    body.current
      ?.querySelectorAll<HTMLDetailsElement>('[data-supporting-note]')
      .forEach((note) => {
        note.open = open;
      });
    setExpanded(open);
  };
  // Print the complete record, restoring the reader's own open/closed choices afterwards.
  React.useEffect(() => {
    let previous: boolean[] = [];
    const notes = () => [
      ...(body.current?.querySelectorAll<HTMLDetailsElement>(
        '[data-supporting-note]',
      ) || []),
    ];
    const before = () => {
      previous = notes().map((note) => note.open);
      notes().forEach((note) => {
        note.open = true;
      });
    };
    const after = () => {
      notes().forEach((note, i) => {
        note.open = previous[i] ?? false;
      });
    };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, []);
  return (
    <ReadingPage>
      <section className="page-intro section">
        <p className="eyebrow">
          06 · Lessons · {builder ? 'Builder reference' : 'Story'}
        </p>
        <h1>
          {builder
            ? 'Lessons, changes, and their evidence.'
            : 'What we learned while building.'}
        </h1>
        <p className="page-lede">
          {builder
            ? 'A record of delivery and design lessons: what changed, what supports it, and what remains unproven.'
            : 'Smaller tasks helped us review, but they did not finish the parent journey. Shared design foundations helped new features feel coherent. Now we are piloting a way for agents to keep shared assumptions current.'}
        </p>
        <p className="reading-qualification">
          <strong>Retrospective · October 2–28, 2026.</strong> Earlier founder
          field notes and an October 21 design reflection are joined by the
          October 28 adoption of Moving Map Development as a working pilot. The methodology
          is documented; its effects have not yet been measured. This is not a
          complete session audit, usability study, or productivity comparison.
          Private transcripts stay private.
        </p>
      </section>
      <div
        ref={body}
        className="lessons-body"
        onToggle={() => {
          const notes = [
            ...(body.current?.querySelectorAll<HTMLDetailsElement>(
              '[data-supporting-note]',
            ) || []),
          ];
          setExpanded(notes.length > 0 && notes.every((note) => note.open));
        }}
      >
        <div className="reading-tools">
          <button
            className="button button-light"
            type="button"
            onClick={() => setNotes(!expanded)}
          >
            {expanded
              ? 'Collapse all supporting notes'
              : 'Expand all supporting notes'}
          </button>
          <span>For browser Find or comparing the complete record.</span>
        </div>
        <section className="lesson-status" aria-labelledby="checkpoint-status">
          <p className="eyebrow">Implementation status</p>
          <h2 id="checkpoint-status" data-nav-label="Implementation status">
            The smaller checkpoint is still incomplete.
          </h2>
          <p>
            A saved fictional name and age lead to a freshly accepted plan, one
            deterministic cover and ten text pages, exact-revision approval, and
            the same immutable story reopened in protected Parent Mode. Reviewed
            epic-branch slices exist; the complete assembled journey is not
            demonstrated.
          </p>
          <p>
            <strong>Limits remain:</strong> family isolation, stale-input
            rejection, safe recovery, and essential finite output checks are
            required. This is not usable Alpha, a completed sprint or epic,
            general suitability certification, child publication, or real-family
            provider/release approval. Deferred source-lifecycle work remains
            future work.
          </p>
          <a href="#/sprint-three">Read the Sprint 3 boundary →</a>
        </section>
        {builder && (
          <section className="lesson-reference">
            <p className="eyebrow">Architecture boundaries</p>
            <h2
              id="lesson-architecture"
              data-nav-label="Architecture boundaries"
            >
              Keep integration milestones separate.
            </h2>
            <p>
              A component, merged task, epic branch, development checkpoint, and
              demonstrated outcome are different evidence boundaries. The
              configurable synthetic-only text provider is separate from the
              deterministic offline checkpoint. Model choice does not establish
              output safety or permission to transfer family context.
            </p>
            <a href="#/architecture">Inspect the architecture →</a>
          </section>
        )}
        <p className="reading-evidence-label">
          Evidence &amp; lessons · seven chapters
        </p>
        {chapters.map((chapter, index) => (
          <section className="lesson-chapter" key={chapter.id}>
            <p className="eyebrow">
              {String(index + 1).padStart(2, '0')} / {chapter.nav}
            </p>
            <h2 id={chapter.id} data-nav-label={chapter.nav}>
              {chapter.title}
            </h2>
            <p className="lesson-lede">{chapter.summary}</p>
            <LessonFigure chapter={index} />
            {chapter.fields.map((i) => (
              <SupportingNote
                key={fieldNotes[i][0]}
                title={fieldNotes[i][0]}
                detail={fieldNotes[i][1]}
                change={fieldNotes[i][2]}
              />
            ))}
            {chapter.builds.map((i) => (
              <SupportingNote
                key={buildNotes[i][0]}
                title={buildNotes[i][0]}
                detail={buildNotes[i][1]}
              />
            ))}
            {index === 1 && (
              <p className="reading-qualification">
                Repeated hosted browser checks became expensive enough that
                GitHub Actions stopped starting jobs. The adopted response keeps
                task checks local, manually dispatches affected suites at final
                epic checkpoints, and makes browser evidence optional. Actual
                GitHub protection still applies.
              </p>
            )}
            {index === 2 && (
              <p className="reading-qualification">
                A snapshot reduces repeated reads; it is not permission.
                Ownership, branch ancestry, status changes, and merges still
                need current evidence. The more AI produces plausible next
                steps, the more authorization, revisions, tests, and clear
                source records matter.
              </p>
            )}
            {index === 4 && (
              <p className="reading-qualification">
                The accepted design philosophy and paper-and-ink visual language
                predate this reflection. The founder reports that using them has
                been helpful when building new features; no controlled
                comparison or family usability study is claimed. Reuse the
                approach in other applications, not the TCS color palette or
                decorative recipe.{' '}
                <a href="#/design">Explore the design foundations →</a>
              </p>
            )}
            {index === 5 && (
              <>
                <h3>The awkward part nobody put on the task board</h3>
                <p>
                  One developer discovers an important assumption is wrong.
                  Three other developers are still building against it. Every
                  ticket looks healthy, but the finished pieces no longer
                  agree. AI agents make the problem more visible because they
                  rarely overhear the discovery.
                </p>
                <p>
                  <strong>Moving Map Development (MMD)</strong> is our name for
                  a technique anyone can try: keep the user outcome as the
                  destination, let the technical route improve when evidence
                  changes, and update only the work that depends on a changed
                  assumption. Significant product, security, privacy, safety,
                  and irreversible choices still require proper human
                  authority. TDD remains useful, not mandatory.
                </p>
                <p>
                  <a href="#/articles/moving-map">
                    Read the Moving Map Development article →
                  </a>{' '}
                  It starts with an imaginary pizza disaster and explains how
                  a development team can use the method. Our own adoption
                  appears only at the end.
                </p>
                <p className="reading-qualification">
                  <strong>Early pilot:</strong> We adopted the first MMD
                  instructions on October 28, 2026. Better coordination,
                  fewer integration failures, and faster delivery are not
                  yet proven outcomes.
                </p>
              </>
            )}
            {index === 6 && (
              <>
                <h3>The next thing that scares me</h3>
                <p>
                  Real users, real AI, and the first staging deployment bring
                  cost, observability, reliability, privacy, provider behavior,
                  and operational mistakes that a local demo cannot teach. The
                  founder is both excited and nervous.
                </p>
                <div className="lesson-compare">
                  <div>
                    <h3>Before live generation</h3>
                    <p>
                      Settle the provider boundary, exactly which family context
                      may leave, quality and safety evidence, failure and
                      recovery behavior, cost controls, and release readiness.
                    </p>
                  </div>
                  <div>
                    <h3>Before staging becomes routine</h3>
                    <p>
                      Prove repeatable configuration, environment isolation,
                      secrets handling, migrations, health checks,
                      observability, recovery, and an exercised rollback path.
                    </p>
                  </div>
                </div>
                <p className="reading-qualification">
                  <strong>
                    Synthetic/local evidence does not authorize real-family
                    staging, Alpha use, production deployment, or family-data
                    transfer.
                  </strong>{' '}
                  It also cannot show whether parents understand the product,
                  stories feel meaningful, or cost assumptions survive real use.
                  Turn each unknown into a bounded experiment before families
                  depend on it.
                </p>
              </>
            )}
            <a
              className="lesson-return"
              href={`#/learnings?section=${chapter.id}&mode=${mode}`}
            >
              Return to this chapter ↑
            </a>
          </section>
        ))}
        <section className="lesson-reference">
          <p className="eyebrow">
            Confirmed decisions and experiment boundaries
          </p>
          <h2
            id="lesson-decisions"
            data-nav-label="Decisions & experiment limits"
          >
            The experiment must earn its place.
          </h2>
          <h3>The experiment we are still running</h3>
          <p>
            Specialist-agent delivery tests whether a solo founder can
            coordinate product decisions, readiness, implementation, repository
            state, and review while GitHub and the repository remain the source
            of truth. The goal is less ambiguity and rework, not more autonomous
            activity. It is not claimed to be novel, universally better, or a
            proven productivity advantage. Review, privacy, safety, and
            maintainability remain required.
          </p>
          <p>
            Small focused tasks remain useful when they lead back to an
            unfinished accepted outcome. Reconcile delivered work and reuse
            owned issues before adding more slices. A mandatory extra planning
            stage remains a proposal; capability-based model routing is the
            adopted baseline.
          </p>
          <h3>Why this project became my AI laboratory</h3>
          <p>
            Tiny Custom Stories existed as an idea long before this version.
            Building it changed AI from something the founder followed into
            something they read, test, and reason about almost daily. A real
            pre-launch product gives new models, agent patterns, coding tools,
            evaluation methods, and architecture ideas somewhere concrete to
            succeed or fail.
          </p>
          <p>
            This is the cheapest time to replace an assumption or failed tool
            before families depend on it. Novelty still must earn its
            complexity. As staging and real users approach, production paths
            should become more observable, reversible, deliberate, and
            predictable.
          </p>
          <a href="#/decisions">Inspect the decision record →</a>
        </section>
        <section className="lesson-reference">
          <p className="eyebrow">Unresolved questions</p>
          <h2 id="lesson-questions" data-nav-label="Unresolved questions">
            The next evidence comes from reality.
          </h2>
          <p>
            Will parents understand the journey? Will stories feel meaningful?
            Can live generation and staging meet the cost, reliability, privacy,
            and safety bar? These questions remain open. More autonomous
            activity or confident prose cannot answer them.
          </p>
          <div className="quiet-route-links">
            <a href="#/questions">Read the open questions →</a>
            <a href="#/delivery">See how we build →</a>
          </div>
        </section>
      </div>
    </ReadingPage>
  );
}
