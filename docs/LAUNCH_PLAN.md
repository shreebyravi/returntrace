# ReturnTrace: Launch plan

## Stages

| Stage | What | Who | Exit criteria |
|---|---|---|---|
| 0. Validate | 8 to 10 interviews with returns and seller-operations specialists in the UAE; observe one real investigation; try incumbent tools on the same cases | Product | Disputed-case investigation confirmed as frequent and slow by at least half; a gap remains after the incumbent trials |
| 1. Shadow pilot | ReturnTrace runs on 100 recent anonymised disputed cases, read-only; specialists work as normal; results compared | Product, one marketplace | Agrees with specialists' final outcome on most cases; zero accusations; disagreements explainable |
| 2. Assisted pilot | Specialists use it on live cases; every decision still theirs | Returns team lead | Handling time falls; overturn and appeal rates don't rise |
| 3. Limited release | Two or three marketplaces or returns platforms | Product, partnerships | Connectors repeatable; policies configurable |

## Required before stage 1

Read-only exports with IDs and time zones intact; a data processing agreement; minimal personal data sent to the model; repeated runs with disagreement flags; a shared audit trail.

## Post-launch metrics

- **North star:** share of disputed cases with a reviewable, evidenced recommendation within one working day.
- **Supporting:** median handling time, manual touches, share needing more evidence, time to resolution.
- **Guardrails:** zero accusations; overturn and appeal rate; quote-check failures; tool errors; run-to-run disagreement.

## Rollback

Turn off the agent and keep the code checks and the queue. Nothing is lost, because the tool never moves money, sends messages or changes records.
