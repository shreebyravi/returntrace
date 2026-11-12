# ReturnTrace AI: Product requirements

| | |
|---|---|
| Status | Prototype (synthetic data), ready for discovery interviews and a shadow pilot |
| Market | UAE first (Dubai, Abu Dhabi); India second |
| Primary user | Returns Investigation Specialist at a marketplace |
| Secondary users | Returns operations manager, seller operations manager, warehouse QC lead, support lead, refund reviewer |
| Affected | The customer |
| Author | Shree Byravi |

## 1. Problem

See [DISCOVERY.md](DISCOVERY.md). Job to be done: "When a return case has conflicting evidence, help me reconstruct what happened, see which facts are verified, identify what's missing, and decide the next step without switching between systems."

## 2. Goals and non-goals

**Goals:** one reviewable case; facts, contradictions and gaps kept apart; code for exact work, an agent for interpretation; cited recommendations; human decision and audit trail; measurable quality against an answer key.

**Non-goals:** refunds, rejections or payments; fraud scoring or accusations; live marketplace, courier or warehouse integrations; a returns portal or full OMS/WMS/CRM.

## 3. Requirements

| # | Requirement | Priority | Prototype |
|---|---|---|---|
| R1 | Case queue with severity, status and next action | Must | Built |
| R2 | Code checks: window and version, courier, receipt, inspection, serial, weight, UTC timeline, refund amount | Must | Built |
| R3 | Agent investigation with real tool calls, shown step by step | Must | Built (recorded and live) |
| R4 | At least one conditional follow-up retrieval | Must | Built (scans and photos after a mismatch) |
| R5 | Facts, contradictions, missing evidence and policy references, each cited; code verifies quotes | Must | Built |
| R6 | Draft requests to the party holding missing evidence | Must | Built |
| R7 | No accusation; no rejection with open issues; no refund or replacement review while code issues are open | Must | Built (prompt and code) |
| R8 | Human decision with reason; audit trail | Must | Built (browser storage) |
| R9 | Evaluation against the answer key | Must | Built |
| R10 | Clear "AI investigation unavailable" state; code checks still shown | Must | Built |
| R11 | Real photos and documents | Should | Next scope |
| R12 | Read-only connectors | Should | Next scope |
| R13 | Shared audit trail and roles | Should | Next scope |

## 4. Success metrics

- **North star (pilot):** share of disputed cases reaching a reviewable, evidenced recommendation within one working day.
- **Supporting:** median handling time; manual touches per case; share needing more evidence; time to resolution.
- **Guardrails:** zero accusations; overturn and appeal rate not higher than today; zero financial actions without a person.
- **Prototype:** see [EVALS.md](EVALS.md).
