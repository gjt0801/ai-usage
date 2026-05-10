# Codex Prompt: Review Triage

Use this after Claude Code returns review findings.

```text
Here are review findings from Claude Code:

<paste findings>

Please validate each item against the actual repo.

For each finding:
- mark as valid, invalid, or needs clarification
- fix valid must-fix items
- explain rejected findings briefly
- run focused verification
- summarize the final diff
```
