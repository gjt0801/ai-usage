# Codex + Claude Code Cycle

This workflow uses Codex as the implementation and repo operator, and Claude Code as a multi-perspective reviewer and thinking partner.

## Roles

### Codex

- reads the actual repository state
- plans implementation against real files
- edits code, runs tests, and verifies behavior
- prepares commits, PR summaries, and follow-up tasks
- integrates review feedback into working changes

### Claude Code

- uses subagents to explore different perspectives
- reviews architecture, security, tests, documentation, and product fit
- produces critiques, risk lists, and alternative designs
- helps write high-quality explanations and release notes

## Default Loop

### 1. Intake

Owner: user, Claude Code, Codex

Goal: turn a vague idea into a clear implementation target.

Steps:

1. User writes the goal in plain language.
2. Claude Code decomposes the goal with relevant subagents.
3. Codex reads the repo and turns the result into a concrete implementation plan.

Useful Claude Code subagents:

- `product-manager`
- `architect-reviewer`
- `codebase-orchestrator`
- `research-analyst`

Useful Codex prompt:

- `prompts/codex/implementation-brief.md`

### 2. Build

Owner: Codex

Goal: produce a working change, not just a proposal.

Steps:

1. Codex inspects the current branch and relevant files.
2. Codex implements the smallest useful version.
3. Codex runs focused checks.
4. Codex writes a concise change summary.

Expected artifacts:

- code changes
- tests or verification notes
- commit-ready diff

### 3. Review

Owner: Claude Code, then Codex

Goal: catch risks from multiple angles before shipping.

Steps:

1. Give Claude Code the diff or PR.
2. Ask targeted subagents to review.
3. Codex triages findings into must-fix, should-fix, and later.
4. Codex applies fixes and reruns checks.

Useful Claude Code subagents:

- `code-reviewer`
- `security-auditor`
- `test-automator`
- `documentation-engineer`
- `performance-engineer`

Useful prompts:

- `prompts/claude-code/review-panel.md`
- `prompts/codex/review-triage.md`

### 4. Ship

Owner: Codex

Goal: land the change with enough context for future you.

Steps:

1. Codex verifies the working tree.
2. Codex prepares a commit or PR.
3. Claude Code can improve release notes or user-facing docs.
4. Codex pushes or opens the PR when approved.

Useful playbooks:

- `playbooks/feature-build.md`
- `playbooks/bugfix.md`
- `playbooks/code-review.md`

### 5. Learn

Owner: user, Codex, Claude Code

Goal: improve the system after each task.

Steps:

1. Record what worked in `logs/experiments/`.
2. Save strong prompts under `prompts/`.
3. Promote repeated patterns into `playbooks/`.
4. Remove workflows that create noise.

## Handoff Contract

When handing work from Claude Code to Codex, include:

- goal
- constraints
- relevant files or modules
- risks found by subagents
- suggested tests
- unresolved questions

When handing work from Codex to Claude Code, include:

- branch or commit
- diff summary
- verification already run
- review angle requested
- known tradeoffs

## Decision Rule

Use Codex when the next step requires repo access, edits, tests, commits, or GitHub operations.

Use Claude Code when the next step benefits from specialized perspectives, critique, alternative designs, or broad reasoning before implementation.
