import React from 'react';
import { ReadingContext, ReadingPage } from './ReadingPage';

export function MovingMapArticle() {
  const { mode } = React.useContext(ReadingContext);

  return (
    <ReadingPage>
      <header className="page-intro section moving-map-intro">
        <p className="eyebrow">An evolving experiment · October 29, 2026</p>
        <h1>Everyone Followed the Plan. The Plan Was Wrong.</h1>
        <div className="page-lede">
          <p>
            We've been experimenting with a way of building software where the
            plan changes while AI agents are already working. We call our
            working philosophy <strong>Moving Map Development (MMD)</strong>.
            This is an invitation to try it, not an announcement that we have
            solved agentic development.
          </p>
          <p className="moving-map-meta">
            Software development · A working hypothesis · Try it, question it,
            and keep what helps
          </p>
        </div>
      </header>

      <article className="moving-map-article">
        <div className="moving-map-opening">
          <p className="moving-map-dropcap">
            We gave three AI agents three perfectly reasonable tasks.
          </p>
          <p>
            One is building registration for an event-booking app. Another is
            building reservations. The third is building confirmation emails.
            Each agent has a clear assignment and its own tests.
          </p>
          <p>
            Then we discover something important: visitors abandon bookings
            because they have to create an account. The product owner makes a
            consequential decision:{' '}
            <strong>guest booking should work without an account.</strong>
          </p>
          <p>
            The registration agent hears the decision and adjusts its work. The
            reservation agent is still building an API that requires an account
            ID. The confirmation agent still assumes that every recipient has a
            registered profile.
          </p>
          <p>
            By Friday, all three agents have finished. Three clean pull
            requests. Three passing test suites. One booking experience that
            cannot complete the newly accepted guest journey.
          </p>
          <p>
            Nobody misunderstood their assignment. The assignments simply
            <strong> stopped describing the same product.</strong>
          </p>
          <p className="moving-map-aside">
            The booking story is fictional. The coordination failure is real:
            one agent can be working from an accepted new decision while
            dependent agents still trust the old one.
          </p>
        </div>

        <section className="moving-map-section">
          <h2>The strange problem with good plans</h2>
          <p>
            We like plans. Plans make complicated things feel manageable. First
            we draw some boxes. Then we draw arrows between the boxes. Then we
            turn the boxes into tickets. Then, because we are software
            developers, we create a dashboard that shows how many boxes have
            been completed.
          </p>
          <p>
            The plan was built using the best information we had on Monday.
            Unfortunately, by Wednesday, Monday's best information may be wrong.
          </p>
          <p>
            A developer discovers that an API behaves differently than the docs
            suggest. A designer notices that users are taking a route no one
            expected. A tester finds that two perfectly sensible features become
            nonsense when you put them together. An AI coding agent uncovers a
            shared contract that needs to change.
          </p>
          <p>
            The discovery is not the problem.{' '}
            <strong>
              The problem is that the discovery stays local while the work stays
              parallel.
            </strong>
          </p>
          <p>
            It is like five people navigating through a forest with copies of
            the same map. One finds out that the bridge has collapsed. She
            carefully draws a red X on <em>her</em> copy.
          </p>
          <p>
            The other four continue toward the bridge, because their maps still
            show a perfectly respectable bridge.
          </p>
          <p>
            Our usual instinct is to improve the map-drawing process. More
            detailed tickets. More carefully written requirements. More meetings
            before development starts. Sometimes that helps. But no amount of
            Monday planning can guarantee we will not learn something important
            on Wednesday.
          </p>
        </section>

        <blockquote className="moving-map-quote">
          A good development plan should not be a contract with the past. It
          should be a map that can change when we learn something new.
        </blockquote>

        <section className="moving-map-section">
          <h2>Meet Moving Map Development</h2>
          <p>
            <strong>Moving Map Development (MMD)</strong> is our name for an
            intent-led collaboration philosophy we're testing while building a
            small product with AI agents. We think it may be useful to human
            teams too, but we have not proven that yet.
          </p>
          <p>
            The metaphor has two parts. There is the
            <strong> destination</strong>, and there is the
            <strong> route</strong>.
          </p>
          <p>
            The destination is the outcome someone actually cares about. In our
            booking app, it is not “implement registration” or “close twelve
            tickets.” It is{' '}
            <em>a visitor can reserve an event without unnecessary friction</em>
            .
          </p>
          <p>
            The route is our current best idea of how to get there: interfaces,
            data shapes, components, tickets, architecture, and assumptions. We
            need a route to coordinate. But when a discovery makes part of it
            wrong, we should update the affected part, tell the travelers who
            depend on it, and check that the route still reaches the
            destination.
          </p>
          <div
            className="moving-map-line"
            aria-label="Moving Map Development in three ideas"
          >
            <div>
              <span>THE COMPASS</span>
              <strong>Keep the outcome</strong>
              <p>Agree on what working software must accomplish and protect.</p>
            </div>
            <div>
              <span>THE MOVING MAP</span>
              <strong>Share discoveries</strong>
              <p>Change accepted assumptions deliberately, not silently.</p>
            </div>
            <div>
              <span>THE ARRIVAL</span>
              <strong>Prove the journey</strong>
              <p>Integrate, review, and demonstrate that the outcome works.</p>
            </div>
          </div>
          <p>
            The central rule is almost embarrassingly simple:
            <strong>
              {' '}
              when you discover something that changes a shared assumption,
              update the people and work that depend on it before they build
              further on the old assumption.
            </strong>
          </p>
          <p>
            Not every discovery needs a meeting. Not every refactor is a
            philosophical event. The rule is for discoveries that affect someone
            else's contract, decision, or work in progress.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>Let's rewind the booking incident</h2>
          <p>
            The registration agent discovers the friction, but cannot simply
            redefine the product. It proposes guest booking, shares the
            evidence, and gets a decision from the product owner.
          </p>
          <p>
            Now comes the part most task boards do not solve: the accepted
            decision must reach everyone building on the old assumption.
          </p>
          <div className="moving-map-mini-dialogue">
            <p className="eyebrow">One discovery, not seventeen new tickets</p>
            <p>
              <strong>We assumed:</strong> Every reservation belongs to a
              registered account.
            </p>
            <p>
              <strong>We learned:</strong> Required sign-up causes potential
              customers to abandon booking.
            </p>
            <p>
              <strong>Product decision:</strong> The product owner approves
              guest reservations. The agent does not approve this alone.
            </p>
            <p>
              <strong>Who is affected:</strong> Registration, reservation API,
              confirmation emails, and authorization checks.
            </p>
            <p>
              <strong>Proposed technical route:</strong> Introduce a compatible
              customer reference that supports guests and account holders.
            </p>
          </div>
          <p>
            The agents check consumers of the old account-ID contract. They
            compare a reversible design, record the accepted contract, and get
            independent review. They revalidate affected work while unrelated
            features continue.
          </p>
          <p>
            Before integration, they check that registered and guest
            reservations work, including access control and confirmation
            delivery. A green isolated test suite is not enough to declare the
            product outcome complete.
          </p>
          <p>
            The important improvement is not that agents wrote more tests. They
            stopped building incompatible versions of the product, without
            asking a Kanban board to mediate every discussion.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>So how do you actually develop this way?</h2>
          <p>
            We are experimenting with six habits alongside the tools we already
            use. Treat these as a starting point, not compulsory gates. You do
            not need to replace your source control, sprint board, or entire
            engineering organization.
          </p>
          <ol className="moving-map-steps">
            <li>
              <strong>Name the destination.</strong> Write a sentence a user
              would recognize: “A visitor can complete a guest reservation.”
              Record important boundaries too. A feature is not finished when
              its subtasks are finished.
            </li>
            <li>
              <strong>Make the current map visible.</strong> Record the
              assumptions and interfaces that several pieces of work share. Use
              the docs, issue, ADR, or repository record you already maintain.
              You do not need an elaborate new diagram.
            </li>
            <li>
              <strong>Notice when reality disagrees.</strong> If a discovery
              changes a shared assumption, write down what was believed, what
              was observed, and the proposed change. An observation is evidence;
              a proposal is not yet a decision.
            </li>
            <li>
              <strong>Find the people on that road.</strong> Identify affected
              code, active branches, consumers, tests, and owners. Tell only the
              people who depend on the assumption. Verify the impact; an
              AI-generated dependency guess is not a fact.
            </li>
            <li>
              <strong>Decide, update, and recheck.</strong> Give a reversible
              technical decision to the affected engineers with recorded
              agreement, compatibility checks, and independent review. Escalate
              consequential product, privacy, security, safety, cost,
              destructive, or irreversible decisions to the right human
              authority. Update the accepted contract and revalidate affected
              work before integration.
            </li>
            <li>
              <strong>Prove that you arrived.</strong> Run the appropriate
              checks, inspect the integrated result, and demonstrate the
              original outcome. Report what works and what does not. An
              impressive number of merged changes is not the destination.
            </li>
          </ol>
          <p>
            Notice what is missing: “create a new ticket for every thought,”
            “hold a meeting for every line of code,” and “make everyone stop
            when one assumption changes.” Those are not features of the
            technique.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>But who is allowed to move the map?</h2>
          <p>
            If everyone can silently redraw everything, we have not created a
            development method. We have created a very energetic argument.
          </p>
          <p>
            MMD works only when decision authority is explicit. A useful
            starting model has three lanes:
          </p>
          <div className="moving-map-decisions">
            <div>
              <p className="eyebrow">Lane one</p>
              <h3>Local decisions</h3>
              <p>
                An engineer chooses implementation details within accepted
                contracts. No special ceremony needed.
              </p>
            </div>
            <div>
              <p className="eyebrow">Lane two</p>
              <h3>Reviewed changes</h3>
              <p>
                Affected engineers may agree on genuinely reversible,
                cross-component technical changes after impact checks, durable
                documentation, and independent review.
              </p>
            </div>
            <div>
              <p className="eyebrow">Lane three</p>
              <h3>Human authority</h3>
              <p>
                Important changes to user promises, privacy, security, safety,
                spending, or irreversible data need the authorized product owner
                and appropriate specialist review.
              </p>
            </div>
          </div>
          <p>
            A proposal is not automatically an accepted decision just because
            three coding agents agreed it sounded elegant. And calling a
            security change “just a refactor” does not magically make it safe.
            Existing review, CI, and release gates still apply.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>What about TDD, BDD, specs, and the agent labs?</h2>
          <p>
            We did not invent responding to change. We looked at what other
            approaches already do well, and several address pieces of the same
            problem. We are not trying to replace them.
          </p>
          <div className="moving-map-mini-dialogue">
            <p>
              <strong>Test-Driven Development (TDD)</strong> can be excellent
              when the expected behavior is stable and testable. Anthropic even
              recommends test-first iteration for suitable agent-coding work. We
              still want targeted tests for stable rules and regressions. We are
              asking what happens when agents have passing tests for two
              incompatible versions of the requirement.{' '}
              <a
                href="https://www.anthropic.com/research/claude-code-best-practices"
                target="_blank"
                rel="noreferrer"
              >
                Anthropic's Claude Code guidance ↗
              </a>
            </p>
            <p>
              <strong>Behavior-Driven Development (BDD)</strong> is closer to
              our philosophy than we first realized. It uses collaborative
              examples and ongoing discovery to build shared understanding. The
              specific gap we are exploring is how a discovery reaches
              independent agents already working asynchronously. BDD's
              conversations might be enough for some teams.{' '}
              <a
                href="https://cucumber.io/docs/bdd/"
                target="_blank"
                rel="noreferrer"
              >
                Cucumber's BDD explanation ↗
              </a>
            </p>
            <p>
              <strong>Spec-Driven Development (SDD)</strong> makes intent and
              requirements explicit. GitHub Spec Kit offers structured
              specification, planning, implementation, and convergence, with
              customizable workflows. We like that clarity. We are experimenting
              with lighter early planning for evolving features and deliberate
              revision when shared contracts change.{' '}
              <a
                href="https://github.github.com/spec-kit/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Spec Kit ↗
              </a>
            </p>
            <p>
              <strong>OpenAI's harness engineering and Symphony</strong> focus
              on reliable agent environments, guardrails, feedback, and
              execution coordination. Symphony uses an issue tracker as an agent
              control plane. That can be valuable for organizing work at scale.
              Our smaller experiment asks whether the board can stay a progress
              view without hosting every architectural conversation.{' '}
              <a
                href="https://openai.com/index/harness-engineering/"
                target="_blank"
                rel="noreferrer"
              >
                Harness engineering ↗
              </a>
              {' · '}
              <a
                href="https://openai.com/index/open-source-codex-orchestration-symphony/"
                target="_blank"
                rel="noreferrer"
              >
                Symphony ↗
              </a>
            </p>
            <p>
              <strong>
                Anthropic's context engineering and long-running agent patterns
              </strong>{' '}
              help agents carry the right knowledge between sessions. We want to
              build on that and ask one more question: when a shared decision
              changes, which *other active workers* must learn about it before
              integration?{' '}
              <a
                href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
                target="_blank"
                rel="noreferrer"
              >
                Context engineering ↗
              </a>
              {' · '}
              <a
                href="https://www.anthropic.com/research/effective-harnesses-for-long-running-agents"
                target="_blank"
                rel="noreferrer"
              >
                Long-running agents ↗
              </a>
            </p>
          </div>
          <p>
            These are overlapping ideas, not competing brands. TDD helps test
            behavior. BDD helps discover it together. Specifications preserve
            agreement. Agent harnesses support reliable execution. The extra
            habit we're trying is to propagate accepted changes to the people
            and agents still building on old assumptions, without manufacturing
            more process.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>How would we know whether this actually helps?</h2>
          <p>
            We have adopted a Moving Map pilot in Tiny Custom Stories agent
            guidance. That is not proof of faster delivery, better coordination,
            or fewer bugs. We have not run a controlled comparison, and a
            written protocol is not a working agent-to-agent notification
            system.
          </p>
          <p>
            We want to try it on a real cross-component feature and compare it
            with our previous workflow. Do we detect stale assumptions earlier?
            Spend less time revising tickets? Deliver an integrated user journey
            with less rework? What does coordination cost in time and tokens? Do
            regressions or security problems escape?
          </p>
          <p>
            If BDD conversations, a good spec, or a simple handoff solve the
            problem just as well, we should use those. If Moving Map creates
            more administration than working software, we should simplify it. A
            useful experiment must be allowed to prove its own hypothesis wrong.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>Why this matters even more with AI agents</h2>
          <p>
            Humans are fairly good at accidentally learning things from one
            another. A developer overhears a conversation. Someone says “wait,
            what?” in a meeting. A colleague notices that your assumption was
            wrong while reaching for coffee.
          </p>
          <p>
            Agents do not reliably have that ambient awareness. They can work in
            separate sessions, each with its own context and a slightly
            different picture of the project. They are very good at completing a
            well-specified piece of work. That becomes awkward when the
            specification is no longer right.
          </p>
          <p>
            A lightweight shared-discovery rule gives both humans and agents a
            way to change direction without depending on lucky overheard
            conversations or expecting every worker to reread the entire
            repository after each commit.
          </p>
          <p>
            It does <em>not</em> require an agent swarm, an always-on
            coordinator, a new database, or a complicated workflow service.
            Start with an owner, a shared decision record, and a habit of
            checking affected contracts. Add automation only when repeated
            evidence proves it will help.
          </p>
        </section>

        <section className="moving-map-section">
          <h2>Take Moving Map to your own repository</h2>
          <p>
            This should work outside the project that inspired it. You do not
            need our agents, our Kanban board, or our architecture. Start with
            any existing repository and four small shared files.
          </p>
          <p>
            <strong>First, install the instructions.</strong> If you already
            have agent guidance or architecture decisions, merge with them;
            never erase stronger security, review, or deployment rules.
          </p>
          <pre className="moving-map-code">
            <code>
              {
                'my-project/\n  AGENTS.md\n  docs/moving-map/\n    INTENT.md\n    DECISIONS.md\n    PROTOCOL.md'
              }
            </code>
          </pre>
          <p>
            In <code>INTENT.md</code>, describe who your product serves, the
            next demonstrable user outcome, and constraints that must remain
            true. Do not start by creating fifty classified tickets.
          </p>
          <p>
            <strong>Then start with a simple agent prompt:</strong>
          </p>
          <div className="moving-map-mini-dialogue">
            <p>
              Read this repository's Moving Map instructions, accepted
              decisions, relevant contracts, and active work. Deliver the
              smallest demonstrable user outcome. When a discovery changes a
              shared assumption, propose it, identify affected agents, obtain
              the right decision, and revalidate dependent work before
              integration. Choose risk-appropriate checks, preserve independent
              review, and report what actually works.
            </p>
          </div>
          <p>
            <strong>Finally, try one real feature.</strong> One agent is enough
            to begin. With multiple agents, use separate branches or worktrees,
            a real shared discussion channel, and fresh accepted decisions. A
            Markdown file cannot notify another agent by itself. If workers
            cannot communicate, sequence dependent work.
          </p>
          <p>
            We published the portable starter kit so others can run their own
            experiment. It includes editable agent instructions, decision and
            intent templates, a discovery protocol, two prompts, and a worked
            example. Adapt it, challenge it, or drop parts that do not help.
          </p>
          <p className="moving-map-starter-link">
            <a
              className="button button-dark"
              href="https://github.com/TinyCustomStories/tiny-custom-stories-project-story/tree/main/documentation/moving-map-starter"
              target="_blank"
              rel="noreferrer"
            >
              Get the portable Moving Map starter kit ↗
            </a>
          </p>
          <p>
            Afterward ask: did the team catch stale assumptions earlier? Did
            integration require less rework? Were important decisions reviewed?
            Did regressions escape? Can a user actually complete the journey? If
            the method adds work without improving outcomes, simplify it.
          </p>
        </section>

        <section className="moving-map-section moving-map-closing">
          <h2>The point was never to follow the map perfectly</h2>
          <p>
            Software development is a strange job. We spend much of our time
            drawing a map of a place we have not visited, and then we act
            surprised when we discover a hill that was not on the map.
          </p>
          <p>
            Better estimates are useful. Better requirements are useful. Better
            tests are useful. But sometimes the most important thing a developer
            does all week is notice that something everyone believes is no
            longer true.
          </p>
          <p>
            That discovery should not become a footnote in one person's pull
            request while the rest of the team keeps driving toward a missing
            bridge.
          </p>
          <p className="moving-map-last-line">
            Keep the destination clear. Let the route change. Make sure everyone
            affected gets the new map.
          </p>
        </section>

        <aside className="moving-map-origin">
          <p className="eyebrow">A real project trying it · October 28, 2026</p>
          <h2>Where this idea is starting: Tiny Custom Stories</h2>
          <p>
            I am building Tiny Custom Stories, a parent-guided personalized
            storytelling product, with the help of several specialized coding
            agents. Work on its Child Map, story generation, and editing
            experience often crosses component boundaries. I wanted those agents
            to share discoveries without turning every surprise into more
            tickets or asking me to approve every reversible technical choice.
          </p>
          <p>
            On <strong>October 28, 2026</strong>, we adopted the first Moving
            Map Development pilot in our repository's agent guidance, with
            reviewed architectural autonomy, explicit human decision boundaries,
            and risk-based verification. We are starting with one existing
            cross-component outcome. The instructions have changed; faster
            delivery, fewer defects, and reliable agent coordination have{' '}
            <strong>not yet been demonstrated</strong>. That is what the pilot
            needs to find out.
          </p>
          <p>
            <a href="#/development">
              Explore the Tiny Custom Stories project →
            </a>
          </p>
        </aside>

        <aside className="moving-map-endnote">
          <p>
            Moving Map Development (MMD) is a working hypothesis, not a
            standard, a replacement for TDD/BDD, or a measured productivity
            claim. The booking story is fictional. Our Tiny Custom Stories pilot
            is real but still unproven, and starter files do not themselves
            message other agents.
          </p>
          <p>
            <a href={'#/learnings?section=moving-map&mode=' + mode}>
              Back to the Moving Map Development lesson ↑
            </a>
            {' · '}
            <a href="#/delivery">See how the project is built →</a>
          </p>
        </aside>
      </article>
    </ReadingPage>
  );
}
