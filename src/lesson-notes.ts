// Public retrospective content preserved from the October 16 site checkpoint.
export const fieldNotes = [
  [
    'More Ready tasks did not bring the finish line closer',
    'In early October I kept asking for more work to run. By October 8 I was asking why the new work was mostly new tickets while the original blocked outcomes stayed blocked. Small tasks helped review, but task creation had become too easy to confuse with progress.',
    'Prepare the next accepted outcome, inspect its actual missing prerequisites, and reconcile delivered work before making more slices. Every slice needs a concrete route back to finishing the original outcome.',
  ],
  [
    'The parent journey got lost behind the dependency graph',
    'On October 7 I asked why we were not developing Story Studio in the order a parent would use it. Later editors and backend pieces could move independently while the opening steps still could not connect. The technical progress was real; the experience remained fragmented.',
    'Keep one observable parent journey as the integration target. A finished component, merged task, epic branch, development checkpoint, and demonstrated outcome are different milestones.',
  ],
  [
    'An Alpha needs fewer supported capabilities',
    'By October 14, optional context and source-lifecycle work had drawn the sprint into cleanup, compatibility, and recovery across several owners. I asked whether the sprint could ever finish. The answer was a scope reset, not a promise to finish every newly discovered edge case.',
    'The accepted intermediate checkpoint is one fictional profile-only Fun & Fantasy journey. Optional sources, custom instructions, alternative protagonists, editing, and rewrites stay unavailable at both UI and API boundaries. Deferred work remains future work; essential safety and isolation still apply.',
  ],
  [
    'Open sessions were another backlog I had to manage',
    'I repeatedly asked why agents had stopped, why reviewed PRs were still open, and whether I had to resume the leftover sessions myself. Scope changes also left old work in flight. More autonomous workers did not remove the coordination burden from me.',
    'Give each active branch a clear owner and an explicit handoff. Recheck current scope before continuing old work, take relevant PRs through review and merge gates, and preserve deferred branches and evidence without pretending they are completed.',
  ],
  [
    'Parallel coding still shares one machine',
    'Several agents could edit separate worktrees while builds, database tests, and verification competed for the same host. Failed and interrupted checks made recovery slower. A busy terminal was not reliable evidence that a worker was making progress.',
    'Coordinate expensive operations as well as writers and GitHub calls. Keep actual command outcomes and source identity. Reuse valid unchanged-source evidence; rerun when changed code, failures, or a concrete gap warrants it. The net time saving has not been measured.',
  ],
  [
    'A fresh session needs a useful handoff',
    'Long investigations and repeated context recovery made it harder to know what had already been decided or tested. By October 15 I was explicitly asking for main activities in newer sessions without compaction. Splitting sessions helps only if the next one can recover the exact work.',
    'Carry a compact record of scope, branch and commit, changed files, real checks, unresolved findings, and ownership. Recheck GitHub and source before acting. Keep implementation and independent review separate; do not replay an entire conversation as a substitute for a contract.',
  ],
  [
    'A stronger model is not a workflow repair',
    'I proposed stronger-model planning, cheaper implementation, and a separate reviewer because the current loop felt too slow. That direction fits our existing capability-based routing. Making every tiny task pass through another planning session could add more waiting.',
    'Use the existing issue when it is already explicit. Spend stronger-model judgment on ambiguity, architecture, privacy, safety, and consequential review; use cheaper execution for settled work. A mandatory extra planning stage remains a proposal, not an adopted rule or a measured speedup.',
  ],
] as const;
export const buildNotes = [
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
