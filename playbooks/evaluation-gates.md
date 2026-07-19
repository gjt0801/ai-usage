# Evaluation Gates Playbook

Use when an AI-generated output needs trust before it can be shipped, shared, or used for a decision.

Inspired by Ted Lee's How to Claude course: https://tedlee99.pages.dev/

## Principle

"Looks good" is not evidence. Completion reports and verification results are different things.

Trust is designed through gates:

- source checks
- tests
- edge cases
- independent review
- repeatable criteria

## Gate Types

| Gate | Use for | Evidence |
| --- | --- | --- |
| Source gate | research, claims, numbers | citations, links, source excerpts |
| Test gate | code changes | passing tests or focused checks |
| Diff gate | repository edits | reviewed changed files |
| Edge gate | prompts, agents, workflows | adversarial or boundary cases |
| Reviewer gate | subjective quality | independent critique |
| Regression gate | repeated workflows | before/after comparison |

## Verification Brief

```text
Output to verify:
<artifact or summary>

Claims:
<facts, numbers, assumptions, decisions>

Required evidence:
<sources, tests, screenshots, logs, examples>

Failure cases:
<where this could be wrong>

Decision:
<accept | revise | reject | needs human judgment>
```

## Code Change Gate

Before shipping code, confirm:

- The stated user goal is satisfied.
- Relevant tests or focused checks ran.
- Failure states are handled.
- The diff does not include unrelated churn.
- Changed behavior is documented when needed.
- Residual risks are explicit.

## Research Gate

Before trusting research, confirm:

- Sources are current enough for the claim.
- Primary sources were used where possible.
- Facts and inferences are separated.
- Unsupported claims are marked.
- Contradictory evidence was considered.

## Prompt Or Agent Gate

Before reusing a prompt or agent, confirm:

- It works on more than one example.
- It handles missing input honestly.
- It refuses or stops out-of-scope work.
- It produces the expected format.
- It does not invent facts to fill gaps.

## Review Gate

Use this final decision format:

```text
Decision: accept | revise | reject | needs human judgment

Evidence:
- <test/source/check>

Risks:
- <remaining risk>

Next action:
- <smallest required action>
```
