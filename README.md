# ai-usage

Personal workspace for building a repeatable AI development cycle with Codex, Claude Code, and reusable agent prompts.

## Purpose

This repo keeps the working system around AI-assisted development:

- collaboration workflows between Codex and Claude Code
- reusable prompts for planning, implementation, review, and documentation
- playbooks for common software tasks
- imported references such as Claude Code subagent catalogs
- experiment notes and lessons learned

## Structure

```text
ai-usage/
  workflows/       repeatable Codex + Claude Code collaboration loops
  playbooks/       task-specific operating guides
  prompts/         reusable prompts grouped by tool
  logs/            experiment notes and retrospectives
  vendor/          imported third-party references
```

## Start Here

1. Read `workflows/codex-claude-cycle.md`.
2. Pick a task-specific playbook from `playbooks/`.
3. Use prompts from `prompts/codex/` and `prompts/claude-code/`.
4. Save useful outcomes or failed patterns under `logs/experiments/`.

## Useful Guides

- `workflows/ai-design-loop.md`: default loop for context, design, orchestration, verification, and learning.
- `playbooks/context-management.md`: keep long AI sessions focused and cheap.
- `playbooks/agent-design.md`: design reusable agents with narrow roles, stop conditions, and edge tests.
- `playbooks/multi-agent-orchestration.md`: choose chain, route, parallel, evaluator, or orchestrator-worker patterns.
- `playbooks/evaluation-gates.md`: verify outputs before trusting or shipping them.
- `prompts/codex/orchestration-planner.md`: ask Codex to recommend a workflow shape before execution.
- `prompts/codex/verification-brief.md`: ask Codex to separate facts, assumptions, checks, and risks.

## Imported Resources

- `vendor/awesome-claude-code-subagents/`: imported from https://github.com/VoltAgent/awesome-claude-code-subagents

The imported project is MIT licensed. Its original `LICENSE`, `README.md`, and contribution files are preserved inside the vendor directory.
