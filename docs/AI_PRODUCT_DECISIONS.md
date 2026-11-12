# ReturnTrace: AI product decisions

## What changes when the product is an agent

| Traditional product | AI agent product |
|---|---|
| Same input, same output | Same input can give different answers; test by running cases repeatedly |
| Requirements describe screens and rules | Requirements also describe judgement: what the agent may conclude, and when it must stop |
| QA checks code paths | Evals check behaviour against an answer key, plus stress tests |
| A bug is fixed once | A fix to behaviour can move another case; re-run everything |

## The main decisions

1. **What is AI and what is code?** Code: dates, windows, policy versions, time zones, serial comparison, weights, refund amounts, quote checks. AI: deciding what to retrieve next, reading free text, judging whether a photo settles a mismatch, writing a neutral rationale and requests.
2. **How much freedom?** The agent chooses its own tool calls, but no tool can move money, send a message or label anyone.
3. **Fairness.** The agent is told never to imply dishonesty; code blocks accusatory wording; there is no customer history in the context, on purpose.
4. **What does it return?** A fixed schema separating facts, contradictions, missing evidence and policy, so a person can check each.
5. **How is it kept honest?** Exact quotes checked by code; no final action while code issues are open or after a tool failure.
6. **Hidden instructions.** Messages are data. Tested with a fake "system notice" from a customer.
7. **Testing variance.** Answer key first; six eval cases; four stress tests; a second full run after each change.
8. **Prompt vs code.** Prompt for behaviour (choose the action from what's open); code for what must always hold (no refund while issues are open).
9. **Fixes have side effects.** Tightening the next-action rule fixed two cases and moved one (RET-2007) from "escalate" to "more evidence". Shown, not hidden.
10. **Which model?** Claude Sonnet: reliable tool use at a sensible cost per case.
11. **Cost and speed.** 7 to 13 tool calls and about 30 seconds per case in the recorded runs.
12. **Where a person decides.** Every recommendation, with a reason; every request before it goes anywhere.
13. **What it won't do.** Fraud scoring, account labels, refunds, rejections.

## My role

I reframed my first concept after the market scan and the name check, chose the user and the narrower angle, wrote the policies, the seeded cases and the answer key, decided what is AI and what is code, set the fairness boundary, judged both runs, chose the improvement, and kept the trade-off on record.
