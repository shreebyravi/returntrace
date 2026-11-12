# ReturnTrace: Decisions

| # | Decision | Why | Trade-off |
|---|---|---|---|
| 1 | Renamed from ReturnWise to ReturnTrace | "ReturnWise" is an existing Shopify returns app | The working name is dropped |
| 2 | Investigation of disputed cases, not scoring or a portal | Loop, AfterShip, Narvar and marketplaces cover those | Narrower; may be a feature, not a product |
| 3 | One agent with specialist tools, not several agents | Several agents would add complexity without adding value here; one loop is easier to audit | Less parallel work |
| 4 | Code does windows, versions, time zones, serials, weights, refund amounts | Exact things must be repeatable | More code to maintain |
| 5 | Never accuse; no label tool; code blocks accusatory wording | Fairness to customers; legal exposure | Sellers may want stronger language |
| 6 | Rejection review only with nothing open | Denying a genuine customer is costly | More cases go to "more evidence" |
| 7 | Refund or replacement review blocked while code issues are open | Run 1 recommended a refund with conflicting courier records | A person must clear the issue first |
| 8 | Drafted requests, never sent | Messages to customers and sellers have consequences | A person copies the draft out |
| 9 | Versioned policies with code deciding which apply; disagreement escalates | Policy changes mid-order are common | Edge cases go to the policy owner |
| 10 | Recorded runs from separate Claude Sonnet sessions calling the real tools | Works for visitors without an API key; still a real model making real tool calls | One run per case |
| 11 | Keep the trade-off the fix introduced (RET-2007) on record, not hidden by changing the key | Honest evaluation | The scoreboard shows 10 of 11 |
| 12 | Light, restrained B2B style | Returns teams work in business software all day; it also tells it apart from my other prototypes | Less visual drama |
| 13 | One case at a time, no customer history | Avoids profiling and bias | Misses patterns a fraud team might want |
