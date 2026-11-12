# ReturnTrace: Case study

## The question

Why do complicated return disputes stay unresolved when marketplaces, couriers and warehouses already record so much data?

## What I did

1. **Checked my first concept before building.** The working name, ReturnWise, is already a Shopify returns app, so I renamed it ReturnTrace. Two survey figures from my early research couldn't be confirmed against the published reports, so I used only the verified ones.
2. **Narrowed the angle.** Loop Returns already scores returns and holds risky ones; AfterShip and Narvar cover portals and automation. ReturnTrace investigates the cases that end up disputed.
3. **Split the work.** Code for dates, windows, policy versions, time zones, serials, weights and refunds; an agent for deciding what to look at next and reading free text; a person for every decision.
4. **Set the fairness boundary.** No accusations, no account labels, no rejection while anything is open. Enforced in the prompt and in code.
5. **Built a fictional marketplace** with 10 dispute types plus the hero case, and an answer key written before any run.
6. **Ran real model sessions** (Claude Sonnet) that called the app's own tools, with every call logged by code.

## What went wrong, and what changed

- **Run 1:** the agent recommended a refund review while two courier records disagreed (S-03). In the hero case it escalated instead of asking the seller, and called the serial difference a likely typing error with no photo on the dispatch side, which quietly leans toward one party. Some quotes cited a record that doesn't exist.
- **Change:** three instructions and one code check (see [EVALS.md](EVALS.md)).
- **Run 2:** both fixed; every quote verified. But the stricter rule moved one case (courier delivered, warehouse no receipt) from "escalate" to "ask for evidence". I kept that on the record instead of loosening the answer key, because hiding a trade-off is worse than showing it.

## Results (prototype)

13 of 13 seeded problems found; next action agreed with the answer key in 10 of 11 cases; zero accusations; all four stress tests as expected. My verdicts: 6 Pass.

## What I learned

Fairness has to be designed in two places: the instructions shape how the agent reasons, and code makes sure that certain outcomes can't be approved, whatever the agent writes.

## Next

Interviews with UAE returns specialists, incumbent trials, then a shadow pilot. See [LAUNCH_PLAN.md](LAUNCH_PLAN.md).
