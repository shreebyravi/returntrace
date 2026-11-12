# ReturnTrace: Risk and compliance

| Risk | Impact | Control now | Needed for real use |
|---|---|---|---|
| Accusing a genuine customer | Unfair treatment, complaints, legal exposure | Policy forbids it; code blocks accusatory wording; no label tool; refusal tested | Language review on real cases; complaint monitoring |
| Refund approved on unsettled evidence | Seller loss | Code blocks refund or replacement review while code issues are open; person decides | Repeated runs; sample audits |
| Fabricated or misquoted evidence | Wrong decisions | Every quote checked against its source; missing records described, not quoted | Links to original systems |
| Wrong policy version | Inconsistent outcomes | Code works out which versions apply; disagreement escalates | Policy owner sign-off on versioning rules |
| Time-zone errors | False contradictions | Code converts all times to UTC and keeps originals | System clock monitoring |
| Hidden instructions in messages | Manipulated outcome | Treated as data; listed when ignored (tested) | Broader injection testing |
| System outage | Incomplete investigation | Reported as incomplete; no final action (tested) | Retries and alerts |
| Bias against groups of customers | Unfair outcomes | One case at a time; no customer history or scores used | Fairness testing on real data; review by legal |

## Data and privacy

Prototype: no personal data; customers are codes; API key stays in the visitor's browser. Real use: order, address and message data is personal data under UAE Federal Decree-Law No. 45 of 2021 (and India's DPDP Act 2023 for the secondary market). Needs a data processing agreement, minimal data sent to the model, no training on client data, retention limits and role-based access. To be confirmed with legal counsel before a pilot.

## What we don't claim

No customer interviews, deployments, integrations, prevented losses or savings.
