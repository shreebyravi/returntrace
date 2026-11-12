# ReturnTrace AI

**A disputed return isn't a missing-data problem. The records exist, but they're scattered. ReturnTrace investigates them and recommends one next step for a person to decide.**

An AI agent prototype for marketplace returns teams. It pulls together the order, courier events, warehouse inspection, scans and photos, messages and the right policy version; separates what is confirmed from what conflicts or is missing; and drafts a neutral, cited recommendation. It never refunds, rejects or accuses anyone.

**[Try it, no login needed](https://shreebyravi.github.io/returntrace/)** | **[The project on one page](docs/PITCH.md)** | **Status:** prototype with made-up data

[![Watch the 2-minute ReturnTrace walkthrough](video/poster.jpg)](https://shreebyravi.github.io/returntrace/video/returntrace-walkthrough.mp4)

**[Watch the 2-minute walkthrough](https://shreebyravi.github.io/returntrace/video/returntrace-walkthrough.mp4)** (AI voice)

![An investigation, step by step](docs/images/investigation.jpg)

## The problem

A return passes through the customer, the courier, the warehouse and the seller, and each keeps its own record. When they disagree (a different serial number, a lighter parcel, a timestamp out of order, a courier that says "delivered" when the warehouse has no receipt), a specialist has to rebuild what happened before anyone can decide fairly.

In the [Merchant Risk Council's 2025 survey](https://merchantriskcouncil.org/2025/07/22/21/05/refund-policy-abuse-remains-the-top-fraud-threat), 57% of merchants reported more refund and policy abuse, and 47% named refund abuse their top fraud attack. These are global figures. How often evidence-conflicting disputes happen in UAE marketplaces, and what they cost to investigate, is still unknown.

Returns automation and risk scoring already exist (Loop Returns, AfterShip, Narvar, marketplace-native tools). **Our hypothesis** is that the disputed cases that come out of scoring still need someone to investigate them, and that's where ReturnTrace fits. See the [market scan](docs/MARKET_SCAN.md).

## What it does

| Step | What happens | Who decides |
|---|---|---|
| **Check** | Code checks the return window and policy version, courier collection and receipt, inspection, serial, weight, timeline in UTC and refund amount | Automatic |
| **Investigate** | The agent retrieves records itself and, when it finds a contradiction, looks for the scan or photo that could settle it | Agent, with tools |
| **Separate** | Confirmed facts, contradictions and missing evidence, each with a source and an exact quote | Agent, checked by code |
| **Recommend** | One next action: refund or replacement review, more evidence, escalation, or rejection review (only when nothing is open) | Agent proposes |
| **Decide** | The specialist accepts, asks for more evidence, escalates or rejects the recommendation, with a reason; every decision is logged | A person |

![Refusing to label a customer](docs/images/refusal.jpg)

## Why it can be trusted with this job

- **It never accuses anyone.** Code blocks accusatory wording, there's no "label account" tool, and the agent refused a seller's request to mark a customer as fraud.
- **It doesn't do the maths.** Windows, policy versions, time zones, serial comparisons, weights and refund amounts are calculated by code.
- **It shows its evidence.** Every quote is checked against its source by code.
- **It can't move money.** No refund, rejection or send action exists. Requests are drafts.
- **Limits are enforced twice.** Code blocks approval of a refund or replacement review while code-found issues are open, and of any final action after a system failure.

## How it was tested

- **11 seeded cases** covering ten dispute types, plus 14 orders without returns, with a separate answer key ([data/ground_truth.json](data/ground_truth.json)).
- **Six eval cases** with expected behaviour written first. Latest run: all 13 seeded problems found, the next action agreed with the answer key in 10 of 11 cases, every quote found in its source, zero accusations. My verdicts: 6 Pass.
- **Four stress tests:** a hidden instruction in a customer message, a reply in Arabic, a duplicate courier event, and the warehouse system not responding. All four behaved as expected in the latest run.
- **One documented improvement:** run 1 recommended a refund while courier records disagreed, and leaned on a "typing error" with no photo to support it. Three instructions and one code check fixed both. The fix also made one case (courier delivered, warehouse no receipt) ask for evidence instead of escalating, which doesn't match the answer key; that's on the record.

The answers shown are recorded examples: real Claude Sonnet sessions that called this app's own tools, with every call logged by code. A visitor can add their own Anthropic API key to run it live. Details are in [docs/EVALS.md](docs/EVALS.md).

![Evaluation](docs/images/evaluation.jpg)

## Known limits

- No returns team has used it, and all data is made up.
- Scans and photos are text descriptions, not images.
- It looks at one case at a time, not at patterns across customers or sellers, on purpose.
- Policies are a simplified, fictional set.
- The product gap is a hypothesis; this may fit better as a feature inside an existing platform.

## What's next

1. **Validate:** interview returns and seller-operations specialists in the UAE; try incumbent tools on the same cases.
2. **Shadow pilot:** run alongside a team on real, anonymised disputed cases. See the [launch plan](docs/LAUNCH_PLAN.md).
3. **Real evidence:** read-only connectors, real photos, repeated runs. See the [roadmap](docs/ROADMAP.md).

**Author:** Shree Byravi · [LinkedIn](https://www.linkedin.com/in/shree-byravi/)

## AI product decisions

What should AI do and what should code do? How do you keep an agent fair to customers? How do you test answers that vary? See [AI product decisions](docs/AI_PRODUCT_DECISIONS.md), the [case study](docs/CASE_STUDY.md), the [break-even model](docs/BUSINESS_CASE.md) and the [backlog](docs/BACKLOG.md).

## What's in this repo

| Path | Contents |
|---|---|
| `index.html` | The page |
| `app/` | `engine.js` (checks and tools), `app.js` (screens and live agent loop), `data.js` (generated bundle) |
| [`docs/`](docs/README.md) | PRD, architecture, decisions, risks, evals, launch plan and more |
| `data/` | Made-up orders, returns, courier events, inspections, evidence, messages, answer key, stress tests and recorded runs |
| `policies/` | Fictional, versioned return policies and the investigation policy |
| `scripts/` | `build_data.py` (bundles data) and `agent_cli.js` (the recorded-run harness) |
| `design/` | Notes on the look and feel |
| `video/` | The walkthrough video |

## Run it yourself

Open `index.html` in Chrome or Edge. It runs on recorded answers. To run it live, add your own Anthropic API key in Settings; the key is saved only in your browser. After changing `data/` or `policies/`, run `python scripts/build_data.py`.

## Data, privacy and licence

All data is synthetic. The marketplace, sellers, courier and warehouse are made up, and customers are reference codes. Real company names appear only in the market scan, to compare. No keys or personal data are stored here.

**Created by Shree Byravi.** See also [AssetReady](https://github.com/shreebyravi/assetready), [SpaceBack](https://github.com/shreebyravi/spaceback) and [ScreenGate](https://github.com/shreebyravi/screengate).

Licensed under [CC BY-NC-ND 4.0](LICENSE).
