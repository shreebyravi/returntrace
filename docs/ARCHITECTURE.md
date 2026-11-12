# ReturnTrace: Architecture

## Now (prototype)

```text
data/*.csv, data/*.json, policies/*.md, data/recorded/**.jsonl
        │  python scripts/build_data.py
        ▼
app/data.js ──► app/engine.js (checks + tools, plain code) ◄── scripts/agent_cli.js (recorded-run harness, Node)
        │                │
        ▼                ▼
index.html + app/app.js (screens, review, audit, live loop) ──► Anthropic Messages API (visitor's own key only)
```

- **Static page**, no server; works from a double-click or GitHub Pages.
- **One engine for both modes**, so recorded and live runs use the same checks and tools.
- **Live mode:** `claude-sonnet-5-5`, client tools, `tool_choice: auto`, strict `submit_recommendation_for_review` schema, medium effort, up to 18 turns, server-side refusal fallback; plain error messages, and a clear "AI investigation unavailable" state that keeps the code checks visible.
- **Recorded mode:** each case was run by a separate Claude Sonnet session whose only allowed command was the harness; every call and result was logged by code to JSONL.
- **Answer checks:** quotes (punctuation-tolerant, word-for-word otherwise), accusation wording, rejection with open issues, refund or replacement review with open code issues, final action after a tool failure.

## Proposed production design

| Layer | Choice |
|---|---|
| Connectors | Read-only adapters to OMS, WMS, courier API, CRM; IDs and timestamps preserved |
| Store | Case table with evidence references, recommendations and decisions |
| Checks | Same engine as a service; policy versions as data with effective rules |
| Agent | Server-side loop; pinned prompt and tool versions; transcripts kept |
| Review | Roles (specialist, refund reviewer), reasons required, SSO |
| Monitoring | Sample review, overturn rate, accusation-check hits, quote failures, tool errors, run-to-run disagreement |
