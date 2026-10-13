# Privacy and trust: the next layer of the product

Planning checkpoint: October 12, 2026.

**Status: planned work, with documentation and implementation tasks recorded in Sprint Infinity.** This is a public development record, not the application's Privacy Notice, legal advice, a compliance certification, or an announcement that these features have shipped.

## Why this became a workstream

Personalized stories need context, but that does not mean a storybook service should collect everything a family is willing to share. The useful question is what a particular story actually needs, what the parent understands about that use, and what happens to the information afterward.

The starting question was whether to add a privacy disclaimer. The work now goes further: document actual practices, explain them where information is collected, provide appropriate choices, enforce those choices, and verify the complete experience. A reassuring paragraph is not the same thing as a working safeguard.

The intended product remains parent-led. A preferred name and age in completed years are the accepted minimum profile for children aged 2 to 12; additional Child Map enrichment remains optional. This work does not introduce a date-of-birth requirement or expand the product into an unrestricted child chatbot.

## What is being assessed

The first legal assessment covers the United States, the EU/EEA, and the United Kingdom separately. These are research scopes, not approved launch markets. Other European jurisdictions require an explicit assessment rather than being silently treated as covered.

The review needs to distinguish the adult account, information supplied about a child, the child-facing experience, and technical collection by the application or its service providers. It also needs the actual operator, intended audience, enabled features, and processing arrangements. Missing facts will remain visible rather than being filled with assumptions.

Relevant starting points include the [US COPPA Rule](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312), the [EU GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), and the [UK Children's Code](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/code-standards/). The work must check current applicability, national or state requirements, and appropriate qualified advice instead of copying a generic policy template.

## First, document the facts and decisions

The documentation tasks cover six connected pieces:

1. Legal applicability, operator information, and launch restrictions.
2. A release-wide inventory of information, purposes, recipients, and technical collection, extending existing evidence rather than starting again.
3. Parental verification, purpose-specific consent where required, and withdrawal contracts.
4. Retention schedules and the difference between removal from the active application, backup handling, and provider-held copies.
5. Privacy-rights requests, proportionate identity checks, and a workable response process.
6. A versioned Privacy Notice with shorter explanations for relevant collection points.

The existing private working notice remains a draft. Unconfirmed contact details, processing claims, and retention promises are not being published as a live policy. Research and drafting can progress without pretending that the final legal judgments have already been made.

## Then, implement small, reviewable pieces

| Planned piece                  | What the implementation should demonstrate                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Public notice page             | Parents can read the applicable notice before signing in or completing a child profile.                                  |
| Contextual explanations        | Relevant forms explain required and optional information before the action, not only in a footer.                        |
| Separate permission records    | Notice acknowledgment, terms, parental verification, and purpose-specific consent are not one interchangeable flag.      |
| Collection checks              | Applicable permissions are enforced by the application, not merely by hiding a button.                                   |
| Privacy choices and withdrawal | Parents can change relevant choices, with clear consequences and safe handling of pending work.                          |
| Privacy-request intake         | People can reach a real request process, with appropriate identity checks and secure fulfillment.                        |
| Cookie and SDK controls        | Actual technical behavior matches the reviewed choices; a banner is added only when the inventory and rules call for it. |
| Retention integration          | The approved schedule is applied to genuine gaps, reusing existing data-lifecycle capabilities.                          |

These are planned outcomes, not descriptions of verified production behavior. The exact implementation depends on the preceding contracts and review. The project does not need another export system, deletion system, consent platform, or support dashboard merely because a new task has been written.

AI-provider review remains separate. Permission to store a family detail is not automatically permission to send it to an external service. This work does not approve a new provider or promise that switching models preserves the same data practices.

## Finally, prove the whole journey

Integrated evidence should exercise the notice, relevant verification, scoped choices, refusal, withdrawal, privacy requests, and retention behavior. It must include interrupted and failed operations, not just a successful walkthrough.

Development evidence will use fictional families. Existing export, deletion, authorization, and privacy-regression work should be reused where it actually covers the behavior. A passing engineering test is not a legal conclusion, a provider-erasure guarantee, or proof of deployment controls that were never inspected.

The existing qualified privacy, security, and child-safety review remains required before real-family Alpha use. Sprint Infinity is where these tasks are organized; it does not turn necessary release safeguards into optional work.

## What this checkpoint does not claim

No completed legal assessment, approved launch geography, live Privacy Notice, consent-method approval, provider clearance, or completed implementation is announced here. No private family information, private issue text, internal security details, or private policy draft is included.

This repository tells the development story. It is a separate surface from the family application, and its own technical collection must be assessed separately. This roadmap is not a substitute for either surface's applicable privacy disclosures.

The existing website routes, dated activity statistics, and October 1 PDF companion are unchanged by this documentation checkpoint.
