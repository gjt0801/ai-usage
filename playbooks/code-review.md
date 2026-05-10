# Code Review Playbook

Use when a change exists and needs quality review.

## Codex Checklist

- Confirm branch and working tree status.
- Read the diff before commenting.
- Prioritize bugs, regressions, security issues, and missing tests.
- Keep style comments secondary unless they affect maintainability.
- Ground findings in file and line references.

## Claude Code Checklist

- Run focused subagents instead of asking for a generic review.
- Separate must-fix issues from preferences.
- Include concrete reproduction or failure mode where possible.
- Call out uncertainty clearly.

## Combined Flow

1. Codex creates or inspects the diff.
2. Claude Code runs a review panel.
3. Codex validates findings against the repo.
4. Codex fixes valid issues.
5. Codex records verification and prepares the final summary.
