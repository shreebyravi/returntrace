# ReturnTrace: Break-even model

**A model to fill in with real numbers from a pilot, not a forecast.** Brackets are inputs to collect.

| Input | Symbol | Value |
|---|---|---|
| Disputed returns per month | N | [from the marketplace] |
| Specialist time per disputed case today (hours) | t_m | [measure in shadow pilot] |
| Specialist time per case with ReturnTrace (hours) | t_a | [measure] |
| Loaded specialist cost per hour (AED) | c | [from the marketplace] |
| Model cost per case (AED) | m | [recorded runs: 7 to 13 tool calls; price from live runs] |
| Cases overturned on appeal today vs with ReturnTrace | o_m, o_a | [measure] |
| Cost of an overturned case (AED) | k | [refund plus handling] |
| Price per month (AED) | P | [to test] |

```text
saving per month = N × (t_m − t_a) × c + N × (o_m − o_a) × k − N × m
```

Break-even when `saving per month ≥ P`.

## Not counted

Customer trust from fewer wrongly denied claims; seller trust from consistent, evidenced decisions; a defensible record for disputes.

## What would make this case fail

- Specialists re-check everything, so t_a stays close to t_m.
- Few disputes have conflicting evidence; most are routine and already automated.
- The marketplace's own tools or Loop-style platforms already do this investigation.
