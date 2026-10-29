# Moving Map — discovery and delivery protocol

## Begin with the destination

Read INTENT.md, DECISIONS.md and relevant code/contracts. Check active branches and PRs. Define the smallest demonstrable user outcome.

## Investigate and build

Build a useful increment. If a **shared** assumption appears incorrect, write a small proposal:

- Finding and evidence:
- Old assumption:
- Proposed alternative (not accepted yet):
- Affected APIs, components, branches and agents:
- Compatibility or rollback plan:
- Product, privacy, security, cost and data implications:
- Decision authority needed:

No discovery note is required for a routine local implementation choice.

## Check impacts

Identify affected consumers with code/contract references, not only AI guesses. Notify the affected owners through an actual shared channel. Ask for **compatible**, **adjustment needed**, or **unknown**, with evidence. Unaffected work continues. If agents cannot communicate, stop the affected integration or serialize dependent work.

## Decide safely

- Local change within accepted contracts: implementing agent.
- Reversible cross-component architecture: affected agents may agree with impact/compatibility checks, a durable accepted decision and independent integration review.
- Significant product, privacy, security, safety, spending, destructive or irreversible changes, or consequential disagreement: authorized human owner and applicable specialists.
- Never weaken an existing security or release requirement by calling it an internal refactor.

## Publish and revalidate

Publish accepted changes in DECISIONS.md or existing ADRs, including revised contracts and superseded assumptions. Before merge, read current decisions again, verify dependent consumers, run relevant regression/contract/security checks and get applicable independent review.

## Deliver

Report the working user-visible outcome, exact demo steps, branch/PR, accepted contract revisions, affected work, verification evidence, unresolved risks and next useful increment. Update an issue board if it usefully reflects verified progress; do not use the board as the architecture conversation.

TDD and BDD are available tools, not universal starting rules. Running tests does not alone prove product value, safety or security.
