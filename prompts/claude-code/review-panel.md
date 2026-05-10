# Claude Code Prompt: Review Panel

Use this with Claude Code when Codex has produced a diff.

```text
Please review this change using a panel of subagents.

Context:
<goal, repo, branch, or PR link>

Diff or summary:
<paste diff or summarize changed files>

Run these perspectives:
- code-reviewer
- security-auditor
- test-automator
- documentation-engineer
- architect-reviewer

Return:
Must fix:
- concrete issue, risk, and suggested fix

Should fix:
- improvement that is valuable but not blocking

Later:
- ideas that should not block this change

Questions:
- missing context or decisions needed
```
