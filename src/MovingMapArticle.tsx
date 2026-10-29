import React from 'react';
import { ReadingContext, ReadingPage } from './ReadingPage';

export function MovingMapArticle() {
  const { mode } = React.useContext(ReadingContext);

  return (
    <ReadingPage>
      <header className="page-intro section moving-map-intro">
        <p className="eyebrow">
          Field notes · Building with agents · October 28, 2026
        </p>
        <h1>Moving Map: When the plan changes halfway through the build</h1>
        <div className="page-lede">
          <p>
            We gave AI agents clearer tasks, better tools, and their own
            branches. Then we discovered the harder problem: what happens when
            one agent learns something that makes another agent's plan obsolete?
          </p>
          <p className="moving-map-meta">
            A Tiny Custom Stories founder essay · Approximately 9 minutes · An
            adopted pilot, not a measured success story
          </p>
        </div>
      </header>

      <article className="moving-map-article">
        <div className="moving-map-opening">
          <p className="moving-map-dropcap">
            Two pull requests can be perfectly reasonable on their own and
            completely wrong together.
          </p>
          <p>
            Imagine one agent working on a child's changing interests, another
            building the story generator, and a third wiring up the editor. Each
            knows its ticket. Each passes its own checks. Halfway through, the
            first agent discovers that an assumption about which information is
            current, permitted, or safe to reuse needs to change.
          </p>
          <p>
            The other two agents do not overhear that discovery. They keep
            coding against yesterday's answer. By the time everything meets,
            the repository contains three respectable implementations of two
            different ideas.
          </p>
          <p>
            That is an illustrative scenario, not a claim that those exact
            changes failed in our repository. But it captures the coordination
            problem I kept running into while building Tiny Custom Stories with
            several coding agents: <strong>the code could move faster than our
            shared understanding.</strong>
          </p>
        </div>

        <section className="moving-map-section">
          <h2>We made the tickets smaller. The problem got bigger.</h2>
          <p>
            Our first answer to agent chaos was structure. We separated product
            decisions from implementation, created focused issues, assigned
            owners, used epic branches, and asked an independent reviewer to
            inspect changes before they merged. Those choices still matter.
          </p>
          <p>
            Yet a finished issue is not a finished experience. I could see
            pull requests accumulating while the basic parent journey was still
            unfinished. Asking for another issue, another status change, or
            another elaborate test plan did not necessarily close that gap.
          </p>
          <p>
            A Kanban board is good at showing who owns a piece of work. It is
            less good at carrying a new insight from one person's head into
            everyone else's assumptions. With agents, that missing conversation
            becomes particularly expensive. Sessions are isolated. Context is
            finite. A confident answer can remain confident long after its
            premise has expired.
          </p>
          <p>
            I wanted a way to keep the advantages of explicit contracts and
            review without treating the initial plan as sacred.
          </p>
        </section>

        <blockquote className="moving-map-quote">
          The destination is set by product intent. Agents can discover a better
          route, but everyone affected needs the updated map before they travel
          farther.
        </blockquote>

        <section className="moving-map-section">
          <h2>That is the idea behind Moving Map.</h2>
          <p>
            Moving Map is the name we gave an engineering approach we are now
            piloting. The human sets the product destination: what should work,
            for whom, and which boundaries cannot be crossed. Agents can
            investigate and propose better routes. When a discovery changes a
            shared assumption, they bring it to the affected people and
            components before the old assumption spreads.
          </p>
          <p>
            It sounds obvious. The difference is making the discovery itself
            part of the workflow, instead of making each agent responsible only
            for completing the words in its original ticket.
          </p>
          <div className="moving-map-line" aria-label="Moving Map concept">
            <div>
              <span>01 · Stay oriented</span>
              <strong>Product intent</strong>
              <p>The outcome and non-negotiable boundaries stay visible.</p>
            </div>
            <div>
              <span>02 · Change carefully</span>
              <strong>Shared discovery</strong>
              <p>Evidence, impact, decision, and a current contract.</p>
            </div>
            <div>
              <span>03 · Prove the journey</span>
              <strong>Working behavior</strong>
              <p>Recheck what changed, review the join, and demonstrate it.</p>
            </div>
          </div>
          <p>
            A map can move without becoming a free-for-all. The important
            distinction is between an <em>agent proposal</em>, an
            <em> accepted decision</em>, and <em>implemented evidence</em>.
            They are different things. A suggestion in a chat does not silently
            become the new architecture.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>A practical example: one small change, three affected agents</h2>
          <p>
            Consider a hypothetical Child Map → Story Generation → Story Studio
            integration. A parent records that a child once loved dinosaurs,
            then later records that the interest has passed. We want a story to
            use relevant, parent-approved context, not blindly repeat every
            fact the application has ever stored.
          </p>
          <p>
            During implementation, an agent notices that an existing
            story-input contract would make it too easy to pass historical
            context along as if it were current. The agent could quietly patch
            its own mapper. Or it could open five new tickets. Neither
            necessarily tells the editor or generation worker which contract
            they should trust.
          </p>
          <p>In Moving Map, the handoff is deliberately narrower:</p>
          <ol className="moving-map-steps">
            <li>
              <strong>Observe.</strong> Record the assumption, the evidence
              that challenges it, and a proposed alternative. Do not claim the
              proposal is already approved.
            </li>
            <li>
              <strong>Trace impact.</strong> Find the interfaces, branches,
              active work, and parent-facing behavior that rely on it. Check
              those references instead of trusting a guessed dependency map.
            </li>
            <li>
              <strong>Discuss and decide.</strong> Ask only affected agents to
              compare compatibility and tradeoffs. Escalate a material product,
              privacy, security, child-safety, or irreversible decision to the
              founder.
            </li>
            <li>
              <strong>Publish the accepted change.</strong> Update the
              authoritative contract and record what assumption it supersedes.
              A reversible technical change still needs recorded agreement and
              independent review.
            </li>
            <li>
              <strong>Revalidate, then deliver.</strong> The affected workers
              recheck their integrations against that version. Unaffected
              workers continue. The team demonstrates the parent journey, not
              just that the new mapper compiles.
            </li>
          </ol>
          <p>
            None of this requires a new issue for every question. The existing
            owner, PR, and decision record are usually enough. If an accepted
            task really needs refinement, we refine it deliberately without
            pretending a proposal has changed the product promise.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>Agents need autonomy. They also need borders.</h2>
          <p>
            It would be exhausting if every internal design choice had to come
            back to me. It would be reckless if agents could vote their way
            around a privacy rule. So Moving Map uses
            <strong> reviewed architectural autonomy</strong>, with three
            different levels of authority.
          </p>
          <div className="moving-map-decisions">
            <div>
              <p className="eyebrow">Within the contract</p>
              <h3>Routine implementation</h3>
              <p>
                An agent can choose a method, refactor locally, and proceed,
                provided the accepted behavior and protections remain intact.
              </p>
            </div>
            <div>
              <p className="eyebrow">Across components</p>
              <h3>Reversible architecture</h3>
              <p>
                Affected agents can agree on a change after checking consumers,
                compatibility, reversibility, and the current decisions. Record
                the agreement. Independently review the final diff.
              </p>
            </div>
            <div>
              <p className="eyebrow">Back to the founder</p>
              <h3>Consequential decisions</h3>
              <p>
                Product promises, privacy, security, child safety, significant
                spending, destructive operations, and hard-to-reverse or
                disputed changes need a human decision and the right specialist
                review.
              </p>
            </div>
          </div>
          <p>
            A change that merely <em>sounds</em> reversible is not enough.
            Security and privacy constraints cannot be relaxed by calling
            something a technical refactor. And independent review means
            another reviewer actually examines the integration, not the author
            congratulating its own code.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>We also stopped making test-first a ritual.</h2>
          <p>
            Moving Map is not an argument against tests. It is an argument
            against requiring the same development ceremony for every kind of
            work. Test-driven development can be excellent when behavior is
            stable, a regression is understood, or the contract is clear enough
            to write a useful failing test. Exploratory interface work or an
            unsettled cross-component assumption may need investigation first.
          </p>
          <p>
            What matters is matching evidence to risk. Stable rules need
            focused regression tests. Shared contracts need compatibility
            checks. Authentication, private family information, and provider
            boundaries need security-sensitive verification and qualified
            review. Visual changes need an inspected working interface and
            accessibility checks. AI-generated stories need format and safety
            checks <em>plus</em> representative quality evaluation.
          </p>
          <p>
            A green test can prove the function did what we asked. It cannot,
            by itself, prove that we asked for the right thing, that the pages
            form a usable journey, or that a family should trust the result.
            The required review, CI, merge, and release gates remain.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>GitHub stays the record. It is not the conversation.</h2>
          <p>
            I do not want to replace our board with a new agent messaging
            platform. GitHub Issues still hold owned tasks and dependencies.
            Our project board still holds operational status. Versioned
            decisions and architecture documents hold accepted shared
            contracts. Code and demonstrations show what is actually there.
          </p>
          <p>
            The agents' job is to move discoveries across those boundaries
            without creating a second, competing source of truth. A
            coordinator routes material findings. Product stewardship protects
            the human intent. Backlog stewardship refines existing work when
            needed. Developers implement and raise surprises. Reviewers inspect
            the latest accepted contracts and final diff. Repository Doctor
            reconciles verified GitHub state. The public story records the
            lesson without inventing the result.
          </p>
          <p>
            That is a lot of roles, but it is not a request for eight agents
            to attend every conversation. Only the affected workers need the
            update. And nothing in the new method authorizes an agent to
            manufacture extra tickets, ignore ownership, or bypass a gate.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>The experiment is only beginning.</h2>
          <p>
            On October 28, 2026, we adopted Moving Map in the repository's
            agent guidance. That is evidence of a decision and written
            instructions. It is <strong>not</strong> evidence that agents
            reliably notify each other, that integration defects have fallen,
            or that development has become faster.
          </p>
          <p>
            The first trial is bounded to an existing Child Map, generation,
            and Story Studio outcome. I want to look for stale assumptions
            discovered before integration, the amount of rework introduced or
            avoided, the number of interruptions, the quality of independent
            review, and, most importantly, whether a parent-facing journey
            actually works. Escaped regressions and weakened safeguards would
            make the experiment a failure even if the board moved faster.
          </p>
          <p>
            There is no new daemon, notification service, or management
            database in the plan. We are trying to change how people and agents
            reason together before inventing more infrastructure to manage
            them.
          </p>
        </section>

        <section className="moving-map-section moving-map-closing">
          <h2>A plan should be something you can learn from.</h2>
          <p>
            The uncomfortable lesson of this project is that more visible
            activity does not guarantee more finished product. A beautiful
            board can coexist with an unfinished journey. A disciplined test
            suite can coexist with the wrong contract. A sensible agent can
            keep working faithfully on information that is no longer true.
          </p>
          <p>
            I still want small tasks, good tests, clear owners, and independent
            reviews. I just do not want them to prevent the team from noticing
            when the map has changed.
          </p>
          <p className="moving-map-last-line">
            The destination is the experience we're trying to give a family.
            The map exists to help us get there.
          </p>
        </section>

        <aside className="moving-map-endnote">
          <p className="eyebrow">About this field note</p>
          <p>
            This is a public explanation of a founder-approved working pilot,
            not a standard, productivity benchmark, or completed evaluation.
            Examples are illustrative. Product, family-data, and release
            safeguards remain governed by the project's accepted decisions.
          </p>
          <p>
            <a href={'#/learnings?section=moving-map&mode=' + mode}>
              Back to the Moving Map lesson ↑
            </a>
            {' · '}
            <a href="#/delivery">How the project is built →</a>
          </p>
        </aside>
      </article>
    </ReadingPage>
  );
}
