import React from 'react';
import { ReadingPage } from './ReadingPage';

function ChapterIntro({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro section">
      <p className="eyebrow">Sprint chapter · {number} · November 4, 2026</p>
      <h1>{title}</h1>
      <div className="page-lede">{children}</div>
    </section>
  );
}

function ChapterStatus({
  label,
  headline,
  children,
}: {
  label: string;
  headline: string;
  children: React.ReactNode;
}) {
  return (
    <div className="outcome-banner">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{headline}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}

export function SprintFour() {
  return (
    <ReadingPage>
      <ChapterIntro number="04" title="Ten drawings are not yet a visual story.">
        <p>
          A book could have a picture on every page and still feel like eleven
          strangers met by accident. Sprint 4 asks a harder question: how do the
          same world, characters, and visual language stay recognizable from the
          cover to the last page?
        </p>
      </ChapterIntro>

      <section className="section sprint-section">
        <ChapterStatus
          label="Sprint 4 · visual stories"
          headline="A real synthetic illustrated-story checkpoint exists. The outcome gate is still open."
        >
          As of November 3, a protected fictional parent journey on an
          integration epic branch generated a cover and ten code-built drawings,
          saved and recovered a reviewed visual version, approved an immutable
          text-and-visual version, and reopened it. That is meaningful local
          evidence, not a completed Sprint 4, a development release, or a book
          published to a child's library.
        </ChapterStatus>

        <div className="sprint-chapter-intro">
          <p className="eyebrow">Why the visual system changed</p>
          <h2>Consistency is a product feature, not an art prompt.</h2>
          <p>
            The early experiment used original SVG doodles for two entirely
            fictional stories. It showed that inexpensive geometric pieces can
            be composed into pages. It also exposed a problem: a reusable
            drawing system still needs to understand which scene matters and
            where the text should sit.
          </p>
          <p>
            The accepted direction separates a versioned theme, a stable
            visual cast, structured scene intent for each page, and a
            replaceable renderer. Parents review and change visuals without
            silently changing the approved story text.
          </p>
        </div>

        <ol className="boundary-grid">
          <li>
            <span>01</span>
            <h3>One theme and cast</h3>
            <p>
              A coherent book has recurring shapes, colors, and characters
              instead of eleven independent outputs.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>One plan per scene</h3>
            <p>
              Each cover or page describes a bounded visual intention before
              reusable pieces are arranged.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Review the exact version</h3>
            <p>
              Page-scoped change, restore, stale-result rejection, and pinned
              approval keep parent choices recoverable.
            </p>
          </li>
          <li>
            <span>04</span>
            <h3>Publish separately</h3>
            <p>
              Approving a visual bundle never makes it visible to a child.
              Publication belongs to the later library and reader.
            </p>
          </li>
        </ol>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">What is still unproven</p>
            <h2>The final gate needs more than one pretty example.</h2>
          </div>
          <ul>
            <li>Inspected story relevance and cast continuity across contrasting books.</li>
            <li>Integrated partial-failure, stale-result, restore, and deletion/isolation evidence.</li>
            <li>Repeatable latency, resource, and output-size measurements at accepted limits.</li>
            <li>A reviewed integration checkpoint reaching the shared development branch.</li>
            <li>Separate qualified family-safety and child-publication clearance.</li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>What happens to the finished book?</h2>
          <p>
            That becomes Sprint 5's job: presenting only explicitly published,
            approved stories to the child.
          </p>
          <p><a href="#/sprint-five">Continue to Sprint 5 →</a></p>
          <p><a href="#/roadmap">See the outcome roadmap →</a></p>
        </div>
      </section>
    </ReadingPage>
  );
}

export function SprintFive() {
  return (
    <ReadingPage>
      <ChapterIntro number="05" title="An approved story still needs a bookshelf.">
        <p>
          Parents make decisions in a protected studio. Children should not
          have to navigate drafts, revisions, prompts, or provider errors just
          to hear a story. Sprint 5 is the handoff from the parent's work to
          a calm, read-only library.
        </p>
      </ChapterIntro>

      <section className="section sprint-section">
        <ChapterStatus
          label="Sprint 5 · child library and reader"
          headline="Defined and dependent on publication. Not yet demonstrated."
        >
          The library and ten-page reader have accepted scopes, but their
          finished child-facing outcome remains open. Sprint 4 approval is not
          publication. The first invite-only text-story testing increment can
          happen separately after its own safety clearance; it does not
          certify the child library or reader.
        </ChapterStatus>

        <div className="sprint-chapter-intro">
          <p className="eyebrow">One boundary changes everything</p>
          <h2>A child sees the book, not the machinery behind it.</h2>
          <p>
            This sprint must read a parent-published, pinned story bundle,
            not the latest editable draft. The home screen should lead with a
            recognizable cover and title. Opening it should reveal one of ten
            pages at a time, with large, clear navigation and stable progress
            for that reading session.
          </p>
        </div>

        <ol className="boundary-grid">
          <li>
            <span>01</span>
            <h3>Explicit publication</h3>
            <p>
              Parent approval and child visibility remain separate actions,
              with current family authority checked at each read.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>A quiet library</h3>
            <p>
              Approved cover, title, and one obvious reading action. No
              drafts, operation data, or parent-editing controls leak through.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Page-by-page reading</h3>
            <p>
              The shared text-and-visual renderer supplies accessible
              native text, meaningful alternatives, and simple navigation.
            </p>
          </li>
          <li>
            <span>04</span>
            <h3>Visibility can change</h3>
            <p>
              Hiding, deleting, or losing access to a story must stop a
              previously open reader from revealing it.
            </p>
          </li>
        </ol>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">What we have not claimed</p>
            <h2>The reader is a later Alpha increment.</h2>
          </div>
          <ul>
            <li>Publication and the protected child projection still need complete integration evidence.</li>
            <li>Phone, tablet, keyboard, focus, contrast, and changed-visibility behavior need review.</li>
            <li>Narration, video, autoplay, and engagement loops are not part of this Alpha reader.</li>
            <li>No family-facing deployment or child-library release is implied.</li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>But how does someone discover the idea before signing up?</h2>
          <p>
            That is a different problem, inserted into the plan as Sprint 5.5.
            It is a public demonstration, not the private child bookshelf.
          </p>
          <p><a href="#/sprint-five-point-five">Continue to Sprint 5.5 →</a></p>
          <p><a href="#/sprint-four">Back to visual stories →</a></p>
        </div>
      </section>
    </ReadingPage>
  );
}

export function SprintFivePointFive() {
  return (
    <ReadingPage>
      <ChapterIntro
        number="05.5"
        title="Show the magic before asking anyone to sign in."
      >
        <p>
          A visitor should not need to create an account, invent a child, and
          fill in a long form just to understand why this product is
          different. Sprint 5.5 asks a simpler question: can a tiny fictional
          Child Map plus two real choices produce a story worth reading?
        </p>
      </ChapterIntro>

      <section className="section sprint-section">
        <ChapterStatus
          label="Sprint 5.5 · pre-login AI demo"
          headline="Early example-only UI exists. The fresh-AI and visual acceptance gates remain open."
        >
          The initial logged-out demo shell exposed bounded choices, but it
          was not proof of fresh AI generation or a satisfying illustrated
          reader. Founder review found missing homepage discoverability, a
          Child Map preview that felt too flat, and story pages that were
          mostly monochrome. Those are active product requirements, not
          features we can declare finished.
        </ChapterStatus>

        <div className="sprint-chapter-intro">
          <p className="eyebrow">The proposed visitor journey</p>
          <h2>Meet Ari. Make two choices. See what changes.</h2>
          <p>
            A visitor follows a visible <strong>Try a Story</strong> link
            from the product homepage, explores a small read-only living
            Child Map for fictional Ari, then chooses a story idea such as
            <strong> Moon bell</strong> or <strong>Paper door</strong> and a
            feel such as <strong>Cozy</strong> or <strong>Adventurous</strong>.
            The goal is a fresh cover and ten pages grounded in that
            fictional context, with a clear distinction between an AI
            result and a curated example.
          </p>
          <p>
            This is deliberately separate from the protected developer
            preview used to test story-generation internals. The public
            demo is meant to teach us whether visitors recognize the
            connection between a changing Child Map, their choices, and
            the resulting story.
          </p>
        </div>

        <ol className="boundary-grid">
          <li>
            <span>01</span>
            <h3>No visitor free text</h3>
            <p>
              Use a fixed fictional experience and versioned bounded
              choices, with no connection to real family data.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>Real AI, only when admitted</h3>
            <p>
              Anonymous requests must pass central rate, concurrency, and
              hard global usage/spend limits before any provider call.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Honest example fallback</h3>
            <p>
              When the gate or provider says no, a cached curated story
              remains readable without pretending it was freshly generated.
            </p>
          </li>
          <li>
            <span>04</span>
            <h3>A colorful shared storybook</h3>
            <p>
              Reuse the design language and story reader with purposeful
              cover and page decorations. Generic doodles are not claimed
              to illustrate specific generated scenes.
            </p>
          </li>
        </ol>

        <div className="evidence-panel">
          <div>
            <p className="eyebrow">What acceptance must prove</p>
            <h2>An attractive shell cannot substitute for the journey.</h2>
          </div>
          <ul>
            <li>Home → Ari's memories → choices → genuinely fresh AI story → reader → signup.</li>
            <li>Direct API abuse attempts stop before provider calls; the entire demo obeys its hard budget.</li>
            <li>Clear live-vs-example labeling, zero anonymous story saving, and no family-store access.</li>
            <li>Real desktop/mobile visual inspection of the cover and multiple interior pages.</li>
            <li>Qualitative story relevance and separate public-release safety/configuration evidence.</li>
          </ul>
        </div>

        <div className="reading-panel">
          <h2>What would count as success?</h2>
          <p>
            Not simply that a text generator returned ten pages. Someone
            should be able to see why Ari's small memories matter, notice
            what their choices changed, and read a story that feels
            intentionally designed. We have not demonstrated that whole
            experience yet.
          </p>
          <p><a href="#/development">Return to the development story →</a></p>
          <p><a href="#/roadmap">Compare the sprint outcome gates →</a></p>
        </div>
      </section>
    </ReadingPage>
  );
}
