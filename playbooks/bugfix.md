# Bugfix Playbook

Use when fixing a known failure.

## Flow

1. Reproduce or explain why reproduction is unavailable.
2. Identify the smallest root cause.
3. Patch the cause, not just the symptom.
4. Add or update a focused test when feasible.
5. Run the narrowest meaningful verification.
6. Summarize cause, fix, and verification.

## Claude Code Review Angles

- `debugger`: alternate root causes
- `test-automator`: regression test ideas
- `code-reviewer`: unintended side effects

## Codex Verification Notes

Always record:

- command run
- result
- any skipped check and why
