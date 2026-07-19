# Multi-Agent Orchestration Playbook

Use when a task is too broad for one agent or benefits from independent perspectives.

Inspired by Ted Lee's How to Claude course: https://tedlee99.pages.dev/

## Principle

Do not split work just because you can. Split when the shape of the work justifies it.

The pattern matters:

- dependent steps need chaining
- independent steps can run in parallel
- mixed incoming work needs routing
- high-risk work needs evaluation
- unclear scope needs an orchestrator

## Pattern Map

| Work shape | Pattern | Use when |
| --- | --- | --- |
| Ordered dependency | Chain | Step B needs Step A's output |
| Type-based branch | Route | Inputs need different specialists |
| Independent subtasks | Parallel | Work can proceed without shared state |
| Quality-sensitive output | Evaluator loop | Wrong answers are costly or subjective |
| Large ambiguous scope | Orchestrator-workers | Decomposition is itself part of the work |

## Four Questions

Ask these before launching agents:

1. Do any steps depend on earlier outputs?
2. Does the input split into distinct types?
3. Can parts run independently?
4. Is the answer costly, subjective, or hard to verify?

Then choose the smallest pattern that fits.

## Common Mistakes

- Running dependent steps in parallel, causing later agents to miss upstream context.
- Running independent work serially, wasting time.
- Adding an orchestrator for a small task where one agent is enough.
- Letting the same agent both create and judge the output.
- Leaving coordination in chat instead of documenting the harness.

## Orchestration Spec

```text
Goal:
<task goal>

Steps:
1. <step>
2. <step>
3. <step>

Dependencies:
<which steps need earlier outputs?>

Suggested pattern:
<chain | route | parallel | evaluator loop | orchestrator-workers>

Agents:
- <agent>: <role>

Handoff contract:
<what each agent must receive and return>

Verification:
<how outputs are checked and merged>

Fallback:
<what to do if an agent fails or disagrees>
```

## Handoff Contract

Each agent handoff should include:

- goal
- relevant context
- source artifacts
- constraints
- expected output format
- stop conditions
- known risks

Do not rely on shared memory unless the workflow explicitly provides it.

## Review Gate

Before using multiple agents, confirm:

- The task is worth splitting.
- The selected pattern matches the dependency shape.
- Each agent has a narrow role.
- Outputs have a merge strategy.
- A reviewer or evaluator is independent from the creator.
- The harness can be reused next time.
