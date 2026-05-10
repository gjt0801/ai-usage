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

## Imported Resources

- `vendor/awesome-claude-code-subagents/`: imported from https://github.com/VoltAgent/awesome-claude-code-subagents

The imported project is MIT licensed. Its original `LICENSE`, `README.md`, and contribution files are preserved inside the vendor directory.
