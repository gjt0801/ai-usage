# Codex Prompt: Verification Brief

Use this when asking Codex to verify an AI-generated result, research summary, code change, or document.

Inspired by Ted Lee's How to Claude course: https://tedlee99.pages.dev/

```text
Artifact to verify:
<paste or point to the result>

Purpose:
<how this will be used>

Risk level:
<low | medium | high>

Please verify this result.

Separate:
- facts
- inferences
- assumptions
- unsupported claims
- decisions that require human judgment

For facts, identify the evidence needed.
For code, inspect the relevant files and run focused checks where practical.
For research, prefer primary and current sources.
For subjective output, propose a rubric and edge cases.

Return:
1. verdict: accept | revise | reject | needs human judgment
2. verified facts
3. unsupported or risky claims
4. checks performed
5. recommended fixes
6. remaining risk

Remember: deeper reasoning helps judgment, but facts require evidence.
```
