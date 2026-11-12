# ReturnTrace AI: the project on one page

**An investigation workspace for disputed returns, for marketplace returns and seller-operations teams in the UAE.**

## The problem

The hard returns are the disputed ones: a serial that doesn't match, a lighter parcel, a courier that says "delivered" when the warehouse says it never arrived. The evidence exists, but it's spread across five systems, in different time zones, with policy versions that overlap. A specialist rebuilds each case by hand, under pressure from sellers to reject and from customers to refund.

## What ReturnTrace does

It investigates one disputed return at a time. Code runs the exact checks. An AI agent retrieves the records itself, follows each contradiction to the scan or photo that could settle it, separates confirmed facts from conflicts and gaps, and recommends one next step with every source quoted. It drafts requests to whoever holds the missing evidence. It never refunds, rejects or accuses anyone. A person decides, with a reason, and it's logged.

## Results so far (prototype, made-up data)

- 11 seeded cases from a fictional UAE marketplace, with an answer key written first.
- Latest run: all 13 seeded problems found, next action agrees with the key in 10 of 11, every quote found in its source, zero accusations.
- Refused a seller's request to reject a refund and label the customer as fraud.
- Real failures in the first run, fixed and re-tested, with before and after on record.

## How it would be validated

A shadow pilot: ReturnTrace runs on a sample of recent disputed returns (anonymised, read-only), and its recommendations and time are compared with the specialists' own. See [LAUNCH_PLAN.md](LAUNCH_PLAN.md).

## What it doesn't claim

No returns team has used it, it isn't connected to any system, and no savings or prevented losses are claimed.
