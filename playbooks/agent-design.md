# Agent Design Playbook

Use when creating or revising a subagent, reviewer, automation assistant, or any repeated AI role.

Inspired by Ted Lee's How to Claude course: https://tedlee99.pages.dev/

## Principle

An agent is not just a model. It is a designed environment:

- role
- context
- tools
- scope
- stop conditions
- failure handling
- tests

If the result is inconsistent, improve the environment before blaming the model.

## Agent Spec

Write this before using the agent repeatedly.

```text
Name:
<short role name>

One-line role:
<what this agent does, in one sentence>

Inputs:
<what it needs to receive>

Outputs:
<what it must return>

Allowed tools:
<only the tools needed for this role>

Out of scope:
<what it must not do>

Stop conditions:
<when it should pause, refuse, or ask for help>

Failure behavior:
<what to do when evidence is missing, tools fail, or assumptions break>

Test cases:
<normal case, edge case, missing-data case, out-of-scope case>
```

## Design Rules

- Make the role narrow enough to describe in one sentence.
- Grant the smallest tool set that can complete the job.
- Prefer explicit inputs and outputs over "handle this well."
- Write stop conditions before the first run.
- Define failure behavior before the happy path.
- Test at the edges, not only on an easy example.

## Stop Conditions

The agent should stop and report when:

- a starting assumption is contradicted by evidence
- required inputs are missing
- tool output is empty, malformed, or contradictory
- the task asks for action outside the role
- the same attempt fails repeatedly
- a decision requires human judgment

Stopping is not failure. It is part of the design.

## Failure Behavior

Use explicit failure returns:

- `needs_input`: required information is missing
- `cannot_verify`: evidence is unavailable or inconsistent
- `out_of_scope`: the task asks for something outside the role
- `tool_failed`: a tool call failed and retry did not resolve it
- `needs_human_decision`: the next step is a business or product judgment

Avoid filling gaps with plausible guesses.

## Pre-Deployment Tests

Run the agent against:

- a normal valid input
- the same input multiple times to check consistency
- an input with missing required fields
- an input outside the role scope
- an input that triggers a tool error or empty result
- an ambiguous input that should cause a pause

Do not trust one success.

## Review Gate

Before promoting an agent into a workflow, check:

- Is the role crisp?
- Are tools minimized?
- Are inputs and outputs explicit?
- Are stop conditions written?
- Is failure behavior written?
- Were edge cases tested?
- Is the result repeatable enough to reuse?
