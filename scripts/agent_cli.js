/* Recorded-run harness. A model session calls the app's own tools through this script;
   every call and result is logged by code to data/recorded/runs/<run_id>.jsonl.
   Usage:
     node scripts/agent_cli.js <run_id> prompt            print the system prompt, tools and task
     node scripts/agent_cli.js <run_id> <tool> < input.json   call one tool (JSON input on stdin)
   run_id is a return ID (for example RET-2048) or a stress test ID (S-01 to S-04). */
const fs = require("fs");
const path = require("path");
const E = require("../app/engine.js");
const D = require("../app/data.js");

const [runId, tool] = process.argv.slice(2);
if (!runId || !tool) { console.error("Usage: node scripts/agent_cli.js <run_id> <prompt|tool>"); process.exit(1); }
const stress = D.stress[runId] || null;
const assetId = stress ? stress.return_id : runId;
const world = new E.World(D, stress ? stress.overlay : null);
const policies = Object.keys(D.policies).map(k => "### " + k + ".md\n" + D.policies[k]).join("\n\n");
const task = "Investigate return case " + assetId + ". Today's date is 12 November 2026.";
const logDir = path.join(__dirname, "..", "data", "recorded", "runs");
const logFile = path.join(logDir, runId + ".jsonl");
fs.mkdirSync(logDir, { recursive: true });

function log(ev) { fs.appendFileSync(logFile, JSON.stringify(ev) + "\n"); }
function count() { return fs.existsSync(logFile) ? fs.readFileSync(logFile, "utf8").trim().split("\n").filter(Boolean).length : 0; }

if (tool === "prompt") {
  fs.writeFileSync(logFile, "");
  log({ kind: "start", run_id: runId, asset_id: assetId, task: task, at: new Date().toISOString() });
  const tools = E.TOOL_DEFS.map(t => ({ name: t.name, description: t.description, input_schema: t.input_schema }));
  console.log("=== SYSTEM PROMPT ===\n" + E.systemPrompt(policies) + "\n\n=== TOOLS ===\n" + JSON.stringify(tools, null, 1) + "\n\n=== TASK ===\n" + task);
  process.exit(0);
}

const known = E.TOOL_DEFS.map(t => t.name);
let raw = "";
try { raw = fs.readFileSync(0, "utf8"); } catch (e) { raw = ""; }
let input;
const t0 = Date.now();
try { input = raw.trim() ? JSON.parse(raw) : {}; }
catch (e) {
  log({ kind: "tool", tool, input_raw: raw, ok: false, output: { error: "Input was not valid JSON." }, ms: 0 });
  console.log(JSON.stringify({ error: "Input was not valid JSON: " + e.message }));
  process.exit(0);
}
if (known.indexOf(tool) === -1) {
  log({ kind: "tool", tool, input, ok: false, output: { error: "Unknown tool" }, ms: 0 });
  console.log(JSON.stringify({ error: "Unknown tool " + tool + ". Tools: " + known.join(", ") }));
  process.exit(0);
}

function validate(schema, val, where) {
  const errs = [];
  if (schema.type === "object") {
    if (typeof val !== "object" || val === null || Array.isArray(val)) return [where + " must be an object"];
    (schema.required || []).forEach(k => { if (!(k in val)) errs.push(where + "." + k + " is required"); });
    Object.keys(val).forEach(k => {
      if (!schema.properties[k]) { if (schema.additionalProperties === false) errs.push(where + "." + k + " is not allowed"); }
      else errs.push(...validate(schema.properties[k], val[k], where + "." + k));
    });
  } else if (schema.type === "array") {
    if (!Array.isArray(val)) return [where + " must be an array"];
    val.forEach((v, i) => errs.push(...validate(schema.items, v, where + "[" + i + "]")));
  } else if (schema.type === "string") {
    if (typeof val !== "string") errs.push(where + " must be a string");
    else if (schema.enum && schema.enum.indexOf(val) === -1) errs.push(where + " must be one of " + schema.enum.join(" | "));
  } else if (schema.type === "boolean" && typeof val !== "boolean") errs.push(where + " must be true or false");
  return errs;
}

const def = E.TOOL_DEFS.filter(t => t.name === tool)[0];
const errs = validate(def.input_schema, input, "input");
if (errs.length) {
  log({ kind: "tool", tool, input, ok: false, output: { error: "Input did not match the tool schema", details: errs }, ms: Date.now() - t0 });
  console.log(JSON.stringify({ error: "Input did not match the tool schema", details: errs }));
  process.exit(0);
}
if (tool === "submit_recommendation_for_review") {
  if (count() === 0) { console.log(JSON.stringify({ error: "Run the prompt command first." })); process.exit(0); }
  log({ kind: "final", findings: input, at: new Date().toISOString() });
  console.log(JSON.stringify({ received: true, note: "Findings recorded for human review. Stop here." }));
  process.exit(0);
}
const out = world.runTool(tool, input);
log({ kind: "tool", tool, input, ok: !out.error, output: out, ms: Date.now() - t0 });
console.log(JSON.stringify(out, null, 1));
