# ReturnTrace: Discovery

**ReturnTrace investigates disputed e-commerce returns across order, courier, warehouse, messages and policy, and recommends one next step for a person to decide.**

Prototype with synthetic data. Dunvale Market, Pelvaro Courier, the Dunvale Returns Centre, the sellers and the customers are made up.

## The problem in one paragraph

A return passes through the customer, the courier, the warehouse and the seller, and each keeps its own record. When those records disagree (a different serial number, a lighter parcel, a timestamp that's out of order, a courier that says "delivered" when the warehouse has no receipt), a returns specialist has to rebuild what happened before anyone can decide fairly. Refunding too easily costs the seller; denying or accusing a genuine customer costs trust.

## Evidence

| What | Source | What it shows | What it doesn't |
|---|---|---|---|
| Merchant survey, 2025 | [Merchant Risk Council, 22 July 2025](https://merchantriskcouncil.org/2025/07/22/21/05/refund-policy-abuse-remains-the-top-fraud-threat) | 57% of merchants saw refund and policy abuse increase; 47% call refund abuse their top fraud attack | UAE figures; how many disputes have conflicting evidence; investigation cost |
| Vendor products | [Loop Returns fraud tools](https://help.loopreturns.com/en/articles/2183937), [AfterShip Returns](https://www.aftership.com/returns), [Narvar](https://corp.narvar.com/) | Return automation and risk scoring are commercially mature | That disputed-case investigation is unsolved |

Early research also turned up further survey figures (false non-receipt claims, 2026 first-party misuse). We couldn't confirm them against the published reports, so they aren't used.

## Discovery answers

**User:** Returns Investigation Specialist at a UAE marketplace (primary). Secondary: returns operations manager, seller operations manager, warehouse QC lead, customer support lead, refund reviewer. Affected: the customer.

**Workflow:** investigate one disputed or unusual return and recommend the next step.

**Trigger:** a return is flagged at inspection, disputed by the seller or customer, or blocked by a rule (window, version, missing evidence).

**Current process (assumed, to validate):**

```text
1. Open the case in the returns tool.
2. Look up the order and dispatch record in the OMS; check the serial and the packing scan.
3. Look up courier events and weights in the courier portal.
4. Read the warehouse inspection and photos in the WMS.
5. Read the customer, seller and warehouse messages in the CRM.
6. Work out which policy version applies and whether the return is in its window.
7. Decide, or ask someone for more evidence, and write it up.
```

**Pain points:** evidence in five systems; time zones differ between systems; typed values disagree with scans; policy versions overlap; pressure from sellers to reject; fear of accusing a genuine customer.

**Agent opportunity:** the agent retrieves records itself, follows a contradiction to the evidence that could settle it, separates facts from conflicts and gaps, and drafts the request to whoever holds the missing evidence. Code does the exact work. A person decides.

**Human boundary:** no refund, rejection or message; no accusation or account label; rejection review only when the policy is clearly not met and nothing is open.

**Success metric:** prototype: seeded problems found, next action agrees with the answer key, quotes verified, zero accusations. Pilot: time to a decision, reopened or appealed cases, overturn rate, share needing more evidence.

## Is it a real problem? (plain check)

| Claim | Status |
|---|---|
| Return disputes are a growing concern for merchants | Evidenced (global survey) |
| Evidence-conflicting disputes are common in UAE marketplaces | Not shown |
| Existing tools don't investigate them well | Hypothesis; Loop and others already score and hold risky returns |
| An agent beats a well-designed rules workflow here | Partly shown in the prototype (follow-up retrieval, free text, refusals), not in real use |
| It could be a feature inside existing platforms rather than a product | Likely; to test |
