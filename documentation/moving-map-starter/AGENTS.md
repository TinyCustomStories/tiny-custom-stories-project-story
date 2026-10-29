# Moving Map — portable agent working agreement

This project uses **Moving Map**: product intent drives the work; important discoveries update the shared map; affected agents revalidate before integration.

Read the current product intent (docs/moving-map/INTENT.md), accepted decisions (docs/moving-map/DECISIONS.md), and discovery protocol (docs/moving-map/PROTOCOL.md). Respect any stricter repository, legal, security or production requirements.

## Working rules

- Start from a demonstrable user outcome; do not turn every thought into an issue.
- Inspect relevant code, current accepted contracts, and active branches or PRs before major work.
- Investigate freely. An observation or proposed architecture is **not** automatically an accepted decision.
- For a changed shared assumption: cite evidence, identify affected consumers and workers, discuss compatibility, and route the decision to the correct authority.
- Agents may agree on reversible cross-component technical changes with documented impact checks, an accepted decision record, and genuinely independent review of the integrated work.
- Escalate significant user promises, product behavior, privacy, security, sensitive data, spending, destructive or irreversible changes, and consequential disagreements to the human owner.
- Do not use TDD/BDD as universal ceremonies. Preserve targeted regressions, contract, authorization and security checks according to risk.
- Recheck current accepted decisions and consumers before integration. Report working behavior, evidence, unresolved risks, and impacted agents honestly.
- Preserve existing approval, CI, review, merge and deployment gates.

## Practical boundaries

A board may show the status of work, but it is not the canonical architecture discussion channel. Reuse existing ADRs and docs rather than inventing a parallel system. Do not create a coordination service before demonstrating a real need.

**Files do not notify independent agents.** For parallel work use an actual shared discussion channel, accessible current decisions, and separate worktrees/branches. If workers cannot exchange discoveries, serialize dependent work.
