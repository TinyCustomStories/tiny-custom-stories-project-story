# Moving Map: a starter kit for any software project

**Status:** Experimental, portable working method. Not a certified framework or proven productivity claim.

Moving Map starts with an outcome, expects discoveries, propagates accepted changes to affected work, and verifies that integrated behavior still serves the original intent. It works with one agent; multiple concurrent agents require additional coordination.

## Quick start: 10 minutes

1. Open an existing repository and commit or back up your current work.
2. Copy [AGENTS.md](AGENTS.md) into your repository root, **merging** if an AGENTS.md already exists. Do not overwrite security or release policies.
3. Create docs/moving-map/ and copy [INTENT.md](INTENT.md), [DECISIONS.md](DECISIONS.md), and [PROTOCOL.md](PROTOCOL.md) there. Reuse existing ADRs or equivalent documents instead of duplicating them.
4. Fill in just three things in INTENT.md: who the product serves, the next outcome you can demonstrate, and non-negotiable constraints.
5. Give your coding agent the bootstrap prompt below; ask it to report which files it actually read.
6. Start one outcome, demonstrate it, and preserve a brief handoff. Add a decision only when a real cross-component discovery requires one.

Optional: copy [CLAUDE.md](CLAUDE.md) as the Claude Code entry point, but merge it with any existing one.

### Suggested repository layout

```text
your-project/
  AGENTS.md
  CLAUDE.md                 # optional
  docs/moving-map/
    INTENT.md
    DECISIONS.md
    PROTOCOL.md
```

## Copy-paste prompt A: bootstrap Moving Map

> Adopt Moving Map in this repository. First inspect the existing codebase, agent guidance, accepted decisions, current product intent, security/privacy requirements and branches/PRs. Merge the supplied AGENTS.md and docs/moving-map templates rather than overwriting existing rules. Reuse existing ADRs if present. Do not create an elaborate Kanban taxonomy, new tasks or an orchestration service merely to install this method. TDD/BDD are optional techniques; meaningful regression, contract, authorization and security verification remain mandatory when risk requires them.
>
> Use reviewed architectural autonomy: affected agents can agree on **reversible** cross-component technical changes only after checking impact and compatibility, recording the accepted decision, and obtaining independent final review. Escalate significant product, privacy, security, safety, cost, destructive or irreversible decisions to me. Deliver a focused PR and report the files changed, missing product intent, how discoveries reach active agents, how contracts are revalidated, which checks ran, and what cannot be automated with the available tools.

## Copy-paste prompt B: start one outcome

> Follow this repository's Moving Map rules and latest accepted decisions.
>
> **Outcome:** [One thing a user can now do.]
>
> **Constraints:** [Security, privacy, compatibility or budget rules.]
>
> **Demonstration:** [How we will verify the complete outcome.]
>
> Inspect relevant code, active PRs, current contracts and accepted decisions. Build the smallest useful increment. If a discovery changes a shared assumption, capture evidence, propose alternatives and identify affected agents. Do not silently change contracts. Coordinate the appropriate decision and revalidate impacted work. Choose proportionate verification and applicable independent review, without inventing a mandatory TDD ceremony. Report what actually works, how to try it, and what remains incomplete.

## Worked example: event booking

**Human outcome:** A visitor should be able to reserve an event without creating an account.

**Agent A:** Registration. **Agent B:** Reservations. **Agent C:** Email confirmations.

- Agent A observes that required registration causes visitors to abandon the process. This is a **proposal**, not permission to change the product promise.
- The product owner **approves guest booking**. The decision is recorded; the affected reservation and email agents are notified through an actual communication channel.
- Agent B reports that its API currently requires an account ID; Agent C reports that it assumes every recipient has a profile. Both mark their existing work as **adjustment needed**.
- Agents A and B propose a reversible customer reference supporting guests and existing accounts. They document compatibility and receive independent review.
- The team revalidates the changed reservation and email paths, including authorization and delivery checks. Unaffected styling work continues.
- The integrated guest-booking journey is demonstrated. The issue board, if any, reflects the actual result rather than serving as the architecture discussion.

Without the shared decision, all three agents could pass isolated tests while implementing contradictory product assumptions.

## One agent vs multiple agents

| Requirement                                     | One agent           | Multiple agents                            |
| ----------------------------------------------- | ------------------- | ------------------------------------------ |
| Accepted product intent                         | Yes                 | Yes                                        |
| Current decision records                        | Yes                 | Yes; refresh before integration            |
| Isolated branches/worktrees                     | Optional            | Prefer separate ones                       |
| Shared discussion channel                       | Not required        | **Required** for consequential discoveries |
| Independent review                              | As required by risk | Required for reviewed shared changes       |
| Risk-appropriate security and regression checks | Yes                 | Yes                                        |
| Kanban board                                    | Optional            | Optional                                   |
| Mandatory TDD                                   | No                  | No                                         |

**Important limitation:** Repository documents do not message agents on their own. Use an existing coordinator, shared PR discussion or reliable team channel. If you cannot deliver accepted decisions to affected workers, run dependent tasks sequentially.

## How to know whether adoption worked

- A newly started agent can describe the current user outcome and important constraints.
- Agents distinguish a proposal from an accepted decision.
- When a shared contract changes, affected consumers can discover the revision and respond.
- Consequential product/security/privacy decisions reach authorized humans.
- Independent review and relevant regression/contract/security checks occur.
- The team can demonstrate a complete user-visible increment.
- Coordination overhead and stale-assumption rework decrease without an increase in escaped defects.

If this doesn't help the next feature, simplify or revert the process. Avoid adding infrastructure merely because a framework has a name.
