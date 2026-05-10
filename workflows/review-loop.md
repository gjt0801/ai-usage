# Review Loop

Use this loop after Codex has produced a diff and before the change is pushed or merged.

## Inputs

- branch name or commit SHA
- short goal statement
- diff summary
- test results
- specific concerns, if any

## Claude Code Pass

Ask Claude Code to run a review panel with these perspectives:

- `code-reviewer`: correctness and maintainability
- `security-auditor`: secrets, permissions, injection, unsafe defaults
- `test-automator`: missing tests and fragile verification
- `documentation-engineer`: docs and onboarding gaps
- `architect-reviewer`: design fit and coupling

Output format:

```text
Must fix:
- ...

Should fix:
- ...

Later:
- ...

Questions:
- ...
```

## Codex Pass

Codex should:

1. inspect every must-fix item against the real code
2. apply the fixes that are valid
3. explain any rejected finding
4. rerun targeted checks
5. update docs or tests when the behavior changed

## Exit Criteria

- no known must-fix items remain
- tests or manual checks are recorded
- commit or PR summary includes review-driven changes
