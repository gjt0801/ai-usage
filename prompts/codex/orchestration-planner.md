# Codex Prompt: Orchestration Planner

Use this before launching a large task, multiple agents, or a multi-step AI workflow.

Inspired by Ted Lee's How to Claude course: https://tedlee99.pages.dev/

```text
Goal:
<what needs to be accomplished?>

Context:
<repo, product, data, users, constraints>

Plan draft:
<known steps, if any>

Please recommend an execution pattern for this work.

For each step, classify the work shape:
- chain: depends on previous output
- route: choose a specialist based on input type
- parallel: independent subtasks can run at the same time
- evaluator loop: output needs independent review or scoring
- orchestrator-workers: scope is broad enough that decomposition is part of the task

Return:
1. recommended pattern
2. agents or roles needed
3. dependencies between steps
4. handoff contract for each role
5. verification gates
6. stop conditions
7. the smallest useful first step

Do not add multiple agents unless the split clearly improves speed, quality, or risk control.
```
